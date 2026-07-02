const MAX_BODY_BYTES = 16 * 1024;
const DEFAULT_TO_EMAIL = 'contact@acdj-informatique.com';
const DEFAULT_FROM_EMAIL = 'ACDJ Informatique <devis@adwaves.pro>';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, { ok: false, message: 'Méthode non autorisée.' });
  }

  const wantsJson = acceptsJson(req);

  try {
    const body = await parseBody(req);
    const submission = normalizeSubmission(body);

    if (submission.website) {
      return sendSuccess(res, wantsJson);
    }

    const errors = validateSubmission(submission);
    if (errors.length > 0) {
      return sendFailure(res, wantsJson, 400, errors.join(' '));
    }

    if (!process.env.RESEND_API_KEY) {
      throw new Error('Missing RESEND_API_KEY environment variable.');
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(buildEmailPayload(submission)),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      throw new Error(`Resend error ${resendResponse.status}: ${errorText}`);
    }

    return sendSuccess(res, wantsJson);
  } catch (error) {
    console.error('[devis] Form submission failed:', error);
    return sendFailure(
      res,
      wantsJson,
      500,
      "La demande n'a pas pu être envoyée. Vous pouvez appeler directement le 06 52 24 66 47."
    );
  }
};

async function parseBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  let rawBody = '';
  if (typeof req.body === 'string') {
    rawBody = req.body;
  } else {
    const chunks = [];
    let size = 0;

    for await (const chunk of req) {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        throw new Error('Request body too large.');
      }
      chunks.push(chunk);
    }

    rawBody = Buffer.concat(chunks).toString('utf8');
  }

  const contentType = req.headers['content-type'] || '';
  if (contentType.includes('application/json')) {
    return rawBody ? JSON.parse(rawBody) : {};
  }

  return Object.fromEntries(new URLSearchParams(rawBody));
}

function normalizeSubmission(body) {
  return {
    nom: field(body, 'nom', 120),
    tel: field(body, 'tel', 40),
    email: field(body, 'email', 160),
    ville: field(body, 'ville', 120),
    service: field(body, 'service', 120),
    message: field(body, 'message', 3000),
    website: field(body, 'website', 200),
  };
}

function field(body, name, maxLength) {
  const value = Array.isArray(body[name]) ? body[name][0] : body[name];
  return String(value || '').trim().slice(0, maxLength);
}

function validateSubmission(submission) {
  const errors = [];

  if (!submission.nom) {
    errors.push('Le nom est obligatoire.');
  }

  if (!submission.tel || digitsOnly(submission.tel).length < 8) {
    errors.push('Le téléphone est obligatoire.');
  }

  if (submission.email && !EMAIL_RE.test(submission.email)) {
    errors.push("L'email indiqué n'est pas valide.");
  }

  if (!submission.message || submission.message.length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères.');
  }

  return errors;
}

function digitsOnly(value) {
  return value.replace(/\D/g, '');
}

function buildEmailPayload(submission) {
  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;
  const service =
    submission.service && submission.service !== 'Choisir un service'
      ? submission.service
      : 'Non précisé';

  const rows = [
    ['Nom', submission.nom],
    ['Téléphone', submission.tel],
    ['Email', submission.email || 'Non précisé'],
    ['Ville', submission.ville || 'Non précisée'],
    ['Service', service],
    ['Message', submission.message],
  ];

  const text = [
    'Nouvelle demande de devis depuis le site ACDJ Informatique',
    '',
    ...rows.map(([label, value]) => `${label} : ${value}`),
  ].join('\n');

  const htmlRows = rows
    .map(([label, value]) => {
      return `<tr><th align="left" valign="top" style="padding:8px 14px 8px 0;">${escapeHtml(
        label
      )}</th><td style="padding:8px 0;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`;
    })
    .join('');

  const payload = {
    from: fromEmail,
    to: [toEmail],
    subject: `Nouvelle demande de devis - ${submission.nom}`,
    text,
    html: `
      <h1 style="font-size:20px;margin:0 0 16px;">Nouvelle demande de devis</h1>
      <p>Une demande vient d'être envoyée depuis le site ACDJ Informatique.</p>
      <table cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
        ${htmlRows}
      </table>
    `,
    tags: [{ name: 'source', value: 'formulaire_devis' }],
  };

  if (submission.email) {
    payload.reply_to = submission.email;
  }

  return payload;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[char];
  });
}

function acceptsJson(req) {
  return String(req.headers.accept || '').includes('application/json');
}

function sendSuccess(res, wantsJson) {
  if (wantsJson) {
    return sendJson(res, 200, {
      ok: true,
      message: 'Votre demande a bien été envoyée. Je vous réponds dès que possible.',
    });
  }

  res.statusCode = 303;
  res.setHeader('Location', '/devis/?sent=1');
  res.end();
}

function sendFailure(res, wantsJson, statusCode, message) {
  if (wantsJson) {
    return sendJson(res, statusCode, { ok: false, message });
  }

  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
    <!doctype html>
    <html lang="fr">
      <head><meta charset="utf-8"><title>Demande non envoyée</title></head>
      <body>
        <p>${escapeHtml(message)}</p>
        <p><a href="/devis/">Retour au formulaire</a></p>
      </body>
    </html>
  `);
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

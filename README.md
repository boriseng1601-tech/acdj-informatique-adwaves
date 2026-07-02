# Site ACDJ Informatique

Site statique (HTML/CSS) prêt à pousser sur GitHub.

## Structure
- `/index.html` : accueil
- `/services/` : hub + 10 pages services
- `/a-propos/`, `/contact/`
- `/zones/` : Vittel, Contrexéville, Neufchâteau, Mirecourt
- `/mentions-legales/`, `/politique-confidentialite/`, `/cgv/`
- `/assets/css/style.css` : feuille de style unique partagée

## Important avant mise en ligne
1. Les chemins sont ABSOLUS (`/services/`, `/assets/...`). Cela fonctionne sur un
   domaine racine (ex. acdj-informatique.com) ou GitHub Pages avec domaine perso.
   Pour `username.github.io/repo/`, il faudrait passer en chemins relatifs.
2. Le formulaire de `/devis/` poste sur `/api/devis`, une fonction Vercel qui envoie l'email via Resend.
3. Remplacer les blocs `[PHOTO DE DJEAZON]`, `[SIRET]`, `[HÉBERGEUR]`, etc.
4. Vérifier la note Google réelle (4,1/5 est provisoire, repris de Trustpilot).
5. Personnaliser les sections marquées `<!-- TODO -->`.

## Variables d'environnement Vercel
- `RESEND_API_KEY` : clé API Resend, à définir dans Vercel, jamais dans le code.
- `RESEND_FROM_EMAIL` : expéditeur vérifié dans Resend, par exemple `ACDJ Informatique <devis@adwaves.pro>`.
- `CONTACT_TO_EMAIL` : adresse qui reçoit les demandes, par défaut `contact@acdj-informatique.com`.

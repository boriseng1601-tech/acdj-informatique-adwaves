# Inventaire factuel des éléments de conversion - ACDJ Informatique

Base du dépôt analysé : `/Users/carlos/Documents/ACDJ Informatique V2`.

Sauf mention contraire, les chemins ci-dessous sont des chemins exacts relatifs à cette base. Le site contient 26 fichiers HTML : 25 URL dans `sitemap.xml` et une ancienne variante d'accueil `index-bleu.html` en `noindex, nofollow`.

## 1. Inventaire des pages et arborescence

### Pages HTML trouvées

| Type | Fichier | URL / slug | Statut visible dans le code |
|---|---|---|---|
| Accueil | `index.html` | `/` | Page canonique d'accueil, présente dans `sitemap.xml` |
| Ancienne variante accueil | `index-bleu.html` | `/index-bleu.html` | Ancienne variante couleur, `meta robots="noindex, nofollow"`, canonical vers `/`, absente du sitemap |
| Hub services | `services/index.html` | `/services/` | Présente dans `sitemap.xml` |
| Service | `services/depannage-informatique/index.html` | `/services/depannage-informatique/` | Présente dans `sitemap.xml` |
| Service | `services/reparation-ordinateur/index.html` | `/services/reparation-ordinateur/` | Présente dans `sitemap.xml` |
| Service | `services/reparation-smartphone/index.html` | `/services/reparation-smartphone/` | Présente dans `sitemap.xml` |
| Service | `services/assistance-a-domicile/index.html` | `/services/assistance-a-domicile/` | Présente dans `sitemap.xml` |
| Service | `services/installation-ordinateur/index.html` | `/services/installation-ordinateur/` | Présente dans `sitemap.xml` |
| Service | `services/installation-imprimante/index.html` | `/services/installation-imprimante/` | Présente dans `sitemap.xml` |
| Service | `services/recuperation-de-donnees/index.html` | `/services/recuperation-de-donnees/` | Présente dans `sitemap.xml` |
| Service | `services/creation-site-web/index.html` | `/services/creation-site-web/` | Présente dans `sitemap.xml` |
| Service | `services/installation-de-caisse/index.html` | `/services/installation-de-caisse/` | Présente dans `sitemap.xml` |
| Service | `services/prestations-drone/index.html` | `/services/prestations-drone/` | Présente dans `sitemap.xml` |
| Hub zones | `zones/index.html` | `/zones/` | Présente dans `sitemap.xml` |
| Zone | `zones/vittel/index.html` | `/zones/vittel/` | Présente dans `sitemap.xml` |
| Zone | `zones/contrexeville/index.html` | `/zones/contrexeville/` | Présente dans `sitemap.xml` |
| Zone | `zones/neufchateau/index.html` | `/zones/neufchateau/` | Présente dans `sitemap.xml` |
| Zone | `zones/mirecourt/index.html` | `/zones/mirecourt/` | Présente dans `sitemap.xml` |
| Zone | `zones/epinal/index.html` | `/zones/epinal/` | Présente dans `sitemap.xml` |
| Zone | `zones/nancy/index.html` | `/zones/nancy/` | Présente dans `sitemap.xml` |
| À propos | `a-propos/index.html` | `/a-propos/` | Présente dans `sitemap.xml` |
| Contact | `contact/index.html` | `/contact/` | Présente dans `sitemap.xml` |
| Devis | `devis/index.html` | `/devis/` | Présente dans `sitemap.xml` |
| Légal | `mentions-legales/index.html` | `/mentions-legales/` | Présente dans `sitemap.xml` |
| Légal | `politique-confidentialite/index.html` | `/politique-confidentialite/` | Présente dans `sitemap.xml` |
| Légal | `cgv/index.html` | `/cgv/` | Présente dans `sitemap.xml` |

### Navigation principale

- Fichiers : répétée dans les HTML, par exemple `index.html`, `services/index.html`, `zones/index.html`, `contact/index.html`, `devis/index.html`.
- Position : haut de page, header fixé par CSS (`assets/css/style.css`, `header{position:fixed;top:0;...}`).
- Implémentation : logo vers `/`, liens `Prestations`, `À propos`, `Secteur`, `Contact`, bouton `Devis gratuit`, lien téléphone `tel:+33652246647`.
- Variation : la classe `active` change selon la page. Les pages services détaillées n'ont pas d'attributs `data-gtm-event` sur leurs CTA/header, contrairement à l'accueil, aux hubs, aux zones, à contact/devis et aux pages légales.

### Navigation mobile

- Fichiers : répétée dans les HTML via `<nav id="mobile-menu" class="mobile-nav">`.
- Position : sous le header, menu mobile déroulé par bouton hamburger.
- Implémentation : mêmes liens que le header, avec téléphone et bouton `Devis gratuit`.
- Variation : même écart de tracking que le header : pages services détaillées sans `data-gtm-event`, autres pages majoritairement trackées.

### Footer

- Fichiers : répétée dans les HTML.
- Position : bas de page.
- Implémentation : marque ACDJ, colonne `Prestations`, colonne `Secteur`, colonne `Contact`, liens légaux, lien externe `Adwaves`.
- Variation : le texte de marque est généralement `Dépannage, réparation et assistance informatique à domicile à Vittel, Contrexéville et dans l'ouest des Vosges.` ; sur les pages services détaillées, il est `Dépannage, réparation et assistance informatique à domicile dans les Vosges et le Grand Est.`.

### Maillage interne entre pages

- `index.html` : cartes prestations vers `/services/depannage-informatique/`, `/services/assistance-a-domicile/`, `/services/reparation-ordinateur/`; carte SVG cliquable vers les 6 pages zones; liens contextuels vers services/zones.
- `services/index.html` : catalogue de 10 prestations groupées par familles, chaque item pointe vers sa page service; bloc `Où j'interviens` vers les 6 pages zones.
- `zones/index.html` : pills vers les 6 pages zones; accordéons vers les pages services.
- Pages zones : blocs `Ce que je fais à [ville]` avec liens vers pages services; bloc `Autres communes du secteur` vers les autres zones.
- Pages service x ville combinées : non trouvées dans le code. Le repo contient des pages services séparées et des pages zones séparées, pas de dossiers du type `/services/[service]/[ville]/`.

## 2. Structure type d'une page (au-dessus et en dessous de la ligne de flottaison)

### Structure commune hors accueil

- Fichiers : `services/index.html`, `services/*/index.html`, `zones/index.html`, `zones/*/index.html`, `a-propos/index.html`, `contact/index.html`, `devis/index.html`, pages légales.
- Haut de page : skip link `Aller au contenu`, header fixe, menu mobile, breadcrumb.
- Au-dessus de la ligne de flottaison : section `.page-head` avec eyebrow, H1, lead; sur pages zones, un CTA hero téléphone/devis apparaît dans cette section.
- Milieu : contenu propre à la page (`.cat`, `.detail`, `.zonepage`, `.coords-grid`, `.prose`).
- Bas : CTA final ou bande CTA selon le type de page, footer, scripts inline du menu/header, puis `/assets/js/site-enhancements.js`.
- Variation : les pages légales ont un contenu `.prose` sans CTA final de contenu, mais conservent header/footer et bouton sticky mobile.

### Accueil canonique

- Fichier : `index.html`.
- Séquence : hero avec image et CTA téléphone/devis; présentation `Qui je suis`; stats; prestations; tarifs; zone d'intervention avec carte SVG; avis Google; FAQ; bande CTA; footer; bouton popup chat; popup formulaire; scripts.
- Variation : pas de breadcrumb; contient un popup HTML déjà présent dans la page, en plus du script global.

### Ancienne variante d'accueil

- Fichier : `index-bleu.html`.
- Séquence : hero; présentation; prestations; tarifs; zone d'intervention; avis; CTA final; footer; bouton sticky mobile.
- Variation : utilise `assets/css/style-bleu.css`, pas `assets/css/style.css`; contient `meta robots="noindex, nofollow"`; pas de JSON-LD; pas de script global `site-enhancements.js`; contient un placeholder visible dans le code `[PHOTO DE DJEAZON]`.

### Pages services détaillées

- Fichiers : les 10 fichiers `services/*/index.html` hors `services/index.html`.
- Séquence : breadcrumb; `.page-head`; `.detail` en grille avec contenu principal et `aside .info-card`; FAQ HTML; CTA final `.cta-band`; footer; bouton sticky mobile; scripts.
- Variation : `services/depannage-informatique/index.html` ajoute un groupe d'onglets et une timeline animée; les autres pages services utilisent surtout `.service-points`.

### Pages zones détaillées

- Fichiers : `zones/vittel/index.html`, `zones/contrexeville/index.html`, `zones/neufchateau/index.html`, `zones/mirecourt/index.html`, `zones/epinal/index.html`, `zones/nancy/index.html`.
- Séquence : breadcrumb; `.page-head` avec CTA hero; `.zonepage` en grille avec contenu local et `aside .info-card`; FAQ; autres communes; section finale téléphone; footer; bouton sticky mobile.
- Variation : les textes et liens de services varient par ville. `Nancy` met l'accent sur le dépannage à distance, `Épinal` sur fonctionnement au cas par cas, `Vittel` sur la base locale.

## 3. Appels à l'action (CTA)

### CTA communs du header et du menu mobile

| Élément | Fichiers/pages | Position | Action | Duplication / variation |
|---|---|---|---|---|
| `Contact` | Toutes les pages | Header + menu mobile | `/contact/` | Tracké par `data-gtm-event="click_contact"` sauf sur les 10 pages services détaillées |
| `Devis gratuit` | Toutes les pages | Header + menu mobile | `/devis/` | Tracké par `data-gtm-event="click_quote_request"` sauf sur les 10 pages services détaillées |
| `06 52 24 66 47` | Toutes les pages | Header + menu mobile | `tel:+33652246647` | Tracké sauf pages services détaillées |

### CTA téléphone

- Numéro principal : `06 52 24 66 47`.
- Lien technique : `href="tel:+33652246647"`.
- Présence cliquable : header, menu mobile, footer, CTA hero/final/info-card, FAQ de certaines pages.
- Numéros visibles non cliquables trouvés : `services/index.html` dans la liste `Vous m'appelez au 06 52 24 66 47...`; `services/depannage-informatique/index.html` dans la timeline `Vous appelez le 06 52 24 66 47...`; textes légaux dans `cgv/index.html` (ex. article 15). Le numéro dans ces textes n'est pas systématiquement entouré d'un lien `tel:`.

### Bouton sticky mobile

- Fichiers avec `<a class="mobile-call">Appeler · 06 52 24 66 47</a>` : `index-bleu.html`, les 10 pages services détaillées, les 6 pages zones détaillées, `mentions-legales/index.html`, `politique-confidentialite/index.html`, `cgv/index.html`.
- Position : bas de viewport sur mobile, via `assets/css/style.css` ou `assets/css/style-bleu.css` (`position:fixed; left:0; right:0; bottom:0` dans `@media(max-width:680px)`).
- Pages sans balise `.mobile-call` statique : `index.html`, `services/index.html`, `zones/index.html`, `a-propos/index.html`, `contact/index.html`, `devis/index.html`. Elles ont néanmoins le popup flottant global via `site-enhancements.js`, sauf `index-bleu.html`.

### CTA contextuels par type de page

- `index.html`, hero : `06 52 24 66 47` (`tel:`) et `Demander un devis` (`/devis/`).
- `index.html`, stats : `Obtenir un diagnostic gratuit` vers `/devis/`.
- `index.html`, tarifs : `Décrivez votre panne et demandez un devis gratuit` vers `/devis/`.
- `index.html`, zone : `appelez, je vous confirme tout de suite le déplacement` vers `/contact/`.
- `index.html`, avis : `Lire les 32 avis sur Google` vers `https://share.google/fYphF4uqbj5fvhchj` (non tracké).
- `index.html`, bande CTA finale : téléphone + `Devis gratuit`.
- `services/index.html`, bande CTA : téléphone + `Devis gratuit`.
- Pages services détaillées : `aside .info-card` contient téléphone + `Devis gratuit`; bande CTA finale contient téléphone + `Devis gratuit`; aucun `data-gtm-event` sur ces pages.
- `zones/index.html`, bande CTA : téléphone + `Me contacter`.
- Pages zones détaillées : CTA hero téléphone + devis; `aside .info-card` téléphone + devis; section finale téléphone; bouton sticky mobile.
- `a-propos/index.html` : lien texte `contactez-moi directement`, lien `Voir ma fiche Google`, bande CTA téléphone + `Laisser un message`.
- `contact/index.html` : téléphone, email, formulaire court, lien vers `formulaire de devis complet`.
- `devis/index.html` : formulaire principal, téléphone, email, FAQ avec lien téléphone.

## 4. Formulaires et captation de contact

### Formulaire devis principal

- Fichier : `devis/index.html`.
- Position : milieu haut de page, juste après le hero.
- Implémentation : `<form class="form" action="/api/devis" method="post" data-devis-form>`.
- Champs : honeypot `website`; `nom` obligatoire; `tel` obligatoire; `email` facultatif type email; `ville` facultatif avec datalist (`Vittel`, `Contrexéville`, `Mirecourt`, `Neufchâteau`, `Bulgnéville`, `Épinal`, `Nancy`); `service` select; `message` obligatoire.
- Validation côté client : attributs HTML `required`, type `email`, puis `form.checkValidity()` et `form.reportValidity()` dans le script inline.
- Destination : POST `/api/devis`, format `application/x-www-form-urlencoded`.
- Confirmation affichée : `Votre demande a bien été envoyée. Je vous réponds dès que possible.` ou message JSON renvoyé par l'API.
- Erreur affichée : `La demande n'a pas pu être envoyée...` puis invitation à appeler.

### Formulaire contact court

- Fichier : `contact/index.html`.
- Position : milieu de page, bloc `Envoyer un message`.
- Implémentation : `<form class="form" action="/api/devis" method="post" data-devis-form ...>`.
- Champs : honeypot `website`; champ hidden `service="Contact direct"`; `nom` obligatoire; `tel` obligatoire; `message` obligatoire.
- Validation côté client : attributs `required`, `form.checkValidity()`.
- Destination : POST `/api/devis`.
- Confirmation affichée : `Votre message a bien été envoyé.` ou message JSON renvoyé par l'API.

### Popup accueil

- Fichier : `index.html`.
- Position : popup flottant, déclenché par bouton chat flottant après scroll.
- Implémentation : bouton `#chat-btn`, overlay `#lead-popup`, formulaire `<form class="form popup-chat-form" action="/api/devis" method="post" data-devis-form id="popup-form">`.
- Champs : honeypot `website`; hidden `service="Rappel popup home"`; `nom` obligatoire; `tel` obligatoire; `message` obligatoire; checkbox `consentement` cochée et obligatoire.
- Déclenchement : bouton visible quand l'utilisateur a scrollé au moins 20% de la page; masqué après soumission réussie via `sessionStorage.setItem('chat_submitted','1')`.
- Confirmation affichée : `Votre demande a bien été envoyée.` ou message API.

### Popup global injecté par JavaScript

- Fichier : `assets/js/site-enhancements.js`.
- Pages concernées : toutes les pages qui chargent ce script, soit toutes sauf `index-bleu.html`. Sur `index.html`, le popup existe déjà dans le HTML ; le script ne recrée pas l'overlay.
- Position : bouton flottant en bas à droite desktop, au-dessus du bas de page mobile.
- Implémentation : `makeButton()` crée `#chat-btn`; `makePopup()` crée `#lead-popup`; formulaire avec `data-floating-contact-form`.
- Champs : honeypot `website`; hidden `service="Rappel popup site"`; `nom`; `tel`; `message`; consentement obligatoire.
- Destination : POST `/api/devis`.
- Confirmation affichée : `Votre demande a bien ete envoyee.` dans le fallback JS global (sans accents dans cette chaîne).

### Endpoint de traitement

- Fichier : `api/devis.js`.
- Destination finale : API Resend (`https://api.resend.com/emails`), envoi vers `process.env.CONTACT_TO_EMAIL` ou défaut `contact@acdj-informatique.com`.
- Expéditeur : `process.env.RESEND_FROM_EMAIL` ou défaut `ACDJ Informatique <devis@adwaves.pro>`.
- Variable obligatoire : `RESEND_API_KEY`; si absente, erreur serveur.
- Validation serveur : `nom` obligatoire; `tel` obligatoire avec au moins 8 chiffres; email valide si présent; `message` minimum 10 caractères; corps limité à 16 KB; honeypot `website` renvoie un succès silencieux.
- Message succès JSON : `Votre demande a bien été envoyée. Je vous réponds dès que possible.`
- Si le client n'accepte pas JSON : succès redirigé vers `/devis/?sent=1`.
- Webhook, n8n, Supabase : non trouvés dans le code.

## 5. Preuve sociale et réassurance

### Avis Google affichés en dur

- Fichier : `index.html`, section `.avis`.
- Position : bas de page avant FAQ.
- Implémentation : titre `5/5 ★★★★★ sur 32 avis Google`, puis 7 cartes avis codées en HTML.
- Avis/auteurs visibles : Mario SOARES, Michel Jean, Swen Boutin, Joelle Gavazzi, michel hyonne, Gilles Jardin, Totus.
- Chargement dynamique : non trouvé. Pas de widget Google ni d'API Google Reviews.
- Lien Google : `https://share.google/fYphF4uqbj5fvhchj`.

### Avis sur la page À propos

- Fichier : `a-propos/index.html`.
- Position : section `.avis`.
- Implémentation : `5/5`, étoiles, `32 avis Google · Voir ma fiche Google`; un avis Mario Soares codé en dur.
- Chargement dynamique : non trouvé.

### Ancienne variante d'avis

- Fichier : `index-bleu.html`.
- Position : section `.avis`.
- Implémentation : carrousel manuel avec un avis Mario SOARES et lien `Lire les 32 avis sur Google`.
- Variation : page noindex, pas dans sitemap.

### Notes, chiffres et badges

- `index.html` : `5/5 sur Google · 32 avis clients` dans le hero; stats `5 ans d'expérience`, `100+ machines réparées`, `5/5 sur 32 avis Google`, `24-48h délai d'intervention`; fiche tarifs; mention `Diagnostic gratuit`, `Prix annoncé avant intervention`, `Déplacement 0,65 €/km`.
- `a-propos/index.html` : `Noté 5/5 sur 32 avis Google`; stats `5 ans d'expérience`, `100+ machines réparées`, `5/5`, `0 € le diagnostic`.
- Pages services détaillées : `aside .info-card` avec `Tarif`, `Diagnostic Gratuit`, `Déplacement 0,65 €/km`, `Secteur Ouest des Vosges`.
- Pages zones détaillées : `aside .info-card` avec `Intervention À domicile · à distance`, `Diagnostic Gratuit`, `Déplacement 0,65 €/km`.
- `services/prestations-drone/index.html` : texte `Pilote certifié, matériel professionnel, rendu rapide` dans l'introduction; aucune preuve/certificat externe trouvé.

### Logos et images

- Logo : `assets/images/acdj-logo.png` utilisé dans header/footer et popup.
- Image accueil : `assets/images/djeazon-intervention.png`, hero `index.html`, alt localisé.
- Image à propos : `assets/images/djeazon-atelier.png`, page `a-propos/index.html`, alt localisé.

## 6. SEO/AEO et intention de recherche locale

### Balises title/meta description

- Tous les fichiers HTML ont un `<title>` et une meta description.
- Les pages zones ont des titles et descriptions localisés par ville.
- Les pages services ont des titles et descriptions par service, souvent avec Vittel/Contrexéville/Vosges.
- `index-bleu.html` a un title proche de la page service dépannage et canonical vers `/`, mais est en noindex.

Échantillon services :

| Fichier | Title | H1 | Canonical |
|---|---|---|---|
| `services/depannage-informatique/index.html` | `Dépannage informatique à Vittel et Contrexéville | ACDJ Informatique` | `Dépannage informatique à Vittel et Contrexéville` | Non trouvé |
| `services/reparation-ordinateur/index.html` | `Réparation ordinateur à Vittel et Contrexéville | ACDJ Informatique` | `Réparation ordinateur à Vittel et Contrexéville` | Non trouvé |
| `services/recuperation-de-donnees/index.html` | `Récupération de données dans les Vosges : fichiers, photos, disques | ACDJ` | `Récupération de données dans les Vosges : fichiers, photos, disques durs` | Non trouvé |
| `services/prestations-drone/index.html` | `Pilote de drone dans les Vosges : photos et vidéos aériennes | ACDJ` | `Prises de vue aériennes par drone dans les Vosges` | Non trouvé |

Échantillon zones :

| Fichier | Title | H1 | Canonical |
|---|---|---|---|
| `zones/vittel/index.html` | `Dépannage et assistance informatique à Vittel : à domicile | ACDJ Informatique` | `Votre informaticien à Vittel : dépannage, réparation et assistance à domicile` | Oui |
| `zones/contrexeville/index.html` | `Dépannage et assistance informatique à Contrexéville : à domicile | ACDJ` | `Votre informaticien à Contrexéville : dépannage, réparation et assistance à domicile` | Oui |
| `zones/epinal/index.html` | `Dépannage informatique à Épinal : à domicile ou à distance | ACDJ` | `Dépannage informatique à Épinal : à domicile ou à distance` | Oui |
| `zones/nancy/index.html` | `Dépannage informatique à distance à Nancy | ACDJ Informatique` | `Dépannage informatique à distance à Nancy` | Oui |

Pattern confirmé : les 10 pages services détaillées ont `BreadcrumbList + Service` en JSON-LD et pas de canonical; les 6 pages zones détaillées ont canonical + `BreadcrumbList + FAQPage`.

### JSON-LD structuré

- `index.html` : `LocalBusiness` avec `addressLocality: Vittel`, `telephone`, `email`, `areaServed`, `priceRange`, horaires, `aggregateRating`; plus `FAQPage`.
- `contact/index.html` : `ContactPage`, `LocalBusiness`, `BreadcrumbList`.
- `a-propos/index.html` : `AboutPage`, `Person`, `BreadcrumbList`.
- `devis/index.html` : `BreadcrumbList`, `FAQPage`.
- `services/index.html`, `zones/index.html`, pages légales : `BreadcrumbList`.
- 10 pages services détaillées : `BreadcrumbList` + `Service` avec provider `LocalBusiness`, `areaServed`, `Offer`.
- 6 pages zones détaillées : `BreadcrumbList` + `FAQPage`.
- `Review` schema : non trouvé.
- `FAQPage` schema sur pages services détaillées malgré FAQ HTML visible : non trouvé.

### Richesse et différenciation du contenu

- Pages services : structure commune, contenu différent par service (intro, liste de prises en charge, points détaillés, FAQ, tarifs de l'info-card). Exemple : `installation-imprimante` parle pilotes/USB/Wi-Fi/scanner; `recuperation-de-donnees` parle fichiers/disques/sauvegarde; `creation-site-web` parle SEO local/formulaire/Google Business Profile.
- Pages zones : structure commune, contenu localisé. Exemples : `vittel` indique base ACDJ et communes proches; `contrexeville` indique proximité de 5 minutes; `nancy` indique fonctionnement à distance et prestations à forte valeur; `epinal` indique limite de secteur et interventions regroupées.
- Pages ville x service séparées : non trouvées.

### Maillage interne SEO/AEO

- Header/footer : liens récurrents vers hubs services/zones/contact/devis et pages légales.
- Accueil : liens contextuels vers services clés et zones; carte SVG cliquable vers villes.
- Hubs : `services/index.html` groupe 10 services; `zones/index.html` relie villes et familles de services.
- Pages zones : liens directs vers services adaptés à chaque ville + liens vers autres communes.
- `llms.txt` : résumé structuré de l'entreprise, services, tarifs, zones et contact à la racine.

## 7. Zone d'intervention et confiance géographique

### Présentation de la zone

- `index.html` : section `J'interviens à domicile à Vittel, Contrexéville et dans l'ouest des Vosges`, avec texte, coût de déplacement et SVG cartographique cliquable.
- Villes cliquables dans la carte : Vittel, Contrexéville, Mirecourt, Neufchâteau, Nancy, Épinal.
- `zones/index.html` : pills vers 6 villes; texte sur Vittel, Contrexéville, Mirecourt, Neufchâteau, Épinal, Nancy; accent cards par sous-secteurs; accordéons de services.
- Pages zones détaillées : ville dans H1/title, contenu local, communes proches, services disponibles, autres communes du secteur.
- Nombre de zones dans le code : 6 pages zones. La présence de 11 villes n'est pas trouvée comme pages HTML; des communes complémentaires apparaissent dans le texte (`They-sous-Montfort`, `La Vacheresse-et-la-Rouillie`, `Norroy`, `Remoncourt`) et dans la datalist devis (`Bulgnéville`).

### Adresse, horaires, Google Maps

- Adresse structurée `LocalBusiness` : `Vittel`, code postal `88800`, région `Vosges`, pays `FR` dans `index.html` et `contact/index.html`.
- Adresse légale : `mentions-legales/index.html` indique `Siège social : 88170 Gironcourt-Sur-Vraine, France` et `SIRET : 977 452 242 00018`.
- Page contact : texte `Basé à Vittel (88800), dans les Vosges.`
- Horaires visibles : `contact/index.html` et `devis/index.html` listent lundi à vendredi, samedi/dimanche fermés.
- Horaires JSON-LD : présents dans `index.html` et `contact/index.html`.
- Lien Google Maps : non trouvé.
- Lien Google Business/Profile : `https://share.google/fYphF4uqbj5fvhchj` sur `index.html`, `a-propos/index.html`, `index-bleu.html`.

## 8. Tracking et mesure de la conversion

### Fichiers et scripts trouvés

- Fichier `tracking.js` : non trouvé dans le dépôt.
- Fichier lié à interactions/conversion : `assets/js/site-enhancements.js`.
- GTM/GA4 : aucun script `googletagmanager`, `gtag`, identifiant GA4 ou conteneur GTM trouvé dans le code.
- Attributs de tracking HTML : `data-gtm-event` et `data-location` présents sur de nombreux CTA hors pages services détaillées.

### Événements déclarés dans les attributs HTML

- `click_phone` : liens `tel:` du header, menu mobile, hero, FAQ, bandes CTA, footer, sticky mobile selon les pages.
- `click_quote_request` : liens `/devis/`, boutons de devis, bouton de formulaire contact.
- `click_contact` : liens `/contact/`.
- `click_email` : liens `mailto:contact@acdj-informatique.com`.
- `open_popup` : bouton flottant chat.
- `submit_popup` : bouton de soumission du popup.

Variation : les 10 pages services détaillées contiennent les mêmes CTA visuels, mais sans `data-gtm-event`.

### Événements `dataLayer.push`

- Fichiers : `index.html` et `assets/js/site-enhancements.js`.
- `popup_click_open` : envoyé si `window.dataLayer` existe quand le popup est ouvert.
- `popup_btn_appear` : envoyé si `window.dataLayer` existe quand le bouton popup apparaît après scroll 20%.
- Soumission réussie de formulaire : pas de `dataLayer.push` trouvé.
- Scroll depth générique : non trouvé, hors événement d'apparition popup à 20%.

### Call tracking

- Numéro : statique partout (`tel:+33652246647`).
- Numéro dynamique/call tracking : non trouvé.
- Objectifs/conversions GA4/GTM : non trouvés dans le code.

## 9. Système de collecte d'avis post-service

- Système post-service automatisé : non trouvé dans le code.
- QR code : non trouvé.
- Page dédiée de collecte d'avis : non trouvée.
- Formulaire intermédiaire/filtrage avant redirection Google : non trouvé.
- Liens existants vers Google : `https://share.google/fYphF4uqbj5fvhchj` sur `index.html`, `a-propos/index.html`, `index-bleu.html`.
- Usage : lien de consultation d'avis (`Lire les 32 avis sur Google`, `Voir ma fiche Google`), pas un flux post-intervention déclenché par le site.

## 10. Performance technique impactant la conversion

### Responsive/mobile

- CSS principal : `assets/css/style.css`.
- Breakpoints trouvés : `@media(max-width:920px)`, `@media(max-width:768px)`, `@media(max-width:680px)`, `@media(max-width:340px)`, plus `prefers-reduced-motion`.
- Header : `position:fixed` dans `style.css`; `body{padding-top:72px}`.
- Menu mobile : `.mobile-nav` fixé sous le header, transformé par classe `.open`.
- Téléphone header mobile : le texte du numéro est masqué, l'icône reste visible (`.tel-top span{display:none}`).
- Sticky CTA mobile : `.mobile-call` visible sur mobile quand la balise existe; `.info-card .ic-cta` devient aussi une barre fixe en bas sur mobile pour les pages avec info-card.
- JS header : plusieurs pages ajoutent/retirent `header.nav-hidden` au scroll, mais `assets/css/style.css` définit `header.nav-hidden{transform:none}`.

### Images et ressources

- Images trouvées :
  - `assets/images/acdj-logo.png` : environ 6,4 KB.
  - `assets/images/djeazon-atelier.png` : environ 1,9 MB.
  - `assets/images/djeazon-intervention.png` : environ 2,0 MB.
- Attribut `loading="lazy"` : non trouvé sur les images.
- Dimensions : logo a `width/height` dans le HTML; les grandes images `djeazon-*` sont insérées sans `width/height` HTML, avec dimensionnement CSS inline.
- Formats : PNG uniquement pour les images du site.
- Fonts : Google Fonts chargées avec `preconnect`; `index-bleu.html` charge Fraunces/Hanken Grotesk, les autres pages chargent Inter.

### CSS/JS et chargement perçu

- CSS principal versionné : `/assets/css/style.css?v=20260704-chat-widget`.
- `index-bleu.html` utilise `/assets/css/style-bleu.css`.
- JS global : `/assets/js/site-enhancements.js?v=20260704-chat-widget` chargé avec `defer` sur toutes les pages sauf `index-bleu.html`.
- Scripts inline : menu mobile/header scroll sur presque toutes les pages; formulaires inline sur `index.html`, `contact/index.html`, `devis/index.html`; carrousel avis inline sur `index.html`.
- Scripts bloquants analytics/tiers : non trouvés.

### Hauteur/cohérence des cards

- `assets/css/style.css` contient des règles de stabilité :
  - `.presta-card{display:flex;flex-direction:column...}` et `.presta-card p{flex-grow:1}`.
  - `.coords-grid{align-items:stretch}` dans `@media (min-width: 769px)`.
  - `.icon-cards` et `.accent-cards` utilisent des grilles `auto-fit`.
  - commentaires `/* ===== CARDS ALIGNMENT — desktop only ===== */` et `/* MOBILE OVERFLOW GUARD */`.
- État visuel mesuré avec Lighthouse/browser : non mesuré dans cette analyse.

## 11. Incohérences ou éléments à moitié terminés

- `README.md` contient des consignes qui ne correspondent plus entièrement au code actuel : mention de blocs `[PHOTO DE DJEAZON]`, `[SIRET]`, `[HÉBERGEUR]`, note Google `4,1/5` provisoire, et `<!-- TODO -->`; dans les HTML actuels, seul `index-bleu.html` contient encore `[PHOTO DE DJEAZON]`, et aucun `<!-- TODO -->` n'a été trouvé.
- `README.md` liste `/zones/` comme `Vittel, Contrexéville, Neufchâteau, Mirecourt`, alors que le repo contient aussi `Épinal` et `Nancy`.
- `index-bleu.html` reste dans le dépôt avec ancienne feuille `style-bleu.css`, placeholder `[PHOTO DE DJEAZON]`, aucun JSON-LD, et balise `noindex, nofollow`. Il est absent du sitemap.
- Les 10 pages services détaillées n'ont pas de balise canonical, alors que `sitemap.xml` les liste toutes.
- Les 10 pages services détaillées n'ont pas d'attributs `data-gtm-event` sur leurs CTA, contrairement aux pages zones, hubs, accueil, contact/devis et légales.
- Les pages services détaillées ont des FAQ visibles en HTML, mais pas de JSON-LD `FAQPage`.
- `assets/css/style.css` contient des styles `.essentiel`, `.mini-avis`, `.cta-devis`, mais aucun bloc `.essentiel` ou `.mini-avis` n'a été trouvé dans les pages services analysées.
- `politique-confidentialite/index.html` indique que le site collecte des informations non personnelles comme adresse IP, pages visitées et liens cliqués; aucun outil analytics ni collecte explicite côté code n'a été trouvé.
- Des attributs `data-gtm-event` existent sans script GTM/GA4 trouvé dans le dépôt.
- `site-enhancements.js` et `index.html` envoient des `dataLayer.push` uniquement si `window.dataLayer` existe; aucun initialiseur `dataLayer` ni conteneur GTM n'a été trouvé.
- `contact/index.html` et `devis/index.html` affichent les horaires; `index.html` et `contact/index.html` contiennent aussi `openingHoursSpecification`. Les pages zones/services ne reprennent pas les horaires dans leur contenu.
- Pas de lien Google Maps trouvé, malgré des mentions de base géographique et d'adresse légale.
- Call tracking dynamique non trouvé : le même numéro statique est utilisé partout.
- Le système de collecte d'avis post-service n'est pas implémenté dans le code; seuls des liens de consultation vers Google sont présents.

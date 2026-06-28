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
2. Brancher le formulaire de `/contact/` sur un endpoint (n8n, Formspree, Netlify Forms).
3. Remplacer les blocs `[PHOTO DE DJEAZON]`, `[SIRET]`, `[HÉBERGEUR]`, etc.
4. Vérifier la note Google réelle (4,1/5 est provisoire, repris de Trustpilot).
5. Personnaliser les sections marquées `<!-- TODO -->`.

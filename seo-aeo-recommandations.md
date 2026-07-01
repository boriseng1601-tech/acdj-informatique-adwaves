# Recommandations SEO, AEO/GEO et rédactionnelles — ACDJ Informatique

> Document d'audit et de recommandations. Aucune modification n'a été apportée au code du site.
> Basé sur : le code du nouveau site (22 pages HTML), les exports Google Search Console des 12 derniers mois (juin 2025 → juin 2026) et le fichier `acdj_aeo_tracker.xlsx` (prompts ChatGPT + recherches générées).
> Date de l'analyse : 1er juillet 2026.

---

## 1. Résumé exécutif

### État actuel

Le nouveau site ACDJ Informatique est un site statique propre et rapide, avec une architecture déjà bien pensée : une page d'accueil, un hub « Prestations » avec 10 pages services, un hub « Secteur » avec 6 pages villes, plus À propos, Contact, Devis et les pages légales. C'est une base largement supérieure à l'ancien site vitrine d'une seule page.

### Forces actuelles

- **Architecture SEO locale déjà en place** : pages services + pages villes, exactement la structure qu'il faut pour capter des requêtes « service + ville ».
- **Ton rédactionnel excellent pour la conversion** : première personne, sans jargon, prix transparents (« diagnostic gratuit », « prix annoncé avant intervention », « 0,65 €/km »). C'est rare et très différenciant.
- **Preuve sociale réelle** : 32 avis Google 5/5, avec 7 avis cités nommément sur l'accueil.
- **Numéro de téléphone omniprésent** : header, footer, bouton mobile fixe. Le CTA principal (appel) est bien traité.
- **Balises title et meta descriptions localisées** déjà rédigées sur toutes les pages.
- **HTML sémantique correct** : un seul H1 par page, breadcrumb, skip-link, attributs alt présents.

### Faiblesses SEO principales

1. **Contenu trop mince** (« thin content ») : les 10 pages services font ~7 Ko chacune avec seulement 2 phrases + 5 puces de contenu réel. Les 6 pages villes sont des quasi-copies les unes des autres (seul le nom de ville change). Google et les assistants IA n'ont presque rien à indexer ni à citer.
2. **Cannibalisation massive sur « dépannage informatique »** : la page service `/services/depannage-informatique/` ET les 6 pages villes ont toutes un H1 « Dépannage informatique à [ville] ». Sept pages se disputent la même intention.
3. **Aucune donnée structurée** : pas de `LocalBusiness`, pas de `FAQPage`, pas de `BreadcrumbList`, pas de `Service`. C'est le levier AEO/GEO n°1 manquant.
4. **Pas de sitemap.xml ni robots.txt**, pas de balise `canonical`, pas d'Open Graph.
5. **`index-bleu.html` à la racine** : doublon de l'accueil, risque de contenu dupliqué indexé.
6. **Aucune FAQ sur le site** : zéro contenu question/réponse, alors que c'est le format le plus repris par ChatGPT, Perplexity et les AI Overviews de Google.
7. **Formulaire de devis non branché** (`action="#"`) : chaque envoi est perdu. C'est un problème de conversion critique, avant même le SEO.
8. **Incohérence de zone** : le title de l'accueil dit « Vittel, Nancy, Épinal », les pages services disent « Vittel et Contrexéville », le contact dit « ouest des Vosges » sans Nancy ni Épinal. Google reçoit des signaux géographiques contradictoires.

### Opportunités prioritaires

- Les données GSC montrent que le site **sort déjà en position 1 à 11 sur les requêtes locales** (« informatique neufchateau » pos. 1, « informatique vittel » pos. 4, « informatique contrexeville » pos. 11, « reparation telephone vittel » pos. 9) mais avec très peu d'impressions : le potentiel est là, il manque du contenu pour élargir la couverture.
- « **dépannage informatique vosges** » est à la position 37 : une requête départementale à fort intérêt business, atteignable avec une page d'accueil renforcée.
- Le fichier AEO montre que ChatGPT reformule systématiquement en « [service] + [ville] + Vosges » et « à domicile » : le site doit contenir ces formulations exactes, en texte visible et en FAQ.
- **Nancy (103 000 hab.) et Épinal (32 000 hab.)** sont dans le fichier AEO et ont des pages zones, mais quasi vides : gros potentiel de volume si ces pages sont réellement développées (ou décision assumée de se concentrer sur l'ouest vosgien).

### Risques

- Laisser les 6 pages villes identiques entre elles : risque de « doorway pages » (pages satellites) que Google filtre.
- Développer Nancy/Épinal sans capacité réelle d'intervention (95 km de Vittel pour Nancy → 62 € de déplacement A/R au tarif affiché) : décevoir les prospects et générer des appels non rentables.
- La requête « informatique morestel » (142 impressions, position 75) concerne une autre ville (Isère) et une probable homonymie : à ignorer, ne surtout pas optimiser pour ça.

### Pages les plus importantes à optimiser (dans l'ordre)

1. **Accueil** (seule page qui rankait : 92 clics / 1 516 impressions sur 12 mois)
2. **/services/depannage-informatique/** (service cœur de métier)
3. **/zones/vittel/ et /zones/contrexeville/** (villes cœur de zone, déjà positionnées)
4. **/services/reparation-ordinateur/ et /services/reparation-smartphone/** (« reparation telephone vittel » a déjà des impressions)
5. **/devis/** (conversion : formulaire à brancher)

### Actions au plus fort impact probable

1. Brancher le formulaire de devis (conversion immédiate).
2. Ajouter le schema `LocalBusiness` + `FAQPage` sur tout le site (SEO local + AEO).
3. Étoffer chaque page service à 400–700 mots avec FAQ (sortir du thin content).
4. Différencier les 6 pages villes (contenu unique par ville) et résoudre la cannibalisation avec la page service dépannage.
5. Créer sitemap.xml + robots.txt + canonicals, supprimer/désindexer `index-bleu.html`.

---

## 2. Analyse des données Google Search Console

### Vue d'ensemble (12 mois, ancien site)

| Indicateur | Valeur |
|---|---|
| Clics | 92 |
| Impressions | 1 516 |
| CTR global | 6,07 % |
| Position moyenne | 15,02 |
| Pages recevant du trafic | 1 seule (`https://www.acdj-informatique.com/`) |

**Lecture** : l'ancien site était mono-page aux yeux de Google. Tout le trafic passait par la home. Le CTR de 6 % à position ~15 est plutôt bon (signe d'un snippet correct et d'une intention locale forte), mais le volume est très faible car une seule page ne peut couvrir qu'une poignée de requêtes. France = 91 des 92 clics : l'audience est bien 100 % locale. Mobile domine légèrement (831 impressions vs 661 desktop) avec une bien meilleure position moyenne sur mobile (7,3 vs 25) — signal de proximité locale : **le mobile est le device prioritaire**.

### Requêtes : lecture détaillée

#### Requêtes de marque
| Requête | Clics | Impr. | Position | Lecture |
|---|---|---|---|---|
| acdj | 1 | 53 | 6,79 | La marque existe mais position 6,8 = le site ne verrouille même pas son propre nom. Homonymes (associations « ACDJ »). |
| acdi informatique | 0 | 1 | 53 | Faute de frappe, marginal. |

**Action** : le schema `Organization`/`LocalBusiness` + une page À propos plus riche + la cohérence NAP (nom, adresse, téléphone) doivent faire monter « acdj » et « acdj informatique » en position 1.

#### Requêtes locales pertinentes (l'or du fichier)
| Requête | Impr. | Position | Intention | Intérêt business | Page cible sur le nouveau site | Recommandation |
|---|---|---|---|---|---|---|
| reparation telephone vittel | 4 | 9,25 | Réparer son smartphone, local | **Élevé** | /services/reparation-smartphone/ | Ajouter « réparation téléphone » (le mot que les gens tapent) dans H1/texte, pas seulement « smartphone ». FAQ écran/batterie. |
| dépannage informatique vosges | 2 | 37 | Trouver un dépanneur dans le département | **Très élevé** | Accueil | Position 37 → atteignable. L'accueil doit marteler « dépannage informatique dans les Vosges » en H1, texte et schema. |
| informatique vittel | 1 | 4 | Générique local | Élevé | /zones/vittel/ | Déjà pos. 4 avec une page quasi vide : étoffer la page Vittel doit la faire passer top 3. |
| informatique contrexeville | 1 | 11 | Générique local | Élevé | /zones/contrexeville/ | Idem : étoffer pour passer page 1 haute. |
| informatique neufchateau | 1 | 1 | Générique local | Élevé | /zones/neufchateau/ | Déjà pos. 1 : consolider, ajouter du contenu pour maintenir et élargir. |
| magasin informatique neufchateau | 1 | 1 | Cherche un magasin physique | Moyen | /zones/neufchateau/ | Préciser sur la page qu'ACDJ se déplace à domicile (pas de boutique) — ou mentionner le point de rencontre si existant. |
| installation de logiciels deyvillers | 1 | 11 | Service + petite commune (près d'Épinal) | Moyen | /zones/epinal/ | Preuve que les micro-communes cherchent : citer les communes environnantes sur chaque page ville. |

#### Requêtes génériques « près de moi »
| Requête | Clics | Impr. | Position |
|---|---|---|---|
| informaticien autour de moi | 1 | 1 | 1 |
| informatique autour de moi | 0 | 2 | 2 |
| magasin informatique autour de moi | 0 | 1 | 1 |
| reparateur ordinateur / réparateur informatique / informaticien | 0 | 3 | 2 |

**Lecture** : ces requêtes « near me » sont servies par la proximité GPS + la fiche Google Business Profile. Le site les soutient via le schema `LocalBusiness` (adresse, geo, zone desservie) et la cohérence NAP. Intérêt business très élevé, action = schema + GBP, pas du contenu.

#### Requêtes avec impressions mais hors cible (à ignorer)
| Requête | Impr. | Pourquoi ignorer |
|---|---|---|
| informatique morestel (142 impr., pos. 75) | 142 | Morestel = Isère, à 400 km. Homonymie probable avec un autre prestataire. **Ne rien faire.** |
| installation informatique chaumontel (7) / réparation pc morestel (6) / pcg informatique creil (3) | 16 | Autres régions. Ignorer. |
| local guide program (13, pos. 1) | 13 | Requête Google Maps sans rapport. Ignorer. |
| aj informatique / cca informatique / ac informatique | 10 | Marques concurrentes homonymes. Ignorer. |
| tarif dépannage informatique à distance (2, pos. 87) | 2 | Hors cible géographique dans sa forme actuelle, mais **signal d'intérêt pour le sujet « tarifs »** : la section tarifs de l'accueil et une FAQ « combien coûte un dépannage » y répondent. |

### Synthèse des opportunités GSC → nouveau site

1. **« dépannage informatique vosges » / « dépannage informatique + ville »** : c'est la famille de requêtes n°1. L'accueil et les pages villes doivent la porter.
2. **« réparation téléphone [ville] »** : déjà des impressions à Vittel sans aucune page dédiée sur l'ancien site. La page réparation smartphone doit employer le mot « téléphone ».
3. **Les pages villes rankent déjà** (Neufchâteau pos. 1, Vittel pos. 4) avec un contenu minimal : chaque heure investie dans ces pages a un retour quasi garanti.
4. **La marque doit être verrouillée** : « acdj » en pos. 6,79 est anormal.
5. Le CTR mobile (6 %) est bon : conserver des metas orientées bénéfices (« diagnostic gratuit », « prix annoncé d'avance ») qui expliquent probablement ce CTR.

---

## 3. Analyse du fichier AEO/GEO (`acdj_aeo_tracker.xlsx`)

Le fichier contient, pour Vittel/Contrexéville, Nancy, Épinal et Mirecourt, des prompts utilisateurs types adressés à ChatGPT et les requêtes de recherche que ChatGPT génère pour y répondre.

### Intentions utilisateurs récurrentes (11 scénarios identifiés)

1. Installer une imprimante
2. Réparer un ordinateur en panne
3. Nettoyer un ordinateur plein de virus / très lent
4. Installer et configurer un nouvel ordinateur
5. Réparer un écran de téléphone
6. Changer une batterie de téléphone
7. Configurer un nouveau téléphone
8. Prises de vue aériennes par drone
9. Créer un site internet pour son entreprise
10. Récupérer les fichiers d'un ordinateur qui ne démarre plus
11. Réinstaller Windows

**Constat structurel** : tous les prompts suivent le schéma *« Je voudrais [service], je suis à [ville], trouve-moi quelqu'un pour le faire »*. L'intention est toujours transactionnelle et locale : l'utilisateur veut **une personne, près de chez lui, maintenant**.

### Recherches générées par ChatGPT : les formulations exactes à reprendre

ChatGPT reformule quasi systématiquement selon 3 patterns :

| Pattern | Exemples tirés du fichier |
|---|---|
| **service + ville (+ Vosges)** | « réparation informatique Vittel Vosges », « installation imprimante assistance informatique Contrexéville Vosges », « récupération de données Epinal Vosges » |
| **service + « à domicile » + ville** | « installation ordinateur à domicile Vittel Vosges », « installation imprimante à domicile Nancy », « assistance informatique domicile installation ordinateur Nancy » |
| **problème précis + ville** | « réparation ordinateur suppression virus Nancy », « réparation écran téléphone Contrexéville smartphone », « réparation smartphone remplacement batterie Vittel », « réinstallation Windows Vittel », « installation Windows Contrexéville » |

Observations importantes :

- **« Vosges » est ajouté très souvent** par ChatGPT aux requêtes sur les petites villes → le mot « Vosges » doit apparaître sur toutes les pages, pas seulement l'accueil.
- **« à domicile » revient constamment** → à conserver et renforcer partout (c'est déjà un point fort du site).
- **ChatGPT croise les villes voisines** : pour un prompt « à Vittel », il cherche aussi « Contrexéville » (et inversement). Les deux villes fonctionnent comme un doublet — les pages Vittel et Contrexéville doivent se citer mutuellement.
- **Le vocabulaire est celui du grand public** : « téléphone » autant que « smartphone », « virus », « ordinateur lent », « écran cassé », « batterie », « Windows ». Le site doit parler ce langage dans ses titres et FAQ.
- **Termes spécifiques cités** : « laboratoire récupération données » (Nancy), « agence web / agence création site internet », « pilote drone / prestataire drone / photographie aérienne », « boutique / magasin informatique » — à intégrer dans les pages concernées.
- **Deux services demandés sans page dédiée aujourd'hui** : *réinstallation Windows* (couvert partiellement par réparation ordinateur) et *configuration de smartphone* (couvert partiellement par réparation smartphone). Voir section 11.

### Villes / zones à cibler

| Ville | Population | Présence dans le fichier | Statut sur le site | Décision recommandée |
|---|---|---|---|---|
| Vittel | ~5 000 | Oui (siège) | Page zone + citée partout | Cœur de cible, prioritaire |
| Contrexéville | ~3 000 | Oui | Page zone | Cœur de cible, prioritaire (doublet avec Vittel) |
| Mirecourt | ~5 000 | Oui | Page zone | Secondaire, à différencier |
| Neufchâteau | ~6 000 | Non (mais GSC : pos. 1) | Page zone | Secondaire, déjà positionné, consolider |
| Épinal | 32 000 | Oui | Page zone | Fort potentiel de volume, à développer sérieusement ou assumer en « limite de zone » |
| Nancy | 103 000 | Oui | Page zone | Très fort volume MAIS très concurrentiel et à ~70 km. Décision business à prendre (voir section 9) |

### Comment ces données doivent influencer le site

- **Titles** : format « [Service] à [Ville] et [Ville] — à domicile | ACDJ Informatique », avec « Vosges » quand la longueur le permet.
- **Introductions** : reprendre la formulation du prompt utilisateur en miroir : *« Vous cherchez quelqu'un pour installer votre imprimante à Vittel ou Contrexéville ? »* — c'est littéralement la question posée à ChatGPT.
- **FAQ** : transformer chacun des 11 scénarios en question/réponse (« Qui peut réparer un ordinateur en panne à Vittel ? », « Combien coûte le remplacement d'un écran de téléphone à Contrexéville ? »). Les réponses courtes (40–60 mots), factuelles, avec nom + ville + prix, sont le format que les assistants IA citent.
- **Sections services** : ajouter les sous-cas exacts recherchés (suppression de virus, réinstallation Windows, remplacement batterie, écran cassé) comme sous-titres H3 — pas seulement en puces.
- **Textes de zone** : chaque page ville doit contenir « [service] à domicile à [ville] » pour les 4–5 services principaux, plus la mention « Vosges ».
- **Données structurées** : `LocalBusiness` avec `areaServed` listant les 6 villes, `Service` + `FAQPage` par page.
- **Maillage** : chaque page ville → pages services (avec ancres « réparation ordinateur à [ville] ») et chaque page service → pages villes.

---

## 4. Mapping mots-clés → pages existantes

| Page existante | Objectif de la page | Intention SEO principale | Mot-clé principal recommandé | Mots-clés secondaires | Requêtes AEO/GEO associées | Zone ciblée | Priorité | Commentaire |
|---|---|---|---|---|---|---|---|---|
| `/` (accueil) | Vitrine + conversion appel | « dépanneur informatique dans les Vosges » | dépannage informatique Vosges | informaticien à domicile Vosges, réparation ordinateur ouest Vosges, ACDJ Informatique | « réparation informatique [ville] Vosges » | Département / ouest Vosges | **Haute** | Ne doit PAS cibler une ville précise (rôle des pages zones). Doit verrouiller la marque + le département. |
| `/services/` (hub) | Router vers les 10 services | Navigation / « prestations informatiques » | services informatiques à domicile Vosges | dépannage, réparation, installation, assistance | — | Ouest Vosges | Moyenne | Page de distribution du maillage, pas de cible transactionnelle propre. |
| `/services/depannage-informatique/` | Vendre le dépannage | « dépannage informatique à domicile » | dépannage informatique à domicile Vittel | dépannage ordinateur, suppression virus, ordinateur lent, dépannage à distance | « dépannage informatique Contrexéville réparation ordinateur », « réparation ordinateur virus Vittel » | Vittel + Contrexéville + ouest Vosges | **Haute** | ⚠️ Cannibalisation actuelle avec les 6 pages zones (voir ci-dessous). |
| `/services/reparation-ordinateur/` | Vendre la réparation PC | « réparation ordinateur [ville] » | réparation ordinateur Vittel | réparation PC portable, ordinateur ne démarre plus, réinstallation Windows | « réparation informatique Vittel réinstallation Windows », « installation Windows Contrexéville » | Vittel + Contrexéville | **Haute** | Doit absorber l'intention « réinstaller Windows » (H3 + FAQ dédiés). |
| `/services/reparation-smartphone/` | Vendre la réparation mobile | « réparation téléphone [ville] » | réparation téléphone Vittel | réparation smartphone, écran cassé, changement batterie, configuration téléphone | « réparation écran téléphone Contrexéville », « remplacement batterie Vittel » | Vittel + Contrexéville | **Haute** | GSC : « reparation telephone vittel » pos. 9. Utiliser « téléphone », pas seulement « smartphone ». |
| `/services/assistance-a-domicile/` | Vendre l'accompagnement | « assistance informatique à domicile » | assistance informatique à domicile Vosges | aide informatique seniors, cours informatique à domicile, aide box internet | « assistance informatique Vittel », « assistance informatique domicile » | Ouest Vosges | Moyenne | Cible différente (pédagogie vs panne) : bien la distinguer du dépannage. |
| `/services/installation-ordinateur/` | Vendre la mise en route PC | « installation ordinateur [ville] » | installation ordinateur à domicile Vittel | configuration nouvel ordinateur, transfert de données, premier démarrage PC | « installation ordinateur à domicile Vittel Vosges » | Vittel + Contrexéville | Moyenne | Formulation AEO exacte disponible : « installation ordinateur à domicile [ville] Vosges ». |
| `/services/installation-imprimante/` | Vendre l'installation imprimante | « installation imprimante [ville] » | installation imprimante à domicile Vittel | imprimante Wi-Fi, imprimante ne se connecte pas, pilote imprimante | « installation imprimante à domicile [ville] », « installation imprimante assistance informatique Contrexéville Vosges » | Vittel + Contrexéville | Moyenne | Faible concurrence, très présent dans le fichier AEO : quick win. |
| `/services/recuperation-de-donnees/` | Vendre la récupération | « récupération de données [ville] » | récupération de données Vosges | disque dur, fichiers perdus, ordinateur ne démarre plus, photos effacées | « récupération de données Contrexéville Vosges », « laboratoire récupération données » | Ouest Vosges (+ Épinal) | **Haute** | Panier moyen élevé + urgence. Mentionner honnêtement la limite vs laboratoire spécialisé. |
| `/services/creation-site-web/` | Vendre le site vitrine pro | « création site internet [ville] » | création site internet Vittel | site vitrine artisan commerçant, agence web Vosges | « agence web Contrexéville création site internet Vosges », « agence création site internet Nancy » | Ouest Vosges | Moyenne | Cible B2B locale : preuve = l'avis Google de Swen Boutin sur la création de site. |
| `/services/installation-de-caisse/` | Vendre la caisse commerce | « installation caisse enregistreuse » | installation caisse enregistreuse Vosges | caisse tactile commerce, logiciel de caisse | — (absent du fichier AEO) | Ouest Vosges | Basse | Niche B2B, peu de volume : page de crédibilité pro. |
| `/services/prestations-drone/` | Vendre les prises de vue | « pilote de drone [zone] » | prestataire drone Vosges | pilote drone, photographie aérienne, vidéo drone | « prestataire drone Vittel photographie aérienne Vosges », « pilote drone Nancy » | Vosges | Basse | Utiliser « pilote de drone » + « photographie aérienne » (mots ChatGPT). Mentionner la certification télépilote si détenue. |
| `/zones/` (hub) | Router vers les villes | « zone d'intervention » | dépannage informatique Vosges Grand Est (support) | secteur d'intervention, intervention à domicile | — | Vosges/Grand Est | Basse | Page de distribution. |
| `/zones/vittel/` | Capter Vittel | « informatique Vittel » (générique local) | dépannage informatique Vittel | informaticien Vittel, réparation ordinateur Vittel, réparation téléphone Vittel | tous les patterns « [service] Vittel » | Vittel + communes voisines | **Haute** | GSC : « informatique vittel » pos. 4. ⚠️ Différencier du service dépannage : la page ville couvre TOUS les services à Vittel. |
| `/zones/contrexeville/` | Capter Contrexéville | « informatique Contrexéville » | dépannage informatique Contrexéville | réparation ordinateur Contrexéville, assistance à domicile Contrexéville | tous les patterns « [service] Contrexéville » | Contrexéville | **Haute** | GSC pos. 11 → page 1 atteignable. Lier fortement à Vittel (doublet AEO). |
| `/zones/neufchateau/` | Capter Neufchâteau | « informatique Neufchâteau » | dépannage informatique Neufchâteau | magasin informatique Neufchâteau, réparation ordinateur Neufchâteau | — (GSC : pos. 1 sur 2 requêtes) | Neufchâteau | Moyenne | Déjà pos. 1 : consolider. Traiter l'intention « magasin » (préciser le modèle à domicile). |
| `/zones/mirecourt/` | Capter Mirecourt | « informatique Mirecourt » | dépannage informatique Mirecourt | réparation ordinateur Mirecourt, assistance informatique Mirecourt | prompts Mirecourt du fichier AEO | Mirecourt | Moyenne | Petite ville, faible concurrence : contenu unique = top 3 probable. |
| `/zones/epinal/` | Capter Épinal | « dépannage informatique Épinal » | dépannage informatique Épinal | réparation informatique Épinal Vosges, récupération données Épinal | « réparation informatique Épinal Vosges », « installation Windows ordinateur Epinal » | Épinal | Moyenne | 32k hab. : potentiel réel mais concurrence sur place. Être honnête sur les frais de déplacement. |
| `/zones/nancy/` | Capter Nancy | « dépannage informatique à domicile Nancy » | dépannage informatique à domicile Nancy | réparation ordinateur Nancy, récupération données Nancy | tous les patterns Nancy du fichier | Nancy | Basse→Moyenne | 103k hab. mais très concurrentiel + éloigné. Ne pas viser la tête, viser « à domicile » + interventions à distance. |
| `/a-propos/` | Crédibilité + marque | « ACDJ Informatique » / « Djeazon » | ACDJ Informatique | dépanneur informatique Vittel, informaticien indépendant Vosges | — | — | Moyenne | Page E-E-A-T : verrouille la marque (« acdj » pos. 6,79 dans GSC). |
| `/contact/` | Conversion contact | « contact ACDJ » (navigationnelle) | contact ACDJ Informatique | téléphone dépanneur Vittel, horaires | — | — | Moyenne | Ajouter NAP complet + schema. |
| `/devis/` | Conversion formulaire | « devis dépannage informatique » | devis dépannage informatique gratuit | tarif dépannage informatique, prix réparation ordinateur | GSC : « tarif dépannage informatique à distance » | Ouest Vosges | **Haute** | ⚠️ Formulaire non branché (`action="#"`). Priorité conversion absolue. |
| `index-bleu.html` | (doublon de l'accueil) | — | — | — | — | — | **Haute** | À retirer de la production ou bloquer à l'indexation : contenu dupliqué de l'accueil. |

### Cannibalisation identifiée et solution

**Problème** : `/services/depannage-informatique/` (H1 « Dépannage informatique à Vittel et Contrexéville ») et les 6 pages `/zones/*/` (H1 « Dépannage informatique à [ville] ») ciblent la même requête. Pour « dépannage informatique vittel », Google a aujourd'hui 2 candidates quasi identiques — il risque de n'en classer aucune correctement.

**Solution recommandée — répartition des rôles** :
- **Pages services** = l'expertise métier. H1 orienté service + « à domicile » : « Dépannage informatique à domicile — Vittel, Contrexéville et ouest des Vosges ». Contenu : symptômes, méthode, tarifs, FAQ métier.
- **Pages villes** = le générique local multi-services. H1 orienté ville : « Votre informaticien à [Ville] — dépannage, réparation, assistance à domicile ». Contenu : services disponibles dans la ville, spécificités locales, communes voisines couvertes, FAQ locale (« Intervenez-vous à [ville] ? En combien de temps ? »).
- La requête précise « dépannage informatique [ville] » restera partagée, c'est inévitable et acceptable ; mais chaque page aura une intention dominante distincte (métier vs ville) et un maillage croisé avec ancres différenciées.

---

## 5. Audit page par page

### Page : Accueil (`/`)

**Objectif actuel** : présenter Djeazon, les prestations phares, les tarifs, la zone, les avis, et déclencher l'appel. La page est déjà bien construite pour la conversion.

**Problème principal** : elle répète « Dépannage informatique Vosges et Grand Est » deux fois (eyebrow + H1) sans jamais développer un vrai paragraphe sur le métier et la zone ; elle porte seule tout le SEO du site (comme l'ancien site) ; aucune donnée structurée ; « Grand Est » dilue le signal local (personne ne cherche « dépannage informatique Grand Est »).

**Intention SEO recommandée** : « trouver un dépanneur informatique à domicile dans les Vosges (ouest du département) » + requête de marque.

**Mot-clé principal** : `dépannage informatique Vosges`

**Mots-clés secondaires** : informaticien à domicile Vosges, réparation ordinateur à domicile, dépanneur informatique Vittel Contrexéville, assistance informatique Vosges.

**Requêtes AEO/GEO à intégrer** : « réparation informatique [ville] Vosges », « dépannage informatique à domicile », « assistance informatique domicile ».

**Modifications recommandées** :
- H1 : remplacer la répétition eyebrow/H1 par un H1 plus riche (voir ci-dessous) ; garder l'eyebrow différent.
- Ajouter sous la section « Qui je suis » un paragraphe de 80–120 mots ancré localement (villes + « Vosges » + services), le seul vrai bloc de texte indexable de la page (le TODO ligne 63 du code le prévoit déjà).
- La section carte SVG : le texte des villes est dans le SVG (lisible par Google, c'est bien) mais ajouter une phrase HTML listant les villes en toutes lettres avec liens vers les pages zones (le paragraphe actuel les cite sans les lier — les lier).
- Section prestations : les 3 cartes actuelles sont bien ; ajouter une 4e carte « Réparation smartphone » (requête GSC existante) ou un lien texte.
- Preuves : ajouter année de création / nombre d'interventions / « micro-entreprise locale » près des avis si les chiffres existent.
- CTA : bons. Ajouter l'option « ou envoyez une photo de la panne » vers /devis/ (réduit la friction pour ceux qui n'osent pas appeler).
- Ajouter les schemas `LocalBusiness` + `FAQPage` (voir section 7).

**Title recommandé** : `Dépannage informatique à domicile dans les Vosges | ACDJ Informatique — Vittel, Contrexéville`

**Meta description recommandée** : `Djeazon répare vos ordinateurs et téléphones à domicile à Vittel, Contrexéville et dans l'ouest des Vosges. Diagnostic gratuit, prix annoncé avant l'intervention. ☎ 06 52 24 66 47.`

**H1 recommandé** : `Dépannage informatique à domicile dans les Vosges`

**H2/H3 recommandés** :
- H2 Qui je suis (existant, garder)
- H2 Les prestations les plus demandées (existant)
- H2 Mes tarifs, annoncés avant l'intervention (existant)
- H2 J'interviens à domicile à Vittel, Contrexéville et dans l'ouest des Vosges (remplacer « Je me déplace dans les Vosges et le Grand Est »)
- H2 Vos avis (existant)
- H2 Questions fréquentes (nouveau)

**Exemple de texte à ajouter** (section « Qui je suis », après le paragraphe existant) :

> ACDJ Informatique est une entreprise locale basée à Vittel, dans les Vosges. J'interviens à domicile pour le dépannage et la réparation d'ordinateurs, la suppression de virus, l'installation de nouveaux équipements (PC, imprimante, box) et l'assistance aux particuliers comme aux professionnels. Je me déplace à Vittel, Contrexéville, Mirecourt, Neufchâteau, et jusqu'à Épinal et Nancy pour certaines prestations. Le diagnostic est gratuit, le prix est annoncé avant de commencer, et le déplacement est facturé 0,65 €/km uniquement s'il est nécessaire.

**FAQ recommandée** (nouvelle section avant le CTA final, avec schema FAQPage) :
1. *Intervenez-vous vraiment à domicile ?* — Oui. Je me déplace chez vous à Vittel, Contrexéville, Mirecourt, Neufchâteau et dans l'ouest des Vosges. Le déplacement est facturé 0,65 €/km, annoncé d'avance. Certains dépannages se font aussi à distance.
2. *Combien coûte un dépannage informatique ?* — Le diagnostic est gratuit. Les forfaits vont de 25 € (30 min) à 75 € (2 h). Vous connaissez le prix avant que je commence.
3. *En combien de temps pouvez-vous intervenir ?* — Appelez le 06 52 24 66 47 : selon la tournée en cours, j'interviens généralement sous 24 à 48 h dans le secteur de Vittel et Contrexéville.
4. *Réparez-vous aussi les téléphones ?* — Oui : écran cassé, batterie qui ne tient plus, configuration d'un nouveau téléphone. Le diagnostic dépend du modèle.
5. *Faut-il apporter l'ordinateur quelque part ?* — Non, c'est moi qui viens chez vous. Si une réparation demande plus de temps, je peux emporter la machine et vous la rapporter remise en état.

**Maillage interne** : liens actuels OK (3 services + hub + 6 zones au footer). Ajouter : liens dans le paragraphe « Qui je suis » vers /services/depannage-informatique/ (ancre « dépannage et la réparation d'ordinateurs ») et vers /zones/vittel/ et /zones/contrexeville/ (ancres = noms de villes) ; lien « Voir tous mes tarifs et demander un devis » vers /devis/ sous la fiche tarifs.

**Priorité : haute.** **Impact attendu** : SEO fort (seule page avec historique de ranking : la consolider protège l'existant et vise « dépannage informatique vosges » pos. 37 → page 1) ; AEO fort (FAQ + LocalBusiness = citabilité) ; conversion en légère hausse (FAQ lève les objections) ; clarté inchangée (déjà bonne).

---

### Page : Hub prestations (`/services/`)

**Objectif actuel** : lister les 10 prestations par catégories. **Problème principal** : title faible (« Toutes mes prestations ») sans mot-clé localisé ; aucun texte entre les catégories ; la meta ne cite que Vittel/Contrexéville.

**Intention SEO** : navigationnelle + « services informatiques à domicile Vosges ». **Mot-clé principal** : `services informatiques à domicile Vosges`. **Secondaires** : prestations informatiques, dépannage, installation, assistance. **AEO/GEO** : « assistance informatique [ville] Vosges ».

**Modifications** : ajouter 1 phrase d'introduction par catégorie (H2) mentionnant le contexte local ; enrichir le title et la meta ; ajouter en bas un bloc « Où j'interviens » avec liens vers les 6 pages zones.

**Title** : `Services informatiques à domicile dans les Vosges — dépannage, installation, assistance | ACDJ`
**Meta description** : `10 prestations à domicile à Vittel, Contrexéville et dans l'ouest des Vosges : dépannage, réparation PC et téléphone, installation, récupération de données. Diagnostic gratuit.`
**H1** : `Mes prestations informatiques à domicile`
**H2/H3** : garder les 4 H2 catégories, ajouter H2 « Où j'interviens » + H2 « Comment ça se passe » (3 étapes : appel → diagnostic gratuit → prix annoncé, intervention).

**FAQ** : non nécessaire ici (éviter la redondance avec les pages services). **Maillage** : cartes existantes OK ; ajouter liens zones. **Priorité : moyenne.** **Impact** : distribue mieux le jus de lien ; améliore la compréhension du catalogue par les IA.

---

### Page : Dépannage informatique (`/services/depannage-informatique/`)

**Objectif actuel** : présenter le service cœur. **Problème principal** : thin content (2 phrases + 5 puces) ; H1 en concurrence directe avec les pages villes ; aucun symptôme concret développé (virus, lenteur, écran bleu, Wi-Fi) alors que ce sont les mots des utilisateurs et de ChatGPT ; pas de FAQ ; pas de schema.

**Intention SEO recommandée** : « faire dépanner son ordinateur à domicile (ouest Vosges) ». **Mot-clé principal** : `dépannage informatique à domicile Vittel`. **Secondaires** : dépannage ordinateur, suppression de virus, ordinateur lent, problème Wi-Fi, dépannage informatique à distance, dépannage informatique Vosges. **AEO/GEO** : « dépannage informatique Contrexéville réparation ordinateur », « réparation ordinateur virus Vittel », « réparation ordinateur suppression virus ».

**Modifications** :
- H1 repositionné « à domicile » + zone élargie (résout la cannibalisation, cf. section 4).
- Développer « Ce que je fais » : transformer chaque puce en H3 + 2-3 phrases (Suppression de virus et de publicités ; Ordinateur lent : nettoyage et optimisation ; Pannes Wi-Fi et connexion ; Écran bleu, plantages, ordinateur qui ne démarre plus ; Dépannage à distance).
- Ajouter un H2 « Comment se passe une intervention » (appel → diagnostic gratuit → prix annoncé → réparation → explication).
- Ajouter un H2 « Où j'interviens » avec liens vers les 6 pages villes.
- Preuves : citer un avis Google pertinent (Michel Jean) directement sur la page.
- CTA : garder ; ajouter la mention « souvent possible à distance pour les problèmes logiciels ».

**Title** : `Dépannage informatique à domicile — Vittel, Contrexéville, ouest Vosges | ACDJ`
**Meta description** : `Ordinateur en panne, lent ou infecté ? Dépannage à domicile à Vittel, Contrexéville et dans l'ouest des Vosges, ou à distance. Diagnostic gratuit, prix annoncé avant l'intervention.`
**H1** : `Dépannage informatique à domicile — Vittel, Contrexéville et ouest des Vosges`
**H2/H3** : H2 Ce que je répare (H3 par symptôme, cf. ci-dessus) / H2 Comment se passe une intervention / H2 Tarifs du dépannage / H2 Où j'interviens / H2 Questions fréquentes.

**Exemple de texte à ajouter** :

> Un ordinateur qui rame, des fenêtres de publicité qui s'ouvrent toutes seules, une connexion Wi-Fi qui saute : ce sont les pannes que je traite le plus souvent à Vittel et Contrexéville. Dans la majorité des cas, tout se règle en une seule visite à domicile — ou même à distance quand le problème est logiciel. Je commence toujours par un diagnostic gratuit : je vous dis ce qui ne va pas, combien ça coûte, et vous décidez. Pas de jargon, pas de surprise sur la facture.

**FAQ recommandée** :
1. *Mon ordinateur est très lent, que pouvez-vous faire ?* — Un nettoyage complet (programmes inutiles, démarrage, mises à jour) suffit dans la plupart des cas : forfait Avancé à 45 €. Si le disque est en cause, je vous propose un devis clair avant tout remplacement.
2. *Pouvez-vous supprimer les virus sans effacer mes fichiers ?* — Oui, dans la grande majorité des cas. Je désinfecte, je sécurise le navigateur et j'installe une protection. Vos documents et photos sont préservés.
3. *Intervenez-vous à distance ?* — Oui, pour les problèmes logiciels (lenteurs, virus, réglages). Pour les pannes matérielles, je me déplace à domicile dans l'ouest des Vosges.
4. *Combien coûte un dépannage informatique à Vittel ?* — Diagnostic gratuit, puis forfaits de 25 € à 75 € selon la durée. Le déplacement (0,65 €/km) est annoncé d'avance.
5. *Que faire si l'ordinateur ne s'allume plus du tout ?* — Ne le démontez pas : appelez-moi. Je diagnostique l'alimentation, le disque ou la carte mère, et si vos données sont menacées, je commence par les mettre en sécurité.

**Maillage** : liens vers /services/reparation-ordinateur/ (ancre « réparation d'ordinateur »), /services/recuperation-de-donnees/ (ancre « récupérer vos données »), /zones/vittel/ et /zones/contrexeville/ (ancres « dépannage à Vittel » / « à Contrexéville »), /devis/. **Priorité : haute.** **Impact** : SEO fort (page métier n°1) ; AEO fort (FAQ symptômes = questions posées aux IA) ; conversion : la page devient auto-suffisante pour convaincre.

---

### Page : Réparation ordinateur (`/services/reparation-ordinateur/`)

**Objectif actuel** : réparation PC fixe/portable. **Problème principal** : thin content ; frontière floue avec le dépannage ; l'intention AEO « réinstaller Windows » n'est traitée nulle part explicitement.

**Intention SEO** : « faire réparer un PC qui ne démarre plus / réinstaller Windows ». **Mot-clé principal** : `réparation ordinateur Vittel`. **Secondaires** : réparation PC portable, ordinateur ne démarre plus, réinstallation Windows, remplacement disque dur SSD. **AEO/GEO** : « réparation informatique Vittel réinstallation Windows », « installation Windows Contrexéville », « réparation ordinateur Nancy ».

**Modifications** : H3 par type de panne (Ne démarre plus / Écran ou clavier de portable / Disque dur et SSD / **Réinstallation complète de Windows** / Sauvegarde avant réparation) ; H2 « Réparer plutôt que racheter » (argument économique + écologique, très efficace localement) ; préciser la différence avec le dépannage (« le dépannage règle un problème, la réparation remet en état une machine qui ne fonctionne plus »).

**Title** : `Réparation ordinateur à Vittel et Contrexéville — PC fixe et portable | ACDJ`
**Meta description** : `PC qui ne démarre plus, disque dur mort, Windows à réinstaller ? Réparation d'ordinateur à domicile à Vittel, Contrexéville et dans l'ouest des Vosges. Diagnostic gratuit.`
**H1** : `Réparation d'ordinateur à Vittel et Contrexéville — PC fixe et portable`
**H2/H3** : H2 Les pannes que je répare (H3 cf. ci-dessus) / H2 Réparer plutôt que racheter / H2 Tarifs / H2 Questions fréquentes.

**Exemple de texte** :

> Avant de racheter un ordinateur, faites-le diagnostiquer : dans beaucoup de cas, un disque SSD neuf et une réinstallation propre de Windows redonnent une seconde vie à une machine de 5 ou 6 ans, pour bien moins cher qu'un PC neuf. Je vous dis honnêtement si la réparation vaut le coup — et si elle ne le vaut pas, je vous aide à choisir et installer le remplaçant.

**FAQ** :
1. *Pouvez-vous réinstaller Windows sur mon ordinateur ?* — Oui : réinstallation complète, pilotes, mises à jour et remise en place de vos fichiers. C'est le forfait Ultra à 75 €, données sauvegardées avant l'opération.
2. *Mon PC portable a l'écran cassé, c'est réparable ?* — Souvent oui. Je vous donne un devis précis selon le modèle avant toute commande de pièce.
3. *Vaut-il mieux réparer ou racheter ?* — Le diagnostic gratuit répond à cette question : je chiffre la réparation et je vous dis franchement si elle est rentable.
4. *Gardez-vous mes données pendant la réparation ?* — Oui, la sauvegarde de vos documents et photos fait partie de la procédure avant toute intervention lourde.

**Maillage** : vers /services/depannage-informatique/ (« simple dépannage »), /services/recuperation-de-donnees/ (« récupération de données »), /services/installation-ordinateur/ (« installation d'un ordinateur neuf »), /zones/vittel/, /devis/. **Priorité : haute.** **Impact** : capte « réinstaller Windows » (intention AEO orpheline) ; renforce le cluster « panne PC ».

---

### Page : Réparation smartphone (`/services/reparation-smartphone/`)

**Objectif actuel** : réparation mobile. **Problème principal** : n'emploie presque jamais le mot « téléphone », alors que GSC (« reparation telephone vittel », pos. 9,25) et ChatGPT (« réparation écran téléphone ») utilisent ce mot ; les 3 sous-intentions AEO (écran / batterie / configuration) ne sont pas des sections.

**Intention SEO** : « faire réparer son téléphone près de chez soi ». **Mot-clé principal** : `réparation téléphone Vittel`. **Secondaires** : réparation smartphone, écran cassé, remplacement batterie téléphone, configurer un nouveau téléphone. **AEO/GEO** : « réparation écran téléphone Contrexéville smartphone », « réparation smartphone remplacement batterie Vittel », « configuration smartphone Contrexéville assistance téléphone ».

**Modifications** : intégrer « téléphone » dans H1, title, texte ; créer 3 H3 : Écran cassé ou fissuré / Batterie qui ne tient plus / Configuration d'un nouveau téléphone (transfert de contacts, photos, applications) ; préciser marques/modèles traités et le cas « selon le modèle, je commande la pièce puis j'interviens » (gère l'attente) ; ajouter le transfert ancien → nouveau téléphone (fort besoin seniors).

**Title** : `Réparation téléphone et smartphone à Vittel et Contrexéville | ACDJ Informatique`
**Meta description** : `Écran cassé, batterie fatiguée, nouveau téléphone à configurer ? Réparation de téléphone à Vittel, Contrexéville et dans l'ouest des Vosges. Devis selon modèle, diagnostic gratuit.`
**H1** : `Réparation de téléphone à Vittel et Contrexéville — écran, batterie, configuration`
**H2/H3** : H2 Ce que je répare sur votre téléphone (3 H3 ci-dessus) / H2 Comment ça se passe / H2 Questions fréquentes.

**Exemple de texte** :

> Écran fissuré après une chute, batterie qui ne passe plus la journée, téléphone neuf que vous n'arrivez pas à configurer : inutile d'envoyer votre smartphone à l'autre bout de la France. J'établis un diagnostic gratuit selon la marque et le modèle, je commande la pièce si besoin, et je fais la réparation dans le secteur de Vittel et Contrexéville. Je m'occupe aussi du transfert complet de vos contacts, photos et applications vers un nouveau téléphone.

**FAQ** :
1. *Combien coûte le remplacement d'un écran de téléphone ?* — Le prix dépend du modèle : je vous donne un devis précis et gratuit avant de commander la pièce. Aucune réparation n'est lancée sans votre accord.
2. *Changez-vous les batteries de téléphone ?* — Oui, sur la plupart des modèles courants. Si votre batterie ne tient plus la journée, le remplacement lui redonne son autonomie d'origine.
3. *Pouvez-vous configurer mon nouveau téléphone ?* — Oui : transfert des contacts, photos, messages et applications depuis l'ancien, réglage de la messagerie et des comptes. Vous repartez avec un téléphone prêt à l'emploi.
4. *Réparez-vous toutes les marques ?* — Je traite les marques courantes (Samsung, Apple, Xiaomi…). Dites-moi le modèle au téléphone : je vous confirme tout de suite si la pièce est disponible.

**Maillage** : vers /services/assistance-a-domicile/ (« prise en main de votre téléphone »), /zones/vittel/, /zones/contrexeville/, /devis/. **Priorité : haute** (requête GSC déjà pos. 9 → top 3 atteignable). **Impact** : SEO quick win ; AEO fort (3 sous-intentions exactement dans le fichier).

---

### Page : Assistance à domicile (`/services/assistance-a-domicile/`)

**Objectif actuel** : accompagnement pédagogique. **Problème principal** : ne nomme pas son public (seniors, débutants) ni les cas d'usage précis ; « à domicile à domicile » dans la meta (coquille à corriger) ; pas de dimension récurrence (abonnement/visites régulières).

**Intention SEO** : « aide informatique à domicile pour débutant/senior ». **Mot-clé principal** : `assistance informatique à domicile Vosges`. **Secondaires** : aide informatique seniors, cours d'informatique à domicile, aide box internet, initiation tablette et smartphone. **AEO/GEO** : « assistance informatique Vittel », « assistance informatique domicile [ville] ».

**Modifications** : corriger la meta ; H3 par cas d'usage (Boîte mail et démarches en ligne / Box internet et Wi-Fi / Prise en main d'un nouvel appareil / Accompagnement régulier) ; paragraphe dédié aux seniors et aux proches aidants (« vos parents à Vittel ont besoin d'aide ? beaucoup de mes clients sont envoyés par leurs enfants ») ; mentionner l'éligibilité éventuelle au crédit d'impôt services à la personne SI applicable (à vérifier avec le statut de l'entreprise — ne l'afficher que si c'est vrai).

**Title** : `Assistance informatique à domicile — Vittel, Contrexéville, ouest Vosges | ACDJ`
**Meta description** : `Aide patiente et sans jargon à domicile : ordinateur, mail, box internet, tablette, téléphone. Pour débutants et seniors à Vittel, Contrexéville et dans l'ouest des Vosges.`
**H1** : `Assistance informatique à domicile, patiente et sans jargon`
**H2/H3** : H2 Ce sur quoi je vous accompagne (4 H3) / H2 Pour les seniors et leurs proches / H2 Tarifs / H2 Questions fréquentes.

**FAQ** :
1. *Aidez-vous les personnes âgées débutantes ?* — Oui, c'est une grande partie de mon activité. Je vais à votre rythme, je réexplique autant que nécessaire et je laisse des notes écrites simples.
2. *Pouvez-vous venir régulièrement ?* — Oui, certains clients me voient une fois par mois pour faire le point : mises à jour, questions, nouveaux usages.
3. *Mes enfants habitent loin et veulent m'offrir vos services, c'est possible ?* — Bien sûr : ils peuvent m'appeler au 06 52 24 66 47 et régler la prestation, j'interviens ensuite chez vous.

**Maillage** : vers /services/installation-ordinateur/, /services/installation-imprimante/, /zones/. **Priorité : moyenne.** **Impact** : conversion (cible seniors = cœur de clientèle réel) ; SEO longue traîne « aide informatique ».

---

### Page : Installation d'ordinateur (`/services/installation-ordinateur/`)

**Objectif** : mise en route PC neuf. **Problème** : thin content ; la formulation AEO exacte « installation ordinateur à domicile [ville] Vosges » n'apparaît pas telle quelle.

**Mot-clé principal** : `installation ordinateur à domicile Vittel`. **Secondaires** : configuration nouvel ordinateur, transfert de données ancien PC, premier démarrage Windows. **AEO/GEO** : « installation ordinateur à domicile Vittel Vosges », « assistance informatique installation ordinateur Epinal Vosges ».

**Modifications** : H3 : Déballage et premier démarrage / Transfert depuis l'ancien ordinateur / Comptes, mail et logiciels essentiels / Sécurité (antivirus, sauvegarde) / Conseil avant achat. Ajouter le service « conseil avant achat » (différenciant, génère l'appel plus tôt dans le parcours).

**Title** : `Installation d'ordinateur à domicile — Vittel, Contrexéville, Vosges | ACDJ`
**Meta description** : `Ordinateur neuf ? Je l'installe à domicile : transfert de vos données, comptes, logiciels et sécurité. Vittel, Contrexéville et ouest des Vosges. Prix annoncé d'avance.`
**H1** : `Installation d'ordinateur à domicile à Vittel et Contrexéville`

**FAQ** :
1. *Pouvez-vous transférer mes données de l'ancien vers le nouveau PC ?* — Oui : documents, photos, favoris et mails sont transférés et vérifiés ensemble avant que je reparte.
2. *Pouvez-vous me conseiller avant l'achat ?* — Oui, appelez-moi avant d'acheter : je vous oriente vers une machine adaptée à votre usage et votre budget, sans vous survendre.
3. *Combien de temps dure une installation ?* — Comptez 1 à 2 heures selon la quantité de données à transférer (forfaits 45 € ou 75 €).

**Maillage** : vers /services/reparation-ordinateur/, /services/assistance-a-domicile/, /services/installation-imprimante/. **Priorité : moyenne.**

---

### Page : Installation imprimante (`/services/installation-imprimante/`)

**Objectif** : installation/connexion imprimante. **Problème** : thin content, alors que c'est le 1er scénario du fichier AEO et une requête à très faible concurrence.

**Mot-clé principal** : `installation imprimante à domicile Vittel`. **Secondaires** : imprimante Wi-Fi qui ne se connecte pas, installer une imprimante sur PC, imprimante hors ligne, scanner. **AEO/GEO** : « installation imprimante à domicile [ville] », « installation imprimante assistance informatique Contrexéville Vosges ».

**Modifications** : H3 : Installation Wi-Fi, USB ou réseau / Imprimante « hors connexion » ou introuvable / Impression depuis téléphone et tablette / Scanner et numérisation. Ajouter le dépannage d'imprimante déjà installée (l'intention réelle est souvent « elle ne marche plus », pas « première installation »).

**Title** : `Installation et dépannage d'imprimante à domicile — Vittel, Contrexéville | ACDJ`
**Meta description** : `Imprimante impossible à connecter en Wi-Fi, hors ligne ou qui n'imprime plus ? J'installe et je dépanne votre imprimante à domicile à Vittel, Contrexéville et dans l'ouest des Vosges.`
**H1** : `Installation d'imprimante à domicile à Vittel et Contrexéville`

**FAQ** :
1. *Mon imprimante est « hors connexion », pouvez-vous la réparer ?* — Oui, c'est la panne la plus courante : en général un problème de Wi-Fi ou de pilote, réglé en une visite (forfait Basique 25 €).
2. *Pouvez-vous installer l'impression depuis mon téléphone ?* — Oui, je configure l'impression depuis vos smartphones et tablettes, et je vous montre comment faire.
3. *Installez-vous toutes les marques d'imprimantes ?* — Oui : HP, Epson, Canon, Brother… J'installe aussi le scanner et la numérisation vers votre ordinateur ou votre mail.

**Maillage** : vers /services/installation-ordinateur/, /services/assistance-a-domicile/. **Priorité : moyenne** (quick win, faible concurrence).

---

### Page : Récupération de données (`/services/recuperation-de-donnees/`)

**Objectif** : récupération fichiers. **Problème** : thin content sur un service à forte urgence émotionnelle et panier élevé ; ne traite pas le scénario AEO exact (« ordinateur qui ne démarre plus + fichiers perdus ») ; ne se positionne pas par rapport aux laboratoires (mot utilisé par ChatGPT).

**Mot-clé principal** : `récupération de données Vosges`. **Secondaires** : récupérer fichiers ordinateur qui ne démarre plus, disque dur externe non reconnu, photos supprimées, clé USB illisible. **AEO/GEO** : « récupération de données Contrexéville Vosges », « récupération données disque dur laboratoire », « récupération de données Epinal Vosges ».

**Modifications** : H2 « Que faire immédiatement » (éteindre l'appareil, ne rien réinstaller) — contenu de premier secours très cité par les IA ; H3 par support (Ordinateur qui ne démarre plus / Disque externe ou clé USB / Cartes SD et photos) ; H2 honnête « Et si le disque est physiquement mort ? » expliquant l'orientation vers un laboratoire spécialisé quand nécessaire (crédibilité + reprend le mot « laboratoire » du fichier AEO) ; H2 « Éviter que ça se reproduise » → sauvegarde automatique (upsell naturel).

**Title** : `Récupération de données à domicile — Vosges (Vittel, Contrexéville, Épinal) | ACDJ`
**Meta description** : `Ordinateur qui ne démarre plus, disque dur ou clé USB illisible ? Je récupère vos fichiers et photos quand c'est possible, et je vous dis honnêtement quand ça ne l'est pas. Devis gratuit.`
**H1** : `Récupération de données dans les Vosges — fichiers, photos, disques durs`

**FAQ** :
1. *Mon ordinateur ne démarre plus, mes fichiers sont-ils perdus ?* — Rarement. Dans la plupart des cas le disque reste lisible et je récupère vos documents et photos avant toute réparation.
2. *Que faire en attendant votre intervention ?* — Éteignez l'appareil et n'installez rien : chaque écriture sur le disque réduit les chances de récupération.
3. *Combien coûte une récupération de données ?* — Le diagnostic est gratuit. Je vous annonce ensuite un devis précis selon le support et l'état du disque, avant toute intervention.
4. *Et si le disque est physiquement endommagé ?* — Si une ouverture en salle blanche est nécessaire, je vous le dis franchement et je vous oriente vers un laboratoire spécialisé plutôt que d'aggraver les dégâts.

**Maillage** : vers /services/reparation-ordinateur/, /services/depannage-informatique/, /zones/epinal/ (le fichier AEO montre la demande à Épinal). **Priorité : haute** (urgence + valeur). **Impact** : AEO très fort (contenu « premiers secours » = format idéal pour citation par IA).

---

### Page : Création de site web (`/services/creation-site-web/`)

**Objectif** : site vitrine B2B local. **Problème** : thin content ; aucun exemple de réalisation alors qu'un avis Google (Swen Boutin) en parle ; pas de prix ni de processus ; ChatGPT cherche « agence web » — le mot n'apparaît pas.

**Mot-clé principal** : `création site internet Vittel`. **Secondaires** : site vitrine artisan, site internet commerçant Vosges, création site web Vosges, référencement local. **AEO/GEO** : « agence web Contrexéville création site internet Vosges », « agence création site internet Nancy ».

**Modifications** : H2 « Pour qui » (artisans, commerçants, professions libérales du secteur) ; H2 « Ce qui est compris » (design mobile, textes, mise en ligne, Google Business Profile, référencement local de base) ; H2 « Un exemple concret » avec l'avis de Swen Boutin cité et si possible un lien vers le site réalisé ; indiquer une fourchette de prix ou « devis fixe avant démarrage » ; phrase incluant « contrairement à une agence web classique, vous traitez en direct avec la personne qui fait le travail ».

**Title** : `Création de site internet pour artisans et commerçants — Vosges | ACDJ`
**Meta description** : `Un site vitrine clair, adapté au mobile et pensé pour être trouvé sur Google. Pour les artisans, commerçants et indépendants de Vittel, Contrexéville et des Vosges. Devis fixe avant démarrage.`
**H1** : `Création de site internet pour les pros de Vittel, Contrexéville et des Vosges`

**FAQ** :
1. *Combien coûte un site vitrine ?* — Chaque projet reçoit un devis fixe avant démarrage, en fonction du nombre de pages et des contenus. Pas de surprise en cours de route.
2. *Vous occupez-vous du référencement Google ?* — Oui : structure propre, textes optimisés pour les recherches locales et fiche Google Business Profile configurée.
3. *Pourrai-je modifier mon site moi-même ?* — On en décide ensemble : je peux soit vous former à faire les mises à jour, soit m'en charger pour vous.

**Maillage** : vers /a-propos/ (crédibilité), /services/installation-de-caisse/ (cluster « pros »), /devis/. **Priorité : moyenne.**

---

### Page : Installation de caisse (`/services/installation-de-caisse/`)

**Objectif** : équipement caisse commerce. **Problème** : thin content ; « à domicile » dans la meta est incongru pour un commerce (« en boutique » serait juste) ; pas de mention de matériel/logiciel ni de conformité.

**Mot-clé principal** : `installation caisse enregistreuse Vosges`. **Secondaires** : caisse tactile commerce, logiciel de caisse certifié, TPE, périphériques (douchette, tiroir, imprimante ticket). **AEO/GEO** : aucun dans le fichier — priorité basse confirmée.

**Modifications** : remplacer « à domicile » par « dans votre commerce » ; H3 : Installation et raccordement (douchette, tiroir-caisse, imprimante à tickets) / Paramétrage des produits et de la TVA / Formation de l'équipe / Dépannage de caisse existante. Mentionner l'exigence de logiciel certifié (loi anti-fraude TVA) si le service la couvre.

**Title** : `Installation de caisse enregistreuse pour commerces — Vosges | ACDJ`
**Meta description** : `Installation, raccordement et prise en main de votre caisse tactile dans votre commerce à Vittel, Contrexéville et dans les Vosges. Formation de l'équipe incluse.`
**H1** : `Installation de caisse pour les commerces de Vittel, Contrexéville et des Vosges`

**FAQ** : 2-3 questions (Quel matériel installez-vous ? / Formez-vous mes employés ? / Dépannez-vous une caisse déjà en place ?). **Maillage** : vers /services/creation-site-web/ (cluster pros), /contact/. **Priorité : basse.**

---

### Page : Prestations drone (`/services/prestations-drone/`)

**Objectif** : prises de vue aériennes. **Problème** : « Prestations drone à domicile » (meta) n'a pas de sens ; les mots de ChatGPT (« pilote drone », « photographie aérienne », « prestataire drone ») sont absents ; aucune mention de certification télépilote ni d'exemples d'images.

**Mot-clé principal** : `pilote de drone Vosges`. **Secondaires** : photographie aérienne, vidéo par drone, prestataire drone Vittel, photo immobilière drone, drone événement. **AEO/GEO** : « prestataire drone Vittel photographie aérienne Vosges », « pilote drone Nancy prise de vue aérienne ».

**Modifications** : réécrire title/meta sans « à domicile » ; H3 par cas d'usage : Immobilier et terrains / Chantiers et toitures (inspection) / Événements et mariages / Communication d'entreprise et tourisme ; indiquer la certification télépilote DGAC et l'assurance si détenues (**obligatoire réglementairement pour la prestation commerciale — à vérifier et afficher**) ; ajouter 3-4 photos/vidéos d'exemple avec alt text localisé (« vue aérienne par drone de Vittel »).

**Title** : `Pilote de drone dans les Vosges — photos et vidéos aériennes | ACDJ`
**Meta description** : `Prises de vue aériennes par drone dans les Vosges : immobilier, inspection de toiture, événements, communication. Télépilote basé à Vittel, devis gratuit.`
**H1** : `Prises de vue aériennes par drone dans les Vosges`

**FAQ** : Faut-il une autorisation pour un vol de drone ? / Combien coûte une séance photo par drone ? / Livrez-vous les fichiers bruts ? **Maillage** : vers /a-propos/, /contact/. **Priorité : basse.**

---

### Page : Hub secteur (`/zones/`)

**Objectif actuel** : lister les villes. **Problème** : « Grand Est » trop large ; le tiret cadratin dans le title consomme des caractères pour rien ; peu de contenu.

**Mot-clé principal (support)** : `zone d'intervention dépannage informatique Vosges`. **Modifications** : intro enrichie citant le rayon réel (« autour de Vittel et Contrexéville, jusqu'à Neufchâteau, Mirecourt, Épinal et Nancy ») + rappel 0,65 €/km ; ajouter une phrase « Votre commune n'est pas listée ? J'interviens dans les villages alentour : appelez-moi » (capte les micro-communes type Deyvillers vue dans GSC).

**Title** : `Zone d'intervention — dépannage informatique à domicile dans les Vosges | ACDJ`
**Meta description** : `J'interviens à domicile à Vittel, Contrexéville, Mirecourt, Neufchâteau, Épinal, Nancy et dans les communes alentour. Déplacement 0,65 €/km annoncé d'avance.`
**H1** : `Où j'interviens dans les Vosges et alentour`

**Priorité : basse.** **Impact** : cohérence du signal géographique.

---

### Pages : Villes (`/zones/vittel/`, `/zones/contrexeville/`, `/zones/neufchateau/`, `/zones/mirecourt/`, `/zones/epinal/`, `/zones/nancy/`)

Ces 6 pages partagent le même gabarit et les mêmes problèmes : elles sont traitées ensemble, avec les spécificités par ville ensuite.

**Objectif actuel** : capter « dépannage informatique [ville] ». **Problème principal** : les 6 pages sont identiques à 95 % (seul le nom change) → profil type de « doorway pages » ; H1 identique à la page service dépannage (cannibalisation) ; le TODO du code le dit lui-même : « ajouter 2-3 phrases vraiment spécifiques à [ville] ».

**Intention SEO recommandée** : générique local multi-services « informatique [ville] » / « informaticien [ville] » / « [service] [ville] » en longue traîne.

**Structure recommandée pour CHAQUE page ville** :
- **H1** : `Votre informaticien à [Ville] — dépannage, réparation et assistance à domicile`
- **Intro (80–120 mots, unique par ville)** : distance/temps de trajet depuis Vittel, coût de déplacement indicatif (« comptez environ X € de déplacement aller-retour »), un ou deux repères locaux réels (quartiers, communes limitrophes desservies).
- **H2 « Ce que je fais à [Ville] »** : la liste de services existante, mais avec 1 phrase chacune et des ancres localisées (« réparation d'ordinateur à [Ville] »).
- **H2 « Communes desservies autour de [Ville] »** : 5-8 villages réels alentour, en phrase naturelle (pas en liste de mots-clés).
- **H2 « Questions fréquentes à [Ville] »** : 3 Q/R localisées.
- **Bloc avis** : si possible, citer un avis Google d'un client de cette ville.

**Exemple concret — page Vittel** :

> **Title** : `Dépannage et assistance informatique à Vittel — à domicile | ACDJ Informatique`
> **Meta** : `Informaticien basé à Vittel : dépannage, réparation d'ordinateur et de téléphone, installation et assistance à domicile. Diagnostic gratuit, prix annoncé avant intervention.`
> **H1** : `Votre informaticien à Vittel — dépannage, réparation et assistance à domicile`
> **Texte d'intro** : « ACDJ Informatique est basé à Vittel : c'est le cœur de mon secteur, et le déplacement y est réduit au minimum. J'interviens dans toute la ville et les communes voisines — Contrexéville, They-sous-Montfort, La Vacheresse — généralement sous 24 à 48 h. Dépannage d'ordinateur, suppression de virus, réparation de téléphone, installation de box ou d'imprimante : le diagnostic est gratuit et je vous annonce le prix avant de commencer. »
> **FAQ** : 1. *Intervenez-vous le jour même à Vittel ?* — Souvent, oui : étant basé à Vittel, je peux passer rapidement selon ma tournée. Appelez le 06 52 24 66 47. 2. *Y a-t-il des frais de déplacement à Vittel ?* — Ils sont minimes (0,65 €/km depuis ma base à Vittel) et toujours annoncés d'avance. 3. *Avez-vous un magasin à Vittel ?* — Non, je travaille à domicile : c'est moi qui viens chez vous, avec le matériel nécessaire.

**Spécificités par ville** :

| Ville | Priorité | Points spécifiques à intégrer |
|---|---|---|
| Vittel | **Haute** | « Basé à Vittel », déplacement minimal, intervention rapide. GSC pos. 4 → top 3 visé. |
| Contrexéville | **Haute** | Doublet avec Vittel (4 km) : « à 5 minutes de ma base », lien fort réciproque avec /zones/vittel/. ChatGPT croise systématiquement les deux villes. |
| Neufchâteau | Moyenne | Déjà pos. 1 GSC. Traiter l'intention « magasin informatique Neufchâteau » : expliquer le modèle à domicile comme un avantage (pas de dépôt, pas d'attente). ~30 km : donner le coût de déplacement. |
| Mirecourt | Moyenne | ~25 km. Ville présente dans le fichier AEO. Peu de concurrence locale : contenu unique = top 3 probable. |
| Épinal | Moyenne | 32k hab., ~45 km. Annoncer honnêtement le déplacement (~58 € A/R) et pousser le dépannage à distance + le regroupement d'interventions. Cibler « réparation informatique Épinal Vosges » et « récupération de données Épinal ». |
| Nancy | Basse | 103k hab., ~70 km, hors Vosges. Positionnement réaliste : dépannage **à distance** pour Nancy + déplacements pour prestations à forte valeur (récupération de données, création de site, drone). Le dire clairement évite les appels non rentables et reste crédible pour Google. |

**Maillage (toutes les pages villes)** : vers les 4-6 pages services avec ancres localisées ; vers la ou les villes limitrophes (Vittel ↔ Contrexéville en premier) ; vers /devis/. **Impact attendu** : SEO fort (ces pages rankent déjà avec un contenu vide) ; AEO fort (les FAQ localisées répondent mot pour mot aux prompts du fichier) ; risque « doorway » éliminé par l'unicité du contenu.

---

### Page : À propos (`/a-propos/`)

**Objectif actuel** : présenter Djeazon. **Problème principal** : H1 sans marque ni ville (« Le dépanneur informatique de votre secteur ») alors que cette page doit verrouiller la requête marque « acdj » (pos. 6,79 dans GSC) ; peu de faits vérifiables (depuis quand, statut, formation, nombre d'interventions).

**Mot-clé principal** : `ACDJ Informatique` (marque). **Secondaires** : Djeazon, dépanneur informatique Vittel, informaticien indépendant Vosges.

**Modifications** : intégrer « ACDJ Informatique » et « Vittel » dans le H1 ou le premier paragraphe ; ajouter un bloc « En bref » factuel (nom, statut, base à Vittel, année de début, zone, 32 avis Google 5/5) — exactement le type de bloc que les IA citent ; ajouter le schema `AboutPage` + `Person` lié au `LocalBusiness` ; raconter brièvement le parcours (formation, pourquoi ce métier) pour l'E-E-A-T.

**Title** : `À propos — Djeazon, dépanneur informatique à Vittel (ACDJ Informatique)`
**Meta description** : `Djeazon, fondateur d'ACDJ Informatique : dépannage et assistance à domicile à Vittel, Contrexéville et dans l'ouest des Vosges. Diagnostic gratuit, explications simples, 32 avis Google 5/5.`
**H1** : `Djeazon, votre dépanneur informatique à Vittel et dans l'ouest des Vosges`

**FAQ** : non nécessaire (la home et les services la portent). **Maillage** : vers /services/ (ancre « toutes mes prestations »), /zones/ et /contact/. **Priorité : moyenne.** **Impact** : marque verrouillée, E-E-A-T renforcé, matière à citation IA (« ACDJ Informatique est une entreprise individuelle basée à Vittel… »).

---

### Page : Contact (`/contact/`)

**Objectif actuel** : donner téléphone, email, horaires. Bon ton, bonne conversion. **Problème principal** : la zone citée omet Nancy et Épinal (incohérence avec /zones/) ; pas d'adresse ni de NAP structuré ; pas de schema `ContactPage`/`LocalBusiness` ; le title utilise un séparateur « · » peu standard.

**Modifications** : aligner la liste des villes sur les pages zones (ou préciser « cœur de secteur : Vittel–Contrexéville ; interventions possibles jusqu'à Épinal et Nancy ») ; afficher la commune de base (au minimum « basé à Vittel (88800) ») pour le NAP ; horaires en `openingHours` schema ; garder le message « vous tombez sur moi, pas sur un standard » (excellent).

**Title** : `Contact — ACDJ Informatique, dépannage à Vittel et Contrexéville | 06 52 24 66 47`
**Meta description** : `Appelez Djeazon au 06 52 24 66 47 (lun–ven) ou écrivez à contact@acdj-informatique.com. Dépannage informatique à domicile à Vittel, Contrexéville et dans l'ouest des Vosges.`
**H1** : garder `Le plus simple, c'est de m'appeler` (bon pour la conversion ; le SEO est porté par title/schema).

**Priorité : moyenne.** **Impact** : NAP cohérent = socle du SEO local et de la fiche Google Business Profile.

---

### Page : Devis (`/devis/`)

**Objectif actuel** : formulaire de demande de devis. **Problème principal (critique, hors SEO)** : `action="#"` — le formulaire n'envoie rien. Toute demande est perdue. À brancher (Formspree, Netlify Forms, n8n…) avant toute autre optimisation. Ajouter aussi une page/message de confirmation.

**Mot-clé principal** : `devis dépannage informatique gratuit`. **Secondaires** : tarif dépannage informatique, prix réparation ordinateur Vosges (GSC montre « tarif dépannage informatique à distance »).

**Modifications** : brancher le formulaire + message de succès ; ajouter au-dessus du formulaire un rappel des tarifs (réutiliser la fiche tarifs de la home) — la page peut alors cibler « tarif dépannage informatique » ; ajouter la réassurance RGPD sous le bouton (« vos coordonnées ne servent qu'à vous répondre ») ; champ « Ville » : proposer une datalist des communes du secteur ; indiquer le délai de réponse (« réponse sous 24 h ouvrées »).

**Title** : `Devis gratuit — dépannage informatique à Vittel, Contrexéville et Vosges | ACDJ`
**Meta description** : `Décrivez votre panne, recevez un prix clair sous 24 h. Diagnostic gratuit, forfaits dès 25 €, déplacement 0,65 €/km inclus dans le devis. Ouest des Vosges.`
**H1** : garder `Décrivez votre panne, recevez un prix clair` (excellent).

**FAQ courte** (3 questions) : Le devis est-il vraiment gratuit ? / Sous quel délai répondez-vous ? / Le déplacement est-il compris dans le prix ? **Priorité : haute (conversion).** **Impact** : chaque visiteur SEO gagné est perdu tant que le formulaire ne fonctionne pas.

---

### Pages légales (`/mentions-legales/`, `/politique-confidentialite/`, `/cgv/`)

Vérifier que les placeholders `[SIRET]`, `[HÉBERGEUR]` signalés dans le README sont remplis : des mentions légales complètes (SIRET, adresse) renforcent la confiance des utilisateurs **et** des systèmes d'IA qui vérifient la légitimité d'une entreprise. Ajouter `noindex` est inutile ; les laisser indexables mais hors maillage principal. **Priorité : moyenne** (obligation légale par ailleurs).

### Fichier : `index-bleu.html`

Doublon de l'accueil (ancienne variante de couleur). S'il est déployé, il crée une page dupliquée indexable. **Recommandation : le retirer de la mise en ligne** (le garder hors du dossier publié) ou a minima le bloquer via robots.txt + absence de tout lien. **Priorité : haute** (correctif trivial).

---

## 6. Recommandations globales de rédaction

Le ton actuel (première personne, direct, transparent) est un vrai atout : **le conserver absolument**. Les recommandations ci-dessous s'ajoutent sans dénaturer la voix.

### Termes à utiliser plus souvent
- **« Vosges »** : ChatGPT l'ajoute à presque toutes ses recherches ; il n'apparaît aujourd'hui que sur l'accueil et les footers. Chaque page service devrait le contenir au moins une fois en texte courant.
- **« à domicile »** : déjà présent, à maintenir dans les H1/intros (pattern AEO systématique).
- **« téléphone »** en plus de « smartphone » (vocabulaire réel des clients et de GSC).
- Les symptômes concrets : « ordinateur lent », « virus », « écran cassé », « batterie qui ne tient plus », « ne démarre plus », « hors connexion », « réinstaller Windows ».
- **« informaticien »** : GSC montre « informaticien autour de moi », « reparateur informaticien » ; le mot est absent du site.
- Les noms de villes en toutes lettres dans les paragraphes (pas seulement dans les menus).

### Termes à éviter ou limiter
- **« Grand Est »** : trop large, aucune requête réelle, dilue le signal Vosges. À remplacer par « Vosges » ou « ouest des Vosges » partout sauf éventuellement une mention.
- « Prestations » seul (préférer « services informatiques » ou nommer le service) — « prestation » est un mot d'entreprise, pas de client.
- Les doublons maladroits générés par le gabarit : « Assistance à domicile à domicile » (meta actuelle), « Prestations drone à domicile ».

### Formulations trop vagues → plus commerciales (avant/après)
| Avant (actuel) | Après (recommandé) |
|---|---|
| « ACDJ Informatique vous aide à réparer, installer et sécuriser vos équipements » | « Je répare votre ordinateur chez vous, à Vittel, Contrexéville et dans l'ouest des Vosges — diagnostic gratuit, prix annoncé avant de commencer » |
| « un diagnostic clair pour remettre vos appareils en état » | « en général, tout est réglé en une seule visite ; sinon, je vous dis exactement quoi, combien et quand » |
| « Je récupère ce qui est encore récupérable » | « Dans la plupart des cas, vos photos et documents sont récupérables — surtout si vous éteignez l'appareil tout de suite et m'appelez avant de manipuler » |
| « Votre ville n'est pas listée ? Demandez-moi. » | « Votre village n'est pas listé ? J'interviens dans toutes les communes autour de Vittel et Contrexéville : appelez, je vous confirme tout de suite le déplacement. » |

### Preuves à ajouter
- Année de création / « X interventions réalisées » (si chiffrable).
- Avis Google cités sur les pages services concernées (pas seulement l'accueil) — l'avis création de site sur la page création de site, etc.
- Certification télépilote DGAC sur la page drone (si détenue), SIRET dans les mentions légales.
- « Basé à Vittel » répété : la proximité EST la preuve pour du service à domicile.

### Bénéfices clients à mieux mettre en avant
- Pas besoin de se déplacer ni de démonter quoi que ce soit : « c'est moi qui viens ».
- Pas de surprise financière : diagnostic gratuit + prix avant intervention (déjà bien fait, à répéter sur chaque page service).
- La pédagogie : « je vous explique en français simple » (déjà présent, à garder).
- L'économie : « réparer coûte souvent 3 à 4 fois moins cher que racheter ».

### Objections clients à traiter (aujourd'hui non traitées)
1. *« Combien ça va me coûter au final ? »* → fiche tarifs + FAQ prix sur chaque page service.
2. *« Est-ce qu'il vient vraiment jusque chez moi ? »* → coût de déplacement indicatif par ville sur les pages zones.
3. *« Vais-je perdre mes données ? »* → phrase systématique « vos données sont sauvegardées avant toute intervention lourde ».
4. *« Est-ce sérieux, une personne seule ? »* → avis Google + à propos étoffé + mentions légales complètes.
5. *« Sous quel délai ? »* → « généralement sous 24 à 48 h dans le secteur Vittel–Contrexéville ».

### Phrases orientées conversion à réutiliser
- « Décrivez votre panne au téléphone : je vous dis tout de suite si je peux la régler et à quel prix. »
- « Si je ne peux pas le réparer, le diagnostic ne vous coûte rien. »
- « Vous préférez écrire ? Envoyez une photo de la panne via le formulaire de devis. »

---

## 7. Recommandations SEO on-page globales

| Élément | Problème observé | Recommandation | Priorité | Exemple |
|---|---|---|---|---|
| **Balises title** | Présentes et localisées, mais gabarit uniforme « [Service] à Vittel et Contrexéville » ; « Grand Est » sur l'accueil ; séparateurs « · » et « — » incohérents | Conserver la structure [Mot-clé] — [zone] \| ACDJ ; intégrer « à domicile » et « Vosges » quand pertinent ; un seul style de séparateur | Moyenne | Voir titles proposés en section 5 |
| **Meta descriptions** | Présentes, mais gabarit dupliqué avec coquilles (« à domicile à domicile ») et parfois > 165 caractères | Réécrire par page (section 5), 140–160 caractères, bénéfice + ville + CTA ; corriger les coquilles | Moyenne | `Ordinateur en panne ou lent ? Dépannage à domicile à Vittel et Contrexéville. Diagnostic gratuit, prix annoncé d'avance. ☎ 06 52 24 66 47` |
| **H1** | Un seul H1 par page ✔ ; mais 7 pages ont un H1 quasi identique (« Dépannage informatique à [ville] ») | Différencier selon le rôle (service vs ville), cf. section 4 | **Haute** | — |
| **H2/H3** | Trop peu de H2/H3 sur les pages services (1 seul H2 de contenu) ; H2 stylés inline | Ajouter la hiérarchie H2 symptômes/process/FAQ ; déplacer les styles inline vers le CSS | Moyenne | — |
| **Slugs URL** | Propres, courts, en français, avec tirets ✔ | Ne rien changer (éviter toute migration d'URL) | — | — |
| **Alt text images** | Présents mais génériques (« Djeazon en intervention ») ; seulement 3 images sur tout le site | Alt descriptifs et localisés ; ajouter des photos réelles (interventions, atelier, villes) — un site services sans images locales est un signal faible | Moyenne | `alt="Djeazon, dépanneur informatique ACDJ, en intervention à domicile à Vittel"` |
| **Sitemap** | **Absent** | Créer `/sitemap.xml` listant les ~22 pages indexables et le déclarer dans Search Console | **Haute** | — |
| **robots.txt** | **Absent** | Créer `/robots.txt` avec `Sitemap:` ; ne pas bloquer les CSS ; y exclure `index-bleu.html` si conservé | **Haute** | `User-agent: *`<br>`Allow: /`<br>`Sitemap: https://www.acdj-informatique.com/sitemap.xml` |
| **Canonical** | **Absent partout** | Ajouter `<link rel="canonical">` auto-référencé sur chaque page (protège contre les doublons www/non-www, / vs /index.html) | **Haute** | `<link rel="canonical" href="https://www.acdj-informatique.com/services/depannage-informatique/">` |
| **Open Graph / réseaux** | Absent | Ajouter og:title, og:description, og:image (photo de Djeazon) sur les pages principales : améliore les partages et certains crawlers IA | Basse | — |
| **Données structurées** | **Aucune** | Voir bloc dédié ci-dessous | **Haute** | — |
| **FAQ schema** | Aucune FAQ | Après ajout des FAQ (section 5), les baliser en `FAQPage` (JSON-LD) | **Haute** | — |
| **Breadcrumbs** | Fil d'Ariane visuel présent ✔ mais sans schema | Ajouter `BreadcrumbList` JSON-LD sur services et zones | Moyenne | — |
| **Cohérence des pages** | Zone annoncée variable selon les pages (Grand Est / ouest Vosges / Vittel-Contrexéville) | Définir UNE hiérarchie : base Vittel → cœur Vittel-Contrexéville → secteur ouest Vosges → extensions Épinal/Nancy, et l'appliquer partout | **Haute** | — |
| **Structure sémantique** | `<header>/<main>/<footer>` corrects, skip-link, lang="fr" ✔ | RAS ; ajouter `itemprop="telephone"` ou mieux, tout passer par JSON-LD | — | — |
| **Doublon accueil** | `index-bleu.html` publié à la racine | Retirer du déploiement ou noindex | **Haute** | — |

### Bloc données structurées recommandé (à adapter, sur toutes les pages — le cœur AEO/SEO local)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.acdj-informatique.com/#business",
  "name": "ACDJ Informatique",
  "image": "https://www.acdj-informatique.com/assets/images/djeazon-intervention.png",
  "url": "https://www.acdj-informatique.com/",
  "telephone": "+33652246647",
  "email": "contact@acdj-informatique.com",
  "founder": { "@type": "Person", "name": "Djeazon" },
  "address": { "@type": "PostalAddress", "addressLocality": "Vittel", "postalCode": "88800", "addressCountry": "FR" },
  "areaServed": [
    { "@type": "City", "name": "Vittel" },
    { "@type": "City", "name": "Contrexéville" },
    { "@type": "City", "name": "Mirecourt" },
    { "@type": "City", "name": "Neufchâteau" },
    { "@type": "City", "name": "Épinal" },
    { "@type": "City", "name": "Nancy" }
  ],
  "priceRange": "25€–75€",
  "openingHoursSpecification": [ { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" } ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "32" }
}
```

(Compléter l'adresse exacte et les horaires réels ; ajouter sur chaque page service un bloc `Service` avec `provider` pointant vers `#business`, et sur chaque page avec FAQ un bloc `FAQPage`.)

---

## 8. Recommandations de maillage interne

### Principes
- **Pages piliers** : Accueil, /services/depannage-informatique/, /zones/vittel/, /zones/contrexeville/. Elles reçoivent le plus de liens entrants internes.
- **Pages de soutien** : les autres services et zones ; elles poussent vers les piliers et se lient horizontalement au sein de leur cluster (services entre eux quand complémentaires, villes limitrophes entre elles).
- **Éviter la cannibalisation par les ancres** : une ancre « dépannage informatique à Vittel » ne doit pointer QUE vers une seule page cible (recommandé : la page zone Vittel pour les ancres ville, la page service pour les ancres métier « dépannage informatique à domicile »).
- **Renforcer les pages à forte intention commerciale** : chaque page de contenu doit proposer /devis/ ou l'appel dans son corps de texte, pas seulement dans le gabarit.
- Les liens en dur dans les paragraphes (contextuels) comptent plus que les listes de menus : chaque nouveau paragraphe rédigé (section 5) doit contenir 1–3 liens contextuels.

### Tableau de maillage prioritaire

| Page source | Page cible | Ancre recommandée | Objectif du lien | Priorité |
|---|---|---|---|---|
| Accueil (§ Qui je suis) | /services/depannage-informatique/ | dépannage et réparation d'ordinateurs à domicile | Pousser la page métier n°1 | Haute |
| Accueil (§ zone) | /zones/vittel/ | Vittel | Pousser la page ville n°1 (texte, pas seulement SVG) | Haute |
| Accueil (§ zone) | /zones/contrexeville/ | Contrexéville | Idem doublet | Haute |
| Accueil (fiche tarifs) | /devis/ | demander un devis gratuit | Conversion | Haute |
| /services/depannage-informatique/ | /services/reparation-ordinateur/ | réparation complète de l'ordinateur | Cluster panne PC | Haute |
| /services/depannage-informatique/ | /services/recuperation-de-donnees/ | récupérer vos données | Cross-sell urgence | Haute |
| /services/reparation-ordinateur/ | /services/recuperation-de-donnees/ | sauvegarde et récupération de données | Cluster | Moyenne |
| /services/reparation-ordinateur/ | /services/installation-ordinateur/ | installation d'un ordinateur neuf | Alternative réparer/racheter | Moyenne |
| /services/reparation-smartphone/ | /services/assistance-a-domicile/ | prise en main de votre téléphone | Cross-sell seniors | Moyenne |
| Chaque page service | /zones/vittel/ + /zones/contrexeville/ | à Vittel / à Contrexéville | Ancrage local des services | Haute |
| /zones/vittel/ | /services/* (4-6 liens) | réparation d'ordinateur à Vittel, etc. | Longue traîne service+ville | Haute |
| /zones/vittel/ | /zones/contrexeville/ | Contrexéville, à 5 minutes | Doublet AEO | Haute |
| /zones/contrexeville/ | /zones/vittel/ | ma base à Vittel | Doublet AEO | Haute |
| /zones/epinal/ | /services/recuperation-de-donnees/ | récupération de données à Épinal | Intention AEO identifiée | Moyenne |
| /zones/nancy/ | /services/depannage-informatique/ (§ à distance) | dépannage à distance | Positionnement réaliste Nancy | Moyenne |
| /a-propos/ | /services/ | toutes mes prestations | Distribution | Moyenne |
| /devis/ | /services/depannage-informatique/ | voir le détail du dépannage | Rassurer avant envoi | Basse |
| Footer (toutes pages) | inchangé | — | Le footer actuel est bon ; ne pas le surcharger | — |

---

## 9. Recommandations locales

### Hiérarchie géographique à afficher partout de façon cohérente

1. **Base** : Vittel (88800) — à afficher explicitement (contact, à propos, schema, footer).
2. **Cœur de zone** : Vittel + Contrexéville (traiter comme un doublet indissociable, comme le fait ChatGPT).
3. **Secteur régulier** : Mirecourt, Neufchâteau + villages de l'ouest vosgien.
4. **Extensions** : Épinal (interventions groupées), Nancy (à distance + prestations à forte valeur).

### Villes à mieux intégrer
- **« Vosges »** sur toutes les pages (cf. section 6) — c'est le qualificatif géographique le plus utilisé par ChatGPT.
- **Les micro-communes réelles** autour de chaque ville (GSC montre « installation de logiciels deyvillers ») : 5-8 villages par page zone, en phrase naturelle.
- **Nancy/Épinal** : décision business à acter. Recommandation : les conserver avec un positionnement honnête (à distance / prestations à valeur) plutôt que de les supprimer — le fichier AEO montre une vraie demande, et les pages existent déjà.

### Services à associer aux villes (d'après le fichier AEO)
- Vittel/Contrexéville : tous les services.
- Épinal : réparation informatique, récupération de données, installation Windows.
- Nancy : récupération de données (« laboratoire »), création de site (« agence »), drone (« pilote »).
- Mirecourt/Neufchâteau : dépannage, réparation, assistance (services du quotidien).

### Où ajouter les zones d'intervention
- Un paragraphe local dans chaque page service (« Où j'interviens »).
- Le bloc « Communes desservies autour de [ville] » dans chaque page zone.
- Le NAP (Vittel) sur /contact/ et dans le schema.
- L'accueil : paragraphe « Qui je suis » enrichi (cf. section 5).

### Formulations locales naturelles (exemples à intégrer)

> « Basé à Vittel, j'interviens en général le jour même ou le lendemain à Contrexéville, et sous 48 h à Mirecourt, Neufchâteau et dans les villages alentour. »

> « Pour Épinal et sa région, je regroupe mes interventions : dites-moi votre disponibilité, je vous propose un créneau avec un déplacement au plus juste. »

### Risques à éviter
- **Listes de villes artificielles** (footer ou paragraphes énumérant 30 communes) : signal de spam local. Se limiter aux communes réellement desservies, en phrases.
- **Pages villes clonées** : c'est le risque actuel n°1 (cf. section 5). Ne jamais dupliquer un paragraphe d'une page ville à l'autre.
- **Promettre une présence physique** là où il n'y en a pas (« magasin informatique Neufchâteau ») : préciser le modèle à domicile.
- **Créer des dizaines de pages villages** : inutile ; les villages se captent par les mentions dans les pages villes existantes + « autour de moi » via Google Business Profile.

### Hors site (rappel important, hors périmètre du code)
Le SEO local dépend autant de la **fiche Google Business Profile** que du site : catégories (Réparation d'ordinateurs, Service de dépannage informatique), zone desservie, lien vers le site, collecte continue d'avis, photos. Les requêtes « autour de moi » vues dans GSC se gagnent là.

---

## 10. Recommandations AEO/GEO pour les assistants IA

Les assistants (ChatGPT, Perplexity, AI Overviews) privilégient les contenus **factuels, datés, structurés, auto-suffisants**. Chaque page doit pouvoir être citée hors contexte.

### Principes à appliquer
1. **Une définition simple en tête de chaque page service** : la première phrase après le H1 doit dire qui / quoi / où / combien. Ex. : « ACDJ Informatique répare les ordinateurs à domicile à Vittel, Contrexéville et dans l'ouest des Vosges, à partir de 25 €, avec diagnostic gratuit. » — cette phrase est exactement ce qu'un assistant recopiera.
2. **FAQ structurées** (sections 5) avec schema `FAQPage` : questions formulées comme les prompts réels (« qui peut réparer… », « combien coûte… », « près de moi », « en urgence »).
3. **Formulations conversationnelles en miroir des prompts** : « Vous cherchez quelqu'un pour installer votre imprimante à Vittel ? » reprend mot pour mot le besoin exprimé à ChatGPT.
4. **Faits vérifiables et chiffrés** : tarifs précis, délais, zone, 32 avis 5/5, année de création, SIRET dans les mentions légales. Les IA privilégient les entreprises dont l'existence est vérifiable.
5. **Couvrir les intentions types** :
   - **« meilleur »** → page à propos + avis : « noté 5/5 sur 32 avis Google » en texte, pas seulement en étoiles.
   - **« près de moi »** → schema LocalBusiness + areaServed + « basé à Vittel ».
   - **« urgent »** → phrase délai sur chaque page (« généralement sous 24–48 h ; appelez pour aujourd'hui »).
   - **« à domicile »** → déjà fort, à maintenir dans les H1.
   - **« prix »** → fiche tarifs + FAQ prix par service.
   - **« délai »** → FAQ dédiée.

### Exemple de bloc « réponse directe » à ajouter (haut de page service, réutilisable par les IA)

> **Dépannage informatique à Vittel et Contrexéville — l'essentiel**
> - Intervention **à domicile** ou à distance, dans l'ouest des Vosges
> - **Diagnostic gratuit**, prix annoncé avant de commencer
> - Forfaits de **25 € à 75 €**, déplacement 0,65 €/km
> - Délai habituel : **24 à 48 h** — ☎ 06 52 24 66 47
> - Noté **5/5 sur 32 avis Google**

### Accessibilité aux crawlers IA
- Le site est statique et rapide : parfait, les crawlers IA (GPTBot, ClaudeBot, PerplexityBot) lisent le HTML brut sans JS — tout le contenu doit rester en HTML (c'est le cas).
- Dans le futur `robots.txt` : **ne pas bloquer** GPTBot, ClaudeBot, PerplexityBot, Google-Extended (choix stratégique : pour un artisan local, être cité par les IA est un canal d'acquisition, pas un risque).
- Envisager un fichier `llms.txt` à la racine (résumé de l'entreprise, services, zone, contact) : standard émergent, coût quasi nul.

---

## 11. Pages manquantes ou à renforcer

L'architecture actuelle est bonne : **ne pas multiplier les pages tout de suite**. Trois créations sont néanmoins justifiées par les données, plus deux renforcements.

### Page à créer n°1 : Suppression de virus / nettoyage d'ordinateur
- **Titre recommandé** : `Suppression de virus et nettoyage d'ordinateur — Vittel, Contrexéville | ACDJ`
- **URL** : `/services/suppression-virus/`
- **Intention** : « ordinateur infecté / très lent, à nettoyer » — scénario présent dans le fichier AEO pour toutes les villes (« réparation ordinateur suppression virus Nancy », « ordinateur rempli de virus très lent »).
- **Mot-clé principal** : suppression virus ordinateur Vittel. **Secondaires** : ordinateur lent, publicités intempestives, arnaque faux support technique, nettoyage PC.
- **Priorité** : moyenne (l'alternative acceptable est un H2 très développé dans la page dépannage ; créer la page si le volume le justifie après 2-3 mois).
- **Pourquoi** : intention distincte, anxiogène (arnaques, banques) → page rassurante dédiée à fort taux d'appel.
- **Contenu** : symptômes, cas de la fenêtre « votre PC est infecté, appelez ce numéro » (arnaque courante, sujet très recherché et très cité par les IA), méthode, prévention, FAQ, tarif 45 €.
- **Liens entrants** : depuis /services/depannage-informatique/, l'accueil, /zones/vittel/ et /zones/contrexeville/.

### Page à créer n°2 : Réinstallation Windows
- **Titre** : `Réinstallation de Windows — Vittel, Contrexéville et ouest Vosges | ACDJ`
- **URL** : `/services/reinstallation-windows/`
- **Intention** : « réinstaller Windows sur mon ordinateur » — scénario explicite du fichier AEO (« réparation informatique Vittel réinstallation Windows », « installation Windows Contrexéville », « installation Windows ordinateur Epinal »).
- **Mot-clé principal** : réinstallation Windows Vittel. **Secondaires** : formater ordinateur, passer à Windows 11, PC lent après mise à jour, sauvegarde avant formatage.
- **Priorité** : moyenne-basse (commencer par le H3 + FAQ dans /services/reparation-ordinateur/ ; créer la page dédiée au mois 3 si les impressions GSC apparaissent).
- **Pourquoi** : requête service pure, faible concurrence locale, angle « fin de support Windows 10 → migration Windows 11 » très actuel.
- **Liens entrants** : /services/reparation-ordinateur/, /services/depannage-informatique/, pages zones.

### Page à créer n°3 : Tarifs
- **Titre** : `Tarifs — dépannage et assistance informatique à domicile (Vosges) | ACDJ`
- **URL** : `/tarifs/`
- **Intention** : « tarif dépannage informatique » / « prix réparation ordinateur » — GSC montre « tarif dépannage informatique à distance » ; les prompts IA demandent souvent les prix.
- **Mot-clé principal** : tarif dépannage informatique Vosges. **Secondaires** : prix réparation ordinateur à domicile, coût intervention informatique.
- **Priorité** : moyenne.
- **Pourquoi** : la transparence tarifaire est LE différenciateur d'ACDJ ; une page dédiée la rend indexable et citable (les IA adorent répondre « combien ça coûte » avec une source claire). Alternative : intégrer la fiche tarifs + FAQ prix à /devis/ (cf. section 5) — mais une URL /tarifs/ est plus lisible pour Google et les assistants.
- **Contenu** : fiche tarifs complète, exemples chiffrés d'interventions types (« suppression de virus à Contrexéville : 45 € + 3 € de déplacement »), FAQ prix, CTA devis.
- **Liens entrants** : accueil (fiche tarifs → « voir le détail des tarifs »), toutes les pages services, /devis/.

### Renforcement n°1 : les 6 pages zones (traité en section 5) — c'est le chantier « pages insuffisantes » principal ; aucune nouvelle page ville n'est nécessaire.

### Renforcement n°2 : contenu « conseils » (moyen terme, mois 3+)
Un mini-blog (`/conseils/`) de 4-6 articles répondant aux questions récurrentes : « Que faire quand l'ordinateur ne s'allume plus », « Reconnaître l'arnaque au faux support technique », « Windows 10 arrive en fin de vie : que faire », « Sauvegarder ses photos simplement ». Objectif : capter la longue traîne informationnelle, alimenter les citations IA et pousser les pages services par maillage. À ne lancer que lorsque les fondations (sections 5–7) sont en place.

### Pages à NE PAS créer
- Pages par village (Deyvillers, They-sous-Montfort…) : mentions dans les pages villes suffisent.
- Pages service × ville (ex. « réparation ordinateur Nancy ») : avec 10 services × 6 villes = 60 pages clonées, risque doorway maximal. La longue traîne se capte par les FAQ et paragraphes localisés des pages existantes.

---

## 12. Plan d'action priorisé

### Priorité 1 — À faire en premier (impact rapide)

| # | Page | Action | Difficulté | Impact | Raison |
|---|---|---|---|---|---|
| 1 | /devis/ | Brancher le formulaire (endpoint + message de confirmation) | Faible | **Très fort (conversion)** | Chaque demande est actuellement perdue |
| 2 | Racine | Retirer/désindexer `index-bleu.html` | Triviale | Moyen | Contenu dupliqué de l'accueil |
| 3 | Site entier | Créer sitemap.xml + robots.txt + canonicals | Faible | Fort | Fondation d'indexation ; le nouveau site multi-pages doit être découvert vite |
| 4 | Site entier | Schema LocalBusiness (+ Organization) global | Faible | **Fort (SEO local + AEO)** | Signal géographique manquant ; requêtes « autour de moi » |
| 5 | Accueil | H1 + paragraphe local + FAQ + schema FAQPage | Moyenne | Fort | Seule page avec historique ; vise « dépannage informatique vosges » (pos. 37) |
| 6 | /services/depannage-informatique/ | Étoffer (H3 symptômes, process, FAQ) + résoudre le H1 cannibale | Moyenne | Fort | Page métier n°1, thin content |
| 7 | /zones/vittel/ + /zones/contrexeville/ | Contenu unique + FAQ locales | Moyenne | Fort | Déjà pos. 4 et 11 dans GSC avec pages vides |
| 8 | Cohérence globale | Remplacer « Grand Est » par « Vosges / ouest des Vosges », corriger les metas dupliquées (« à domicile à domicile », « drone à domicile ») | Faible | Moyen | Signal géographique cohérent |

### Priorité 2 — À faire ensuite

| # | Page | Action | Difficulté | Impact | Raison |
|---|---|---|---|---|---|
| 9 | /services/reparation-smartphone/ | Réécrire avec « téléphone », 3 H3 (écran/batterie/config), FAQ | Moyenne | Fort | « reparation telephone vittel » déjà pos. 9 |
| 10 | /services/reparation-ordinateur/ | Étoffer + H3 « Réinstallation Windows » + FAQ | Moyenne | Moyen-fort | Intention AEO orpheline |
| 11 | /services/recuperation-de-donnees/ | Étoffer (premiers secours, laboratoire, FAQ) | Moyenne | Moyen-fort | Service à forte valeur + urgence |
| 12 | /zones/neufchateau/ + /zones/mirecourt/ | Contenu unique + FAQ | Moyenne | Moyen | Consolider pos. 1 Neufchâteau ; faible concurrence |
| 13 | Toutes pages services | FAQ + schema FAQPage + bloc « réponse directe » | Moyenne | Fort (AEO) | Citabilité par les assistants |
| 14 | /a-propos/ + /contact/ | Marque + NAP + bloc « en bref » + schema | Faible | Moyen | Verrouiller « acdj » (pos. 6,79) |
| 15 | Maillage | Implémenter le tableau de la section 8 (liens contextuels) | Faible | Moyen | Distribution du jus vers les piliers |
| 16 | Hors site | Optimiser la fiche Google Business Profile + collecte d'avis continue | Faible | **Fort** | Requêtes « autour de moi » de GSC |

### Priorité 3 — Moyen terme

| # | Page | Action | Difficulté | Impact | Raison |
|---|---|---|---|---|---|
| 17 | /zones/epinal/ + /zones/nancy/ | Contenu différencié avec positionnement honnête (distance/valeur) | Moyenne | Moyen | Volume potentiel, mais après le cœur de zone |
| 18 | /tarifs/ | Créer la page tarifs | Faible | Moyen | Différenciateur + requêtes prix |
| 19 | /services/suppression-virus/ | Créer la page (ou garder en H2 selon données GSC) | Moyenne | Moyen | Scénario AEO récurrent |
| 20 | /services/creation-site-web/ + caisse + drone | Étoffer (exemples, certification, pros) | Moyenne | Faible-moyen | Pages B2B de crédibilité |
| 21 | /conseils/ | Lancer 4-6 articles conseils | Élevée | Moyen (long terme) | Longue traîne + citations IA |
| 22 | Site entier | Open Graph + llms.txt + photos locales supplémentaires | Faible | Faible-moyen | Finitions AEO/partage |

---

## 13. Plan sur 3 mois

### Mois 1 — Fondations techniques + pages piliers
- **Pages** : accueil, /services/depannage-informatique/, /zones/vittel/, /zones/contrexeville/, /devis/.
- **Contenus** : paragraphe local accueil, FAQ accueil + dépannage, contenu unique Vittel/Contrexéville.
- **Technique** : formulaire devis branché ; sitemap.xml + robots.txt + canonicals ; suppression d'index-bleu.html ; schema LocalBusiness global ; correction des metas dupliquées et de « Grand Est ».
- **Maillage** : liens contextuels accueil → piliers ; doublet Vittel ↔ Contrexéville.
- **AEO/GEO** : FAQPage schema sur accueil + dépannage ; blocs « réponse directe ».
- **À mesurer dans GSC** : soumission du sitemap, couverture d'indexation des 22 pages, positions de « dépannage informatique vosges », « informatique vittel », « informatique contrexeville ».

### Mois 2 — Cluster services + zones secondaires
- **Pages** : réparation ordinateur, réparation smartphone, récupération de données, assistance à domicile, /zones/neufchateau/, /zones/mirecourt/, /a-propos/, /contact/.
- **Contenus** : H3 par symptôme/sous-service, FAQ sur chaque page service, bloc « en bref » à propos, NAP contact.
- **Technique** : schema Service + FAQPage sur les pages traitées ; BreadcrumbList ; alt text révisés.
- **Maillage** : tableau section 8 complet ; ancres localisées zones → services.
- **AEO/GEO** : vérifier le rendu des FAQ dans l'outil de test des résultats enrichis ; tester les prompts du fichier Excel dans ChatGPT/Perplexity et noter si ACDJ apparaît (baseline).
- **À mesurer** : impressions des pages services (nouvelles requêtes « service + ville »), « reparation telephone vittel », CTR de l'accueil.

### Mois 3 — Extensions + différenciation
- **Pages** : /zones/epinal/, /zones/nancy/, création site web, caisse, drone ; création de /tarifs/ ; décision sur /services/suppression-virus/ et /services/reinstallation-windows/ selon les données GSC des mois 1-2.
- **Contenus** : positionnement honnête Épinal/Nancy ; exemples et certification drone ; page tarifs complète ; 1-2 premiers articles conseils si capacité.
- **Technique** : Open Graph ; llms.txt ; audit vitesse mobile (déjà bon a priori).
- **Maillage** : intégrer /tarifs/ partout ; liens conseils → services.
- **AEO/GEO** : re-tester les prompts du fichier Excel ; ajuster les FAQ selon les réponses observées.
- **À mesurer** : requêtes « service + ville » en croissance, conversions formulaire (enfin mesurables), appels téléphone.

---

## 14. KPIs à suivre

| KPI | Outil | Référence actuelle (12 mois) |
|---|---|---|
| Clics organiques | GSC | 92 |
| Impressions | GSC | 1 516 |
| CTR global | GSC | 6,07 % |
| Position moyenne | GSC | 15,02 |
| Requêtes locales (« [service] + [ville] », « vosges ») | GSC, filtre requête | ~15 requêtes visibles |
| Pages recevant des impressions | GSC → Pages | 1 |
| Conversions formulaire devis | Endpoint formulaire / analytics | 0 (formulaire non branché) |
| Clics téléphone (`tel:`) | Analytics (événement) + GBP « appels » | non mesuré |
| Demandes de contact (email) | Boîte mail | non mesuré |
| Pages les plus consultées | Analytics | non mesuré |
| Évolution requêtes « service + ville » | GSC, regex `(vittel|contrexeville|mirecourt|neufchateau|epinal|nancy|vosges)` | baseline à poser au mois 1 |
| Visibilité IA | Test manuel mensuel des prompts du fichier Excel dans ChatGPT/Perplexity | baseline mois 2 |

**Note** : installer un outil de mesure (au minimum les événements clic-téléphone et envoi-formulaire) fait partie du mois 1 — sans cela, seule GSC parlera.

### Interprétation

- **À 1 mois** : ne pas juger les positions. Vérifier l'indexation (22 pages dans « Pages » de GSC), l'apparition d'impressions sur les pages services et zones (signe que Google les associe aux bonnes requêtes), et le fonctionnement du formulaire. Toute nouvelle requête « service + ville » avec impressions est une victoire précoce.
- **À 3 mois** : les impressions doivent avoir nettement augmenté (plusieurs pages actives, objectif indicatif : 3 à 5× les impressions mensuelles historiques) ; « informatique vittel/contrexeville » en top 3 ; « dépannage informatique vosges » en page 1-2 ; premières conversions formulaire. Si une page reste sans impressions, revoir son title/H1 et son maillage entrant.
- **À 6 mois** : les clics mensuels devraient dépasser l'historique annuel (92 clics/12 mois = base très faible) ; la répartition doit montrer 30-50 % des clics hors accueil ; les FAQ peuvent apparaître en résultats enrichis ; ACDJ devrait être cité par les assistants IA sur les prompts Vittel/Contrexéville. Décider alors : investir Épinal/Nancy plus fort, lancer le blog conseils, ou créer les pages service supplémentaires selon les requêtes qui montent.

---

## 15. Conclusion

Le nouveau site ACDJ Informatique part d'une excellente base : une architecture locale complète, un ton authentique qui convertit, des tarifs transparents et une vraie preuve sociale. Ce qui lui manque n'est pas une refonte, mais **de la substance et des signaux** :

1. **Priorités principales** : brancher le formulaire de devis (aucun SEO ne compense une demande perdue), poser les fondations techniques (sitemap, robots.txt, canonicals, suppression du doublon `index-bleu.html`), et déployer les données structurées LocalBusiness + FAQPage.
2. **Pages à traiter en premier** : l'accueil (seule page avec un historique de positionnement), la page dépannage informatique (cœur de métier, en résolvant sa cannibalisation avec les pages villes), puis Vittel et Contrexéville (déjà positionnées avec un contenu vide — le meilleur ratio effort/résultat du site).
3. **Opportunités SEO les plus fortes** : « dépannage informatique vosges » (pos. 37, atteignable), « réparation téléphone vittel » (pos. 9, top 3 visé), la consolidation de « informatique + ville » (pos. 1 à 11 déjà acquises) et le verrouillage de la marque « acdj ».
4. **Améliorations AEO/GEO les plus importantes** : parler la langue exacte des prompts (« [service] à domicile à [ville] Vosges »), ajouter une FAQ balisée sur chaque page avec des réponses courtes et chiffrées, un bloc « réponse directe » en tête des pages services, et des faits vérifiables (base à Vittel, tarifs, 32 avis 5/5, SIRET).
5. **Ensuite** : dérouler le plan sur 3 mois (fondations → cluster services → extensions), mesurer chaque mois dans Search Console, tester les prompts du fichier Excel dans les assistants, et ne créer de nouvelles pages (tarifs, suppression de virus, réinstallation Windows, conseils) que lorsque les données confirment la demande.

L'équipe peut implémenter ce document section par section : la section 5 fournit les textes, titles, metas et FAQ prêts à adapter ; les sections 7 et 8 fournissent les gabarits techniques et le plan de maillage ; la section 12 fixe l'ordre. Aucune de ces recommandations ne nécessite de changer la structure d'URL ni le design actuel.

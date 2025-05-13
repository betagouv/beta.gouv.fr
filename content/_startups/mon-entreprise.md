---
title: Mon-entreprise
mission: Guider les créateurs et créatrices d’entreprise.
sponsors:
  - /organisations/urssaf
incubator: dinum
phases:
  - name: investigation
    start: 2014-10-01
  - name: construction
    start: 2014-10-01
  - name: acceleration
    start: 2019-01-01
  - name: transfer
    start: 2019-09-01
  - name: success
    start: 2020-03-01
events:
  - name: national_impact
    date: 2020-03-01
link: https://mon-entreprise.urssaf.fr
repository: https://github.com/betagouv/mon-entreprise
budget_url: https://mon-entreprise.urssaf.fr/budget
dashlord_url: https://dashlord.incubateur.net/url/mon-entreprise-urssaf-fr/
stats: true
contact: contact@mon-entreprise.beta.gouv.fr
usertypes:
  - entreprise
  - particulier
  - association
stats_url: https://mon-entreprise.urssaf.fr/stats
accessibility_status: partiellement conforme
thematiques: []
techno:
  - react
  - publicodes
  - typescript
  - redux
---
## Le drame
En 2021, on a observé une augmentation de 16 % de créations d’auto-entreprises, et de 24 % des créations de sociétés, pour atteindre le chiffre record d’un million de nouvelles entreprises.

Chaque jour, ces nouveaux créateurs d’entreprises doivent prendre de nombreuses décisions dans la gestion juridique, fiscale et sociale de leur entreprise.

Par exemple :
- Opter pour la bonne forme juridique avec une protection sociale adéquate ;
- Recruter un salarié, un alternant ou un stagiaire ;
- Anticiper sa rémunération en fonction des résultats prévus pour l’entreprise.

Ces choix sont tous liés aux dispositifs législatifs en cours, qui évoluent constamment. Un mauvais choix peut avoir pour conséquence :
- Des difficultés de trésorerie suite à une mauvaise estimation des obligations sociales et fiscales ;
- Une précarité due à une couverture sociale non adaptée ;
- Un manque à gagner à cause d’un statut non adapté (charges non déductibles en auto-entreprise)

À l’heure actuel, les créateurs et créatrices prennent ces décisions :
- En **mimant les décisions de pairs**, qui ne sont pas forcément adaptées à son cas ;
- En **faisant appel à des professionnels** (comptable, avocats, chambres), ce qui a un coût, pour des conseils qui peuvent être de qualité et de précision variables ;
- De manière autonome à l’aide de la **documentation en ligne**.

Concernant ce dernier cas, il est à noter que l’offre publique s’est réellement améliorée ces dernières années (on peut citer la création du portail unique d’information entreprendre.service-public.fr). Ces sites proposent des textes à jour, fiables, et non intéressés, ce qui n’est pas le cas de sa contrepartie privée.

Cependant, les informations disponibles restent souvent présentées sous forme de « mur de texte ». C’est alors au lecteur de sélectionner les dispositifs applicables, d’interpréter les explications et d’effectuer les calculs et les recoupements entre ses choix et les conséquences sur sa situation personnelle (couverture sociale, coût, etc.)..

Cela prend du temps et de l’énergie, au détriment du développement de l’activité économique. Finalement, cela crée beaucoup de frustration et d’incompréhension.

**En résumé, les créateurs et créatrices d’entreprises ne sont pas suffisamment outillés dans leur prise de décisions.**

## Solution

Mon-entreprise.urssaf.fr propose des simulateurs et des assistants pour accompagner les acteurs économiques - de la sphère des entrepreneurs, salariés, demandeurs d’emploi - au plus près de leurs parcours de recherche d’informations.

Par exemple, pour aider les entreprises à anticiper le coût d’un recrutement, nous mettons à disposition un simulateur salarié. Ce dernier est intégré directement sur pôle-emploi, economie.gouv.fr, entreprendre.service-public.fr et code.travail.gouv.fr, ce afin de garantir à l’usager le parcours le plus fluide possible.

Il existe aujourd’hui une vingtaine de simulateurs et assistants, qui couvrent un ensemble de questions relatives à la création et à la gestion d’une entreprise. 

Ces derniers proposent des résultats **personnalisés et fiables**, et couvrent un **grand nombre de cas spécifiques**. Ils sont **maintenus à jour** au fur et à mesure des évolutions législatives, et proposent une **explication des calculs** auto-générés, grâce au moteur de calcul spécialement conçu pour le besoin : [Publicodes](https://publi.codes)

Tous les simulateurs et assistant peuvent être [intégrés via un simple script](https://mon-entreprise.urssaf.fr/d%C3%A9veloppeur/iframe?module=salari%C3%A9) dans n'importe quelle page web. Par ailleurs, nous mettons à disposition une [API REST](https://mon-entreprise.urssaf.fr/d%C3%A9veloppeur/api) pour intégrer les calculs des simulateur dans n'importe quelle application.

### Internationalisation 🌍

Le service est également disponible en anglais à l'adresse [mycompanyinfrance.fr](https://mycompanyinfrance.fr)

### Transfert à l’Urssaf

En 2020, le service et l'équipe Mon Entreprise sont transférés hors de l'incubateur de la DINUM vers l’Urssaf Caisse nationale. 

Fin 2021, le site est intégré dans l'écosystème Urssaf avec une nouvelle charte graphique et une nouvelle adresse : https://mon-entreprise.urssaf.fr
 

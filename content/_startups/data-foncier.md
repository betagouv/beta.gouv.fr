---
contact: datafoncier@cerema.fr
link: https://datafoncier.cerema.fr
thematiques:
  - Collectivités
  - Écologie
  - Logement
  - Open-Data
usertypes:
  - collectivite-territoriale
techno:
  - django
title: Datafoncier actionnabilité
mission: Faciliter la connaissance du foncier
incubator: accelerema
phases:
  - name: investigation
    start: 2025-12-16
  - name: construction
    start: 2026-01-01
events:
  - name: product_launch
    date: 2025-12-16
budget_url: https://grist.numerique.gouv.fr/o/accelerema/iAp8fug7Pzv4/Budget/p/23?embed=true&Produit_=Datafoncier%20actionnabilit%C3%A9
repository: https://pad.numerique.gouv.fr/s/Grt2p3eaS#
sponsors:
  - /organisations/dgaln
  - /organisations/mtes
---
## Contexte

La mission de Datafoncier est de soutenir une décision publique éclairée et objectivée par la donnée foncière.

En mettant à disposition des données, des ressources et des services adaptés, Datafoncier aide les acteurs publics à **mieux comprendre les dynamiques foncières** et à **prendre des décisions plus informées**.

Concrètement, cela passe par :

- La **transformation et l’enrichissement** de données brutes, essentiellement d’origine fiscale pour les rendre directement exploitables
- Une **diffusion encadrée** selon les droits et les profils d’usagers
- Un **accompagnement** à l’appropriation des utilisateurs et encourager les usages (documentation, formations, webinaires, animation de communauté)
- Une **intégration dans les outils métiers** (observatoires, SIG) et services (Zero Logement Vacant, UrbanSimul, etc.) pour un usage opérationnel au quotidien
- Un travail de **recherche et développement** dans les cas d’usages des données (encadrement de thèse, partenariat avec le monde de la recherche, études expérimentales, etc.)

**L’ouverture de Datafoncier à l’ensemble des acteurs publics : une montée en puissance progressive**

Créé en **2010**, Datafoncier répondait à l’origine aux besoins des **experts techniques de l’État** en matière de données foncières.

À partir de **2020**, le service amorce un **changement d’échelle**, en s’ouvrant progressivement à un public bien plus large : collectivités territoriales, agences d’urbanisme, établissements publics, etc. L’objectif : permettre à tous les acteurs publics de mieux comprendre et piloter les dynamiques foncières sur leurs territoires.

Cette ouverture se traduit concrètement par une croissance continue du nombre de bénéficiaires : **près de 4 500 organismes sont en février 2026 inscrites sur le portail dont 2400** « **actifs** » **dans les douze derniers mois.** Un organisme est actif à partir du moment où un de ses membres télécharge un jeu de données sur le portail ou utilise un service.

Pour accompagner cette évolution, Datafoncier a industrialisé ses processus de diffusion et a renforcé ses actions d’appui : développement de guides, formations, webinaires, animation de communautés d’usagers… autant de leviers pour faciliter l’appropriation des données et encourager leur usage opérationnel.

Le lancement récent du **Portail des données foncières** marque une nouvelle étape : en six mois seulement, **plus de 7 000 utilisateurs** s’y sont connectés, illustrant l’**intérêt croissant** pour le service et la pertinence des données proposées.

## Problème

Malgré une dynamique d’ouverture et de fréquentation en hausse, un **décalage persiste entre le potentiel d’acteurs publics concernés et ceux qui mobilisent activement le service**. Le niveau d’appropriation reste très variable selon les types de structures, leur taille et leur capacité à exploiter les données foncières.

Dans ce contexte, **les EPCI** *(établissement public de coopération intercommunale)* **constituent une maille stratégique** pour observer les usages et renforcer l’appropriation des données foncières. Ils **portent une large part des politiques publiques d’aménagement**, de l’habitat à la planification territoriale, et disposent dans la majorité des cas d’une **capacité d’ingénierie minimale** leur permettant d’exploiter les données proposées. A l’interface entre besoins opérationnels et orientations nationales, leur positionnement apparait **pertinent pour cibler l’accompagnement et évaluer l’impact des outils proposés**.

Au 1er janvier 2025, environ **200 EPCI** étaient considérés comme « actifs » (au moins un téléchargement ou une utilisation d’un service dans les trois derniers mois), ce qui reste **modeste au regard des 1 250 EPCI existants**. L’usage est concentré, principalement, dans les territoires **urbains ou métropolitains**, mieux dotés en ressources techniques.

Ce constat souligne la **nécessité d’identifier les freins** rencontrés par les utilisateurs peu fréquents afin d’adapter l’offre et les modalités d’accompagnement aux besoins réels des territoires.

De fin 2024 à début 2025, une phase d’investigation approfondie a été menée pour mieux comprendre les **usages réels** ainsi que les **freins rencontrés** par les différents utilisateurs. Cette démarche a combiné des **enquêtes qualitatives et quantitatives**, des **entretiens ciblés** auprès d’utilisateurs majoritairement au sein d’EPCI et l’**analyse des métriques d’usage** sur le portail.

L’investigation a permis de distinguer **trois grandes catégories de structures utilisatrices** :

1. **Des structures bien embarquées** : principalement des services de l’État ou des grands EPCI urbains, disposant de ressources techniques suffisantes pour intégrer les données brutes à leurs propres outils et SIG *(Système d'Information Géographique)*.
2. **Des structures éloignées du service** : souvent des petits EPCI ruraux, peu dotés en ingénierie, qui ont besoin d’**outils prêts à l’emploi** et de **formats accessibles**.
3. **Des structures intermédiaires**: présentant des disparités internes importantes, avec certains services moteurs et d'autres à mobiliser.

L’investigation a également mis en évidence **cinq profils d’utilisateurs** aux besoins et pratiques différentes qui évoluent au sein de ces typologie de structures  :

- **Profil A: Les élus et décideurs**, en quête de repères clairs, de données synthétiques et contextualisées pour appuyer les arbitrages.
- **Profil B: Les utilisateurs en consultation**, qui accèdent ponctuellement à la donnée sans aller jusqu’à son exploitation (secrétaires de mairie, utilisateur occasionnel).
- **Profil C: Les commanditaires d’études**, qui cherchent à cadrer ou orienter des travaux qui seront portés par d’autres (services de la donnée, bureaux d’études, prestataires).
- **Profil D: Les chargés de mission ou d’études thématiques**, qui intègrent les données dans une logique métier (urbanisme, habitat, risques, mobilité, etc.).
- **Profil E: Les géomaticiens ou experts de la donnée**, qui maîtrisent les formats complexes et les croisements de bases de donnée.

La **maturité dans l’usage** ne dépend pas uniquement de la **taille de la structure**, mais aussi de sa **culture de la donnée**, de son **organisation interne** et de ses **priorités**.

### Solution

Suite à cette investigation, un besoin de vision stratégique claire a émergé afin de prioriser à la fois les typologies de structures et d’utilisateurs à cibler en priorité pour ainsi maitriser les efforts investis.
L’équipe a choisi de définir Datafoncier comme une **ressource clef pour les services métiers** des collectivités et de l'État facilitant un approfondissement de l’analyse thématique pour servir les orientations stratégiques des territoires.

Ce choix cible un public déjà en demande, **Profil D: les chargés d’études thématiques des collectivités**, tout en s'alignant de manière réaliste avec les ressources disponibles pour l'équipe Datafoncier.

La feuille de route de Datafoncier s’organise désormais autour de **trois axes prioritaires** visant à l’amélioration concrète du service pour les acteurs publics :

- **Rendre les données actionnables** : faciliter la mobilisation des jeux de données par les thématiciens dans leurs analyses et expliciter les liens entre données, outils disponibles et cas d’usage concrets.
- **Rendre visible la fiabilité des données** : aider les usagers à apprécier le niveau de fiabilité des données en fonction des usages envisagés.
- **Clarifier le parcours d’accès** : simplifier la navigation et l’accès aux données pour des profils d’utilisateurs et des finalités variées.

Cette feuille de route, conçue comme **évolutive**, sera ajustée au fil du temps en fonction **des résultats observés et des retours des utilisateurs**, dans une logique d’**amélioration continue**.
---
mission: Aide au contrôle frontière
incubator: dinum
title: ANDV - Aérien
contact: axel.privey@interieur.gouv.fr
accessibility_status: non conforme
sponsors:
  - /organisations/sndv
phases:
  - name: investigation
    start: 2024-04-01
  - name: alumni
    start: 2024-06-21
thematiques: []
usertypes:
  - etat
techno: []
events:
  - name: committee
    date: 2024-06-21
    comment: Comité de fin d'investigation
link: ''
---
## Contexte
L’agence nationale des données de voyage (ANDV), service interministériel à compétence nationale, est en charge de l’amélioration des dispositifs de collecte et traitement des données de voyages. 

L'ANDV met en œuvre deux systèmes d'informations traitant des données de voyages du secteur aérien à des fin régaliennes :
- le système API-PNR : qui permet de lutter contre les formes graves de criminalité et le terrorisme grâce à la données de réservation (directive européenne "PNR") 
- le système SETRADER qui permet d'améliorer le contrôle aux frontières et la lutte contre l'immigration irrégulière grâce aux données d'embarquement (directive 2004/82/CE dites "API")

Le SI SETRADER ne peut être maintenu sur la durée et ne permet plus d'anticiper efficacement les contrôles dans les points de passages frontaliers (PPF) aériens. 


Les services de police aux frontières (SPAF) et les brigades de surveillance extérieure des douanes(BSE) sont en charge du contrôle frontière dans les 78 PPF aériens par lesquels plus de 31 millions de passagers internationaux extra-UE arrivent en France.
Ces services chargés du contrôle sont soumis à des flux très importants de voyageurs et doivent pouvoir anticiper et préparer leurs contrôles physiques en réalisant des analyses préalables.

## Problème rencontré

Les agents en charge du contrôle frontière (Polices aux frontières et Douanes) et de la lutte contre l’immigration irrégulière (PAF) ne disposent pas de toutes les informations pour préparer efficacement leurs contrôles.

## Démarche d'investigation

Une vingtaine d'entretiens et des visites terrains auprès des agents (polices aux frontières et douanes) des principaux PPF aériens ont permis d'identifier plusieurs apprentissages.

## Synthèse des apprentissages

### Irritants sur la mission de contrôle frontière

* Fiches des personnes recherchées non mises à jour ou non pertinentes qui génèrent des traitements inutiles (fiches caduques, fiches non applicable au contrôle frontière, alertes en doublon)

* Des données incomplètes ou tardives qui ne permettent pas d'anticiper tous les contrôles (pas de données sur les vols au départ, plage horaires de nuit non couvertes, certains pays non couverts, données non normées sur l'aviation d'affaires)

* L'analyse de risque préalable au contrôle physique sécurise et rassure les agents (diminutions du stress, meilleure anticipation, aide à la priorisation)

* Frustration des agents d'être limité sur les missions autres que le contrôle frontière (investigation pour les policiers, contrôle douaniers pour les douanes)

### Irritants sur la mission de lutte contre l'immigration irrégulière

* Manque de réactivité dû à l'absence de notification à l’extérieur des applications
* Besoin de partage d'informations entre les services (risque migratoire, nouvelles routes, statistiques) ;
* Besoin de formation et de relations utilisateurs (fonctionnalités méconnues, manque d'accompagnement)

### Irritants transverses liées aux systèmes d'informations existants

* SETRADER : L'outil est simple d’utilisation mais obsolète (couverture incomplète, non conformité, non maintenabilité), il est donc délaissé par certains services

* API-PNR : L'outil est puissant et répond à la grande majorité des besoins. Mais sa complexité limite les possibilités de son utilisation. L'accompagnement des utilisateurs est primordial.

## Les recommandations

### Première partie
S'appuyer sur le système existant API-PNR France avec une ségrégation des droits adaptée pour répondre aux principaux besoins prioritaires 
 - Re-configurer les accès aux fonctionnalités adaptées aux besoins des équipes
 - Accompagnement et animation de la communauté des utilisateurs
 - Nouveaux Développements sur certains besoins non couverts (Criblage NSIS, notification externes)

### Deuxième partie : solutions pour les besoins secondaires

- Développer une interface pour répondre uniquement aux besoins non couverts par API PNR (accès direct à la donnée sur les arrivées extra-UE

- Réduire le nombre de fiches de personnes recherchées non pertinentes 

## Conclusion

Pour mettre en oeuvre ces recommandations l'équipe d'investigation a proposé un accompagnement de beta.gouv sur la partie "relation utilisateur" et sur la partie Coaching pour maximiser et mesurer l'impact
L'agence nationale des données de voyage (ANDV) a décidé, post-comité et après confirmation des directions métiers des besoins prioritaires, de mettre en œuvre la première partie du scénario avec ses ressources internes, sans l'appui du programme Beta.gouv.

## Post Mortem
- L'investigation a été menée par une équipe qui se connaissait (Moana : produit avec des enjeux similaires sur le maritime). Cela a permis de gagner beaucoup de temps et de l'efficacité.
- L'investigation a permis d'identifier qu'un outil existant pouvait déjà répondre à la majorité des besoins. Adapter la configuration de l'outil existant avec une bonne gestion des droits permet d'éviter de développer un nouveau système (économie et gain de temps)
- La démarche de recherche utilisateur de l'investigation  (Entretien, visite terrain) a été utile et appréciée. Elle a permis de faire remonter des besoins concrets, de faire émerger des bonnes pratiques, de créer du lien avec les agents utilisateurs et révèle que c'est un facteur clef de succès pour la suite. Il parait primordial d'entretenir cette relation et de la renforcer (embarquement, formation, Utilisateur-relai)
- A l'issue du comité de fin d'investigation le sponsor ne s'est pas positionné sur les scénarios proposés. Un point d'étape ou un échange préalable avec la direction de l'ANDV aurait peut-être pu permettre de prendre une décision lors du comité et aussi d'échanger plus longuement sur l'intérêt d'un accompagnement beta.gouv sur la partie "relation utilisateur" et coaching.
- La poursuite du scénario sans l'accompagnement beta.gouv ne nous permet pas d'avoir de la visibilité sur la mise en œuvre des scénarios et leur impact (notamment sur la publication et la communication des indicateurs d'impact)
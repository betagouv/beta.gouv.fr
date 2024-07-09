---
title: Data.Subvention
mission: Rassembler les informations sur les associations et leurs subventions pour simplifier la vie des associations et des agents publics
sponsors:
  - /organisations/djepva
incubator: dinum
link: https://datasubvention.beta.gouv.fr
repository: https://github.com/betagouv/api-subventions-asso
contact: contact@datasubvention.beta.gouv.fr
stats: true
dashlord_url: https://dashlord.incubateur.net/tag/data-subvention/
accessibility_status: partiellement conforme
usertypes:
  - association
  - etat
stats_url: https://blog.datasubvention.beta.gouv.fr/statistiques/
budget_url: https://datasubvention.beta.gouv.fr/budgets/
phases:
  - name: construction
    start: 2022-01-03
  - name: acceleration
    start: 2023-09-17
fast:
  promotion: 13
  montant: 280000
thematiques:
  - Open-Data
events:
  - name: fast
    date: 2024-01-01
    comment: Montant de 280000€ pour la promotion 13
---
## La valeur de Data.Subvention

La valeur de Data‧Subvention repose sur sa capacité à offrir aux agents publics, en un point centralisé, les données relatives aux subventions associatives les plus diversifiées, les plus riches et les plus régulièrement actualisées possibles, pour le bon accomplissement de leurs missions d’instruction et au bénéfice des associations par la réduction des sollicitations administratives qui leur sont faites.

## Le sujet des subventions publiques aux associations

En France, les 1,5 million d’associations mobilisent 12,5 millions de bénévoles - dont 5 millions s’engagent chaque semaine - et font vivre la solidarité, le lien social, le développement et l’animation des territoires. Près de 160 000 d’entre-elles salarient plus d’1,8 millions de personnes soit 9,3% des effectifs salariés de l’ensemble du secteur privé.

En 2020, l’État a soutenu leurs actions à hauteur de 7,3 milliards d’euros, avec plus de 66 000 versements sous forme de subventions.

Ces soutiens sont apportés après que les associations les aient demandés, par rédaction d’une demande adressée auprès de différents services de l’État, qui ont de leur coté “instruit” : vérifié éligibilité-complétude, réuni les instances de décision, communiqué et exécuté les décisions de versement ou rejet.

## Problème

D’un côté, les associations font face à des dossiers de demande de subvention pouvant leur paraitre redondants,  par le fait de devoir renvoyer certaines pièces à chaque démarche. Du point de vue d’une association, ces sur-sollicitations peuvent générer aussi un sentiment d’incompréhension et de lassitude vis-à-vis des démarches administratives.

De l’autre, chaque service public financeur déploie du temps et de l’énergie à communiquer sur ses dispositifs de subvention, à accompagner les associations , à opérer des vérifications administratives et réglementaires et à relancer les porteurs de projets quand les dossiers sont incomplets , provoquant de nombreux allers-retours.

Aucun service n’a aucune vision globale et partagée de la situation d’une association : bien que la dématérialisation de certaines démarches ait permis de réelles avancées, la faiblesse de leur interconnexion, en termes de partage de données et d’informations, n’a pas permis de réduire leur cloisonnement et leur complexité et d’atteindre un réel « dites-le-nous une fois ».

Après plusieurs réunions interministérielles en 2021 sur l’enjeu d’améliorer le pilotage des subventions de l’Etat, le Premier ministre a confié à la direction de la jeunesse, de l’éducation populaire et de la vie associative (DJEPVA) et à la direction interministérielle du numérique (DINUM) la responsabilité de bâtir un nouveau service numérique dénommé Data.Subvention, pour collecter et repartager les données sur les associations et leurs subventions auprès de tout agent public.

## Construction

Depuis le mois de janvier 2022, la startup d’État Data.Subvention, portée par la DJEPVA avec l’appui du programme beta‧gouv de la DINUM, construit ce service destiné aux agents publics qui leur permet concrètement de :

- Consulter les informations administratives disponibles sur les associations (administrateurs, agréments)
- Consulter et prendre connaissance des subventions versées par l’Etat  et des demandes déposées via des outils de gestion auprès d’autres services 
- Gagner du temps dans la récupération des informations
- Enrichir les travaux d’observation ou de suivi des bénéficiaires au plan territorial, sous le prisme

Data.Subvention est donc composée :

- d’une API : qui collecte les données dans les différents outils de dématérialisation et les APIs existants, favorise la réutilisation des données
- d’un outil de consultation qui présente ces données de façon simple à tout agent investi d’une mission de service public et inscrit sur https://app.datasubvention.beta.gouv.fr/

Data‧Subvention a été progressivement déployé au plan national et territorial, auprès des administrations centrales et déconcentrées et des collectivités territoriales.

Deux phases de constructions successives se sont donc tenues : la première entre avril et septembre 2022 dans les régions Occitanie et Pays de la Loire pour tester la solution auprès des agents et l’adapter à leurs besoins et cas d’usages. Cette construction s’est poursuivie entre octobre et juin 2023 sur 3 nouvelles régions : Bretagne, Hauts-de-France et Nouvelle-Aquitaine, avec de nouveaux objectifs, notamment d’inscription de la solution dans les feuilles de route de la donnée pilotées par les SGAR, et l’ouverture de l’outils aux agents des collectivités.

## Solution en Acceleration : Sept 2023 à Février 2024

La phase de construction est achevée. Elle a duré 1 an : elle a permis de tester puis dupliquer des modes opératoires efficaces pour déployer la solution au plan territorial, augmenter le nombre d’utilisateurs, promouvoir le réemploi des données via des Hubs de donnée en lien avec les préfectures de région, expliquer et convaincre de la nécessité du partage des données.

Elle s’est clôt sur un travail d’alignement de l’équipe qui a permis de retenir LA mesure d’impact : Le gain de temps lors des instructions de demandes de subventions.

Si la phase de construction servait essentiellement à améliorer la solution via de nombreux processus de test d’utilisateurs, la phase d’accélération elle, vise à faire décoller le nombre de fidèles. Il s’agit de dépasser le public des primo-utilisateurs et de s’assurer d’une utilisation régulière.

L’équipe travaillera de septembre 2023 à Février 2024 sur un plan d’action basé sur 2 hypothèses :

- Nous pensons que le passage à l’échelle nationale en France métropolitaine et en Outre-mer avec un renforcement des partenariats avec les préfectures, les centrales, les opérateurs; va produire : une augmentation du nombre d’utilisateurs actifs; Et nous pourrons le valider en mesurant la récurrence d’usage : le nombre d’utilisateurs actifs
- Nous pensons que augmenter le nombre de sources de données; Va produire plus de satisfaction sur la solution marquée une augmentation du nombre d’utilisateurs actifs; Et nous pourrons le valider en mesurant la récurrence d’usages : le nombre d’utilisateurs actif.
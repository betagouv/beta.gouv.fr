---
roles: Un.e ingénieur.e données
open: false
startup: trackdechets
title: Trackdéchets recrute un.e ingénieur.e données senior
date: 2022-05-31T08:18:13.786Z
domaines:
  - Développement
---

## À propos

Trackdéchets est une plateforme numérique du Ministère de la Transition Écologique qui vise à réduire le risque environnemental et améliorer la traçabilité du traitement des déchets dangereux. Comment ? 
- en simplifiant la gestion quotidienne de la traçabilité des déchets dangereux pour tous les acteurs de la chaîne, grâce à la dématérialisation du bordereau de suivi de déchets dangereux et du registre déchets.
- en assurant aux producteurs la conformité réglementaire de leurs prestataires grâce à des contrôles de cohérence automatiques et des moyens de contrôle.
- en donnant à l'État des moyens efficaces de piloter la politique publique en matière de gestion des déchets en disposant de données en temps réel.

Le produit est accessible sur [https://trackdechets.beta.gouv.fr/](https://trackdechets.beta.gouv.fr/)

## Descriptif du poste 

La mission s’organisera autour des axes suivants : 
- Permettre aux agents de l’état et aux administrations déconcentrées (administration centrale du ministère, inspection des ICPE, DREAL, ARS, ADEME, douanes, etc) d’accéder aux données Trackdéchets de façon sécurisée grâce au développement d’une API (sous habilitation qui pourrait être référencée sur api.gouv.fr). Une première utilisation de cette API pourrait être le développement d'une webapp permettant de générer des fiches d’inspection avec des données clés pour un contrôle.
- Ouvrir les données Trackdéchets consolidées (sans information commerciale) au grand public (avec objectif de publication sur [data.gouv.fr](https://data.gouv.fr)). Le script de consolidation des données devra être automatisé pour mettre à jour les données de façon régulière.
- Possibiltié de créer des réutilisations de ces données sous forme de visualisations de données (cartographie, distance moyenne parcourue par les déchets, taux de valorisation des déchets, etc). Les données alimenteront également une page de statistique publique mise à jour en temps réel ([page actuelle](https://trackdechets.beta.gouv.fr/stats/) construite avec Plotly Dash).
- Croiser les données Trackdéchets avec les données de la base des installations classées pour la protection de l’environnement (ICPE) et les arrêtés préfectoraux pour mettre en place des contrôles de cohérence et des alertes. Ces contrôles doivent, par exemple,  permettre de répondre aux questions suivantes: 
  - L’installation qui reçoit un déchet dangereux est-elle autorisée à le faire ?
  - Pour quel type de déchet ?
  - Les seuils de stockage et/ou d’entreposage sur site ont-ils été atteints ?
- Créer une réplique de la base de données de production sans les données personnelles et commerciales collectées par Trackdéchets. Mise à jour tous les jours, elle sera dédiée à l'open data, aux statistiques publiques et à toute autre application n'ayant pas besoin de données sensibles. 
- Contribuer ad hoc aux besoins data liés aux autres activités de la startup : sur le déploiement ou le user success.

## Profil recherché

Vous êtes :
- Intéressé·e par les enjeux adressés par le produit.
- Convaincu·e qu’un service public de qualité se doit d’être utile, efficace et accessible à tous et que l’ouverture de la donnée apporte de la valeur.
- Autonome (les équipes sont très soudées mais distribuées), complètement à l’aise avec le travail en remote (possibilité également de travailler au sein de l’Incubateur dans l’Arche de la Défense).
- Prescripteur·ice et connaissez de bonnes pratiques en matière de gestion de données.
- À l’écoute et à l’aise dans la communication orale et écrite.
- Empathique, vous êtes acculturé·e à la “recherche utilisateur” et à ses méthodes.

Techniquement, 
- Vous êtes à l’aise avec les bases de données SQL et les langages de programmation Python, R ou équivalent.
- Vous êtes expert·e en modélisation et traitement de données et avez l’habitude d’industrialiser des chaînes de traitement (une connaissance d’Airflow ou équivalent serait un plus).
- Vous savez construire et documenter une API.
- Vous savez construire des interfaces pour le web et des dataviz (Metabase).
- Vous avez des notions en systèmes d’information géographique.
- Vous avez acquis une expérience avérée dans ces domaines.

## Environnement de travail
- Environnement et communauté beta.gouv : [https://beta.gouv.fr/](https://beta.gouv.fr/) (plus de détails ici également : [https://doc.incubateur.net/communaute/](https://doc.incubateur.net/communaute/)).
- Poste ouvert pour des indépendant·e·s sur une durée de 3 mois renouvelables.
- Temps partiel accepté (4/5 ou 3/5 accepté).
- Démarrage en juin 2022.
- Télétravail avec quelques réunions présentielles à Paris.
- TJM entre 450€ et 650€ suivant expérience.


> En travaillant pour une Startup d’Etat et de Territoire, vous devenez membre de la communauté beta.gouv. Celle-ci se construit par l’investissement volontaire de ses membres ce qui veut dire que chaque membre peut proposer de nouvelles idées, les mettre en oeuvre ou rejoindre un travail en cours.
L’engagement dans la communauté peut prendre différentes formes, de faire le café à participer à une équipe transverse en passant par organiser une conférence.
L’objectif est de faire de beta.gouv une communauté vivante, riche des expériences et de l’engagement de chacun, et qui apporte un cadre de travail stimulant pour ces membres.
En tant que membre, vous pouvez et êtes invités à vous engager dans la communauté. Si vous avez des questions, n’hésitez pas à les poser lors de votre entretien.

## Comment envoyer votre candidature ?

Envoyez-nous votre candidature par courriel à l’adresse suivante : recrutement@trackdechets.beta.gouv.fr.
Pas besoin de lettre de motivation formelle, quelques lignes dans le corps du message suffisent pour exprimer votre motivation. Écrivez avec vos mots à vous : l’emploi de jargon à la mode ne rapporte pas de points supplémentaires !
Ajoutez votre CV ou le lien vers votre compte Linkedin ou Github/Gitlab, et tout ce que vous souhaitez nous communiquer qui nous permettra de mieux vous connaître.
Si vous avez des questions avant de postuler, n’hésitez pas à nous écrire.


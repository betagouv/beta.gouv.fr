---
mission: Nous identifions vos utilisateurs professionnels du privé ou du public.
incubator: dinum_produits_interministeriels
repository: https://github.com/betagouv/moncomptepro
contact: contact@moncomptepro.beta.gouv.fr
usertypes:
  - etat
  - collectivite-territoriale
  - entreprise
title: MonComptePro
sponsors:
  - /organisations/dinum
link: https://moncomptepro.beta.gouv.fr
stats: true
stats_url: https://moncomptepro.beta.gouv.fr/stats
phases:
  - name: investigation
    start: 2018-09-01
    end: 2022-01-01
  - name: construction
    start: 2022-06-01
  - name: acceleration
    start: 2022-12-01
thematiques:
  - Sécurité informatique
  - Outil technique
---

## Contexte

Il existe de nombreux services numériques qui s’adressent aux collectivités territoriales (exemples : Urban Vitaliz, macantine, le.taxi, covoiturage.beta.gouv.fr, territoiresentransition.fr, data.gouv.fr, api.gouv.fr, adresse.data.gouv.fr...), ou plus largement à des personnalités morales (entreprises, associations, services de l’État). Ces services nécessitent souvent un système d’authentification.

Ainsi, face à la multiplication des services numériques de l’État, et pour prendre l’exemple des territoires, les agents de collectivités peuvent avoir à gérer des dizaines de comptes différents.

À chaque service, les équipes de développement de ces services sont tentées de développer une brique d’authentification complexe, car s’authentifier en tant que personne physique faisant partie d’une organisation (entreprise, collectivité, association) sur un service numérique de l’État peut soulever des problèmes de plusieurs natures :

- Pour la validation de l’identité de la personne lors de ses inscriptions sur différentes plateformes, ainsi que la gestion de ses comptes à long terme (gestion de droits).
- Lorsque plusieurs personnes travaillent autour d’une même organisation ou ne peuvent pas travailler ensemble sur un même sujet.
- En termes de sécurité informatique et de configuration de permissions et d’accès à certaines données.

## Solution pressentie

Il existe déjà plusieurs services ayant développé une brique d’authentification pour certifier l’appartenance d’une personne physique qui se connecte sur un service à une personnalité morale telle une collectivité.

Il a été proposé de repartir des comptes utilisés par [l’outil d’habilitation DataPass](https://beta.gouv.fr/startups/datapass). Cette solution permet de vérifier l’identité de l’inscrit de manière automatisée à partir de son courriel et du SIRET de son organisation. Cette solution permet également une gestion de groupes, d’utilisateurs et est fiable en termes de sécurité informatique et de restriction d’accès aux seuls agents autorisés. **Cette solution d’identification a été adaptée sous le nom de MonComptePro**

Grâce à MonComptePro, toute plateforme numérique qui s’adresse à une personne morale pourrait facilement intégrer une brique d’authentification, qui permettrait à la fois :

- aux personnes faisant partie de l’organisation de se connecter via MonComptePro, et donc de ne pas créer un nouveau compte à chaque inscription à une nouvelle plateforme
- aux développeurs/développeuses de la plateforme en question de ne pas avoir à développer une brique d’authentification ad hoc et de ne pas avoir à gérer la validation de l’identité de chaque personne de manière individuelle.

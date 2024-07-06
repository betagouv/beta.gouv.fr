---
title: Medlé
mission: Consigner l'activité de la médecine légale réalisée sur réquisition judiciaire
sponsors:
  - /organisations/dgos
incubator: sgmas
phases:
  - name: investigation
    start: 2019-06-15
  - name: construction
    start: 2019-06-15
  - name: acceleration
    start: 2020-11-03
  - name: transfer
    start: 2021-07-01
usertypes:
  - etat
link: https://medle.fabrique.social.gouv.fr/
repository: https://github.com/SocialGouv/medle
stats: false
contact: contact.medle@fabrique.social.gouv.fr
techno:
  - Next.js
  - React
  - Rest API
  - PostgreSQL
  - Docker
---
# Medlé

« Permettre aux structures de médecine légale de consigner l'activité réalisée sur réquisition judiciaire et les personnels affectés ».

## Le produit

Medlé a pour objectif de faciliter la déclaration, la consultation et l'évaluation d'une part, de toutes les activités médico-légales réalisées dans les structures hospitalières dédiées, d'autre part, des professionnels dédiés.

Pour les ministères, Medlé permet une vision plus exhaustive des actes réalisés.

- **secteur** : santé, justice et intérieur
- **public concerné** : UMJ (Unités Médico-Judiciaires), IML (Instituts MédicoLégaux) et réseaux de proximité

## Quelques chiffres clés

- 47 UMJ dont 31 avec un IML
- 290 604 actes déclarés en 2018 (Hôtel Dieu compris).

## L'équipe

- Eric Heijligers – Coach
- Marie-Odile Moreau – Product Owner
- Saniya Al Saadi – Designer
- Christophe Grassi - Product Manager
- Pierre-Olivier Mauguet - Développeur

## 1 - Le contexte

### Qu'est-ce que la médecine légale ?

La médecine légale nʼexiste que dans le cadre dʼune procédure pénale. Elle est un outil **indispensable dʼaide à lʼenquête et à la manifestation de la vérité**. Les actes, effectués sur réquisition judiciaire du procureur de la République ou dʼun officier de police judiciaire (OPJ), peuvent être liés à une activité de thanatologie (autopsie, levée de corps, examen de corps) et/ou de médecine légale du vivant (examen des victimes aux fins de détermination de lʼincapacité totale de travail et de constatation de lésions et traumatismes, examen des personnes gardées à vue, détermination dʼâge osseux…).

Une grande partie de cette activité est aujourdʼhui réalisée dans les **47 structures hospitalières**. Un réseau de proximité (établissements publics de santé dépourvus de structures dédiées et médecine libérale) complète le maillage territorial.

Les structures de médecine légale thanatologique sont désormais appelées institut médico-légal (IML) ; celles de médecine légale du vivant sont appelées unité médico-judiciaire (UMJ). 

### Un outil informatique existant obsolète

Dans le cadre de la réforme et dès 2011, en lʼabsence dʼoutils informatiques, le Ministère de la Santé a mis en place une plateforme de renseignements : lʼobservatoire National de la Médecine Légale (oNML). La totalité des examens de médecine légale qui sont réalisés, sont consignés par les établissements de santé sièges dʼune structure à lʼexception de lʼunité médico-judiciaire de lʼHôtel-Dieu à Paris, des IML de lʼIRCGN (Institut de Recherche Criminologique de la Gendarmerie Nationale) et de la Préfecture de Police de Paris placés tous les deux sous lʼautorité du ministère de lʼintérieur. Il en est de même des effectifs alloués au regard de lʼorganisation prévue par le schéma.

Les ministères de la Justice, de lʼIntérieur et les ARS y ont accès pour consultation.

Cette plateforme ne prend pas en compte lʼactivité réalisée par le réseau de proximité.

LʼoNML a peu évolué en fonction des usages et des besoins de ses utilisateurs actuels, d'un point de vue métier mais également d'un point de vue expérience utilisateur.

**Bilan** : en plus de représenter une activité fastidieuse et chronophage pour le personnel des UMJ et IML et dʼêtre vécue comme un seul outil de contrôle, elle ne permet aujourd'hui pas aux ministères de la Santé, de la Justice et de l'Intérieur de dresser un bilan précis et exhaustif de lʼactivité réalisée sur lʼensemble du territoire national.

Comment concevoir un outil de reporting de l'activité médico-légale qui permettent aux ministères d'avoir un suivi exhaustif de l'activité, tout en ayant une valeur ajoutée pour les utilisateurs finaux (UMJ et IML) ?

## 2 - Le produit

### Notre engagement

Compte tenu de la nécessité absolue dʼun outil fiable et sécurisé de recueil, de gestion et dʼanalyse de données médico-légales pour les ministères de la Santé de la Justice et de lʼIntérieur, la startup Medlé a été créée mi-juin 2019 au sein de lʼincubateur des ministères sociaux. Elle est donc placée sous le contrôle de l'Etat pour des raisons de confidentialité et de coût.

MedLé permet d'évaluer facilement lʼactivité de médecine légale réalisée sur réquisition judiciaire, dans un premier temps au niveau des 47 structures hospitalières (LʼHôtel-Dieu de Paris inclus), puis dans un second temps au niveau du réseau de proximité et des IML de lʼIRCGN et de la Préfecture de Police de Paris.

Pour le ministère de la Santé, mais également le cas échéant pour les ministères de la Justice et de lʼIntérieur, le produit permettra dʼêtre la pierre angulaire à dʼautres projets, dont lʼun est déjà identifié par la DGOS.

### Nos utilisateurs cibles

Cette plateforme sera utilisée par :

- le personnel des UMJ et des IML, afin de leur donner une vue représentative et utile au quotidien de l'activité médico-légale, au sein de leur établissement mais également au niveau national
- le personnel administratif des établissements de santé, l'outil leur permettant d'extraire facilement les données nécessaires à la rédaction des mémoires de frais et fluidifiant les relations avec les TGI et la Chancellerie
- les ministères, leur permettant de disposer d'indicateurs afin de mieux ajuster l'offre aux besoins.
- à terme, lʼensemble des utilisateurs y compris ceux du réseau de proximité

## 3 - Les dates clées

### Juillet-août 2019 : phase de recherche utilisateurs

Une première phase dʼentretiens avec, d'une part des responsables administratifs, dʼétablissement de santé, des médecins légistes, des secrétaires au sein des UMJ/IML, une ARS, et d'autre part avec les ministères de la justice, de lʼintérieur, des officiers de police judiciaire (OPJ) dans des commissariats, nous ont permis de comprendre les difficultés rencontrées, les besoins dʼamélioration et les véritables usages sur le terrain.

### Septembre 2019 : scénarios et maquettes

La construction des scénarios et parcours utilisateur et la création des maquettes adaptées nous permettront de tester rapidement notre produit et de commencer le développement.

### Octobre-décembre 2019 : tests utilisateurs et développement

Les briques de base étant déjà déterminées, le développement du MVP sera réalisé en même temps que les tests utilisateurs, permettant ainsi des améliorations rapides du produit.

### Décembre 2019 : sortie du MVP

Ce premier MVP remplacera l'outil existant, permettant une continuité de la consignation d'activité pour les UMJ et IML pilotes. Il permettra de déclarer les actes réalisés dans la structure ainsi les ETP nécessaires à cette activité.

### Juin 2020 : Déploiement au niveau des 47 structures hospitalières y compris lʼUMJ majeurs et mineurs de lʼHôtel-Dieu.

A terme, déploiement à lʼensemble du réseau de proximité et aux IML de lʼIRCGN et de Paris avec lʼaccord du ministère de lʼintérieur.

## Il était une conclusion : Medlé en transfert (ou consolidation) 🚀

Après 2 ans d'investigation, de construction et d'accélération au sein de [la Fabrique numérique des Ministères Sociaux](https://www.fabrique.social.gouv.fr/), Medlé s'annonce être un véritable succès : 46 établissements inscrits (sur 47, l'Hôtel-Dieu étant un cas particulier), 250.000 actes au compteur et plusieurs dizaines de feedbacks utilisateurs permettant d'améliorer le produit et confirmant sa grande utilité au quotidien.

Medlé est donc passé depuis le 1er juillet 2021 en phase de transfert auprès de la Sous-Direction des Projets Services Numériques de la DNUM des Ministères Sociaux.



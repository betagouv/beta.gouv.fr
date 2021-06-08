---
title: Tableau de bord Apprentissage
mission: "Permettre l’accès aux données clés de l’apprentissage en temps réel"
owner: Mission interministérielle pour l'apprentissage
sponsors:
  - name: "Ministère du travail, de l'emploi et de l'insertion "
    type: administration-centrale
    domaine_ministeriel: travail
incubator: mission-apprentissage
link: https://cfas.apprentissage.beta.gouv.fr/tableau-de-bord
repository: 
contact: apprentissage@beta.gouv.fr
events: []
phases:
  - name: investigation
    start: 2020-07-01
    end: ""
  - name: construction
    start: 2021-01-01
---

## Constat

Au total, en 2020, environ 250 000 candidats ont souhaité une mise en relation avec un CFA par l’un des deux portails Affelnet ou Parcoursup. Or, une fois le vœu exprimé et transmis au centre de formation, aucun suivi global n'est assuré : aucun système ne permet de savoir combien de vœux se sont traduits en entrée en apprentissage, dans la spécialité et le centre visés ou dans une autre formation avec le même statut. 
Aucun indice ne permet non plus d’observer les étapes franchies ou non par les jeunes, en vue d’accompagner d’une façon réactive ceux qui décrochent et peuvent se retrouver en difficulté. 

Plus généralement, l'écosystème de l'apprentissage manque d'interconnexion pour simplifier les échanges, favoriser un pilotage plus fin et réactif, simplifier les démarches des CFA et améliorer l'accompagnement des jeunes et des employeurs.


## La solution

Le tableau de bord Apprentissage propose de se brancher sur les systèmes de gestion des centres de formation d’apprentis (CFA) - via leur éditeur de logiciel ERP (possible pour Yparéo et Gesti pour l’instant, SC Form et FCA Manager bientôt), par consommation d’une API ou par dépôt de fichier sur un serveur - pour recueillir certaines données :
- Pour l’apprenant → les données d’identification dont INE si disponible ;
- Pour le statut des apprenants → apprenant sans contrat, apprenti et abandon ;
- Pour l’établissement : nom, UAI, SIRET ;
- Pour la formation → la certification et la localisation.

Ces données sont agrégées et ensuite mises à disposition des acteurs de l’apprentissage :
- Les CFA et leurs réseaux ;
- Les membres du service public de l’emploi (SPE) : Pôle Emploi, Mission Locale, DRETS… ;
- Les comités de pilotage régionaux : Conseil régionaux, Plan 1 jeune 1 solution…
- La Plateforme de Suivi et d’Appui aux Décrocheurs ;
- Les administrations compétentes des Ministères du Travail, de l’Education Nationale, de l’Enseignement Supérieur, de l’Agriculture….

Les objectifs sont de faciliter un pilotage opérationnel de l’apprentissage en temps réel pour :
- Savoir comment évolue le nombre d’apprentis dans un territoire ou un secteur économique ;
- Dénombrer les jeunes en recherche de contrat ou en risque de décrochage ;
- Simplifier certaines démarches administratives pour les CFA.

Pour les CFA, c’est une valeur ajoutée qui permet de :
- Mettre en visibilité l’évolution des effectifs et des formations en apprentissage ;
- Faciliter une meilleure coordination des acteurs ;
- Avoir une vision plus précise de l’offre et des tensions sur un territoire ;
- Simplifier les démarches administratives ;
- Réduire le nombre d’enquêtes administratives.


L’opération est conduite conformément aux règlements généraux relatifs à la protection des données et à la sécurité informatique. Le traitement des données se fait sur la base de l’intérêt public. Conformément à la loi sur la République numérique et au motif de leur mission de service public, les CFA sont tenus de partager avec les administrations publiques les données dont l’utilisation sert l’intérêt général. Cette opération est conduite suivant les procédures sécurisées de l’État :
- Transmission sécurisée et cryptée des données ;
- Minimisation des données circulant pour ne traiter que celles strictement utiles à la finalité de la mission ;
- Minimisation et encadrement strict de l’accès aux données et du nombre d’intervenants ;
- Inscription de l’opération au registre des traitements de données ;
- Production d’une analyse d’impact et d’un plan de mise en sécurité informatique.


## Les bénéfices attendus

- Permettre une amélioration sensible de la qualité de pilotage des formations en apprentissage ;
- Observer les positionnements de jeunes sur Affelnet et Parcoursup et leur transformation en entrée en apprentissage ;
- Identifier mieux et plus tôt les jeunes en difficulté qui sont en rupture de contact avec les CFA, pour que les conseillers spécialisés les aident à s’orienter.

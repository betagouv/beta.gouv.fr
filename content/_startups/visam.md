---
title: Visam
mission: "Fluidifier le dialogue social de la  «\_Direction des ressources humaines\_» de l’État."
sponsors:
  - /organisations/dgafp
incubator: dinum
phases:
  - name: investigation
    start: 2019-12-01
    end: 2020-01-30
  - name: construction
    start: 2020-01-30
  - name: alumni
    start: 2020-12-14
events:
  - name: end
    date: 2020-12-14
usertypes:
  - etat
repository: https://github.com/betagouv/visam
stats: false
contact: contact@visam.beta.gouv.fr
techno:
  - Python
  - PostgreSQL
link: ''
---
## Le contexte

Chaque fois que l’État élabore un projet de texte législatif ou réglementaire qui porte sur le statut des fonctionnaires, l’État doit le soumettre pour avis aux instances du dialogue social compétentes.

Ces instances sont :

- le Conseil supérieur de la fonction publique d’État (CSFPE) ;
- le Conseil supérieur de la fonction publique territoriale (CSFPT) ;
- le Conseil supérieur de la fonction publique hospitalière (CSFPH) ;
- et le Conseil commun de la fonction publique (CCFP), compétent pour examiner les projets de textes dont les dispositions sont transverses aux trois versants de la fonction publique.

Parmi elles, ce sont les CSFPE et CCFP qui génèrent le plus de travail (le plus de projets de texte et le plus d’amendements). C’est la direction générale de l’administration et de la fonction publique (DGAFP) qui est en charge d’une part, du secrétariat de ces 2 instances et, d’autre part, en charge du traitement des amendements émis par les membres de ces instances à savoir les représentants des organisations syndicales et des employeurs territoriaux.

Concrètement, la DGAFP doit :

- établir le calendrier social (dates de réunions des conseils) en fonction de l’actualité des productions normatives ;
- convoquer les membres de conseils dans le délai et transmettre les projets de texte et rapports de présentation des projets de texte à l’ordre du jour ;
- recueillir les amendements des partenaires sociaux ;
- traiter les amendements (rédaction et validation) dans le court délai imparti ;
- organiser la tenue du débat d’un point de vue à la fois logistique (salle de réunion, chevalets etc.) que sur le fond (regroupements cohérents des amendements, ordonnancement du débat) ;
- produire un support clair et structuré pour le ministre qui préside les réunions et répond aux amendements en séance ;
- produire un support clair et structuré pour les partenaires sociaux afin de donner la visibilité à tous les membres sur l’ensemble des amendements déposés et afin de faciliter le suivi du débat en séance et notamment l’ordre de discussion (NB : ce document diffère du précédent car ne contient pas les réponses aux amendements).

Chaque année, en moyenne on compte : 12 CCFP et 12 CSFPE, avec chacun 5 projets de texte à l’ordre du jour qui génèrent chacun une trentaine d’amendements. De plus, lorsqu’une réforme statutaire est lancée, tous les quatre ans environ, un pic d’activité multiplie par 3 ces volumes pour la DGAFP.


## La solution numérique

Le travail sur les amendements sociaux est relativement similaire à celui sur les amendements parlementaires, si bien que la mécanique de [Zam](https://beta.gouv.fr/startups/zam.html) répond à une partie de la problématique de la DGAFP. 

Cependant, en l’absence de source structurée de données du côté de l’émetteur des amendements sociaux, Visam devra permettre en plus de saisir les projets de texte ainsi que les amendements eux-mêmes.

La réussite de Visam pourra être mesurée par :

- la satisfaction et la fidélité des utilisateurs ;
- le temps gagné par les agents de la DGAFP et amélioration de la qualité des réponses ;
- la réduction de leur stress perçu ;
- l’amélioration de la fluidité des échanges avec les partenaires sociaux tant en amont que pendant la séance d’examen.


## Interruption du partenariat

La solution numérique devait être expérimentée avec la DGAFP sur un CCFP / CSFPE courant 2020. 

Il avait été envisagé d’associer les partenaires sociaux en tant qu’utilisateurs pour la saisie des amendements. Le produit aurait également être pu proposé aux administrations en charge des CSFPT et CSFPH.

La crise sanitaire de mars 2020 a ralenti les travaux, interrompus en juillet 2020. La reprise des travaux est conditionnée à la disponibilité d'un agent public intrapreneur à la DGAFP pour porter la reprise de la construction du service en interne. 



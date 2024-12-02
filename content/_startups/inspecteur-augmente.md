---
analyse_risques: false
mon_service_securise: false
contact: benjamin.hardy@beta.gouv.fr
thematiques:
  - Outil technique
usertypes:
  - etat
  - inspecteurs de l'igedd
title: Inspecteur Augmenté
mission: Permettre à l’IGEDD de gagner en efficacité et en qualité dans ses productions, faire évoluer les métiers et les compétences de l’inspection grâce aux apports de l’intelligence artificielle.
incubator: mtes
sponsors:
  - /organisations/mtes
phases:
  - name: investigation
    comment: null
    start: 2024-04-04
    end: null
events:
  - name: product_launch
    comment: ''
    date: 2024-11-29
---
## Contexte

L’Inspection générale de l’environnement et du développement durable (IGEDD) conseille le Gouvernement dans les domaines de l’environnement, du climat, du développement durable, de la transition écologique, du logement, de l’urbanisme, de la politique de la ville, de l’aménagement du territoire, du paysage, de la construction, de l’énergie, des transports, des risques naturels et technologiques et de la mer.
L’IGEDD exerce également une [mission d’autorité environnementale (Ae)](https://www.igedd.developpement-durable.gouv.fr/l-autorite-environnementale-r145.html) grâce à sa formation nationale et à ses [missions régionales (MRAe)](https://www.mrae.developpement-durable.gouv.fr). 
Enfin, par délégation du secrétariat général du ministère de la transition écologique, l’IGEDD exerce également des missions d’évaluation et d’accompagnement des cadres supérieurs de l’Etat, conformément à l’ordonnance du 2 juin 2021 portant réforme de l’encadrement supérieur de l’Etat.
Dans un contexte d’augmentation de son plan de charge (exigences européennes en matière d’évaluation environnementale des projets, évaluation des cadres supérieurs de l’Etat), le projet « inspecteur augmenté » de l’IGEDD a pour objectif de permettre à l’IGEDD d’améliorer la qualité de ses productions et son efficacité globale grâce à l’apport des technologies d’IA. Le projet comporte par conséquent une dimension managériale de transformation des métiers de l’inspection et de développement des compétences en lien avec l’usage des IA. 

Il comprend une phase d’analyse des besoins, une phase de tests, et un accompagnement de ses agents au fur et à mesure du déploiement.

## Problème

Cinq besoins principaux ont été identifiés :
1. L’appui à la rédaction de comptes rendus d’entretiens, tâche chronophage et à faible valeur ajoutée qui gagner en efficacité grâce à son automatisation ;
2. L’appui aux missions support : réponses de 1er niveau aux agents qui sollicitent le bureau des systèmes d’information, aide à la réalisation de supports de communication, aide à la gestion des sollicitations reçues par le bureau de la communication ;
3. La recherche documentaire dans une base ouverte ;
4. La recherche documentaire dans une base documentaire de confiance ;
5. L’appui à l’instruction des dossiers et à la rédaction d’avis de l’autorité environnementale, activité en forte croissance.

## Solution

* Aide aux comptes-rendus automatiques de réunions, permettant aux agents de l’IGEDD de gagner surtout en efficacité en réduisant le temps passé pour produire le compte-rendu, en maintenant sa qualité.
* Utilisation d'outils RAG pour la recherche documentaire d’une base de documents de confiance (notamment rapports de l’IGEDD rendus publics, avis des autorités environnementales Ae et MRAe), pour gagner en efficacité d’une part dans la lecture conjointe de gros documents, et d’autre part pour améliorer la qualité des avis Ae et MRAe produits, et gagner en qualité globale en visant une homogénéisation des doctrines sous-jacentes.

## Stratégie

L’analyse des besoins a été réalisée auprès d’une vingtaine de bêta-testeurs, issus de toutes les composantes de l’IGEDD et qui présentent des niveaux d’acculturation aux outils numériques hétérogènes, de façon à mieux appréhender les enjeux d’appropriation des outils par une population plus large.
Les résultats des beta-testeurs sur l’appui aux comptes rendus confirment les gains de temps substantiels supérieurs, avec donc d’importants gains d’efficacité globale unitaires si l’on valorise le coût pour l’Etat du temps passé par les agents, de l’ordre de quelques dizaines de fois le coût monétaire des licences. 
Pour les outils documentaires ouverts ou sur base de confiance, l’expérimentation est encore en cours. Les premiers tests permettent toutefois d’entrevoir des gains significatifs tant en efficacité qu’en qualité pour faciliter l’instruction de gros documents : recherche facilitée, informations sourcées. 
La maîtrise des risques associés aux publications d’éléments protégés par le secret est aussi un enjeu de vigilance majeure. 
C’est notamment une des raisons pour lesquelles le projet « inspecteur augmenté » n’est pas appréhendé uniquement sous un angle technique mais s’accompagne d’un volet managérial, impliquant la prise en considération des facteurs humains, juridiques et environnementaux.
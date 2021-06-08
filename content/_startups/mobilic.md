---
title: Mobilic
mission: Simplifier le suivi et le respect du temps de travail des travailleurs mobiles
owner: Ministère de la Transition écologique, chargé des transports
incubator: mtes
phases:
  - name: investigation
    start: 2019-11-01
  - name: acceleration
link: https://mobilic.beta.gouv.fr
repository: https://github.com/MTES-MCT/mobilic
stats: true
stats_url: https://mobilic.beta.gouv.fr/stats
contact: gaspard.granger@developpement-durable.gouv.fr

---

Pour répondre aux exigences du droit du travail, les employeurs ont l’obligation de suivre le temps de travail de leurs salariés. Ce décompte peut faire l’objet d’un contrôle par l’administration.

Dans le secteur des transports routiers, les salariés étant mobiles, le décompte de leur temps de travail ne peut pas se faire au siège de leur entreprise. Il est donc fait par les salariés à l’aide d’un dispositif qu’ils emportent avec eux.

Pour les véhicules de plus de 3,5 tonnes, la réglementation européenne impose un suivi très encadré qui repose sur l’utilisation d’un tachygraphe embarqué à bord des véhicules.

Pour les véhicules de moins de 3,5 tonnes, appelés véhicules utilitaires légers (VUL), le décompte du temps de travail repose sur le livret individuel de contrôle (LIC). Il s’agit d’un document papier dans lequel les salariés remplissent la durée des différentes tâches au fur et à mesure de leur journée de travail et qu’ils doivent conserver avec eux.

Le recours à ce type de véhicule explose (+6,5% d’immatriculations en France en 2019 selon l’association des constructeurs européens d’automobiles), car ils ne sont pas soumis à la réglementation applicable aux poids lourds de plus de 3,5 tonnes ce qui les rend plus compétitifs.


# Les problèmes actuels

Le fonctionnement actuel porté par le LIC soulève un certain nombre de problèmes:

* En raison du format papier du LIC, il est difficilement vérifiable et contrôlable, que ce soit par les employeurs ou par les corps de contrôle de d'administration.
* La gestion administrative du LIC est chronophage et coûteuse, car les employeurs ont besoin de ressaisir les données du LIC pour déterminer leur rémunération et organiser les plannings de l'entreprise. A titre d'exemple, pour une entreprise de taille moyenne (50 salariés), la saisie de 50 bulletins de paie représente 5 heures de travail par mois. Cette saisie s'ajoute à la ressaisie des données inscrites sur le LIC dans le système de gestion de l'entreprise, qui est équivalente en durée, mais qui est faite toutes les semaines.
* Le format papier est inadapté au déroulement de la journée d'un travailleur mobile qui doit avoir le livret avec lui et entrer les durées de ces différentes tâches tout au long de sa journée.
* L'utilisation d'un LIC n'est imposée qu'aux entreprises établies en France. Les entreprises non établies sont soumises à une formalité équivalente.

En conséquence, de nombreuses entreprises n'utilisent pas le LIC ou utilisent des solutions de contournement non réglementaires.

Cette situation a plusieurs conséquences indésirables:
* Une fraude sociale et fiscale occasionnée par le non respect des plafonds de temps de travail des salariés  imposés par la réglementation, qui résulte dans un écart entre le temps travaillé et la paie effective. Cette fraude est par définition difficilement mesurable, cependant, le niveau présumé de fraude dans ce secteur a justifié que le transport routier de marchandises soit inscrit parmi les secteurs prioritaires du plan national de lutte contre * Le travail illégal (PNLTI) pour la période 2019 - 2021.
* Le dépassement des plafonds de temps de travail peut avoir de graves conséquences sur la sécurité routière.
* Les entreprises non vertueuses ont un avantage comparatif déloyal par rapport aux autres, car leurs salariés sont amenés à travailler plus longtemps.

Pour répondre à ces différentes problématiques, MobiLIC propose une solution pour **simplifier le suivi et le respect du temps de travail des travailleurs mobiles. 

# Mise en place de MobiLIC

## Quel sera le périmètre du produit ? 

Dans le cadre du MVP, Mobilic permet ainsi au travailleur mobile : 

* de **saisir très simplement son temps de travail en temps réel (activités réalisées)**. La fiabilité des données sera améliorée par le fait que les salariés devront effectivement indiquer le moment exact du changement de tâche et par la mesure exacte du début et de la fin de la journée. À terme, cette saisie pourrait être simplifiée et fiabilisée par le biais de la géolocalisation (à l'étude)
* de **consulter en temps réel son temps de travail (amplitude, répartition des activités, etc.) et d'être alerté sur les éventuels dépassements de seuils** 
* de **transférer automatiquement les données de son temps de travail à l'employeur** afin d'éviter le travail exhaustif de re-saisie

L'employeur peut utiliser les données enregistrées par le produit pour suivre le temps de travail de ses salariés nécessaire à l'émission des fiches de paie et pour justifier du respect de la réglementation lors des contrôles en entreprise.
Les autorités de contrôle peuvent s'appuyer sur les données Mobilic pour vérifier le respect des seuils prévus par la réglementation. 

## Périmètre du test initial

Mobilic a été testé en premier lieu en lien avec le secteur du déménagement. Le fait qu'au côté de la conduite, qui ne constitue pas l'essentiel de leur travail, les salariés effectuent d'autres tâches au cours d'une même journée, impose de développer un produit qui soit très facile d'utilisation.Par ailleurs, les entreprises de ce secteur sont très mobilisées auprès du ministère des transports dans la lutte contre le travail illégal qui est un des objectifs principaux du produit. 
Les bêtatesteurs ont été recrutés début février en s'appuyant sur les organisations professionnelles du secteur du déménagement (CSD, OTRE), en forte demande. 

## Et ensuite?

**Sur le produit**

Des évolutions de Mobilic ont été intégrées grâce aux nombreux retours des bêtatesteurs dans le secteur du déménagement, avec notamment 2 priorités : 
- simplifier au mieux l'utilisation par les travailleurs mobiles (enjeux UX forts)
- rendre encore plus simple d'utilisation et utile au quotidien Mobilic pour les gestionnaires d'entreprises 

De nombreuses actions ont également été menées sur le sujet de la sécurité des donnés suite à un audit de sécurité. Le périmètre du produit va continuer à grandir au fil des usages et devrait également progressivement s'ouvrir sur le volet administration (contrôleurs).

Par ailleurs, dès l'été 2019, un travail d’échange a été engagé avec les éditeurs de solutions informatiques afin d’envisager les échanges de données avec Mobilic, l'API étant documentée et disponible (https://mobilic.beta.gouv.fr/developers/docs/intro). L'enjeu est de démultiplier l'impact en matière de simplification pour les entreprises.

**Sur le déploiement**

L’équipe a ouvert son champs de recherche utilisateur et de déploiement à d'autres secteurs en échangeant notamment avec les organisations professionnelles du secteur de la messagerie et du fret express, ainsi que celles du transport sanitaire, afin d’étudier les spécificités de ces secteurs et les besoins associés. L’enjeux est que Mobilic s’adresse à l’ensemble des salariés de ces secteurs.

A l’issue des premières boucles de feedback, la phase d'accélération du déploiement a été lancée fin 2019, en s’appuyant à nouveau sur les organisations professionnelles pour étendre son utilisation ainsi que sur divers canaux d'acquisition pertinents pour les secteurs concernés. 

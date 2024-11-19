---
title: API Entreprise
mission: Rendre accessibles aux acteurs publics les informations administratives des entreprises et associations, afin de simplifier leurs démarches.
sponsors:
  - /organisations/dinum
incubator: dinum_produits_interministeriels
phases:
  - name: investigation
    start: 2014-01-01
  - name: construction
    start: 2014-01-01
  - name: success
    start: 2019-09-01
link: https://entreprise.api.gouv.fr/
repository: https://github.com/etalab/entreprise.api.gouv.fr
stats: true
contact: contact@apientreprise.fr
usertypes:
  - association
  - entreprise
  - etat
  - collectivite-territoriale
thematiques:
  - Open-Data
  - Entreprises
techno: []
---
## Le problème

Lorsqu'une entreprise ou une association dépose un dossier pour une démarche administrative, elle doit fournir de nombreuses informations et documents. C'est par exemple le cas pour candidater à un marché public ou faire une demande d'aide/subvention publique.

Cependant, les documents et informations demandés sont parfois déjà détenus par une autre administration.

Le manque de circulation de ces informations pourtant déjà disponibles au sein du secteur public entraîne une complexification des démarches pour les usagers qui doivent régulièrement fournir les mêmes documents.
Le problème concerne également les agents publics qui sont souvent dans l'obligation :

- de demander et re-demander certains justificatifs ;
- d'effectuer des vérifications pour s'assurer que les documents sont certifiés.

## La solution

La DINUM simplifie radicalement ce processus avec le produit API Entreprise qui est un des acteurs du [Dîtes-le-nous une fois (DLNUF)](https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/).

API Entreprise simplifie les démarches administratives et le travail des agents traitant les dossiers en faisant circuler par API les pièces justificatives et les informations détenues par d'autres services administratifs.
Ces API permettent, entre autres, de récupérer des données comme la forme juridique, les mandataires sociaux, etc... ainsi que des pièces justificatives telle que l'attestation de régularité fiscale et l'attestation de vigilance... Ces données sont certifiées car elles proviennent directement des administrations les opérant.

La mise à disposition de ces données par format d'API permet d'intégrer directement les données :

- dans les services en ligne pour les usagers ;
- dans les logiciels métiers des agents.

En intégrant la brique API Entreprise dans leur système d’information ou leurs site internet, les acteurs publics :

- accélèrent et simplifient les démarches pour les entreprises et les associations ;
- accèdent avec un point unique aux données de l’Insee, la DGFIP, l’URSSAF, etc. ;
- n'ont plus besoin de demander et re-demander les justificatifs ;
- n'ont pas de vérification à réaliser car les informations sont certifiées.

La DINUM a travaillé sur la mise en place d'un cadre juridique commun pour harmoniser et fluidifier les relations entre fournisseurs de données et fournisseurs de service. C'est la mise en place de l'article de la section [« Échange de données entre administrations » (L114-8 et suivants) du CRPA](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=EA87CA618644F6B9C1A66E4468F81BFD.tplgfr38s_3?idSectionTA=LEGISCTA000031367410&cidTexte=LEGITEXT000031366350&dateTexte=20161009).
Les relations entre les administrations utilisatrices du services et les entreprises bénéficiant du service sont ainsi régies par ce cadre législatif.
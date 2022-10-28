---
title: API Entreprise
mission: Rendre accessibles aux acteurs publics les informations administratives des entreprises et associations, afin de simplifier leurs démarches.
sponsors:
  - /organisations/dinum
incubator: apigouv
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

---

## Le problème

Lorsqu'une entreprise ou une association dépose un dossier pour une démarche administrative, elle doit fournir de nombreuses informations et documents. C'est par exemple le cas pour candidater à un marché public ou faire une demande d'aide/subvention publique.

Cependant les documents et informations demandés sont parfois déjà détenus par une autre administration.

Il s'agit donc de simplifier les démarches administratives et le travail des agents traitant ces dossiers en faisant circuler par API les pièces justificatives et les informations détenue par d'autres services administratifs.

## La solution

La DINUM simplifie radicalement ce processus avec le produit API Entreprise qui est un des acteurs du [Dîtes-le-nous une fois (DLNUF)](https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/).

API Entreprise mets à dispositions des administrations des API qui permettent entre autres de récupérer des données des entreprises comme la forme juridique, les mandataires sociaux, etc... Ainsi que des pièces justificatives (attestations de régularités fiscales, attestations de vigilances...). Ces données sont en plus certifiées car provenant directement de l'administration qui opèrent ces données.

Ces données peuvent ainsi être intégrés dans les logiciels métiers des différentes services administratifs afin de simplifier le traitement des démarches administratives des entreprises.

La DINMU a travaillé sur la mise en place d'un cadre juridique commun pour harmoniser et fluidifier les relations entre fournisseurs de données et fournisseurs de service. C'est la mise en place de l'article de la section [« Échange de données entre administrations » (L114-8 et suivants) du CRPA](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=EA87CA618644F6B9C1A66E4468F81BFD.tplgfr38s_3?idSectionTA=LEGISCTA000031367410&cidTexte=LEGITEXT000031366350&dateTexte=20161009).
Les relations entre les administrations utilisatrices du services et les entreprises bénéficiant du service sont ainsi régies par ce cadre législatif.

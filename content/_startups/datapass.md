---
title: DataPass
mission: Délivrer des « Pass » pour accéder à la « Data » produite par l'État.
sponsors:
  - /organisations/dinum
incubator: dinum_produits_interministeriels
phases:
  - name: construction
    start: 2018-02-14
  - name: acceleration
    start: 2018-11-08
link: https://datapass.api.gouv.fr
repository: https://github.com/betagouv/datapass
stats: true
stats_url: https://datapass.api.gouv.fr/stats
contact: contact@api.gouv.fr
usertypes:
  - collectivite-territoriale
  - entreprise
  - etat
dashlord_url: https://dashlord.incubateur.net/url/datapass-api-gouv-fr/
accessibility_status: partiellement conforme
thematiques:
  - Open-Data
  - Outil technique
---
## Le problème

Lorsqu'une administration expose des données à caractère personnel, elle doit pouvoir interdire leur diffusion aux organisations qui n'ont pas le droit d'y accéder. Par exemple, une agence de voyage n'a pas à connaître le revenu fiscal de référence de ses clients.

Pour cela, la plupart des administrations qui fournissent des données demandent aux entités souhaitant exploiter ces données de signer des conventions pour organiser l'échange.

Mais comment les collectivités territoriales peuvent-elles, dans ces conditions, avoir accès au fameux revenu fiscal de référence sachant qu'elles sont par ailleurs tenues de ne plus de demander ces informations à leurs administrés (cf. [Article L114-8 du CRPA](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=EA87CA618644F6B9C1A66E4468F81BFD.tplgfr38s_3?idSectionTA=LEGISCTA000031367410&cidTexte=LEGITEXT000031366350&dateTexte=20161009)) ?

Doivent-elles signer des conventions avec chacune des administrations productrices de données avec potentiellement des règles et des procédures différentes chez chacun ? Il est probable que la multiplicité des conventions aboutissent purement et simplement à la non-circulation des données. Ceci implique *in-fine* que chaque citoyen doit continuer à fournir une photocopie de son avis d'imposition à sa mairie pour remplir ses démarches administratives annuelles.

## La solution

La DINUM simplifie radicalement ce processus. Dans un premier temps, elle a travaillé sur la mise en place d'un cadre juridique commun pour harmoniser et fluidifier les relations entre fournisseurs de données et fournisseurs de service. C'est la mise en place de l'article de la section [« Échange de données entre administrations » (L114-8 et suivants) du CRPA](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=EA87CA618644F6B9C1A66E4468F81BFD.tplgfr38s_3?idSectionTA=LEGISCTA000031367410&cidTexte=LEGITEXT000031366350&dateTexte=20161009).

Dans un deuxième temps, la DINUM a mis en place un outil pour faciliter cette mise en relation entre fournisseur et consommateur : DataPass. Cet outil s'adresse aux ayants droits qui souhaiteraient exploiter des données à caractère personnel. DataPass délivre des habilitations, à travers un parcours simple, standardisé et conforme, pour accéder à l'ensemble des données protégées produites par l'État.
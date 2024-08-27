---
mission: Aider nos parlementaires à estimer les impacts de leurs amendements avant vote.
incubator: dinum
repository: https://git.leximpact.dev/leximpact
contact: leximpact@an.fr
usertypes:
  - parlement
title: LexImpact
sponsors:
  - /organisations/assemblee-nationale
link: https://leximpact.an.fr
stats: false
phases:
  - name: investigation
    start: 2019-01-21
    end: 2019-04-03
  - name: construction
    start: 2019-04-03
    end: 2019-10-31
  - name: transfer
    start: 2019-10-31
    end: 2020-01-03
  - name: success
    start: 2020-01-03
thematiques: []
techno: []
---
## Le problème

Chaque année, toute ou partie de la population française est concernée par des changements fiscaux, hérités de modifications législatives régulières.

Aujourd’hui, le Parlement dispose de peu de moyens d'évaluation des amendements et propositions avant de voter la loi. Les impacts sur la population et les recettes sont donc trop souvent découverts pendant les débats, voire une fois la loi votée et mise à exécution.

En plus des observations fréquentes du Conseil d'État depuis 10 ans, plusieurs rapports appuient ces constats : le rapport remis par Valérie Petit et Pierre Morel-à-l’Huissier, sur [les dispositifs d’évaluation des politiques publiques](http://www.assemblee-nationale.fr/15/rap-info/i0771.asp) ; celui réalisé par Jean-Noël Barrot et Jean-François Eliaou sur [les moyens de contrôle et d’évaluation](http://www2.assemblee-nationale.fr/static/reforme-an/contr%C3%B4le/Rapport-2-GT4-contr%C3%B4le.pdf).

Enfin, au delà du manque de moyens général et en raison du calendrier législatif, les député·e·s et leurs collaborat·eurs·rices disposent de très peu de temps pour le chiffrage de leurs propositions. Or, aujourd’hui, il n’existe aucun outil simple d'accès, sans programmation, qui permette d’évaluer l’impact des réformes du système socio-fiscal, en quelques secondes. 

C'est pourquoi, là où le Parlement détient une expertise politique et juridique, LexImpact souhaite apporter un soutien en chiffrage, permettant de vérifier, dans une certaine mesure, la corrélation entre la vision politique souhaitée et les impacts sur la population française.

## Le produit

**LexImpact est une interface qui permet d’estimer, en quelques secondes, l'impact des réformes paramétriques** sur : 

* les [cotisations, les impôts et les prestations sociales de cas types](https://socio-fiscal.leximpact.an.fr/).
* le budget de l'État concernant l'impôt sur le revenu et la CSG (accessibles uniquement aux parlementaires) ;
* les [dotations aux communes](https://leximpact.an.fr/dotations).

**Le service s'appuie sur [OpenFisca](https://openfisca.org)**, logiciel libre créé en 2011 qui transforme le code législatif en code informatique.
**LexImpact a vu le jour lors d'un des défis de la promotion 3 des [Entrepreneurs d'intérêt général](https://entrepreneur-interet-general.etalab.gouv.fr/) en 2019**. Le premier produit, sorti à la fin du défi EIG, était circonscrit à l'Article 197 du CGI (impôt sur le revenu) et a été [utilisé lors du débat du Projet de Loi de Finances 2020](http://www2.assemblee-nationale.fr/recherche/amendements#listeResultats=tru&idDossierLegislatif=&idExamen=&missionVisee=&numAmend=&idAuteur=&premierSignataire=false&idArticle=&idAlinea=&sort=&sousReserveDeTraitement=&dateDebut=&dateFin=&periodeParlementaire=&texteRecherche=leximpact&zoneRecherche=tout&nbres=10&format=html&regleTri=ordre_texte&ordreTri=croissant&start=1).  

**Le code de LexImpact est libre**, sous licence AGPL-3.0, et peut donc être vérifié et amélioré par toutes et tous. Ce code source est disponible sur Gitlab, pour y accéder, rendez-vous sur la [rubrique "Un projet open source" de notre page "À propos"](https://leximpact.an.fr/a-propos).\
**Pour en savoir plus sur le fonctionnement de nos simulateurs**, vous pouvez [consulter cette page](https://leximpact.an.fr/comment-fonctionnent-les-simulateurs).

## Les prochaines étapes

Le défi LexImpact est pérennisé à l'Assemblée nationale depuis 2020. Ceci est acté par [décision de Questure au 12 décembre 2019](http://www2.assemblee-nationale.fr/15/le-college-des-questeurs/releves-des-decisions/2019/decisions-de-questure-de-la-reunion-du-12-decembre-2019).

Depuis le premier produit de 2019, circonscrit uniquement à l'impôt sur le revenu, le périmètre couvert par LexImpact s'est largement étendu.  
**LexImpact poursuit son amélioration continue au sein de l'Assemblée nationale et le service d'évaluation cherche à étendre son action à d'autres portions de la loi.**
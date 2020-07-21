---
title: LexImpact
mission: Aider nos parlementaires à estimer les impacts de leurs amendements avant vote !
owner: Assemblée nationale
incubator: dinum
status: alumni
phases:
  - name: investigation
    start: 2019-01-21
end: 2020-01-03
link: https://leximpact.an.fr
repository: https://github.com/betagouv/leximpact-client
stats: false
contact: leximpact@an.fr
---

# Le problème

Chaque année, toute ou partie de la population française est concernée par des changements fiscaux, hérités de modifications législatives régulières.

Aujourd’hui, le Parlement dispose de peu de moyens d'évaluation des amendements et propositions avant de voter la loi. Les impacts sur la population et les recettes sont donc trop souvent découverts pendant les débats, voire une fois la loi votée et mise à exécution.

En plus des observations fréquentes du Conseil d'État depuis 10 ans, plusieurs rapports appuient ces constats : le rapport remis par Valérie Petit et Pierre Morel-à-l’Huissier, sur [les dispositifs d’évaluation des politiques publiques](http://www.assemblee-nationale.fr/15/rap-info/i0771.asp) ; celui réalisé par Jean-Noël Barrot et Jean-François Eliaou sur [les moyens de contrôle et d’évaluation](http://www2.assemblee-nationale.fr/static/reforme-an/contr%C3%B4le/Rapport-2-GT4-contr%C3%B4le.pdf).

Enfin, au delà du manque de moyens général et en raison du calendrier législatif, les député·e·s et leurs collaborat·eurs·rices disposent de très peu de temps pour le chiffrage de leurs propositions. Or, aujourd’hui, il n’existe aucun outil simple d'accès, sans programmation, qui permette d’évaluer l’impact des réformes du système socio-fiscal, en quelques secondes. 

C'est pourquoi, là où le Parlement détient une expertise politique et juridique, LexImpact souhaite apporter un soutien en chiffrage, permettant de vérifier, dans une certaine mesure, la corrélation entre la vision politique souhaitée et les impacts sur la population française.

# Le produit

**LexImpact est une interface qui permet d’estimer, en quelques secondes, l'impact des réformes paramétriques** sur un périmètre actuellement limité à l'impôt sur le revenu.

LexImpact se décline en deux interfaces : 
- OPEN LexImpact, permettant d'estimer les **impacts d'une réforme sur des foyers fiscaux types**. 
- LexImpact POP permettant, en plus des fonctionnalités déjà présentes sur la version grand public, d'estimer **les impacts macros d'une réforme sur la population et les recettes de l'État**. LexImpact POP est, à ce jour, uniquement accessible aux parlementaires et leurs collaborat·eurs·rices, ainsi qu'aux administrat·eurs·rices impliqués dans la fabrique de la loi. 

Le service s'appuie sur [OpenFisca](https://openfisca.org), logiciel libre créé en 2011 qui transforme le code législatif en code informatique.
LexImpact est l'un des défis de la promotion 3 des [Entrepreneurs d'intérêt général](https://entrepreneur-interet-general.etalab.gouv.fr/).

Le code de LexImpact est libre, sous licence AGPL-3.0, et peut donc être vérifié et amélioré par toutes et tous. Ce code source est réparti en deux dépôts GitHub que voici :
* code source du [client leximpact](https://github.com/betagouv/leximpact-client),
* code source du [serveur leximpact](http://github.com/betagouv/leximpact-server).

# Les prochaines étapes

Le défi LexImpact est pérennisé à l'Assemblée nationale. Ceci est acté par [décision de Questure au 12 décembre 2019](http://www2.assemblee-nationale.fr/15/le-college-des-questeurs/releves-des-decisions/2019/decisions-de-questure-de-la-reunion-du-12-decembre-2019).

Le produit circonscrit à l'Article 197 du CGI est fonctionnel et il a été [utilisé lors du débat du Projet de Loi de Finances 2020](http://www2.assemblee-nationale.fr/recherche/amendements#listeResultats=tru&idDossierLegislatif=&idExamen=&missionVisee=&numAmend=&idAuteur=&premierSignataire=false&idArticle=&idAlinea=&sort=&sousReserveDeTraitement=&dateDebut=&dateFin=&periodeParlementaire=&texteRecherche=leximpact&zoneRecherche=tout&nbres=10&format=html&regleTri=ordre_texte&ordreTri=croissant&start=1). 
Il est désormais transmis à l'Assemblée nationale et accessible à cette adresse : [leximpact.an.fr](https://leximpact.an.fr)

**Les prochains objectifs sont que LexImpact poursuive son amélioration continue au sein de l'Assemblée nationale et que le service d'évaluation étende son champ d'action à d'autres portions de la loi.**

---
roles: Data-Scientiste + appétence backend
friend: Etalab
equipe: La branche IA d'Etalab
type: friend
contact: piaf@data.gouv.fr
techno: python
junior: false
open: false
---

# L'équipe Piaf recrute un·e Data-Scientiste expérimenté·e avec une appétence pour le dev backend

## Qui sommes-nous : 

#### La branche IA d'Etalab

La branche intelligence artificielle d’[Etalab](https://www.etalab.gouv.fr/) accompagne les administrations dans l’usage des datasciences et de l’Intelligence Artificielle. Elle créé aussi des outils en open-source là où des besoins en IA ont été identifiés. Piaf est l'un de ces outils.  
 
#### Piaf
Piaf permet aux administrations publiques qui ont de nombreux documents de mettre en place la **recherche d’information** dans ces documents, à moindre coût, et en quelques jours seulement, tout en gardant le contrôle des données. Le cas d'usage classique est la barre de recherche, mais ce n'est pas le seul. 
La solution mélange des modèles d’indexation classiques (type ElasticSearch) avec des modèles d’IA francophones afin d’améliorer considérablement les performances, et d’aller jusqu’à la réponse précise (Question-Answering) quand les solutions actuelles ne retrouvent que les documents. Pour en savoir plus sur les origines de Piaf, [c'est ici](https://piaf.etalab.studio/)

## Missions et rôle

Tu travailleras avec l'équipe actuelle (3 personnes) pour automatiser le produit actuel, et lui permettre de passer à l'échelle. Piaf est un produit puissant qui permet de configurer des chaines de traitement de texte pour obtenir la recherche de l'information la plus précise possible. Par exemple, Piaf permet de combiner Elasticsearch avec des embeddings de type [Sentence-Bert](https://www.sbert.net/) afin de palier aux limites des représentations creuses avec les avantages sémantiques des représentations denses (prendre en compte les synonymes par exemple). Piaf permet aussi d'intégrer le Question-Answering en bout de recherche d'Information. 

- Extraction, transformation et chargement des données
- Expériences NLP/ML pour maximiser la performance de notre outil pour chaque cas d'usage
  - automatisation du choix des paramètres (ex: méthodologie grid search)
  - analyses et documentation des résultats
  - test de performances continu: nous améliorons nos pipelines en continu et leurs déploiements sont automatiques
- Question-answering: fine-tuner les [modèles de QA francophones](https://huggingface.co/etalab-ia) que nous avons développé
- Prise en compte du feedback utilisateur pour améliorer les performances


Les technologies sont :

* [Haystack](https://github.com/deepset-ai/haystack) 
* [Transformers](https://github.com/huggingface/transformers)
* Python (debugging, code modulaire, notebooks)
* pandas, scikit-learn, pytorch, fairseq, sentence-bert
* ElasticSearch

## Compétences :

* D’au moins 3 ans d’expérience dans le web
* Familier des technologies listées
* Un bon sens du design
* Une préférence pour des solutions simples et durables
* Une connaissance des méthodes de développement agile
* Une connaissance des outils classiques (GitHub, CI, Figma, etc.)
* Dynamisme, autonomie et bienveillance


## Modalités de travail :

* Début de la mission **dès que possible.**
* Télétravail possible. Déplacements à Paris possible
* Contrat de 4 mois
* À 3 jours par semaine
* Taux Journalier Moyen à discuter, indicatif [ici](https://doc.incubateur.net/communaute/travailler-a-beta-gouv/recrutement/remuneration)

## Postuler :

Expliquez-nous pourquoi vous avez envie de nous rejoindre et envoyez-nous votre LinkedIn & GitHub  
piaf@data.gouv.fr

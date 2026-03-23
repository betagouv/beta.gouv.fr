---
layout: with-sidebar
sidebar: sidebar-a11y-2025.html
permalink: /accessibilite/evaluation-2025
title: Évaluation de l'accessibilité des services 2025
hero_title: Évaluation de l'accessibilité des services 2025
breadcrumbs:
    - title: Accueil
      link: /
    - title: Accessibilité
      link: /accessibilite
    - title: Évaluation de l'accessibilité des services 2025
---

[beta.gouv.fr](http://beta.gouv.fr) est un incubateur de services numériques publics dont l’ambition est de produire des services numériques répondant à des standards de qualité. Parmi ces standards, l’accessibilité numérique est primordiale : elle consiste à rendre les contenus et services numériques compréhensibles et utilisables par les personnes en situation de handicap.

Pour accompagner cet effort, le Pôle Numérique Inclusif (PNI) de [beta.gouv.fr](https://beta.gouv.fr) a pour mission de :
*   Accompagner les équipes et leurs incubateurs
*   Faire monter en compétence les membres de la communauté
*   Inclure l’accessibilité dans les pratiques

Dans cette optique, nous (le Pôle Numérique Inclusif) avons étudié l’accessibilité numérique d’un échantillon de services numériques du portefeuille, et souhaitons communiquer sur les apprentissages observés. Cette étude vise à encourager l’**amélioration de l’accessibilité** au sein des produits [beta.gouv.fr](http://beta.gouv.fr). Elle n’a pas pour but d’évaluer la conformité RGAA des services étudiés.

<p class="fr-text--sm">Cette analyse a été effectuée fin 2025. Elle ne tient pas compte des changements qui ont pu être effectués depuis.</p>

## Résultats de l’étude

### Niveau d’accessibilité

Sur un panel de 38 produits (sur les 213 produits de notre portefeuille, soit sur un échantillon de 18 % de nos produits), le niveau d’accessibilité se répartit ainsi :

<div role="group" class="fr-content-media fr-content-media--sm" aria-label="Répartition de l'échantillon par niveau d'accessibilité">
  <figure>
    <img src="/img/accessibilite/beta-bilan-a11y-2025-niveaux.png" alt="Répartition de l'échantillon par niveau d'accessibilité" />
    <figcaption class="fr-content-media__caption">Répartition de l'échantillon par niveau d'accessibilité</figcaption>
  </figure>
</div>

<div class="fr-table fr-table--no-caption">
	<div class="fr-table__wrapper">
    	<div class="fr-table__container">
      		<div class="fr-table__content">
				<table>
				  <caption>Niveau de qualité des sites étudiés</caption>
				  <thead>
				    <tr>
				      <th>Niveau d’accessibilité</th>
                      <th>2025</th>
				      <th class="fr-message">2024</th>
				      <th>Commentaire</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">Correct</th>
				      <td>29&nbsp;% des services</td>
				      <td class="fr-message">42&nbsp;% des services</td>
				      <td>La démarche d’accessibilité est entamée. Le service est prêt à s’engager vers la conformité via un audit RGAA.</td>
				    </tr>
				    <tr>
				      <th scope="row">Moyen</th>
				      <td>42&nbsp;%</td>
				      <td class="fr-message">27&nbsp;%</td>
				      <td>Le service a encore des lacunes d’accessibilité, mais les bases sont présentes.</td>
				    </tr>
				    <tr>
				      <th scope="row">Faible</th>
				      <td>25&nbsp;%</td>
				      <td class="fr-message">19&nbsp;%</td>
				      <td>Des erreurs basiques, facilement évitables (par exemple via des tests automatiques), sont en production.</td>
				    </tr>
				    <tr>
				      <th scope="row">Très faible</th>
				      <td>5&nbsp;%</td>
				      <td class="fr-message">12&nbsp;%</td>
				      <td>L’accessibilité n’est pas ou peu prise en compte.</td>
				    </tr>
				  </tbody>
				</table>
			</div>
		</div>
	</div>
</div>

Note : l'échantillon étudié est différent chaque année, mais se veut représentatif (voir notre [Méthodologie d'évaluation manuelle rapide](#méthodologie-dévaluation-manuelle-rapide))

<div class="fr-callout fr-icon-draft-line fr-callout--blue-ecume">
  <h4 class="fr-callout__title">Nos apprentissages</h4>
  <ul>
    <li><strong>La proportion de services ayant un niveau d'accessibilité correct est moins satisfaisante que l'année dernière.</strong>&nbsp;Dans une année marquée par les restrictions budgétaires, beaucoup d'équipes ont réduit et/ou ont réduit leur temps de travail. Cela semble se ressentir dans la qualité générale.</li>
    <li><strong>Toutefois, la part de produits avec un niveau d'accessibilité très faible diminue.</strong></li>
  </ul>
</div>

### Problèmes les plus fréquents

Pour mieux appréhender l'impact utilisateur du manque d'accessibilité (c'est-à-dire les difficultés d'accès auxquelles les usagères et usagers sont confrontés), nous avons estimé leur densité en « nombre de problèmes par page » (pb/p).

Les usagères et usagers de ces services rencontrent plus de <strong>5,5 problèmes d'accessibilité par page</strong>. Il s'agit d'une moyenne : sur l'ensemble du panel, certains services en concentrent davantage, d'autres beaucoup moins. Même si ce chiffre peut sembler faible, il traduit une forte pénibilité d'usage : dit autrement, une personne consultant consécutivement 5 pages peine sur des défauts d'accessibilité 27 fois au fil de son parcours.

On constate aussi que plus de la moitié de ces problèmes sont bloquants : c'est-à-dire que certaines personnes seront empêchées de naviguer, d'accéder ou de comprendre l'information <strong>plus de 3 fois par page</strong>.

<div role="group" class="fr-content-media fr-content-media--sm" aria-label="Densité de problèmes d'accès par page (pb/p)">
  <figure>
    <img src="/img/accessibilite/beta-bilan-a11y-2025-pb-par-page.png" alt="Densité de problèmes d'accès par page (pb/p)" />
    <figcaption class="fr-content-media__caption">Densité de problèmes d'accès par page (pb/p)</figcaption>
  </figure>
</div>

{%- capture alt -%}
Ce graphique en barres montre la densité (nombre de problème par page) par type de problème, de la plus à la moins élevée :
<ul>
    <li>Navigation : 2.5 problème par page dont 1.7 bloquants et 0.8 gênants</li>
    <li>Compréhension : 1.8 problème par page dont 1 bloquants et 0.8 gênants</li>
    <li>Perception : 0.8 problème par page dont 0.5 bloquants et 0.3 gênants</li>
    <li>Interaction : 0.4 problème par page dont 0.3 bloquants et 0.1 gênants</li>
</ul>
{%- endcapture -%}
{% include transcription.html id="problem-per-page-density" title="Densité de problème par page" alt=alt %}

Les problèmes les plus fréquemment rencontrés sont :
<ol>
    <li>Plus de <strong>2.5 problèmes de navigation</strong> (dont 1.7 bloquants) par page :</li>
        <ul>
            <li>La navigation au clavier est souvent laborieuse, avec plus de 2 problèmes par page : focus parfois invisible, manque de cohérence de l'ordre de tabulation et absence de lien d'évitement (1 fois sur 2), ce qui est pénible pour les personnes naviguant sans souris ;</li>
            <li>Un seul moyen de navigation, imposé au lieu de deux requis : 1 fois sur 2, l'unique moyen de navigation est un menu principal (sans recherche ou plan de site) ;</li>
            <li>Diverses difficultés de navigation par titres (0.4 pb/p).</li>
        </ul>
    <li>Environ <strong>1.8 problèmes de compréhension</strong> (dont 1 bloquant) par page :</li>
        <ul>
            <li>Impossibilité d'accéder à une information faute d'alternative correcte aux images, médias & vidéos, quasiment 1 fois par page (0.8 pb/p) ;</li>
            <li>Difficultés de compréhension dû à des titres de page non pertinent (0.5 pb/p, soit 1 page sur 2) ou des intitulés de liens et boutons non explicites (0.3 pb/p) ;</li>
            <li>Parfois langue du document inexacte, ce qui occasionne par exemple une vocalisation de la page en français dans une autre langue, la rendant incompréhensible des personnes utilisant un lecteur d'écran.</li>
        </ul>
    <li>Près de <strong>1 problème de perception</strong> par page (bloquant 1 fois sur 2) : textes illisibles lorsqu'ils sont consultés en gros caractères (0.4 pb/p), contrastes insuffisants (0.3 pb/p) et, très gênant bien que rare dans notre panel : mouvement ou clignotement intrusif (qui ne peut être stoppé).</li>
</ol>

### Erreurs courantes

Nous avons par ailleurs répertorié les erreurs majoritaires dans notre panel, c'est-à-dire les plus couramment commises par les équipes.

<div role="group" class="fr-content-media fr-content-media--sm" aria-label="Top des erreurs courantes">
  <figure>
    <img src="/img/accessibilite/beta-bilan-a11y-2025-erreurs.png" alt="Top des erreurs courantes" />
    <figcaption class="fr-content-media__caption">Top des erreurs courantes</figcaption>
  </figure>
</div>

{%- capture alt -%}
<div class="fr-table fr-table--no-caption" id="table-14-component">
  <div class="fr-table__wrapper">
    <div class="fr-table__container">
      <div class="fr-table__content">
    		<table>
    			<caption>Top des erreurs courantes</caption>
          <thead>
            <tr>
              <th></th>
              <th>Point de contrôle</th>
              <th>Problèmes bloquants</th>
              <th>Problèmes gênants</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Hiérarchie des titres</td>
              <td>32 %</td>
              <td>37 %</td>
              <td>68 %</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Systèmes de navigation</td>
              <td><strong>58 %</strong></td>
              <td>3 %</td>
              <td>61 %</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Lien d'évitement</td>
              <td><strong>47 %</strong></td>
              <td>13 %</td>
              <td>61 %</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Lisibilité en grands caractères</td>
              <td>29 %</td>
              <td>32 %</td>
              <td>61 %</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Alternatives aux images informatives</td>
              <td>26 %</td>
              <td>32 %</td>
              <td>58 %</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Visibilité du focus</td>
              <td>13 %</td>
              <td>39 %</td>
              <td>53 %</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Images décoratives ignorées</td>
              <td><strong>34 %</strong></td>
              <td>16 %</td>
              <td>50 %</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Intitulés des liens et boutons</td>
              <td>24 %</td>
              <td>26 %</td>
              <td>50 %</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Titre de page</td>
              <td>18 %</td>
              <td>32 %</td>
              <td>50 %</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Contrastes</td>
              <td>16 %</td>
              <td>36 %</td>
              <td>47 %</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>Responsive</td>
              <td>13 %</td>
              <td>34 %</td>
              <td>47 %</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
{%- endcapture -%}
{% include transcription.html id="common-errors-top" title="Top des erreurs courantes" alt=alt %}

Voici les erreurs commises sur plus de la moitié de notre panel :
<ol>
    <li><strong>68 % des services présentent des incohérences de titraille</strong> : la hiérarchie des titres ne reflète pas le contenu de la page, des balises sont utilisées non pour leur valeur sémantique de titre mais pour écrire en gros, etc.</li>
    <li>De nombreux services présentent des déficiences de navigation :</li>
        <ul>
            <li><strong>61 % n’ont pas de lien d’évitement fonctionnel</strong> (absent ou défectueux). Bien que ce composant soit disponible dans le DSFR, il n'est souvent pas implémenté.</li>
            <li>61 % des services imposent un seul système de navigation (alors que deux sont requis).</li>
            <li>53 % dégradent la visibilité du focus.</li>
        </ul>
    <li><strong>61 % des services perdent en lisibilité en gros caractères</strong> : textes tronqués, éléments fixes (sticky bar) qui recouvrent des contenus, etc. Cela montre que l'affichage en texte agrandi ne fait pas partie des tests usuels.</li>
    <li>La moitié des services ne traitent pas correctement les images non informatives (qui doivent être non seulement dépourvues d'alternative, mais aussi rendues silencieuses). Cela révèle un <strong>manque de maîtrise du codage accessible des images</strong> dans leurs différents formats : les balises <code>img</code> sont le plus souvent pourvues de leur attribut <code>alt</code>, mais les autres formats (<code>svg</code>, etc.) ne sont généralement pas correctement structurés.</li>
    <li>Enfin, de nombreux services <strong>peinent à proposer des intitulés suffisamment informatifs</strong> :</li>
        <ul>
            <li>Nous observons une certaine difficulté à rédiger l'alternative textuelle adéquate (sur 58 % des services) tant pour les images que pour les contenus riches.</li>
            <li>La moitié des services présente des intitulés de liens et boutons peu explicites : c'est le cas lorsqu'une série de liens s'intitulent de façon identique, par exemple « voir le dossier », sans préciser le nom de chaque dossier.</li>
            <li>Souvent identiques, les titres des pages de la moitié des services manquent de précision.</li>
        </ul>
</ol>

### Apprentissages

Au-delà des défauts d'accessibilité qui ressortent le plus (en général ou par équipe), nous avons aussi approfondi l'analyse sur certaines thématiques.

#### Des nouveaux points de contrôle pour mieux connaître les difficultés
Cette année, nous avons décidé d'ajouter quelques nouveaux points de contrôle au [protocole d'évaluation](/accessibilite/evaluation-2024) défini l'année dernière. Cela nous a permis d'identifier un problème récurrent qui échappait jusqu'alors à notre évaluation : <strong>le responsive est trop souvent oublié</strong>. En effet, <strong>seulement un produit sur 2 est correctement utilisable sur mobile</strong>. Un tiers présente quelques défauts d'affichage sur mobile et <strong>1 produit sur 6 n'est pas du tout utilisable sur mobile</strong>.

Concernant les 3 autres nouveaux points de contrôles (vidéos et sons, captchas ou mode sombre), les résultats nous permettent de confirmer que ces défauts sont rares dans notre échantillon. Plus de détail en annexe.

#### Les formulaires, source de difficulté, pour les usagers... et pour les équipes.
Les formulaires sont un point de contact avec les usagères et usagers, permettant l'interaction avec le service. Leur accessibilité est donc primordiale. De plus, dans notre échantillon, plus d'une page sur deux propose un formulaire.

Pourtant, nous avons observé que lorsqu'un formulaire est présent, on y détecte des <strong>erreurs dans la moitié des cas</strong> (48 %) : consignes de saisie absentes, mal associées ou peu explicites, champs obligatoires non signalés, etc. — sans compter les défauts que notre protocole ne permet pas de détecter.

#### Une qualité parfois hétérogène au sein d'un même service
Nous avons remarqué que le niveau d'accessibilité peut être très inégal au sein d'un même site. Par exemple :
<ul>
    <li>Des pages intérieures qualitatives, mais une page d'accueil peu accessible.</li>
    <li>Un site au niveau correct, mais dont l'accessibilité est fortement dégradée par l'intégration d'un service tiers sur l'une des pages.</li>
    <li>Un service développé de façon correctement accessible, sauf sur ses fonctionnalités récentes.</li>
</ul>
Ce constat rappelle que l'accessibilité ne réussit que si elle est travaillée par chaque membre de l'équipe, tout au long du projet.

#### De nombreuses erreurs évitables
Il est toujours très frustrant de constater que les problèmes les plus bloquants ne sont pas les plus compliqués à corriger. Par exemple :
<ul>
    <li>langue du document mal déclarée, alors qu'il suffit d'un attribut HTML <code>lang="fr"</code> ;</li>
    <li>absence de lien d'évitement, alors qu'il existe un <a href="https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement" target="_blank">composant prêt à l'emploi dans le DSFR</a> ;</li>
    <li>visibilité du focus dégradée, alors que la valeur native de la propriété CSS <code>outline</code> suffit ;</li>
    <li>etc.</li>
</ul>
Cela montre encore une fois que l'un des enjeux de l'accessibilité n'est pas la complexité de la discipline mais plutôt un manque de réflexes des équipes (qui pourraient être consolidés par de la formation, des process…).

#### Un Design System aidant... mais pas suffisant
Une partie de l'accessibilité est prise en compte par le [Système de Design de l'État](https://www.systeme-de-design.gouv.fr/version-courante/fr) (DSFR) au sein des composants mais aussi via la documentation associée. La majorité de notre panel (75 %) s'appuyant sur le DSFR, on a pu constater ses effets bénéfiques :
<ul>
    <li>Couleurs : les services qui utilisent exclusivement les palettes accessibles du DSFR ne présentent pas d'erreurs de contraste ; alors que c'est un problème courant en règle générale (dans le monde, plus de 79 % des sites font ces erreurs d'après <a href="https://webaim.org/projects/million/" target="_blank">la dernière étude WebAIM</a>)</li>
    <li>Formulaires : dans notre échantillon, l'absence d'étiquette de champ est une erreur rare. En comparaison, cette même erreur est courante dans le monde (65 % d'après <a href="https://almanac.httparchive.org/en/2025/accessibility#label-element" target="_blank">la dernière étude WebAlmanach</a>).</li>
</ul>

Cela confirme que l'usage d'un Design System accessible, tel que le DSFR, est un véritable bénéfice pour l'accessibilité.

Pourtant, malgré sa bonne adoption dans notre échantillon, nous constatons que cela ne suffit pas. Par exemple, l'absence de lien d'évitement est un problème récurent dans notre panel, alors que le composant existe, prêt à l'emploi, dans le DSFR. Son absence d'implémentation montre donc un manque de connaissance (de son fonctionnement, de sa nécessité…).

Cela nous rappelle que les ressources favorisant l'accessibilité, comme le DSFR, sont certes nécessaires mais pas suffisantes.

### Épilogue
Nous menons cette étude pour la deuxième année consécutive. Cet exercice nous est très utile pour :
<ul>
    <li><strong>Faire un état des lieux de la qualité d'accessibilité</strong> des produits de l'incubateur, plus précis que ce que ce que nous permettrait une analyse avec des tests automatiques.</li>
    <li><strong>Identifier les problématiques récurrentes</strong>, où le Pôle Numérique Inclusif peut mettre de l'énergie pour accompagner les équipes produits de beta.gouv.fr.</li>
    <li><strong>Encourager les équipes à entamer une démarche d'amélioration de l'accessibilité</strong> quand ce n'est pas déjà fait ; en proposant des prochaines actions claires.</li>
</ul>


### Annexes

#### Ressources
<ul>
    <li><a href="#méthodologie-dévaluation-manuelle-rapide">Méthodologie de l'évaluation manuelle rapide</a></li>
    <li><a href="/accessibilite/evaluation-2024" target="_blank">Résultat de l'évaluation 2024</a></li>
</ul>

#### Nouveaux points de contrôle

##### Mode sombre
Le Système de Design de l'État propose un composant [Paramètres d'affichages](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage) permettant aux usagers de choisir d’afficher le site en thème clair ou en thème sombre. Nous nous sommes interrogés sur la qualité de cette personnalisation, notamment quand le site présente des composants personnalisés. En effet, cela nécessite que l'équipe s'assure que le composant soit accessible dans les deux versions (thème clair et thème sombre).

En 2025, sur les 31 services utilisant le DSFR, 8 ont implémenté ce thème sombre (25 %) ; et <strong>seulement un service a mal implémenté ce thème sombre</strong>, en ne s'assurant pas que les contrastes minimums soient respectés ; le rendant ainsi contre-productif.

##### Captcha, vidéos et sons
Les vidéos ou sons qui se lancent automatiquement et les captchas peuvent être de véritables barrières en terme d'accessibilité.

Nous n'avions pas inclus ces points de contrôle dans notre protocole initial, car nous n'avions jamais rencontrés ces problèmes lors de nos accompagnements. Cette année, nous avons décidé d'ajouter ces points de contrôle à notre évaluation, par souci d'exhaustivité.

Ainsi, en 2025, nous avons pu constater que :
<ul>
    <li><strong>Aucun des services évalué ne propose de captcha</strong>. Les services ont choisi d'<a href="https://design.numerique.gouv.fr/articles/2024-11-28-captcha-et-accessibilite/#anchor-3" target="_blank">autres mécanismes de protection.</a></li>
    <li>18 services affichent des vidéos ou du son (soit 47 % de notre échantillon), mais seulement <strong>un le fait de manière problématique</strong> (vidéo en autoplay).</li>
</ul>

##### Responsive
Nous évaluions déjà l'utilisation de la page pour les personnes utilisant un zoom d'écran. Cette année, nous avons décidé de rajouter aussi un point de contrôle spécifique au responsive.

Nous avons trouvé que <strong>seulement un produit sur 2 est utilisable correctement sur mobile</strong>. Un tiers présente quelques défauts d'affichage sur mobile et <strong>1 produit sur 6 n'est pas du tout utilisable sur mobile</strong>.


## Méthodologie d'évaluation manuelle rapide
Nous avons réutilisé une méthodologie sensiblement similaire à celle de l'[année dernière](https://beta.gouv.fr/accessibilite/evaluation-2024#m%C3%A9thodologie-employ%C3%A9e) :
<ol>
    <li>Sélection de l'échantillon de services</li>
    <li>Constitution d’un échantillon réduit pour chaque service</li>
    <li>Inspection manuelle sur chaque page</li>
    <li>Évaluation du niveau d’accessibilité</li>
    <li>Communication à l’équipe concernée des principaux défauts identifiés</li>
</ol>

### Sélection d'un panel de services
Nous avons choisi d’inspecter les services numériques de notre portefeuille parmi les plus avancés et/ou ayant un fort impact. Ce panel contenait :
<ul>
    <li>4 <a href="https://beta.gouv.fr/startups/?national_impact=true" target="_blank">services à <i>impact national</i></a>. Ce sont les services « vitrine » de beta. Ils ont eu un impact significatif sur la vie de centaines de milliers voire de millions de Françaises et de Français.</li>
    <li>17 services <a href="https://beta.gouv.fr/fast/" target="_blank">candidats au FAST</a>. Ces services ont atteint suffisamment de maturité pour souhaiter « passer à l’échelle ». L’enjeu d’accessibilité est donc très important.</li>
    <li>🆕 17 services phares désignés par les différents <a href="https://beta.gouv.fr/incubateurs/" target="_blank">incubateurs du réseau</a>. Cela nous a permis de nous assurer que chaque incubateur était bien représenté au moins à hauteur de 10 % dans notre panel.</li>
</ul>
Ainsi, nous avons construit un échantillon de 38 produits (contre 26 l'année dernière).

### Constitution d’un échantillon réduit
Pour chacun des services du panel, nous avons identifié les 3 pages les plus pertinentes à inspecter. Nous avons systématiquement inspecté la page d'accueil, puis nous avons choisi deux autres pages de type :
<ul>
    <li>Formulaires (connexion, démarche, simulateur, recherche)</li>
    <li>Contenus, représentatifs du service</li>
</ul>
Nous avons ainsi inspecté un total de 114 pages.

### Inspection manuelle
Comme l'année dernière, pour que notre inspection reste rapide, reproductible et pertinente, nous avons choisi des points de contrôle :
<ul>
    <li>ayant un impact utilisateur fort</li>
    <li>dont le geste technique de vérification est rapide</li>
    <li>suffisamment variés (pour être représentatifs de la diversité des problèmes)</li>
    <li>pérenne (qui reste pertinent dans la durée, quelque soit le référentiel en vigueur)</li>
</ul>
Nous avons ainsi retenu une liste **27 points de contrôle**, répartis en 9 catégories :

<section class="fr-accordion fr-mb-3w">
  <p class="fr-accordion__title">
    <button type="button" class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-id">Voir tous les points de contrôles</button>
  </p>
  <div id="accordion-id" class="fr-collapse">
    <ul>
    <li>Langue</li>
        <ul>
            <li>Présence et pertinence de la langue principale de la page</li>
        </ul>
    <li>Titre des pages</li>
        <ul>
            <li>Intitulé de la balise <code lang="en">title</code> unique</li>
            <li>Intitulé de la balise <code lang="en">title</code> pertinent</li>
        </ul>
    <li>Images</li>
        <ul>
            <li>Présence d’un attribut <code>alt</code> pour chaque balise <code>img</code></li>
            <li>Absence d’alternative aux images décoratives</li>
            <li>Alternative pour chaque image informative</li>
            <li>Description détaillée de chaque contenu riche</li>
        </ul>
    <li>Hiérarchie des titres</li>
        <ul>
            <li>Hiérarchie des titres reflétant la page</li>
        </ul>
    <li>Contrastes</li>
        <ul>
            <li>Rapport de contraste suffisant sur les textes et composants graphiques</li>
            <li>🆕 Implémentation correcte du <span lang="en">Dark Mode / Contrast Switcher</span></li>
        </ul>
    <li>Zoom texte</li>
        <ul>
            <li>Lisibilité des textes lorsque les caractères sont agrandis de 200 %</li>
            <li>Absence d’images-texte</li>
            <li>🆕 Absence de surcouches d'accessibilité</li>
        </ul>
    <li>Navigation</li>
        <ul>
            <li>Cohérence de l’ordre de tabulation</li>
            <li>Visibilité du focus</li>
            <li>Pas de piège au clavier</li>
            <li>Lien d’évitement « Aller au contenu » fonctionnel</li>
            <li>🆕 Affichage responsive opérationnel</li>
            <li>Présence de deux systèmes de navigation</li>
            <li>Pertinence des intitulés de liens & boutons</li>
        </ul>
    <li>Formulaires</li>
        <ul>
            <li>Présence et pertinence des étiquettes de formulaires</li>
            <li>Champs obligatoires indiqués</li>
            <li>Intitulé explicite pour chaque bouton de formulaire</li>
            <li>🆕 Absence de captcha</li>
        </ul>
    <li>Vidéos et animations</li>
        <ul>
            <li>🆕 Pas de son ni de vidéo en autoplay</li>
            <li>Présence de sous-titres ou transcription pertinentes pour les vidéos informatives</li>
            <li>Mouvement ou clignotement peuvent être stoppés</li>
        </ul>
</ul>
  </div>
</section>
Comparativement à un audit RGAA, cette liste de contrôle n’est pas exhaustive : elle ne permet aucunement d’apprécier la conformité. Mais la frugalité de cette méthode d’évaluation a l’avantage d’être opérable en un temps très court : environ 30 minutes par service suffisent à obtenir une **grille d’évaluation** ainsi qu’un aperçu de son niveau d’accessibilité (voir section suivante).

#### Notation des problèmes
Nous avons conservé l'**approche centrée utilisateur&#x20;**&#x64;e notre évaluation : comme l'année dernière, nous avons nuancé la sévérité des erreurs d’accessibilité identifiées relativement au parcours utilisateur. Notre but était d’identifier les **points bloquants sur le parcours** dans ces pages.

En effet, un même défaut d’accessibilité n’a pas le même impact selon qu’il est en début de parcours ou niché dans une fonctionnalité secondaire. Par exemple, un champ de saisie non accessible dans le formulaire de login permettant d’accéder au service est un problème *majeur*, bloquant l’usager ou l’usagère, tandis que ce même défaut est *mineur* dans un formulaire de recueil d’avis (à plus forte raison s’il existe d’autre moyen de contacter le service).

Comme dans les audits d’ergonomie, notre notation reflète le **degré de sévérité&#x20;**&#x64;es défauts d’accessibilité relativement au parcours utilisateur. Pour chacun des points de contrôle, nous avons ainsi évalué si la page présentait :

<div class="fr-table fr-table--no-caption" id="legend-grid">
  <div class="fr-table__wrapper">
    <div class="fr-table__container">
      <div class="fr-table__content">
        <table>
          <caption>Description des différents types de problèmes</caption>
          <thead>
            <tr>
              <th>Type de problème</th>
              <th>Icône</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Problème bloquant <small>(majeur)</small></th>
              <td>❌</td>
              <td>Défaut(s) entravant le parcours et/ou présentant un grand nombre d'occurrences sur une même page.</td>
            </tr>
            <tr>
              <th scope="row">Problème gênant <small>(mineur)</small></th>
              <td>⚠️</td>
              <td>Défaut(s) présent(s), causant des difficultés, mais non critique(s) sur le parcours.</td>
            </tr>
            <tr>
              <th scope="row">Pas de problème</th>
              <td>✅</td>
              <td>Pas de défaut identifié.</td>
            </tr>
            <tr>
              <th scope="row">Non applicable</th>
              <td>N/A</td>
              <td>La page ne contient pas d'élément concerné par le point de contrôle.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

#### Évaluation du niveau d’accessibilité

Cette inspection est menée en regard croisé, par deux expertes du Pôle Numérique Inclusif, coutumières de l’évaluation experte de l’accessibilité. Mais contrairement à l’audit RGAA, cette méthodologie ne permet pas d’établir un *taux* ni même un *score* d'accessibilité.

En revanche, l'issue de l'évaluation permet d’apprécier si l’accessibilité est correctement, moyennement, peu ou pas prise en compte sur le service. Ainsi, nous exprimons un&#x65;**&#x20;appréciation** **globale** du niveau d’accessibilité de chaque service, en des termes simples :

<div class="fr-table fr-table--no-caption">
	<div class="fr-table__wrapper">
    	<div class="fr-table__container">
      		<div class="fr-table__content">
				<table>
					<caption>Description des niveaux de qualités d'accessibilité</caption>
				  <thead>
				    <tr>
				      <th>Niveau</th>
				      <th>Signification</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td><strong>Correct</strong></td>
				      <td>La démarche d’accessibilité est entamée. Le service est prêt à s’engager vers la conformité via un audit RGAA.</td>
				    </tr>
				    <tr>
				      <td><strong>Moyen</strong></td>
				      <td>Le service a encore des lacunes d’accessibilité, mais les bases sont présentes.</td>
				    </tr>
				    <tr>
				      <td><strong>Faible</strong></td>
				      <td>Des erreurs basiques, facilement évitables (par exemple via des tests automatiques), sont en production.</td>
				    </tr>
				    <tr>
				      <td><strong>Très faible</strong></td>
				      <td>L’accessibilité n’est pas ou peu prise en compte.</td>
				    </tr>
				  </tbody>
				</table>
			</div>
		</div>
	</div>
</div>

Note : Le niveau maximum est **correct**. Nous considérons que notre méthode d'évaluation n’est pas suffisamment exhaustive pour permettre d'identifier un « bon » niveau d’accessibilité.

### Communication aux équipes
À l'issue de l'analyse, nous envoyons un rapport, succinct mais personnalisé, à chaque équipe évaluée, en listant notamment :
<ul>
    <li>Les problèmes les plus marquants rencontrés sur le site</li>
    <li>Nos recommandations à l’équipe, en précisant des ressources de références en français.</li>
</ul>

### Protocole d’évaluation
Nous mettons la grille d’évaluation manuelle à disposition :
<ul>
    <li>Le premier onglet "Évaluation" contient une grille vierge ;</li>
    <li>Le second onglet "Mode d'emploi" fournit des indications génériques (sélection des pages, outils nécessaires, mode de fonctionnement de la grille) et précise le geste, la notation et exemplifie chaque point de contrôle.</li>
</ul>

N’hésitez pas à l’utiliser dans votre organisation si cela s’y prête :
<div class="fr-card fr-enlarge-link fr-card--download fr-card--sm fr-card--shadow">
  <div class="fr-card__body">
    <div class="fr-card__content">
      <h3 class="fr-card__title">
        <a hreflang="fr" data-fr-assess-file="bytes" download href="/content/docs/grille-vierge-evaluation-rapide-accessibilite-2026.ods">Télécharger la grille d'évaluation</a>
      </h3>
      <div class="fr-card__end">
      <p class="fr-card__detail fr-icon-calendar-fill">Mise à jour : <time datetime="2026-03-23">23 mars 2026</time></p>
      </div>
    </div>
  </div>
</div>

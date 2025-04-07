---
layout: with-sidebar
sidebar: sidebar-a11y-2024.html
permalink: /accessibilite/evaluation-2024
title: Évaluation de l'accessibilité des services 2024
hero_title: Évaluation de l'accessibilité des services 2024
breadcrumbs:
    - title: Accueil
      link: /
    - title: Accessibilité
      link: /accessibilite
    - title: Évaluation de l'accessibilité des services 2024
---

[beta.gouv.fr](http://beta.gouv.fr) est un incubateur de services numériques publics dont l’ambition est de produire des services numériques répondant à des standards de qualité. Parmi ces standards, l’accessibilité numérique est primordiale : elle consiste à rendre les contenus et services numériques compréhensibles et utilisables par les personnes en situation de handicap.

Pour accompagner cet effort, le Pôle Numérique Inclusif (PNI) de [beta.gouv.fr](https://beta.gouv.fr) a pour mission de :

*   Accompagner les équipes et leurs incubateurs
*   Faire monter en compétence les membres de la communauté
*   Inclure l’accessibilité dans les pratiques

*[PNI]: Pôle Numérique Inclusif


Dans cette optique, nous (le Pôle Numérique Inclusif) avons étudié l’accessibilité numérique d’un panel de services numériques du portefeuille, et souhaitons communiquer sur les apprentissages observés. Nous avons opté pour une méthode d'évaluation allégée (expliquée plus bas), plus rapide que l'audit RGAA, pour pouvoir tirer des apprentissages de notre gros portefeuille (plus de 200 services numériques) en un temps limité.

Cette étude vise à encourager l’**amélioration de l’accessibilité** au sein des produits [beta.gouv.fr](http://beta.gouv.fr). Elle n’a pas pour but d’évaluer la conformité RGAA des services étudiés.

<p class="fr-text--sm">Cette analyse a été effectuée en janvier-février 2025. Elle ne tient pas compte des changements qui ont pu être effectués depuis.</p>

## Résultats de l’étude

### Niveau d’accessibilité

Sur notre panel de 26 produits (soit 13 % de notre portefeuille global), le niveau d’accessibilité se réparti ainsi :

<figure role="group" class="fr-content-media fr-content-media--sm" aria-label="Répartition de l'échantillon par niveau d'accessibilité">
  <div class="fr-content-media__img">
    <img class="fr-responsive-img fr-ratio-16x9" src="/img/accessibilite/beta-bilan-a11y-2024-results.png" alt="Répartition de l'échantillon par niveau d'accessibilité" />
  </div>
  <figcaption class="fr-content-media__caption">Répartition de l'échantillon par niveau d'accessibilité</figcaption>
</figure>

<div class="fr-table fr-table--no-caption">
	<div class="fr-table__wrapper">
    	<div class="fr-table__container">
      		<div class="fr-table__content">
				<table>
				  <caption>Niveau de qualité des sites étudiés</caption>
				  <thead>
				    <tr>
				      <th>Niveau d’accessibilité</th>
				      <th>Services concernés</th>
				      <th>Commentaire</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">Correct</th>
				      <td>11 produits&nbsp;(42&nbsp;%)</td>
				      <td>La démarche d’accessibilité est entamée. Le service est prêt à s’engager vers la conformité via un audit RGAA.</td>
				    </tr>
				    <tr>
				      <th scope="row">Moyen</th>
				      <td>7 produits&nbsp;(27&nbsp;%)</td>
				      <td>Le service a encore des lacunes d’accessibilité, mais les bases sont présentes.</td>
				    </tr>
				    <tr>
				      <th scope="row">Faible</th>
				      <td>5 produits&nbsp;(19&nbsp;%)</td>
				      <td>Des erreurs basiques, facilement évitables (par exemple via des tests automatiques), sont en production.</td>
				    </tr>
				    <tr>
				      <th scope="row">Très faible</th>
				      <td>3 produits&nbsp;(12&nbsp;%)</td>
				      <td>L’accessibilité n’est pas ou peu prise en compte.</td>
				    </tr>
				  </tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<div class="fr-callout fr-icon-draft-line fr-callout--blue-ecume">
  <h4 class="fr-callout__title">Nos apprentissages</h4>
  <ul>
    <li><strong>La majorité de nos produits est sur la bonne voie.</strong> Nous avons identifié des problèmes d’accessibilité sur tous les services, mais ceux-ci étant en évolution constante, l'accessibilité pourra être améliorée chemin faisant.</li>
    <li><strong>Un tiers des produits a un niveau faible ou très faible.</strong> Il reste encore une grosse marge d’amélioration, au sein de l'incubateur, pour réduire cette proportion.</li>
  </ul>
</div>

### Problèmes les plus fréquents

Pour comprendre les problèmes d'accessibilité auxquels les usagers et usagères sont le plus souvent confrontés, le graphique suivant décompte le nombre total d'erreurs d'accessibilité identifiées sur l'ensemble des pages de notre panel de services :

<div class="fr-content-media fr-content-media--sm">
  <div class="fr-content-media__img">
    <img class="fr-responsive-img fr-ratio-16x9" src="/img/accessibilite/beta-bilan-a11y-2024-problems.png" alt="Fréquences des problèmes d'accessibilité - décrite ci-après" />
  </div>
  <span class="fr-content-media__caption">Fréquences des problèmes d'accessibilité</span>

{%- capture alt -%}

<div class="fr-table fr-table--no-caption" id="table-14-component">
  <div class="fr-table__wrapper">
    <div class="fr-table__container">
      <div class="fr-table__content">
		<table>
			<caption>Détail de fréquence des problèmes d'accessibilités</caption>
      <thead>
        <tr>
          <th>Problème d'accessibilité</th>
          <th>Problèmes bloquants</th>
          <th>Problèmes gênants</th>
          <th>Pas de problème</th>
          <th>Non concerné</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Navigation</th>
          <td>139</td>
          <td>53</td>
          <td>312</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">Images</th>
          <td>106</td>
          <td>45</td>
          <td>48</td>
          <td>136</td>
        </tr>
        <tr>
          <th scope="row">Formulaires</th>
          <td>65</td>
          <td>48</td>
          <td>54</td>
          <td>85</td>
        </tr>
        <tr>
          <th scope="row">Titres</th>
          <td>52</td>
          <td>19</td>
          <td>178</td>
          <td>3</td>
        </tr>
        <tr>
          <th scope="row">Titre de page</th>
          <td>43</td>
          <td>11</td>
          <td>114</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">Contrastes</th>
          <td>19</td>
          <td>16</td>
          <td>49</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">Zoom texte</th>
          <td>9</td>
          <td>27</td>
          <td>66</td>
          <td>66</td>
        </tr>
        <tr>
          <th scope="row">Langue</th>
          <td>11</td>
          <td>0</td>
          <td>73</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">Intitulés</th>
          <td>7</td>
          <td>8</td>
          <td>69</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">Vidéos &amp; animations</th>
          <td>11</td>
          <td>0</td>
          <td>0</td>
          <td>157</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
</div>

{%- endcapture -%}
{% include transcription.html id="frequence-problems" title="Fréquences des problèmes d'accessibilité" alt=alt %}

</div>

Parmi les problèmes les plus fréquents, trois catégories se distinguent :
1. La **navigation** cause le plus de difficultés, avec notamment :
    *   Un seul système de navigation proposé, généralement la barre de navigation principale, sans recherche ni plan de site.
    *   La navigation au clavier est laborieuse : ordre incohérent, piège au clavier…
    *   Le lien d'évitement « Aller au contenu » est souvent absent ou dysfonctionnel.
2. Les alternatives aux **images** sont trop souvent défectueuses, complexifiant l'accès à l'information, par exemple pour les personnes aveugles : 
    *   Des images informatives n'ont pas l'alternative textuelle, les privant de l'information qu'elles véhiculent.
    *   Des images décoratives possèdent une alternative textuelle, rendant trop verbeuse si pas inintelligible la vocalisation de la page.
3. Les **formulaires** ne respectant pas les bonnes pratiques d’accessibilité sont difficiles à utiliser pour tout le monde. Par exemple :
    *   Certains champs de formulaires n’ont pas de libellés : c'est une erreur bloquante, car elle ne permet pas de comprendre quelle information doit être saisie.
    *   Les champs obligatoires ne sont pas toujours clairement indiqués, ce qui complexifie l’expérience utilisateur.
    *   Les intitulés de boutons des formulaires ne sont pas toujours explicites.

Nous remarquons aussi que, bien que très peu de services utilisent de la vidéo ou des animations, lorsque c'est le cas, c'est toujours de façon problématique pour les usagers et usagères.

Enfin, nous avons considéré ces chiffres au regard de l'utilisation du Design Système de l'État (DSFR) :
* Contrairement à ce que l’on l’observe habituellement sur les évaluations d’accessibilité à grande échelle (comme [l’étude de WebAIM Million](https://webaim.org/projects/million/)), **les erreurs de contrastes ne sont pas majoritaires**. Nous faisons l’hypothèse que c’est un bénéfice de l’usage du DSFR.
* Nous sommes cependant surpris de constater **autant de problèmes au niveau des formulaires**. L’usage du DSFR ne semble pas suffire à éviter les erreurs d'accessibilité sur ces éléments centraux à l'expérience utilisateur, malgré la documentation accessibilité.

*[DSFR]: Design System de l'État

<div class="fr-callout fr-icon-draft-line fr-callout--blue-ecume fr-mt-4w">
  <h4 class="fr-callout__title">Nos apprentissages</h4>
  <ul>
    <li><strong>Certains problèmes sont très présents sur notre échantillon</strong>, notamment ceux relatifs à la navigation, aux images ou aux formulaires, trop souvent implémentées de manière problématique pour les utilisateurices.</li>
    <li><strong>Les vidéos et animations sont toujours problématiques</strong> bien que peux utilisées.</li>
    <li><strong>L'usage du DSFR semble atténuer certaines erreurs fréquentes</strong>, tel que les contrastes de couleurs.</li>
  </ul>
</div>

### Erreurs majoritaires dans notre panel

Nous avons par ailleurs répertorié les problèmes bloquants les plus courants, c'est-à-dire présents sur plus de la moitié de notre panel :
*   59 % des services n’ont pas de lien d’évitement fonctionnel (absent ou défectueux).
*   59 % des services manquent d'alternatives textuelles sur les images informatives.
*   52 % des services ne proposent qu’un seul système de navigation (bien que deux soient requis).

La récurrence de ces erreurs au sein de l'incubateur nous invite à prioriser des actions de formation en rapport.

<div class="fr-callout fr-icon-draft-line fr-callout--blue-ecume">
  <h4 class="fr-callout__title">Nos apprentissages</h4>
  <ul>
  	<li><b>Tous les services ont au moins un problème bloquant.</b> Certains sites peuvent en cumuler plus d’une vingtaine.</li>
  	<li><b>Certains problèmes sont présents sur plus de la moitié de notre échantillon</b> : liens d'évitement, alternatives textuelles ou sytème de navigation manquants.</li>
  </ul>
</div>

## Méthodologie employée

### Évaluer l’accessibilité de 200 services ?

[beta.gouv.fr](http://beta.gouv.fr) est un incubateur qui rassemble plus de 200 services numériques en cours de construction. Nous souhaitions avoir une idée de leur accessibilité qui soit obtenable dans un temps raisonnable tout en restant pertinente.

L'audit de conformité RGAA n'est pas praticable dans notre cas, compte tenu du volume de services, de leur nature inachevée et de sa méthodologie comptant un trop grand jeu de tests : cela nous aurait pris beaucoup trop de temps au risque, en outre, d'un résultat non pertinent pour nos produits qui évoluent constamment. Nous avions besoin d'une **évaluation ponctuelle**, rapide à obtenir.

Nous avons donc opté pour une **inspection manuelle rapide** sur un **panel** **représentatif** de notre portefeuille, dans le but de nous donner une **tendance du niveau d’accessibilité** des services incubés chez beta.gouv.fr. Par ailleurs, nous voulions que cette inspection soit peu chronophage et **reproductible** d’année en année.

### Panel des services inspectés

Nous avons choisi d'inspecter les services numériques de notre portefeuille parmi les plus avancés et/ou ayant un fort impact, c'est-à-dire :

*   les [services à impact national](https://beta.gouv.fr/startups/?national_impact=true) 2024. Ce sont les services « vitrine » de beta. Ils ont eu un impact significatif sur la vie de centaines de milliers voire de millions de Françaises et de Français.
*   les services [candidats au FAST](https://beta.gouv.fr/fast/) de fin d’année 2024. Ces services ont atteint suffisamment de maturité pour souhaiter « passer à l’échelle ». L’enjeu d’accessibilité est donc très important.

Notre panel compte donc 26 produits dont :
* 5 services à impact national
* 21 services candidats au FAST

Ces services constituent de plus un panel varié et représentatif du portefeuille de beta.gouv.fr :
* Ils proviennent de 13 incubateurs différents du [réseau beta.gouv.fr](https://beta.gouv.fr/incubateurs/).
* Ces services ont plusieurs cibles utilisatrices : les particuliers, les collectivités territoriales, les services de l’État, les entreprises et professionnels ou encore les associations :

<div class="fr-content-media fr-content-media--sm">
  <div class="fr-content-media__img">
    <img class="fr-responsive-img fr-ratio-16x9" src="/img/accessibilite/beta-bilan-a11y-2024-cibles.png" alt="Cible utilisatrice des produits audités - décrit ci-après" />
  </div>
  <span class="fr-content-media__caption">Cible utilisatrice des produits audités</span>

{%- capture alt -%}
<ul>
	<li>Particuliers : 15 services</li>
	<li>Collectivités territoriales : 15 services</li>
	<li>Services de l'État : 10 services</li>
	<li>Entreprises et professionnels : 9 services</li>
	<li>Associations : 6 services</li>
</ul>
{%- endcapture -%}
{% include transcription.html id="cibles" title="Cible utilisatrice des produits audités" alt=alt %}

</div>

### Protocole d'évaluation

Pour chaque service numérique, nous avons suivi la démarche suivante :

1.  constitution d'un échantillon réduit de 3 pages ;
2.  inspection manuelle de 24 points de contrôle sur chaque page ;
3.  évaluation du niveau d’accessibilité ;
4.  communication à l’équipe concernée des principaux défauts identifiés.

#### Échantillon de pages inspectées

Pour chacun de ces services, nous avons identifié les 3 pages les plus pertinentes à inspecter parmi les types de pages suivantes :

*   page d'*accueil* (inspectée systématiquement),
*   page de *contenu* représentatif du service,
*   page avec *formulaire* de type démarche (ou simulateur),
*   page de *connexion*, s’il y en a une.

Nous avons ainsi inspecté un total de 78 pages réparties comme suit :

<div class="fr-content-media fr-content-media--sm">
  <div class="fr-content-media__img">
    <img class="fr-responsive-img" src="/img/accessibilite/beta-bilan-a11y-2024-pages.png" alt="Type de pages auditées - décrit ci-après" />
  </div>
  <span class="fr-content-media__caption">Type de pages auditées</span>

{%- capture alt -%}
<ul>
	<li>Accueil : 33,3%</li>
	<li>Contenus : 48,7%</li>
	<li>Connexion : 6,4%</li>
	<li>Formulaires : 11,5%</li>
</ul>
{%- endcapture -%}
{% include transcription.html id="types-pages" title="Types de pages auditées" alt=alt %}

</div>

#### Points de contrôle

Pour que notre inspection reste rapide, reproductible et pertinente, nous avons choisi des points de contrôle :
*   ayant un impact utilisateur fort
*   dont le geste technique de vérification est rapide
*   suffisamment variés (pour être représentatifs de la diversité des problèmes)
*   pérenne (qui reste pertinent dans la durée, quelque soit le référentiel en vigueur)

Nous nous sommes inspirées des [Easy Checks](https://www.w3.org/WAI/test-evaluate/easy-checks/) de la Web Accessibility Initiative du W3C, qui ont l'avantage de proposer une dizaine de vérifications faciles donnant un premier aperçu de l'accessibilité web. Afin de constituer une grille d'évaluation maniable, nous avons eu besoin de décomposer certains de ces gestes en points de contrôles élémentaires (unitaires et discriminants). Nous avons consécutivement retenu une liste de **24 points de contrôle**, répartis en 10 catégories, testés dans cet ordre :

<section class="fr-accordion fr-mb-3w">
  <p class="fr-accordion__title">
    <button type="button" class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-id">Voir tous les points de contrôles</button>
  </p>
  <div id="accordion-id" class="fr-collapse">
    <ul>
      <li>Langue
        <ul>
          <li>Présence et pertinence de la langue principale de la page</li>
        </ul>
      </li>
      <li>Titre des pages
        <ul>
          <li>Intitulé de la balise <code class="language-plaintext highlighter-rouge">title</code> unique</li>
          <li>Intitulé de la balise <code class="language-plaintext highlighter-rouge">title</code> pertinent</li>
        </ul>
      </li>
      <li>Images
        <ul>
          <li>Présence d’un attribut <code class="language-plaintext highlighter-rouge">alt</code> pour chaque balise <code class="language-plaintext highlighter-rouge">img</code></li>
          <li>Absence d’alternative aux images décoratives</li>
          <li>Alternative pour chaque image informative</li>
          <li>Description détaillée de chaque contenu riche</li>
        </ul>
      </li>
      <li>Hiérarchie des titres
        <ul>
          <li>Au moins un hN</li>
          <li>Pas de saut de niveau</li>
          <li>Hiérarchie des titres reflétant la page</li>
        </ul>
      </li>
      <li>Contrastes
        <ul>
          <li>Rapport de contraste des textes et des composants graphiques avec leur arrière-plan</li>
        </ul>
      </li>
      <li>Zoom texte
        <ul>
          <li>Lisibilité des textes lorsque les caractères sont agrandis de 200 %</li>
          <li>Absence d’images-texte</li>
        </ul>
      </li>
      <li>Navigation
        <ul>
          <li>Cohérence de l’ordre de tabulation</li>
          <li>Visibilité du focus</li>
          <li>Pas de piège au clavier</li>
          <li>Lien d’évitement « Aller au contenu » fonctionnel</li>
          <li>Présence de deux systèmes de navigation</li>
        </ul>
      </li>
      <li>Intitulés (pour lecteur d’écran)
        <ul>
          <li>Pertinence des intitulés de liens &amp; boutons</li>
        </ul>
      </li>
      <li>Formulaires
        <ul>
          <li>Présence et pertinence des étiquettes de formulaires</li>
          <li>Champs obligatoires indiqués</li>
          <li>Intitulé explicite pour chaque bouton de formulaire</li>
        </ul>
      </li>
      <li>Vidéos et animations
        <ul>
          <li>Présence de sous-titres ou transcription pertinentes pour les vidéos informatives</li>
          <li>Mouvement ou clignotement peuvent être stoppés</li>
        </ul>
      </li>
    </ul>
  </div>
</section>

Nous avons limité les outils pour accompagner nos vérifications aux extensions [WAVE](https://wave.webaim.org/extension/), [Web Developer](https://chrispederick.com/work/web-developer/) et [Heading Maps](https://www.accessibility-developer-guide.com/setup/helper-tools/browser-extensions/headingsmap/), utilisées dans le navigateur Firefox.

Comparativement à un audit RGAA, cette liste de contrôle n'est pas exhaustive : elle ne permet aucunement d'apprécier la conformité. Mais la frugalité de cette méthode d'évaluation a l'avantage d'être opérable en un temps très court : environ 30 minutes par service suffisent à obtenir une **grille d'évaluation** ainsi qu'un aperçu de son niveau d'accessibilité (voir section suivante).

#### Notation des problèmes

Le but du Pôle Numérique Inclusif étant d'améliorer l'accès aux services pour les usagers et usagères, nous avons adopté une **approche centrée utilisateur** dans notre évaluation en nuançant la sévérité des erreurs d'accessibilité identifiées relativement au parcours utilisateur. Notre but était d'identifier les **points bloquants sur le parcours** dans ces pages.

En effet, un même défaut d'accessibilité n'a pas le même impact selon qu'il est en début de parcours ou niché dans une fonctionnalité secondaire. Par exemple, un champ de saisie non accessible dans le formulaire de login permettant d'accéder au service est un problème *majeur*, bloquant l'usager ou l'usagère, tandis que ce même défaut est *mineur* dans un formulaire de recueil d'avis (à plus forte raison s'il existe d'autre moyen de contacter le service).

Comme dans les audits d'ergonomie, notre notation reflète le **degré de sévérité** des défauts d'accessibilité relativement au parcours utilisateur. Pour chacun des points de contrôle, nous avons ainsi évalué si la page présentait :

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
              <td>Erreur(s) entravant le parcours et/ou présentant un grand nombre d'occurrences sur une même page. Nous avons choisi de retenir le nombre de problèmes bloquants comme indicateur significatif, à suivre d'année en année</td>
            </tr>
            <tr>
              <th scope="row">Problème gênant <small>(mineur)</small></th>
              <td>⚠️</td>
              <td>Erreur(s) présente(s), mais non critique(s) sur le parcours, causant des difficultés.</td>
            </tr>
            <tr>
              <th scope="row">Pas de problème</th>
              <td>✅</td>
              <td>Pas de défaut identifié.</td>
            </tr>
            <tr>
              <th scope="row">Non concerné</th>
              <td>NA</td>
              <td>La page ne contient pas d'élément concerné par le point de contrôle.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<figure role="group" class="fr-content-media fr-content-media--sm" aria-label="Aperçu de la grille d'évaluation">
  <div class="fr-content-media__img">
    <img class="fr-responsive-img" src="/img/accessibilite/beta-bilan-a11y-2024-grid.png" alt="Screenshot de la grille d'évaluation" />
  </div>
  <figcaption class="fr-content-media__caption">Aperçu de la grille d'évaluation</figcaption>
</figure>



#### Évaluation du niveau d'accessibilité

Effectuer cette inspection nous a permis d'apprécier, pour chacun des services, si l'accessibilité était correctement, moyennement, peu ou pas prise en compte. Cette inspection a été menée, en regard croisé, par deux expertes du Pôle Numérique Inclusif, coutumières de l'évaluation experte de l'accessibilité. Mais contrairement à l'audit RGAA, la méthode ici adoptée ne permet pas d'établir une formule de calcul pertinente. De plus, exprimer le niveau d'accessibilité observé de façon chiffrée ne nous était pas utile. Nous avons donc **exprimé une appréciation** **globale** du niveau d'accessibilité de chaque service, en des termes simples :

*[RGAA]: Référentiel Général d'Amélioration de l'Accessibilité

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

<p class="fr-text--sm">Note : Le niveau maximum est <strong>correct</strong>. Nous considérons que notre méthode d'évaluation n’est pas suffisamment exhaustive pour permettre de confirmer un « bon » niveau d’accessibilité.</p>

Sans surprise, nous constatons une corrélation entre le nombre de problèmes bloquants et la qualité globale du site :

<div class="fr-content-media fr-content-media--sm">
  <div class="fr-content-media__img">
    <img class="fr-responsive-img fr-ratio-16x9" src="/img/accessibilite/beta-bilan-a11y-2024-problems-dots.png" alt="Graphique montrant le nombre problèmes bloquants selon la qualité du site - décrit ci-après" />
    <span class="fr-content-media__caption">Nombre problèmes bloquants selon la qualité du site </span>
  </div>

{%- capture alt -%}
<ul>
	<li>Les services évalués « corrects » présentent entre 3 et 16 problèmes bloquants,</li>
	<li>ceux « moyens », entre 7 et 17 problèmes bloquants,</li>
	<li>les autres, « faibles » et « très faibles », comptent entre 19 et 29 problèmes bloquants.</li>
</ul>
{%- endcapture -%}
{% include transcription.html id="problems-dots" title="Nombre de problèmes bloquants selon la qualité du site" alt=alt %}
</div>

### Conclusion

Nous avons construit ce protocole pour répondre à nos besoins d'évaluation rapide de l'accessibilité d'un grand nombre de services. Nous en tirons des apprentissages satisfaisants puisqu'ils nous permettent d'orienter nos prochaines actions.

C’est la première fois que nous réalisons une telle évaluation. Celle-ci constitue donc un « point de départ » car nous souhaitons refaire l’exercice dans un an, en suivant le même protocole, pour comparer : notre souhait est d'observer une progression. 

Tous les services devraient atteindre un niveau « correct » d’accessibilité en cours d’incubation, afin de prétendre à la conformité totale en fin d’incubation.

Nous mettons la grille d'évaluation manuelle à disposition, n'hésitez pas à l'utiliser dans votre organisation si cela s'y prête : 

<div class="fr-card fr-enlarge-link fr-card--download fr-card--sm">
  <div class="fr-card__body">
    <div class="fr-card__content">
      <h3 class="fr-card__title">
        <a hreflang="en" data-fr-assess-file="bytes" download href="/content/docs/grille-vierge-inspection-rapide-accessibilite-2025.ods">Télécharger la grille d'évaluation</a>
      </h3>
    </div>
  </div>
</div>

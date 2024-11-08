---
layout: page
title: Politique de sécurité beta.gouv.fr
permalink: /security-policy
---

[Go to international content](/security-policy#international-content)

# Politique de sécurité

Ce document cadre la politique de divulgation des vulnérabilités pour tous les projets de beta.gouv.fr

## Politique de divulgation

Nous étudierons les rapports légitimes et mettrons tout en oeuvre pour répondre au plus vite. Merci de bien vouloir éviter la violation de la vie privée, la destruction de données et la dégradation ou l'interruption de nos services.

Il est également important de suivre les consignes listées dans la partie Proof of concepts ci-dessous pour assurer la qualité de votre démonstration.

Pour toutes questions ou doutes à propos de notre politique de divulgation, n'hésitez pas à nous contacter par email. Si besoin, nous mettons à disposition notre [clé PGP publique](/.well-known/pubkey.asc) pour assurer la confidentialité de la communication.

## Temps de traitement

Nous ferons au mieux pour respecter les temps de traitement suivants pour répondre aux professionnels participants :

**Réponse initiale :** 2 jours ouvrés maximum

**Réponse de traitement :** 10 jours ouvrés maximum

## Portée

Sont dans la portée de notre politique de sécurité tous les sous-domaines de beta.gouv.fr.

## Exclusions

Les types de tests suivant sont considérés comme hors de portée :

- Résultats d'un test physique comme un accès à un bureau.
- Résultats provenant de méthodes d'ingénierie sociale (hameçonnage par exemple).
- Résultats d'applications ou de systèmes hors de la portée de notre politique de sécurité.
- Rapport de vulnérabilité fondés sur un PoC vidéo.
- Rapport ne s'appuyant pas sur un PoC.
- Rapports théoriques sur de potentiels dommages.
- Vulnérabilités remontées par des outils automatisés ou des scanners sans analyses complémentaires.
- Les sujets liés à un service tiers doivent être rapportés à l'équipe en charge du service en question.

Les sujets suivants sont exclus :

- Déni de service sur la couche réseau
- Bugs UI/UX
- Problèmes d'en-têtes non accompagnés d'une démonstration fonctionnelle
- Divulgation de bannières de services

## Cadre de la preuve

Type de vulnérabilités

Quand rapporter

**XSS**

Un simple `alert(document.domain)` devrait suffire.

**RCE**

Merci de ne pas exécuter du code malveillant. Une simple évaluation de variable ou un _print_ devrait être suffisant pour démontrer la vulnérabilité.

**SQLi**

Rapporter le problème dès que vous avez une erreur SQL qui indique une injection ou bien divulgué la version du serveur SQL

**Redirection invalide**

Paramétrer la redirection vers `http://example.com`

**Divulgation d'informations**

Si votre rapport contient des données sensibles, vous pouvez utiliser notre clé PGP pour chiffrer votre message.

**CSRF**

Attachez soit un fichier démontrant la vulnérabilité ou coller le code dans votre rapport.

**SSRF**

Ne jouez pas avec le réseau interne s'il vous plait. Si vous devez retrouver un fichier, merci de ne requêter que le fichier `security.txt`.

**LFI**

La meme règle s'applique ici. N'allez pas à l'encontre de celles-ci et de la philosophie de ce document. Il devrait y avoir un fichier `security.txt` dans le dossier `.well-known`. Le retrouver devrait être suffisant pour administrer la preuve.

## Références

**Merci d'avance pour votre contribution à la sécurité de nos projets !**

Cette page est fortement inspirée de celle [d'Edoverflow](https://hackerone.com/ed?type=team&view_policy=true) contributeur de la [RFC9116](https://www.rfc-editor.org/rfc/rfc9116).

<a id="international-content"></a>

## Security policy

This is a vulnerability disclosure program for all of projects and code the organism publish.

## Disclosure policy

We will investigate legitimate reports and make every effort to quickly resolve any vulnerability. Please make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our services.

Please follow the guidelines listed in the Proof of concepts section below to ensure that your proof of concept is detailed enough to demonstrate the issue.

If you have any questions or concerns about our disclosure policy, please do not hesitate to contact us via email. If needed, you can use our [PGP public key](/.well-known/pubkey.asc) to protect your communication.

## Service-level agreement (Performance expectations)

We will make a best effort to meet the following expectations for professionals participating in this program: **Time to first response:** 2 business days or less. **Time to triage:** 10 business days or less.

## In-scope

All subdomains under beta.gouv.fr are in scope.

## Exclusions

The following test types are excluded from the scope:

- Findings from physical testing such as office access (e.g. open doors, tailgating).
- Findings derived primarily from social engineering (e.g. phishing, vishing).
- Findings from applications or systems not listed in the "Scope" section.
- Vulnerability reports with video only PoCs.
- Reports that state that software is out of date or vulnerable without a proof of concept.
- Highly speculative reports about theoretical damage.
- Vulnerabilities as reported by automated tools without additional analysis as to how they’re an issue.
- Issues in third-party services should be reported to the respective team.

The following issue types are excluded from scope:

- Network-level Denial of Service (DoS/DDoS) vulnerabilities
- UI and UX bugs (including spelling mistakes).
- Host header issues without an accompanying proof-of-concept demonstrating vulnerability.
- Banner grabbing issues.
- CSP uses unsafe-inline without solid PoC

## Proof of concepts

Issue type

When to report the issue

**XSS**

For XSS, a simple alert(document.domain) should suffice.

**RCE**

Please only execute harmless code. Simply printing something or evaluating an expression should be enough to demonstrate the issue.

**SQLi**

Report it as soon as you have a SQL error that indicates SQL injection or you are able to disclose the SQL server's version number.

**Unvalidated redirect**

Set the redirect endpoint to `http://example.com`.

**Information disclosure**

If your report contains sensitive data, please use our PGP key to encrypt it.

**CSRF**

Either attach a file to demonstrate the issue or paste the code in a code block in your report.

**SSRF**

Do not go playing around on any internal networks. If you feel the necessity to retrieve an internal file, please only request the internal `security.txt` file.

**LFI**

The same applies here — please do not go against the guideline listed in the Disclosure policy section. There should be a `security.txt` file located in the root directory. Being able to retrieve that file should be enough to demonstrate the issue.

## References

**Thank you for helping us keep our projects safe!**

Page strongly based on [Edoverflow security policy page](https://hackerone.com/ed?type=team&view_policy=true), contributor to [RFC9116](https://www.rfc-editor.org/rfc/rfc9116).

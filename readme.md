Cours de l'IUT de Haguenau 2016 (Option D-web)
==============================================

Cette page est faite pour les étudiants de l'IUT de Haguenau. Pour commencer, [créez vous un compte sur github](https://github.com/join) (c'est entièrement gratuit pour des projets publics, comme celui-ci).

Si vous avez des questions concernant un cours à venir, un problème d'installation, ou le module en général, n'hésitez pas à créer une issue (dans "Issues", puis "New Issue"), il faut d'abord avoir créé son compte Github.

Si vous voyez une erreur dans le cours, ou pensez qu'un point en particulier manque de détails, vous pouvez créer une pull request.

Tous les supports de cours (slides, ...) seront mis à votre disposition dans ce repository github.

Objectifs
---------

Les objectifs du cours sont :

-	Programmer en Javascript client
-	Savoir manipuler le DOM
-	Connaitre plusieurs frameworks JS (Angular et React)
-	Utiliser les APIs graphiques : canvas, svg
-	Apprendre à utiliser d3
-	Utiliser des API externes : Google, Facebook
-	Savoir organiser correctement son code
-	Apprendre à travailler en équipe
-	Savoir créer une webapp

Prérequis
---------

Voici les installations à faire pendant le premier cours :

-	[Git](http://git-scm.com/download/win) (v2.5 minimum)
-	[SourceTree](https://www.sourcetreeapp.com/) sur windows ou mac , ou [SmartGit](http://www.syntevo.com/smartgit/) sur linux
-	[NodeJS](https://nodejs.org/en/download/) et npm : Version 6 pour NodeJS, version 3 pour npm.
-	[Sublime text 3](http://www.sublimetext.com/3) (fortement conseillé), sauf si vous êtes déjà à l'aise avec un autre éditeur
-	[Package Control](https://packagecontrol.io/installation) pour Sublime text 3

Comme navigateur soit :

-	[Firefox](https://www.mozilla.org/fr/firefox/new/) et l'[extension Firebug](https://getfirebug.com/downloads/)
-	[Google Chrome](https://www.google.com/chrome/browser/desktop/index.html)

Pour vérifier que tout est correctement installé, ouvrez une invite de commande (sur windows : `Windows+R`, tapez "cmd" puis le bouton "OK", sur linux ou Mac : Ctrl+Alt+t)

et tapez :

```
git --version
# Ceci doit répondre git version 2.5.3 (ou plus élevé)

node --version
# Ceci doit répondre v6.6.0 (ou plus élevé)

npm --version
# Ceci doit répondre 3.10.8 (ou plus élevé)
```

Leçons
------

1.	[Introduction, Bases de Javascript](lessons/01-bases-js.md)
2.	[La manipulation du DOM avec jQuery](lessons/02-bases-dom-jquery.md)
3.	[Début de programmation fonctionnelle](lessons/03-programmation-fonctionnelle.md)
4.	[React](lessons/04-react.md)
5.	[React + es6](lessons/05-es6-react.md)
6.	[React Testing](lessons/06-react-test.md)

Découverte JS :
---------------

-	[d3.js](http://d3js.org/), data driven document, interfaces graphiques
-	Comparatif des différents framework JS : React/Angular/Vue.JS/Backbone
-	Architecture Flux / Redux
-	ES6, nouveau standard.
-	React-Native, utiliser React sur mobile pour faire des applications natives

Setup portable nodejs and npm
-----------------------------

-	Goto https://nodejs.org/en/download/current/ and download windows binary **.exe** 64 bit
-	Place node.exe in the %homepath%/bin directory that you create
-	Hit windows - edit environment variables for **your account**, and add %homepath%/bin to your Path
-	Open cmd and type `node --version`, it should show `v7.2.1`
-	Go to https://github.com/npm/npm/releases and download the latest source code release in **zip**
-	Extract npm to %homepath%/bin
-	Hit windows - edit environment variables for **your account**, and add %homepath%/bin/npm-4.0.5/bin to your Path
-	Open %homepath%/bin/nw-4.0.5/bin/npm.cmd and replace the content of that file with : `node "%~dp0\npm-cli.js" %*` (yes, just this one line)
-	**Close your terminal, and reopen it** (this is necessary for the new environment variables to apply)
-	Open your terminal, and type `npm --version`, you should have something like `4.0.5` printed
-	Run `npm install -g create-react-app`
-	Run `create-react-app my-app`

Run npm install -g without sudo :
---------------------------------

http://www.competa.com/blog/2014/12/how-to-run-npm-without-sudo/

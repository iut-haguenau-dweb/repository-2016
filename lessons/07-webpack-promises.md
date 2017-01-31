Cours 7
=======

Le but de ce TD est de voir deux sujets :

1.	Le fonctionnement de webpack
2.	Les `Promise` en JS, pourquoi et comment ?

Build systems
=============

-	broccoli
-	**browserify**
-	brunch
-	duo
-	gobble
-	**grunt**
-	**gulp**
-	jspm
-	msbuild
-	requirejs
-	**rollup**
-	sprockets
-	**webpack**
-	fly
-	start

Pourquoi
========

Un build system permet de définir quels opérations faire pour faire tourner votre code.

Comparaison
===========

-	https://www.quora.com/Why-are-there-so-many-build-systems-for-JavaScript-Which-one-should-I-use
-	http://survivejs.com/webpack/webpack-compared/

Make
====

-	Le plus vieux 1977
-	Très utilisé sur des projets en C
-	Principe de tasks

Make
====

```sh
PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

source_files := $(wildcard lib/*.coffee)
build_files  := $(source_files:%.coffee=build/%.js)
app_bundle   := build/app.js
spec_coffee  := $(wildcard spec/*.coffee)
spec_js      := $(spec_coffee:%.coffee=build/%.js)

libraries    := vendor/jquery.js

.PHONY: all clean test

all: $(app_bundle)

build/%.js: %.coffee
    coffee -co $(dir $@) $<

$(app_bundle): $(libraries) $(build_files)
    uglifyjs -cmo $@ $^

test: $(app_bundle) $(spec_js)
    phantomjs phantom.js

clean:
    rm -rf build
```

Grunt
=====

-	Basé sur de la configuration
-	Déclaratif
-	Utilisation de JSON pour décrire les taches

Grunt
=====

```javascript
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-stylus");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.initConfig({
		stylus: {
			compile: {
				files: {
					"public/css/styl.css": ["app/stylus/*.styl"] // compile and concat into single file
				}
			}
		},
		lint: {
		    files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
		    options: {
		        globals: {
		            jQuery: true
		        }
		    }
		},
	});
}
```

Grunt
=====

-	plus : beaucoup de plugins
-	moins : configuration assez difficile à écrire
-	moins : Difficile à comprendre au fur et à mesure

Gulp
====

-	Code avec des pipes
-	Déclaratif

Gulp
====

```javascript
const gulp = require('gulp');
const coffee = require('gulp-coffee');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

const paths = {
	scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee']
 };

// Not all tasks need to use streams.
// A gulpfile is just another node program
// and you can use all packages available on npm.
gulp.task('clean', del.bind(null, ['build']);

gulp.task('scripts', ['clean'], function() {
	// Minify and copy all JavaScript (except vendor scripts)
	// with sourcemaps all the way down.
	return gulp.src(paths.scripts)
		// Pipeline within pipeline
		.pipe(sourcemaps.init())
		.pipe(coffee())
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'));
});

// Rerun the task when a file changes.
gulp.task('watch', gulp.watch.bind(null, paths.scripts, ['scripts']));

// The default task (called when you run `gulp` from CLI).
gulp.task('default', ['watch', 'scripts']);
```

Gulp
====

-	plus: un peu plus simple à suivre que grunt
-	moins: beaucoup de code tout de même

npm scripts
===========

-	Très simple
-	Pas d'installation
-	Permet d'appeler un vrai task-runner

npm scripts
===========

```sh
"scripts": {
  "analyze": "./webpack-analyzer.bash",
  "build": "./build.bash",
  "build:maintenance": "MAINTENANCE=true ./build.bash",
  "dev": "webpack-dev-server --debug --devtool sourcemap --output-pathinfo --inline --hot --progress",
  "debug:preprod": "PCLM_TARGET=http://www.pre.pbscloud.io npm run dev",
  "debug:prod": "PCLM_TARGET=https://www.pbscloud.io npm run dev",
  "lint": "./case-checker.bash && eslint . ../../tests/acceptance --ignore-path ../../.gitignore --ext=.js,.jsx",
  "license-check": "./license-checker.bash",
  "test": "karma start karma.conf.js --single-run",
  "test:coverage": "NODE_ENV=coverage npm run test",
  "test-watch": "NODE_ENV=test karma start karma.conf.js",
  "unittests": "karma start karma.conf.js --single-run --browsers PhantomJS"
},
```

npm scripts
===========

-	plus: permet de lancer n'importe quelle commande
-	moins: limité néanmoins, on l'utilise avec un autre task runner

webpack
=======

-	Très dogmatique (tout fonctionne avec import)
-	Utilisation du système de modules
-	Utilisé par create-react-app

webpack
=======

https://webpack.js.org/concepts/

-	Entry: Le fichier d'entrée (app/index.js)
-	Output: Le fichier de sortie (build/bundle.js)
-	Loaders: Permet de définir comment importer un certain type de fichier (par exemple, sass-loader permet de faire `import main.sass`\)
-	Plugins: Permet de faire des transformations sur vos fichiers (par exemple `plugins: [new webpack.optimize.UglifyJsPlugin()]`\)

TD
==

On va maintenant créer notre projet webpack

Nous allons utiliser la version 2 de webpack :

La doc se trouve directement sur https://github.com/webpack/webpack

**Attention, il ne faut pas aller sur https://webpack.github.io/docs/ qui représente la doc de la version 1**

Install
=======

Commencons par créer notre projet dans un dossier `webpack-demo`

Puis

```sh
npm init --yes
npm install --save-dev webpack@2
```

Suivez ensuite :

https://webpack.js.org/get-started/

Promises
========

Les promesses servent à écrire du code asynchrone "comme" du code synchrone

Exemple
=======

Avec des callback

```javascript
Parse.User.logIn('user', 'pass', {
  success: function (user) {
    query.find({
      success: function (results) {
        results[0].save({ key: value }, {
          success: function (result) {
            // the object was saved
          }
        });
      }
    });
  }
});
```

Exemple
=======

Avec des promesses

```javascript
Parse.User.logIn('user', 'pass').then(function (user) {
  return query.find();
}).then(function (results) {
  return results[0].save({ key: value });
}).then(function (result) {
  // the object was saved
}).catch(function (err) {
  // an error happened somewhere in the process
});
```

Exemple
=======

On pourrait écrire aussi :

```javascript
const loginPromise = Parse.User.logIn('user', 'pass');
const queryPromise = loginPromise.then(function (user) {
  return query.find();
})
const savePromise = queryPromise.then(function (results) {
  return results[0].save({ key: value });
})

savePromise.then(function (result) {
  // the object was saved
}).catch(function (err) {
  // an error happened somewhere in the process
});
```

Create
======

Nous allons utiliser Bluebird : http://bluebirdjs.com/docs/getting-started.html, qui implémente des promesses très perfomantes et avec pas mal de fonctionnalités ajoutées.

```sh
npm install --save-dev bluebird
```

Commencons par créer une promesse qui résout une simple valeur string "foobar"

```javascript
import P from 'bluebird';
```

```javascript
const promise = new P(function(resolve, reject) {
	return resolve(['Hello', 'webpack'])
});
```

On peut ensuite utiliser cette promesse avec `.then(function)` (en cas de succès) ou `.catch(function)` (en cas d'erreur)

```javascript
promise.then(function (msg) {
	document.body.appendChild(component(msg));
})
```

Vous devez voir le composant 'Hello webpack' s'afficher.

Utiliser `.catch`

Au lieu d'appeler la fonction resolve, appelez la fonction reject, puis utilisez :

```javascript
promise.catch(function() {

})
```

pour afficher un message d'erreur

Reject , Fulfill
================

Une promesse ne peut être résolue une seule fois.

Vérifier qu'une promesse ne peut être mis en erreur après être résolue (et l'inverse)

Shortcut
========

Il est possible de créer une promesse sans avoir à faire

```javascript
new P(function(resolve, reject) {
	resolve('foo')
});
```

On peut à la place faire `P.resolve('foo')`

Essayer

De même, faire la même chose avec `P.reject(new Error("my error"))`

fetch Promise
=============

En utilisant `fetch` et l'URL : https://api.github.com/repos/twbs/bootstrap/issues?state=all

Faites en sorte de récupérer la liste des 30 premières issue jquery et affichez les sur la page

webpack CSS
===========

En utilisant :

npm install style-loader css-loader --save-dev

créez un fichier style.css et importez le (avec `import "./style.css"`\) pour ajouter du style à votre liste, par exemple mettre une bordure à vos issues.

multiple fetch
==============

On souhaite maintenant afficher toutes les issues de bootstrap

Faire en sorte de récupérer les 30 dernières issues, puis une fois que les 30 issues sont récupérées, récupérer les 30 issues suivantes, etc, jusqu'à ce que toutes les issues soient chargées.

On utilisera pour cela le "paging" , c'est à dire : https://api.github.com/repos/twbs/bootstrap/issues?page=2&state=all

parallel fetch
==============

Le fetch en série est un petit lent, vu qu'il y a plus de 100 requêtes à faire au total, et qu'on attend le résultat de la première pour répondre la seconde. Pour aller plus vite, on aimerait pouvoir charger les issues par paquet de 10 requêtes.

Pour cela, on utilisera : http://bluebirdjs.com/docs/api/promise.all.html

Faites en sorte de créer une variable `maxParallelRequests = 10`

On utilisera de préférence : https://lodash.com/docs#times qui permet d'appeler n fois une fonction.

error handling
==============

Faites en sorte que si le status de la réponse n'est pas 200, l'erreur remonte à l'utilisateur en faisant un throw après le fetch

webpack loaders
===============

De la même manière que l'on peut ajouter du CSS avec un simple import, on peut également faire cela pour la plupart des choses.

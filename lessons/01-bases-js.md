Cours 1
=======

-	Lien du cours :
-	https://github.com/iut-haguenau-dweb/repository-2016
-	Lien vers ces slides :
-	https://github.com/iut-haguenau-dweb/repository-2016/blob/master/lessons/01-bases-js.md

Deroulement
===========

1.	Présentation des élèves
2.	Questionnaire
3.	Premier cours JS Interactif
4.	Feedback sur le cours

Questionnaire
=============

Lien vers le questionnaire de premier cours

https://goo.gl/forms/nBRNUEdUiUlsC6c92

Liens
=====

https://developer.mozilla.org/fr/Apprendre/Commencer_avec_le_web/Les_bases_JavaScript

Histoire
========

-	JS créé par Brendan Eich en 1995
-	Standardisation du langage à partir de 1997 (ES1)
-	Apparition de jQuery en 2006
-	Nouveau standard ES5 (2009)
-	Node.js (2009)
-	Backbone Framework
-	Angular Framework
-	Nouveau standard ES2015 (Juin 2015)
-	Vuejs Library
-	React Library
-	Nouveau standard ES2016 (Juin 2016)

Variables
=========

var a, b;

a = 1;

b = a + 1;

Variables
=========

var a, b; // Déclaration

\{~a = 1;

b = a + 1;~}

Variables
=========

\{~var a, b;~}

a = 1; // Affectation (a LHS)

\{~b = a + 1;~}

Variables
=========

\{~var a, b;

a = 1;~}

b = a + 1; // Affectation et utilisation (b LHS, a RHS)

Variables
=========

```javascript
function foo(a) {
	console.log( a + b );
	b = a;
}

foo(2);
```

Variables
=========

```javascript
console.log(a);
a = a + 3;
console.log(a);
var a = 1;
console.log(a);
```

Quel est l'ordre d'éxécution ?

Variables
=========

See https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#compiler-speak

Scopes
======

https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch2.md#lex-time

DOM
===

```javascript
document.querySelector('html').onclick = function() {
    alert('Aïe, arrêtez de cliquer !');
}
```

DOM
===

```javascript
document.querySelector('html'){~.onclick = function() {
    alert('Aïe, arrêtez de cliquer !');
}~}
```

DOM
===

```javascript
{~document.querySelector('html').~}onclick{~ = function() {
    alert('Aïe, arrêtez de cliquer !');
}~}
```

DOM
===

```javascript
{~document.querySelector('html').onclick = ~}function() {
    alert('Aïe, arrêtez de cliquer !');
}
```

DOM
===

méthodes de window.document{~

-	document.getElementById('foo')
-	document.getElementsByClassName('bar')
-	document.getElementsByTagName('html')
-	document.querySelector('div > a.btn')
-	document.querySelectorAll('a.btn')~}

DOM
===

méthodes de window.document

-	document.getElementById('foo') // renvoie un element par identifiant <div id='foo'/>\{~
-	document.getElementsByClassName('bar')
-	document.getElementsByTagName('html')
-	document.querySelector('div > a.btn')
-	document.querySelectorAll('a.btn')~}

DOM
===

méthodes de window.document{~

-	document.getElementById('foo')~}
-	document.getElementsByClassName('bar') // renvoie un NodeList (similaire à tableau) par class html \[<div class="bar">, <span class="bar">]{~
-	document.getElementsByTagName('html')
-	document.querySelector('div > a.btn')
-	document.querySelectorAll('a.btn')~}

DOM
===

méthodes de window.document{~

-	document.getElementById('foo')
-	document.getElementsByClassName('bar')~}
-	document.getElementsByTagName('html') // renvoie un element par tag html <html/>\{~
-	document.querySelector('div > a.btn')
-	document.querySelectorAll('a.btn')~}

DOM
===

méthodes de window.document{~

-	document.getElementById('foo')
-	document.getElementsByClassName('bar')
-	document.getElementsByTagName('html')~}
-	document.querySelector('div > a.btn') // renvoie un element par selecteur (similaire à CSS), Ici, cela renvoie le premier lien de classe btn enfants directs de div{~
-	document.querySelectorAll('a.btn')~}

DOM
===

méthodes de window.document{~

-	document.getElementById('foo')
-	document.getElementsByClassName('bar')
-	document.getElementsByTagName('html')
-	document.querySelector('div > a.btn')~}
-	document.querySelectorAll('div > a.btn') // renvoie un NodeList par selecteur (similaire à CSS), Ici, cela renvoie les liens de classe btn enfants directs de div

Voir https://developer.mozilla.org/en-US/docs/Web/API/document

Element
=======

propriétés de element :

-	element.value
-	element.innerHTML
-	element.onclick

Code
====

```javascript
<html>
<body>
	<h1>Multiplication</h1>
	Enter Number 1:<input type="text" id="a1"><br>
	Enter Number 2:<input type="text" id="a2"><br>
	<button onclick="myFunction()">Product</button>
	<p id="a3"></p>
	<script>
 		function myFunction(){
			var a=parseInt(document.getElementById("a1").value);
			var b=parseInt(document.getElementById("a2").value);
			var c=a*b;
			document.getElementById("a3").innerHTML=c;
 		}
	</script>
</body>
</html>
```

Exercices
=========

Réécrivez la function `myFunction`:

-	sans utiliser `getElementById`.
-	en utilisant des variables intermédiaires pour stocker les éléments

Questions
=========

-	A quoi sert la fonction parseInt ?
-	Que se passe t-il si on oublie de l'utiliser ?
-	Que pensez vous de stocker des valeurs dans le DOM ?

Creer
=====

```javascript
<html>
<body>
	<p id="a3"></p>
	<script>
		var paragraph = document.getElementById("a3");
		var div = document.createElement("div")
		div.classList = "myclass";
		paragraph.appendChild(div);
	</script>
</body>
</html>
```

Supprimer
=========

```javascript
<html>
<body>
	<p id="a1"></p>
	<p id="a2"></p>
	<script>
		var paragraph = document.getElementById("a2");
		paragraph.remove();
	</script>
</body>
</html>
```

Parent
======

```javascript
<html>
<body>
	<p id="a1"></p>
	<p id="a2"><button>Remove paragraph</button></p>
	<script>
		var button = document.querySelector("button");
		button.onclick = function (e) {
			e.target.parentNode.remove();
		}
	</script>
</body>
</html>
```

Exercice
========

Écrire un morpion en JS pur.

-	On commence avec un jeu vide (3x3 cases)
-	Chaque joueur joue à son tour (le premier joueur joue croix, le deuxième joueur joue rond)
-	Le premier qui aligne trois croix ou trois ronds gagne (On affiche un alert)

Bugs
====

-	Scoping : http://stackoverflow.com/questions/26154150/javascript-function-inside-the-loop, https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md

Problematiques
==============

1.	Modèle pour stocker le morpion
2.	Méthodes d'accès au morpion
3.	Affichage dynamique du morpion
4.	Vérifications de la victoire

Feedback
========

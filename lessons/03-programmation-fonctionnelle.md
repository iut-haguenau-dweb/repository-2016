Cours 3
=======

Au prochain cours du 09/11, interro de 30 minutes sur les bases de Javascript et jQuery (pas le cours d'aujourd'hui)

Inspirations :

-	https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536#.lt6sh8dn1
-	https://en.wikipedia.org/wiki/Functional_programming

Deroulement
===========

1.	Retours sur le TP2 ~1h
2.	Cours / TD jQuery Programmation fonctionelle ~2h45
3.	Feedback sur le cours 15m

Functional Programming
======================

https://en.wikipedia.org/wiki/Functional_programming

-	Lisp
-	Haskell
-	Erlang
-	Elm

Concepts
========

-	**Signature**
-	**Recursion**
-	**Purity**
-	**Filter, Map, Reduce**
-	**Idempotence**
-	Referential transparency
-	Higher order functions
-	Immutability

Signature
=========

Qu'est ce que la signature d'une fonction ?

Signature
=========

La signature d'une fonction définit les entrées et sorties d'une fonction. La signature inclut le nombre d'arguments, leur type et leur ordre.

Add
===

```javascript
function add(a,b) {
	return a+b;
}
```

https://github.com/jsigbiz/spec

Add signature
=============

```javascript
add : ( a: Number, b: Number, ) => Number
```

Recursion
=========

Qu'est ce que la récursivité ?

Recursion
=========

Une fonction ou plus généralement un algorithme qui contient un appel à lui-même

Un algorithme récursif est un algorithme qui résout un problème en calculant des solutions d'instances plus petites du même problème1. L'approche récursive est un des concepts de base en informatique.

(Wikipedia)

Fibonacci
=========

```javascript
function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
```

Fibonacci
=========

```javascript
function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
```

Avantages
=========

Permet de simplifier un problème à deux cas :

-	le cas limite
-	le cas général

Pure function
=============

Qu'est ce qu'une fonction pure ?

Pure function
=============

-	qui est **déterministe**, c.-à-d. retourne toujours la même valeur pour les mêmes arguments ;
-	qui ne retourne que la valeur résultat, **sans effets de bord** tels que changements d'état, ou entrée-sortie (output/input).

Exemple pur
===========

```javascript
function multiply(a, b) {
	return a*b;
}
```

Exemple impur
=============

var c;

```javascript
function multiply(a) {
	return a*c;
}
```

Quizz
=====

```javascript
function getDate() {
	return new Date();
}
```

Quizz
=====

```javascript
function renderModel(model) {
	$("div#container").html("Votre nom est : " + model.nom);
}
```

Filter, map, reduce
===================

Qu'est ce que c'est ?

Filter, map, reduce
===================

Chacune sont des fonctions que l'on applique sur des tableaux, qui permettent de :

-	filter -> filtrer un tableau
-	map -> créer un nouveau tableau
-	reduce -> boucler sur le tableau et renvoyer une valeur

Filter
======

Soit

```javascript
var users = [
	{nom: "Jane", age: 25},
	{nom: "John", age: 12},
	{nom: "Mary", age: 17},
	{nom: "Hans", age: 22},
]
```

On souhaite récupérer les utilisateurs qui ont plus de 18 ans dans un tableau.

Écrire `getToBeOfAge(users)` qui soit une fonction pure, avec une boucle, puis avec `.filter`

Map
===

On souhaite maintenant récupérer les noms des utilisateurs dans un tableau.

Écrire `getNames(users)` qui retourne ["Jane", "John", "Mary", "Hans"], avec une boucle, puis avec `.map`

Reduce
======

On souhaite récupérer la moyenne d'âge des utilisateurs.

Écrire `getAverageAge(users)` avec une boucle, puis avec `.reduce`

TD
==

Jeu de Memory

Similaire à http://jt44.free.fr/def/memodinos/memo-dino.htm

Organisation du code
====================

10 minutes, par groupe de 2/3

Utilisez un outil de dessin pour expliquer comment vous allez organiser :

-	votre modèle (utilisez JSON !!)
-	vos fonctions principales

Card Shuffling
==============

Écrire une fonction récursive qui prend en argument un tableau de cartes et le mélange aléatoirement.

Le but est de faire en sorte que la fonction soit récursive.

RenderModel
===========

Écrire une fonction qui permette d'afficher votre modèle, et tester les cas ou la carte est retournée pour toujours, retournée temporairement, cachée.

Les images pour le jeu se trouvent dans `lesson3`

EventHandling
=============

Gérez correctement vos événements et faites en sorte que le jeu fonctionne.

Additions
=========

Affichez le nombre de coups joués en tout.

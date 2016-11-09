Cours 2
=======

-	Lien du cours :
-	https://github.com/iut-haguenau-dweb/repository-2016/blob/master/lessons/02-bases-dom-jquery.md

Deroulement
===========

1.	Cours / TD jQuery ~1h30
2.	Exercice ~ 1h45
3.	Feedback sur le cours 15m

Histoire
========

-	Créé par John Resig en 2006 (version 1)
-	A repopularisé JS
-	John Resig travaille de 2006 à 2011 à Mozilla, puis Khan Academy
-	Version 2 en 2013 (Drop IE6-8 support)
-	Version 3 en 2016 (Promises/A+ Support)
-	Partie de la jQuery Foundation, qui détient également ESLint, lodash, grunt, dojo

Contenu
=======

-	DOM API (Sizzle)
-	Ajax
-	Events
-	Utility functions $.each

Loading
=======

```html
<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
<script>
$(function() {
	// jQuery code
})
</script>
```

DOM API
=======

```javascript
$("selector")
```

selector est un CSS like selector

Selection
=========

```javascript
$("#id")
$(".class")
$("*")
$("[name=value]")
$(".class1 > .class2");
$(".class1:eq(2)");
```

DOM API
=======

```javascript
$(".test").hide();
```

DOM API
=======

```javascript
$(".test").show();
$(".test").toggle();
```

Selection
=========

jQuery permet de manipuler plusieurs éléments à la fois.

DOM API
=======

```javascript
var elements = document.querySelectorAll(".test")
for (var i=0; i<=elements.length; i++) {
	elements[i].style.display = 'none';
}
```

Events
======

```javascript
$(".test").on("click", function() {
	$("#foo").toggle();
});
```

Creation
========

```javascript
var $span = $("<span></span>").text("My text");
$(".class").append($span);
```

Creation
========

Noter la différence :

-	$("span") // sélectionne un élément du DOM
-	$("<span></span>") // crée un élément

Suppression
===========

$(".class").remove();

Methodes
========

```javascript
$(selector).css("font-size", "15px"); // Changer le style
$(selector).fadeOut(); // Faire disparaitre progressivement
$(selector).append("<span></span>"); // Ajoute un span enfant à la fin
$(selector).prepend("<span></span>"); // Ajoute un span enfant au début
```

Chaining
========

```javascript
$("#divTest2").text("Hello, world!")
			  .removeClass("blue")
			  .addClass("bold")
			  .css("color", "blue");
```

Exercice
========

Écrire une fonction showBox(selector) qui permet d'afficher une boite que l'on peut fermer

Partir de : [box.html](02-box.html)

L'image objectif est [box.gif](02-box.gif)

Exercice 2
==========

Ajoutez un bouton qui permet de créer des nouvelles boites que l'on peut fermer.

Ajax
====

Ajax permet de faire des requêtes en arrière plan, pour envoyer ou recevoir des données.

Ajax
====

```javascript
$.ajax("https://api.github.com/users/edi9999", {
	success: function(result) {
		console.log('A');
		console.log(result);
	}
});
console.log('B');
```

Event Loop
==========

https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch1.md#event-loop

Ajax
====

En JS pur:

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/edi9999");
xhr.onload = function() {
	if (xhr.status === 200) {
		var response = JSON.parse(xhr.responseText)
		console.log(response);
	}
}
xhr.send();
```

Exercice 3
==========

On souhaite maintenant récupérer la liste des issues github du projet jquery/jquery (par l'API), et les afficher avec les boites de l'exercice 2.

See [github.gif](02-github.gif)

Utility
=======

```javascript
var notes = [18, 19, 20];
var sum = 0;
$.each(notes, function(index, note) {
	sum += note;
});
console.log(sum);
```

Exercice 3.1
============

Reprendre l'exercice 3 et remplacer les boucles for par des $.each

Ajax post
=========

```javascript
$.ajax({
	url: "http://localhost:7777/",
	method: "POST",
    success: function(response) {
       console.log(response);
    },
	data: {
		title: "My first todo"
	}
});
```

Exercice
========

On va écrire un client de gestion de TODO avec le serveur http://todo-backend-sinatra.herokuapp.com/todos

Pour faire tourner le serveur en local :

```sh
git clone https://github.com/danielsiwiec/todo-backend-restify-redux.git
cd todo-backend-restify-redux
npm install
PORT=7777 npm start
```

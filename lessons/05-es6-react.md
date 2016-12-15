Cours 5
=======

Nous allons suivre le tutoriel tower-of-babel

Pour commencer, il suffit de faire

`npm install -g tower-of-babel`

Babel
=====

Babel est un compilateur de :

-	Javascript récent

vers

-	Javascript moins récent

TC39

ES6
===

-	Template Strings
-	Class, extension
-	Arrow functions
-	Modules
-	Block scope (let, const)
-	Rest , Spread
-	Destructuring
-	Iterators
-	Generators

Template Strings
================

Avant :

```javascript
var message = "Hello " + user;
```

Maintenant:

```javascript
var message = `Hello ${user}`;
```

Class
=====

Classes natives en JS :

```javascript
class Character {
	constructor("john") {
		this.name = name;
	}
}
var john = new Character("john");
```

Arrow Functions
===============

```javascript
[1,2,3].forEach((i)=> console.log(i));
```

Arrow Functions
===============

Le this à l'intérieur de la fonction n'est pas changé.

```javascript
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
```

Modules
=======

Permet d'importer un script depuis un autre.

a.js

```javascript
export default var a = 1;
```

b.js

```javascript
import a from './a.js';
console.log(a);
```

const
=====

const : non réassignable

```javascript
const c = {}
c.a = "foo" // OK

const a = 1;
a = 2; // ERREUR

const b = {};
b = {a: "foo"} //ERREUR
```

let
===

let : comme var, mais assigné au bloc

```javascript
for(let i=0;i< 10; i++) {
	console.log(i);
}
console.log(i);
```

```javascript
console.log(i);
for(var i=0;i< 10; i++) {
	console.log(i);
}
console.log(i);
```

computed prop
=============

avant :

```javascript
var id ="key"
obj = {};
obj[id] = "test"
```

maintenant

```javascript
var id ="key"
obj = {
	[id]: "test"
};
```

Iterators
=========

Permet de boucler sur plus que des tableaux (sur des Generators, c'est à dire des choses qui ressemblent à des fonctions)

Fin
===

Si vous finissez le tp, vous avez le choix :

-	https://github.com/domenic/count-to-6 si vous voulez voir si vous connaissez bien es6
-	https://github.com/mdunisch/lololodash si vous voulez apprendre une librairie utilitaire très utilisée en JS
-	https://github.com/asbjornenge/thinking-in-react pour apprendre React
-	https://github.com/maxogden/elementary-electron pour apprendre à faire une app native en JS

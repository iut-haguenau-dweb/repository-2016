Cours 1
=======

Apprendre le Javascript Frontend, et les technologies du web.

---

Questionnaire
=============

Lien vers le questionnaire de premier cours

https://goo.gl/forms/nBRNUEdUiUlsC6c92

---

Liens
=====

https://developer.mozilla.org/fr/Apprendre/Commencer_avec_le_web/Les_bases_JavaScript

---

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

---

Variables
=========

---

Variables
=========

var a, b;

a = 1;

b = a + 1;

---

Variables
=========

var a, b; // Déclaration

\{~a = 1;

b = a + 1;~}

---

Variables
=========

\{~var a, b;~}

a = 1; // Affectation (a LHS)

\{~b = a + 1;~}

---

Variables
=========

\{~var a, b;

a = 1;~}

b = a + 1; // Affectation et utilisation (b LHS, a RHS)

---

Variables
=========

See https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#compiler-speak

---

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

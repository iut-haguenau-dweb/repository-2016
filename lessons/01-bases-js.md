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

-	JS créé par Brendan Eich en 1995 -

---

Code
====

```
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

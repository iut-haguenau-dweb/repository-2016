Cours 6
=======

Le but de ce TD est de comprendre pourquoi et comment tester une application react.

Jest
====

Create react app utilise Jest pour faire des tests

Test
====

Pour lancer les tests, il suffit de :

```sh
npm test
```

Smoke Test
==========

Vérifier uniquement si le code ne jette pas d'exception

-	Créer un premier test qui vérifie que le composant "Montre que vous avez fait" marche.
-	Ajouter une erreur et vérifiez que le test passe en erreur

First Test
==========

Le but est maintenant de vérifier que notre montre affiche bien 3 aiguilles.

Avec Enzyme, nous allons donc faire ce test

Next Test
=========

Réfléchir aux autres tests que l'on pourrait effectuer du même type

Timing test
===========

On souhaiterait faire notre premier test de timing.

On souhaiterait par exemple tester que à 00:00:00, toutes les aiguilles sont vers le haut.

Timing bouge
============

On souhaite maintenant tester que si on avance l'heure de 1 seconde, l'aiguile des secondes change.

Click souris
============

On souhaite maintenant vérifier que si on clique sur la montre, elle change de couleur.

Digitale / Analogique
=====================

On souhaite maintenant vérifier que si on clique sur un bouton, la montre disparait et devient numérique

Utilisez deux méthodes différente pour vérifier que la montre est bien affichée en mode digitale

Test
====

Trouvez un autre test à faire sur votre montre (quitte à ajouter des fonctionnalités)

Si possible, faites votre test avant d'écrire votre code

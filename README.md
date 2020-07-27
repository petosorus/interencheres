# Rite de passage du padawan Front

## Préambule

L'objectif principal de ce test est de nous permettre d'évaluer votre coding style, votre rigueur et votre capacité à produire du beau code.
En parlant de beauté, vous êtes totalement libre concernant l'UI/UX de l'application: vous pouvez utiliser le framework CSS de votre choix afin d'embellir votre oeuvre. La seule condition à respecter étant que __l'application doit être responsive__.

## VueJS

Une application VueJS a été installée au préalable afin de vous aider à commencer le test. Cependant, libre à vous de changer de framework.
Vous pouvez lancer l'application via la commande `npm run dev`.

## JSON Server

Ce test utilise `json-server` pour simuler une api REST.
https://github.com/typicode/json-server
La db est stockée dans le fichier json `db.json` situé à la racine du projet.

Vous pouvez lancer l'api REST avec la commande `npm run server`.

## Les épreuves

### Épreuve 1
Votre première épreuve consistera à afficher la vente déjà créée et ses lots dans l'application VueJS.

### Épreuve 2

Votre application devra permettre de créer une vente avec des lots et de les persister dans le fichier `db.json`.

### Épreuve 3

Créer une nouvelle vue dans laquelle il sera possible de rechercher parmis les ventes et les lots avec un seul champ `input`.
Cet unique champ de recherche sera capable de trouver des ventes et des lots, à vous de trouver un moyen de les distinguer dans les résultats.

### Bonus

- Ajouter le konami code qui affiche un gif de votre choix


## Remarques du candidat

### Manques

 - Actuellement, l'application n'est pas testée. C'est ok là parce que c'est chronophage et que c'est un one shot qui ne resservira pas, et n'aura pas d'évolutions. Pour le travail quotidien, les tests sont une bonne chose pour avoir une première validation du fonctionnement, éviter les régressions, et éventuellement lever des doutes sur un fonctionnement particulier.
 - J'ai hésité à mettre du typescript. Ca m'aurait aidé pour les nouvelles ventes je pense, où j'aurais pu juste appeler un constructeur. La class Sale aurait porté les valeurs par défaut, c'est plus propre. C'est plus sûr aussi dans le cas de Sale.vue, on ne fait pas d'erreur en assignant vm.sale et vm.items
 - Le style est correct sans plus. Je n'ai pas été très inspiré.
  

### Ce que j'ai appris

- Je fais du VueJs depuis deux mois, donc j'ai mieux compris certains points. Je pense notamment à la guard/resolver interne au component Sale.vue pour charger les données avant affichage.
- Monter un projet est toujours intéressant, je maîtrise mieux l'organisation du style entre composants.
- J'ai (ré)appris à embed des (faux) gifs, et des vidéos, c'était amusant.
- Je ne connaissais pas JSON-server, c'est très cool pour le proto, même si j'aurais aimé pouvoir faire des joins, notamment sur Sale et éviter les promesses parallèles. Ceci-dit, ça m'a appris Promise.all()

### En conclusion

C'était intéressant :)

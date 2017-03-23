// // 1 Cibler l'élement sur lequel je veux poser un écouteur d'event
// var button = document.getElementById('#toggle-rectangle');
//
// // 3 Créer la fonction qui sera appelée quand l'évenement click est détecté
// function sayHello() {
// 	alert("Hey Hello!!!");
// }
//
// // 2 poser un écouteur d'évenement sur l'élement préalablement sélectionné
// button.addEventListener('click', sayHello);
//
//
// // DANS CET EXERCICE VOUS AVEZ BESOIN DE MODIFIER LE DOM AVEC :
// // elt.classList.add('maclass');
// // elt.classList.remove('maclass');
// //  elt.classList.toggle('hide');
//
var button = document.getElementById('toggle-rectangle');
var rectangle = document.querySelector('.rectangle');

function afficherCacher() {
    rectangle.classList.toggle('hide');
}
function remove() {
    rectangle.classList.remove('important');
}
function rouge() {
    rectangle.classList.add('important');
}
function vert() {
    rectangle.classList.toggle('good');
}
button.addEventListener('click' , afficherCacher);
rectangle.addEventListener('mouseenter' , rouge);
rectangle.addEventListener('mouseout' , remove);
rectangle.addEventListener('dblclick' , vert);

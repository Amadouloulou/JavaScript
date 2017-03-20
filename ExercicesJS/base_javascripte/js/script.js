console.log('hello world')






































//type d'informations possible:

/*
-- integer (nombre entier) ou float (nombre à virgule)
entier : 1, 2, 3, 152000
float: 1,52 / 53,12 / ...

-- string (chaine de caracteres) :
string : 'bouchon', 'voiture'...

-- Array (tableau)
['voiture', 'chien', 1, ['machin', 'truc']]

Acceder aux entrées du tableau :

var tableau =['voiture', 'chien', 1, ['machin', 'truc']]
var tableauMulti =['voiture', 'chien', {data: 'lorem', particule : 'lorem02', tableau : ['bidule', 'chouette'] }, ['machin', 'truc']]

console.log(tableauMulti[2].data)
console.log(tableauMulti[2].tableau[0])

nb elements :   1   ,   2   ,   3   ,   4
index :         0   ,   1   ,   2   ,   3

console.log(tableau[1])
// affichera
chien

objets javascript :
{
partie01 : Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

partie02 : ["Hector", "Pauline"],

partie03 : 152,
}

Accerder à une propriété objet:

creaObjet.partie01

console.log(creaObjet.partie02[1])

Intervenir dans le DOM

getElementBy...

getElementByTagName ==> permet de récuperer un type de balises

ex :

'''javascript


document.getElementByTagName('header')

var getHeader = document.getElementByTagName('header')
getHeader[0].id

document.getElementByName('elements01')


document.getElementByClassName('btn')

document.getElementById('logo')
var logo = document.getElementByTagName('logo')
logo.src =

document.getElementBy('header')
document.getElementBy('header')
document.getElementBy('header')


*/

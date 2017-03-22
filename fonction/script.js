// Déclaration : On crée la fonction
function direBonjour() {
	document.write('Hello ');
}

// On l'exécute
direBonjour();


// Déclaration : On crée la fonction
function additionner(nb1, nb2, operation) {
    switch(operation) {
    case '+' :
    result = nb1 + nb2
    break;

    case '-' :
    result = nb1 - nb2;
    break;

    case '*' :
    result = nb1 * nb2;
    break;

    case '/' :
    result = nb1 / nb2;
    break;

    document.write("Votre résultat est " + result);

}



//     var result = nb1 + nb2;
//     var result = nb1 - nb2;
//     var result = nb1 * nb2;
//     var result = nb1 / nb2;
//     document.write('le resultat est:' + result);
// }
//
// On l'exécute
additionner(55,102);

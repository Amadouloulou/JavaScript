// document.write('Hello World');
// window.alert('Salut');
// console.log('je suis Amadou');
//
// var prenom = 'Caroline';
// alert(prenom);
//
// const TAUX_TVA = 5;
// alert(TAUX_TVA);
//
// var prenom = window.prompt('votre prenom ?');
//
// document.write("Bonjour" + prenom )

// var prenom = 'Amadou';
// var age = "26"+"5";
// document.write("je m'appelle " + prenom + " et j'ai " + age + " ans")

// var nombre1 = window.prompt( 'Entrez un 1er nombre');
// var nombre2 = window.prompt( 'Entrez un 2ème nombre');
// nombre1 = parseInt(nombre1);
// nombre2 = parseInt(nombre2);
// var result = nombre1 + nombre2 ;
// document.write("le résultat est " + result);
const TAUX_TVA = 20;
var montant_ht;
var montant_tva;
var montant_ttc;

montant_ht =  window.prompt('Entrez un montant HT');

montant_ht = parseInt(montant_ht);
montant_tva = TAUX_TVA/100 * montant_ht;
montant_ttc = montant_ht + montant_tva;

document.write('<p>Pour un montant HT de ' + montant_ht + ' € il y a ' + montant_tva + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montant_ttc + ' €.</p>');

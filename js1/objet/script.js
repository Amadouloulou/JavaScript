// var maison;
//
// maison = new Object();
// maison = {};
//
// maison.couleurMurs = 'rouge';
// maison.nbPiece = 3;
// maison.etages = 2;
//
// var user= {};
// user.firstname = "Fred";
// user.friendList = ['Caro', 'Marie'];
//
// var user = {
// 	firstname : "Fred",
//     lastname : "Lo",
// 	friendList : ['Caro', 'Marie']
// }
//
// user.firstname = "Amadou";


// var voiture;
// var datedefabrication;
// var datedachat;
// var passager;
//
// voiture = new Object();
// voiture.marque = 'Aston Martin';
//
// datedefabrication = new Date('2015-02-05');
//
// passager = ['Yokoa', 'Mashiba']
// document.write("marque " + voiture)
// document.write()
// document.write('passager 1 ' + (passager[0]))
// document.write('passager 2 ' + (passager[1]))







// var voiture = new Object();
// var voiture = {};
//
// voiture.marque = ' Aston Martin';
// voiture.annee = 2012;
// voiture.date_achat = new Date('2017-02-05');
// voiture.passagers = ['Anohi', 'Otani'];
//
// voiture = {
//     marque = ' Aston Martin',
//     annee = 2012,
//     date_achat = new Date('2017-02-05'),
//     passagers = ['Anohi', 'Otani'],
// }
//
//
// console.log(voiture)
// voiture.marque = 'Fiat'
// console.log(voiture)




//
// const TAUX_TVA = 20;
// var montant_ht;
// var montant_tva;
// var montant_ttc;
// var remise;
// var pourcentage;
//
// montant_ht =  window.prompt('Entrez un montant HT');
// montant_ht = parseInt(montant_ht);
// remise = window.prompt('Souhaitez vous une remise en %');
//
// // montant_ht = parseInt(montant_ht);
// // montant_tva = TAUX_TVA/100 * montant_ht;
// // montant_ttc = montant_ht + montant_tva;
// // remise =
// //
// // document.write('<p>Pour un montant HT de ' + montant_ht + ' € il y a ' + montant_tva + ' € de TVA.</p>');
// // document.write('<p>Le montant TTC est donc de ' + montant_ttc + ' €.</p>');
//
// if( remise == 'oui' || remise == 'yes') {
//     pourcentage = window.prompt("Quel est la remise en pourcentage souhaiter");
//     pourcentage = parseInt(pourcentage)
//     montant_ht = montant_ht - (pourcentage/100 * montant_ht);
//     montant_tva = TAUX_TVA/100 * montant_ht;
//     montant_ttc = montant_ht + montant_tva;
//
//     document.write('<p>Pour un montant HT de ' + montant_ht + ' € il y a ' + montant_tva + ' € de TVA.</p>');
//     document.write('Avec une remise de: ' + pourcentage + '%');
//     document.write('<p>Le montant TTC est donc de ' + montant_ttc + ' €.</p>');
// }
// else {
//     montant_ht = parseInt(montant_ht);
//     montant_tva = TAUX_TVA/100 * montant_ht;
//     montant_ttc = montant_ht + montant_tva;
//     document.write("Aucune remise n'a ete appliquer");
// }




//
// var nombre1;
// var nombre2;
// var operation;
// var result;
//
// nombre1 = window.prompt("Saisissez un premier nombre");
// nombre2 = window.prompt("saisussez un deuxieme nombre");
// operation = window.prompt("Choisissez l'operation souhaiter");
//
//
// switch(operation) {
//
// 	case 'addition' :
// 	case '+' :
//     result = nombre1 + nombre2;
//     break;
//
//     case 'multiplication':
//     case '*':
//     result = nombre1 * nombre2;
//     break;
//
//     case 'soustraction':
//     case '-':
//     result = nombre1 - nombre2;
//
//     case 'division':
//     case '/':
//     result = nombre1 / nombre2;
// }
//
//
// document.write("votre resultat " + result)

// var computer;
// var player;
// var random;
//
//
// // Récupération du choix du joueur.
// player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');
//
//
// // Récupération d'un nombre aléatoire entre 0 et 1 inclus.
// random = Math.random();
//
// if(random <= 0.33)
// {
//     computer = 'pierre';
// }
// else if(random <= 0.66)
// {
//     computer = 'feuille';
// }
// else
// {
//     computer = 'ciseau';
// }
//
// document.write("<p>Choix de l'ordinateur : " + computer + '</p>');
//
//
// if(computer == player)
// {
//     document.write('<p>Vous avez choisi la même chose : égalité !</p>');
// }
// else
// {
//     // Le joueur et l'ordinateur n'ont pas choisi la même chose, la bataille commence !
//
//     switch(computer)
//     {
//         case 'ciseau':
//             if(player == 'pierre')
//             {
//                 document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
//             }
//             else // player == 'feuille'
//             {
//                 document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
//             }
//         break;
//
//         case 'feuille':
//             if(player == 'pierre')
//             {
//                 document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
//             }
//             else // player == 'ciseau'
//             {
//                 document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
//             }
//         break;
//
//         case 'pierre':
//             if(player == 'feuille')
//             {
//                 document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
//             }
//             else // player == 'ciseau'
//             {
//                 document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
//             }
//         break;
//     }
// }

var tableau

tableau = ['Stevy', 'Mariam', 'komakan', 'annissa']

document.write('<ul>')
for (var index=0; index<=3) {
	document.write('<li>'+followers[index]+'<li>')
}
document.write('<ul>')

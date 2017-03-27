var td;
var multiplication;
var colonne;
var ligne;
var taille;
var tableMultiplications;



taille = parseInt(window.prompt('Taille de la table de multiplications ?'));


tableMultiplications = [];



for(ligne = 1; ligne <= taille; ligne++)
{
    tableMultiplications[ligne] = new Array();

    for(colonne = 1; colonne <= taille; colonne++)
    {
        tableMultiplications[ligne][colonne] = ligne * colonne;
    }
}
multiplication = window.prompt('Multiplier par combien ?')
document.write("<table border='1px'>");
document.write("<tboby>");
for(var i = 1; i <=multiplication; i++) {

	document.write("<tr style='height:30px;'>");

	for(var j = 1; j <=multiplication; j++) {

		if(j == i) {
			td = "#84815B";
		}
		else {
            td = "#7FC6BC";
		}

		document.write("<td style='width:30px;background-color:" + td + "'>" + i*j + "</td>");
	}
	document.write("</tr>");
}
document.write("</tboby>");
document.write("</table>");



// var tableau = ['Amadou', 'Arnaud' , 'Money' , 'Coulou','yapiyapo', 'Colotouré', 'Diaga', 'Boulou'];
// document.write('<ul>')
//
// for(var i = 0; i < tableau.length; i++){
// document.write('<li>'+ tableau[i]+'</li>')
// }
//
// document.write('<ul>');

//Creation des variables auquel on fait appel dans le cours
var tableauFruits = ["bananes","fraises","pêches"];
var chiffre = 1;
var phrase = 'Hello World';
var chiens = ['Carlin','Labrador','Beagle'];
function affichage(){ console.log("Hello World")};

//Contenus du cours sous forme objet Javascript
var sommaire = {
  "debuter" : "Bienvenue dans la console.\n\nVous vous apprêtez à en apprendre un peu plus sur son utilisation.\nPour commencer à nous familiariser avec elle, nous allons nous servir de certains concepts en les abordant rapidement ; par exemple les variables.\n\nUne variable nous permet de stocker de l'information qui peut varier, et qui se présente sous différentes formes : sous forme de tableau : Array, sous forme d'informations structurées : Objet, sous forme de phrases : String, etc...\n\nA vous : juste en dessous, tapez : sommaire.variables",

  "variables" : "Parfait!\n\nVous venez d'afficher une information stockée dans une variable (sous la forme d'un objet). C'est la majeure partie de ce que vous ferez ici, et vous apprendrez que ceci peut-être très utile.\n\nOn déclare une variable en utilisant le préfixe var.\nLes variables peuvent contenir un grand nombre d\'informations différentes. Il existe 4 grands types de structures possibles.\n\nDes nombres\n(entiers = int / à virgule = float)\nvar chiffre = 1\n\nDes phrases sous forme de chaîne de caractères (string)\nvar phrase = 'Hello World'\n\nUn tableau\nvar chiens = ['Carlin','Labrador','Beagle']\n\nUn objet (la forme plus complète)\nvar sommaire = {'debuter' : 'Bienvenue dans la console...','variables':'Parfait ! Vous venez d'afficher...'}\n\nPour afficher un élément vous taperez : console.log(le nom de votre élément)\nCes 4 variables sont déjà déclarées dans notre document, vous pouvez donc les afficher de cette manière ; tapez console.log(nom de la variable)\n\nPour lire la suite, tapez --> sommaire.operateurs",

  'operateurs' : 'Comme dans des opérations mathématiques, on peut manipuler nos variables avec les opérateurs numériques ( + - / * ).\n\nAjoutons "1" à notre variable.\nTapez "nombre + 1". Le résultat affiché sera égal à 2. Affichez ensuite votre variable avec console.log(nombre).\n\nVous remarquez que la valeur de cette variable reste inchangée.\nCe que nous voulons maintenant c\'est lui ajouter "1" afin de la modifier pour de bon (une variable est par principe variable...)\nIl y a 3 manières de faire ceci.\n\nnombre = nombre + 1\nnombre += 1\nnombre++ (incrémentation de 1 uniquement)\n\nTapez une possibilité dans les 3 proposées.\nSa valeur a été modifiée, vous pouvez vous en assurer en tapant console.log(nombre). Vous pouvez également remarquer que l\'on ne met pas le préfixe var car la variable est déjà définie. On peut ainsi lui ajouter ce que l\'on veut.\n\nN.B. : Vous pouvez à tout moment afficher des instructions entrées précédemment en utilisant la flèche du haut de votre clavier.\n\nPour la suite tapez --> sommaire.string',

  'string' : "Une string est ce que l'on appelle une chaîne de caractères, elle sera toujours encadrée de guillemets, à la différence d'une variable contenant un nombre.\n\nDéclarez deux variables var phrase1 = 'Hello' et var phrase2 = 'World'.\nNous allons les additionner pour en faire une 3ème.\nEcrivez var phrase3 = phrase1 + phrase2.\nAffichez phrase3.\nOn appelle cela faire une 'concaténation'.\n\nSi vous affichez phrase3, les deux mots apparaissent collés. On veut que phrase3 soit écrit en deux mots séparés. Pour cela il nous faut un espace entre les deux mots.\nTapez phrase3 = phrase1 + ' ' + phrase2 (Ajout d'une string espace entre guillemets)\n\nLa suite --> sommaire.tableaux",

  'tableaux' : 'On appelle les tableaux Array. Ils permettent de stocker un grand nombre d\'informations, sous cette forme :\ntableauFruits = ["bananes","fraises","pêches"]\n\nOn peut les manipuler de différentes manières. Si l\'on souhaite ajouter un élément au tableau, on va utiliser la méthode objet push() : tableauxFruits.push("kiwi")\n\nAffichez tableauFruits puis tapez la commande précédente et affichez de nouveau le contenu du tableau.\n\nUn tableau utilise des index pour trouver chaque information. On fera appel à la valeur d\'un tableau avec l\'élément [] et son index.\nCet index débute à 0. Pour afficher le premier élément du tableau, on utilisera tableauFruits[0]. Amusez-vous maintenant à faire apparaître les différents éléments du tableau en utilisant l\'index correspondant.\n\nLe tableau possède une propriété objet appelée length (la longueur) qui est égale au nombre d\'éléments qu\'il contient. La propriété length dénombre la totalité des éléments et commence à partir de 1. Un tableau dénombrant 3 éléments aura un index comme ceci 0, 1, 2 et une length de 3.\n\nBonus : A tout moment, vous pouvez afficher une variable sous la forme d\'un tableau avec son index, sa length  etc. en faisant console.log([votre variable]). Cela est utile lorsque l\'on cherche à atteindre une information précise.\n\nAffichez une de nos variables déjà déclarées sous la forme d\'un tableau comme nombre, phrase ou chiens. Pour dérouler les informations du tableau, il faudra cliquer sur la flèche qui apparaîtra.\n\nLa suite --> sommaire.function',

  'function' : 'Programmation : les fonctions servent à activer des comportements. Elles se déclarent de la sorte :\n\nfunction affichage(){\n    console.log("Hello World")\n};\n\nN.B. : Pour sauter une ligne dans la console, il faut maintenir SHIFT et appuyer sur ENTREE\n\nUne fonction possède une propriété particulière appelée le scope, ou portée en français. Cela signifie qu\'un élément ou une variable déclarée à l\'intérieur de la fonction n\'existera qu\'au moment où la fonction sera définie. Une variable définie en dehors d\'une fonction sera de portée globale puisque atteignable à tout moment.\n\nIl existe différents moyens de sortir des informations d\'une fonction.\nPour lancer la fonction, on va écrire son nom suivi de parenthèses --> tapez affichage()\nLa string Hello World s\'est affichée correctement.\n\nVoyons maintenant la notion d\'argument : la suite -->sommaire.argument',

  'argument' : 'Les arguments peuvent aussi être appelés des place holders (c\'est à dire qu\'ils prennent la place de...). Ils vont nous permettre de définir une fonction avec une variable qui sera définie plus tard.\n\nDans le cadre de notre fonction affichage, vous allez maintenant la redéfinir avec un argument en place holder.\nEcrivez ceci : function affichage(info){console.log(info)};\nVous pouvez maintenant taper ce que vous souhaitez à la place de info : une string, un entier ou une variable existante.\n\nEssayez affichage(chiens).\nLa variable chiens ayant été definie précédemment, sa valeur prend la place du place holder.\n\nTapez maintenant affichage("n\'importe quoi")\n\nAvec la fonction affichage vous pouvez maintenant afficher ce que vous souhaitez.\n\nsommaire.boucles[0]',

  'boucles' : ['Une boucle sert à exécuter des propriétés de fonctions selon des paramètres définis. Il en existe 3 sortes. La boucle "while", la boucle "do while" et la boucle "for". Chacune possède une utilité qui lui est propre.\n\nLa suite sommaire.boucles[1]','La boucle while :\n\nLa boucle while s\'écrit sous cette forme:\nwhile(condition){exécution}\n\nLa partie "conditon" ressemblera à ceci : nombre < 10\nElle inclura une incrémentation de nombre à l\'intérieur du while. \n\nDans "exécution", il ne faut pas oublier l\'incrémentation de i. En effet si vous oubliez d\'incrementer votre variable, vous produirez une boucle infinie car i sera toujours égal à 0. Cela peut être fatal dans le cas d\'informations complexes retournées par la boucle.\n\nTapez ceci :\n var i = 0\nwhile(i<10){\n    console.log(i)\n    i++\n};\n et appuyez sur entrée.\n\nVous pouvez utiliser cette forme de boucle dans le cas où vous souhaitez exécuter une propriété jusqu\'à un certain point.\n\nLa suite --> sommaire.boucles[2]','La boucle do while :\n\nElle s\'écrira sous cette forme :\ndo{\n    instruction 1\n    instruction 2\n    instruction 3...\n}while(condition)\n\nPour avoir le même résultat que dans la boucle précédente, exécutez dans la console ceci\n var j = 0 do{\n    console.log(j)\n    j++\n}while(j<10)\n\nVous pouvez remarquer que cette fois le nombre 10 est affiché car la conditon n\'est analysée qu\'après l\'exécution des instructions.\n\nLa suite --> sommaire.boucles[3]','La boucle for :\n\nC\'est la boucle la plus couramment utilisée. Elle permet de faire ce qui pourrait s\'apparenter à un mapping. Le plus souvent, elle sert à explorer les éléments contenus dans un tableau.\n\nElle s\'écrira sous cette forme :\nfor(initialisation;condition;incrémentation){instructions;...}\n\nVous avez peut-être remarqué que cette partie sur les boucles s\'affiche comme ceci depuis tout à l\'heure --> sommaire.boucles[0], sommaire.boucles[1]... Le schéma de données est constitué de la sorte :\n "Sommaire" est en fait un objet à plusieurs entrées et "boucles" contient un tableau.\n\nA l\'aide d\'une boucle for on va afficher tous les éléments de "boucles". Procédez de la sorte :\n\nfor(var i = 0;i<sommaire.boucles.length;i++){\n    console.log(sommaire.boucles[i])\n}\n\net appuyez sur entrée.','Bravo!!\n\nExpliquons maintenant ce qu\'il vient de se passer.\n\nvar i est votre variable d\'incrémentation.\nRappelez vous que, dans le cas d\'un tableau, le premier index est égal à 0 et la propriété length commence à 1. Length sera donc toujours égale à +1 par rapport à l\'index.\nPour explorer notre tableau en entier, on voudra donc que la valeur de i soit toujours strictement inférieure à sommaire.boucles.length.\n\nReproduisez l\'exercice avec le tableau chiens en procédant de la même façon.\n\nPassons maintenant au cas pratique --> sommaire.exo01'],

  'exo01' : 'En utilisant les éléments vus précédemment, affichez dans la console une pyramide constituée de "#" possédant 7 étages. Elle devra ressembler à ceci :\n\n#\n# #\n# # #\n# # # #\n# # # # #\n# # # # # #\n# # # # # # #\n\nN\'oubliez pas qu\'à tout moment vous pouvez accéder à n\'importe quel chapitre abordé précédemment en affichant le sommaire avec console.log(sommaire) et en appelant la propriété objet avec le "." et la propriété desirée.\n\nEn cherchant bien vous devriez trouver la correction de cet exercice dans l\'objet js "sommaire", aprés avoir essayer par vous même biensur.\nUne fois que vous avez réussis, pas avant, on par sur un truc un peu plus dure mais central dans le Javascript --> sommaire.DOM',

  'correctionExo01' : 'var ash = "#"\n\nfor( var i = 0; i < 7; i++ ){\n    console.log( ash )\n    ash += " #"\n};\n\nla suite --> sommaire.DOM',

  'DOM' : {
    'definition' : 'Le DOM est un diminutif de document, c\'est ainsi que l\'on nomme la page HTML en Javascript. Le Javascript est un language qui permet d\'intervenir directement dans le DOM pour changer des éléments en temps réel. Il est très puissant lorsqu\'il s\'agit de mettre en place une interactivité avec l\'utilisateur.\n\nEn utilisant le Dom en Javascript on s\'appuis sur des elements que l\'on va chercher directement sur la page Html. On va utiliser pour cela l\'element objet "document" qui va nous permettre d\'avoir accés aux elements qui se trouvent à l\'interieur. \n* Pour voir à quoi cela ressemble tapez dans la console --> console.log(document)\n* Pour observer les propriété de l\'objet document tapez console.log([document])(cela affichera l\'element comme si il était dans un tableau)\n\nLa suite --> sommaire.DOM.propriétés',

    'propriétés' : 'Si vous avez affiché le document avec la commande console.log([document]), vous avez pu constater qu\'en déroulant le contenus du tableau on peu y voir plusieurs selecteurs que l\'on va pouvoir manipuler.\n\nOn s\'y jète?\nCommençont par selectionner la balise body afin de changer sa propriété de style background-color. Pour cela, on va mettre en place un script de travail qui va nous permettre d\'avancer et d\'evoluer dans notre selection de contenus.\n1. Definissez une variable de manipulation. La mienne s\'appelera var manipulateur = "hey!"; ("handler" en anglais).\n2. mettez en place un console.log tout de suite aprés qui va afficher la valeur de cette variable, afin de verifier en permanence ce que l\'on est en train de faire. \nvar manipulateur = "hey"\nconsole.log(manipulateur). On à maintenantune base de travail qui va nous permettre d\'afiner notre recherche de l\'element body. \nN\'oubliez pas qu\'avec la flèche du haut vous pouvez afficher le code precedemment tapé. Cela va vous permettre de récuperer le travail en cours et de le faire evoluer.\n\nLa suite --> sommaire.DOM.getElementsBy',

    'getElementsBy' : 'il existe une methode qui permet de recuperer un selecteur du document qui fonctionne de la sorte --> document.getElementsByTagName("nom de balise").\nTag name signifie "nom de balise", on va donc pouvoir selectionner plusieurs elements via leur nom de balise. Cela va nous renvoyer une liste d\'elements sous forme de tableau.\nIl en existe d\'autres : getElementsByClassName("selecteur de la class") ( par nom de class )\ngetElementsByName("attribut nom element") ( selectionne l\'element via son attribut name )\ngetElementById ( selectionne l\'element par son ID ) Il y a une specificité sur ce dernier. dans getElementById element est au singulier par une Id est par definition unique dans le document. \n\nRécuperez le script tapé precedemment et donnez à votre variable la valeur "document.getElementsByTagName("body")" et affichez la avec console.log (si vous avez récuperer le script avec fleche du haut cela doit se faire automatiquement).\n\nLa suite --> sommaire.DOM.fonctionnement',

    'fonctionnement' : 'Vous devriez avoir un script qui ressemble à ça :\n\nvar manipulateur = document.getElementsByTagName("body") \nconsole.log(manipulateur)\n\nCela doit vous renvoyer un tableau qui, une fois "déplié" vous permet de voir tout ce que l\'on peut faire avec cet objet.\nOuvrez le tableau et cherchez l\'attribut style.\nDans le style vous devriez trouvé l\'attribut background-color, au milieu de tous les autres. \nOn peut changer le style via le javascript.\nCela équivaut à inscrire du style directement dans la console ou inscrire le style dans les attribut html\nPour changer le style on va utiliser la variable que l\'on a préparé dans ce but.\nRécuperez votre code (fleche haut), en dessous de la variable,  tapez la commende qui va nous servir à acceder à l\'attribut style que l\'on veux changer :\nmanipulateur[0].style.background-color = "red"\n\nLa suite --> sommaire.DOM.explication',

    'explication' : 'Décomposont cette ligne : manipulateur[0].style.background-color\n\n* manipulateur -- le nom de notre variable qui équivaut à document.getElementsByTagName("body")\n* [0] -- notre variable renvois un tableaux à une seul entrés puisqu\'il n\'existe qu\'une seul balise <body>. Pour acceder à sa valeur dans notre tableaux, on utilise les []\* .style.background-color -- on cherche à atteindre l\'attribut objet background-color qui se trouve dans l\'attribut objet style, cette suite de terme nous donne le chemin pour atteindre cette propriété que nous pouvons redéclarer en rouge. C\'est ce que vous faitent depuis le début de ce cours en appelant chaque nouveau chapitre stocké dans un objet js.\n\n la suite : sommaire.ending'
  },

  'ending' : 'On va construire le lien pour nous permettre de changer de page.\nTout va reposer sur votre capacité à identifier un élément dans le Dom puis à le changer.\nUne technique consiste à utiliser la méthode objet document.getElementBy...\n\nVous pouvez stocker un élément de la feuille HTML dans une variable qui représentera ensuite cet élément.\nCommencez par déclarer une variable que l\'on va appeler "var lien" en vue de sa future modification en lien puis stockez à l\'intérieur de cette dernière l\'élément h1 capturé du DOM.\nUne fois l\'élément identifié, affichez-le dans un tableau avec console.log([lien]) puis trouvez la valeur innerHTML.\nVous allez devoir changer cette valeur pour qu\'elle contienne une balise <a href=""></a> l\'attribut href doit être égal à la valeur qui se trouve dans sommaire.lien\n\nLa correction se trouve là --> sommaire.correctionDOM\nVous arrivez a la fin de ce cours sur les bases du Javascript. Afin d\'améliorer son contenus et que celui puisse profiter à ceux qui viendront aprés n\'hesitez pas à faire un retour de ce que vous en avez pensé. Soit à votre encadrant, soit directement sur Github en laissant un message dans Github Ma6TvaCODER > exerciceJS > issue.\n\nBonne continuation sur la voie du code!',

  'correctionDOM' : '//En premier, on encapsule un element du DOM :\nvar lien = document.getElementsByTagName("h1")\nRécupération de l\'element situé dans un tableau. On change l\'interieur du HTML avec "innerHTML" \nlien[0].innerHTML = "<a href=\'" + sommaire.lien + "\'>Liens Vers l\'exercice</a>"',

  'lien' : '../[02]ExoRetrouvailles/index.html'

}
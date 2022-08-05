/*message = "Bienvenue dans Javascript";
alert(message);*/

// Un commentaire sur une seule ligne

// Les tableaux de données
users = [ "John", "Olivia", "Jack" ];
message = "Bienvenue dans Javascript " + users[1];
console.log(message);
console.log("***********************************");

// Les tableaux peuvent se composer de tous types de données
account = [ 12345, "Olivia", "JONES", true ];
console.log("N° employé : " + account[0] + " [" + typeof(account[0]) + "]");
console.log("Prénom : " + account[1] + " [" + typeof(account[1]) + "]");
console.log("Nom : " + account[2] + " [" + typeof(account[2]) + "]");
console.log("Actif : " + account[3] + " [" + typeof(account[3]) + "]");

// La propriété .length des tableaux
console.log("Longueur tableau : " + account.length);
console.log("***********************************");

// Utilisation des fonctions
function showDryMessage() {
	console.log("Don't Repeat Yourself");
}

showDryMessage();
console.log("Another line");
showDryMessage();
console.log("***********************************");

// Déclaration de variable avec "let et modification de valeur"
let season = "spring";
console.log("Saison : " + season);
season = "summer";
console.log("Saison : " + season);
console.log("***********************************");

// Déclarer à nouveau la même variable avec let
//let season = "winter";

// Déclaration de constantes avec const
const pi = 3.1416;

function getCircleArea(radius) {
  let area = 	pi * (radius ** 2);
  console.log("Aire : " + area);
}

//const pi = 6.4567;
getCircleArea(15);
console.log("***********************************");

// Portée globale des variables
function showCountry() {
	console.log("Pays : " + country);
}

let country = "Belgium";
console.log("Pays : " + country);
showCountry();
console.log("***********************************");


// Portée globale ou locale des variables
function showFruit() {
	let fruit = "Lemon";
	console.log("Fruit : " + fruit);
}

let fruit = "Apple";
console.log("Fruit : " + fruit);
showFruit();
console.log("***********************************");

// Passage de tableau lors de l'appel d'une fonction
function showCarData(car) {
	console.log("Marque : " + car[0]);
	console.log("Modèle : " + car[1]);
  console.log("Carburant : " + car[2]);
  console.log("Disponibilité : " + car[3]);
  console.log("Longueur tableau : " + car.length);
}

car = [ "Toyota", "Yaris", "Hybride", true ];
showCarData(car);

car = [ "Seat", "Ibiza", "Essence", true ];
showCarData(car);
console.log("***********************************");

//Utilisation de fonctions avec valeur retournée
const vatRate = 21;

function getVatIncPrice(price) {
	vatIncPrice = price + ((price / 100) * vatRate);
	return vatIncPrice;
}

vatIncPrice = getVatIncPrice(100);
console.log("Prix TTC : " + vatIncPrice);
console.log("***********************************");

// Utilisation de l'instruction "if"
if (2 * 3 == 6) {
  console.log("2 x 3 est bien égal à 6");
}
console.log("***********************************");

// Vérification de la valeur "true" avec "if"
let active = true;
if (active) {
  console.log('La valeur de active est "true"');
}
console.log("***********************************");

// Utilisation de l'instruction "else"
let result = 15;
if (result > 100) {
  console.log("Résultat supérieur à 100" );
} else {
  console.log("Résultat inférieur ou égal à 100" );	
}
console.log("***********************************");

// Imbrication d'instructions if/else
let stock = 20;
if (stock > 50){
  console.log("Résultat supérieur à 50" );
} else if (stock > 5) {
  console.log("Résultat supérieur à 5" );
} else {
  console.log("Résultat trop petit" );
}
console.log("***********************************");

// Utilisation de l'opérateur logique && (ET)
let vegetable1 = "carotte";
let vegetable2 = "salade";
if ((vegetable1 == "carotte") && (vegetable2 == "salade")) {
	console.log("Les 2 conditions sont respectées" );
}
console.log("***********************************");

// Utilisation de l'opérateur logique || (OU)
let fruit1 = "pomme";
let fruit2 = "banane";
if ((fruit1 == "pomme") || (fruit2 == "citron")) {
	console.log("Au moins 1 condition est respectée" );
}
console.log("***********************************");

// Les instructions switch/case
let color = 'vert';
switch (color) {
  case 'rouge':
    console.log('Vous avez choisi le rouge');
    break;
  case 'vert':
    console.log('Vous avez choisi le vert');
    break;
  case 'bleu':
    console.log('Vous avez choisi le bleu');
    break;
  default:
    console.log("Choisissez une couleur primaire!");
}
console.log("***********************************");

// Regrouper plusieurs cas avec switch/case
let animal = 'oiseau';
switch (animal) {
  case 'chat':
  case 'chien':
  case 'oiseau':
    console.log('Vous avez choisi un animal');
    break;
  default:
    console.log("Choisissez un animal!");
}
console.log("***********************************");

// Nombre d'itérations donné avec la boucle "for"
let people = ["James", "Mike", "Bill"];

for (let i = 0; i < people.length; i++) {
  console.log("Welcome to loops " + people[i]);
}
console.log("***********************************");

// Itérations exécutées tant que la condition renvoie true
//console.log(Math.random());
//console.log(Math.floor(5.6789));
function getRandomNumber() {
	let randomNumber;
	randomNumber = Math.floor(Math.random() * 10);
	return randomNumber;
}

let randomNumber = getRandomNumber();
while(randomNumber !== 5) {
  console.log(randomNumber + " n'est pas égal à 5");
  randomNumber = getRandomNumber();
}
console.log(randomNumber + " est bien égal à 5");
console.log("***********************************");

// Une instruction while dont le code ne sera jamais exécuté
let counter = 10;
while(counter < 5) {
  console.log(counter + " est plus petit que 5");
  counter++;
}
console.log("Le code ne sera jamais exécuté");
console.log("***********************************");

// Les instructions ""do/while""
let count = 10;
do {
	console.log("Le code est exécuté au moins 1 fois");
	count++;
} while (count < 5);
console.log("***********************************");

// L'instruction "continue" (saying = dicton)
let saying = "Qui restreint ses besoins, sera d'autant plus libre.";
let vowels = ["a", "e", "i", "o", "u", "y"];
//result = vowels.indexOf(saying.charAt(2));
//console.log(result);

let c = 0;
for (let i = 0; i < saying.length; i++) {
	let character = saying.charAt(i);
	if (vowels.indexOf(character) == -1) {
		console.log(character + " n'est pas une voyelle");
    continue;
	}
  c++; 
}
console.log('Il y a ' + c + ' voyelles');
console.log("***********************************");

// Boucle infinie et instruction "break"
while(true) { //true est toujours "vrai". La boucle est infinie.
  randomNbr = Math.floor(Math.random() * 10);
  
  if(randomNbr === 8) {
    break;
  }
  console.log(randomNbr + " n'est pas le chiffre mystère");
}
console.log('8 est bien notre chiffre mystère');
console.log("***********************************");

// Accéder à tous les liens <a> de cette page
let links = document.getElementsByTagName("a");
console.log(links); //Liste de tous les liens de cette page
console.log(links[5]); //Accès à l'élément numéro 2 dans cette liste
console.log(links.item(9)); //Autre façon d'accéder à un élement de la liste
console.log("Il y a " + links.length + " liens sur cette page");
console.log("***********************************");

// Modifier le contenu d'un paragraphe avec javascript
let jsDom1 = document.getElementById("jsDom1");
jsDom1.innerHTML = "Javascript peut modifier le contenu d'un paragraphe.";

// Modifier le style d'un paragraphe avec javascript
let jsDom2 = document.getElementById("jsDom2");
jsDom2.style.color = "green";
jsDom2.style.fontSize = "130%";
jsDom2.style.fontWeight = "bold";

//Spécifier une classe CSS pour le paragraphe avec javascript
let jsDom3 = document.getElementById("jsDom3");
jsDom3.setAttribute("class","js_dom3");

// Créer un paragraphe et son contenu avec javascript
const jsDom4 = document.createElement("p");
const content4 = document.createTextNode("Contenu temporaire");
jsDom4.appendChild(content4);
const main = document.getElementById("main");
main.appendChild(jsDom4);
jsDom4.innerHTML = "Javascript peut créer des balises et du contenu.";

// Créer un bouton de basculement "cacher/montrer" avec javascript
const toggleBtn = document.createElement("button");
main.appendChild(toggleBtn);
toggleBtn.setAttribute("class","js_dom5");
toggleBtn.innerText = "cacher";
toggleBtn.onclick = function() {hideParagraph("jsDom3")};

// Fonction de basculement "cacher/montrer"
function hideParagraph(id) {
	let para = document.getElementById(id);
	if (para.style.display === "none") {
    para.style.display = "block";
    toggleBtn.innerText = "cacher";
  } else {
    para.style.display = "none";
    toggleBtn.innerText = "montrer";
  }
}

// Créer une balise <img> pour un diaporama automatique
const sliderImage = document.createElement("img");
const sliderMessage = document.createElement("p");
const list = document.getElementById("main");
console.log(list);

list.insertBefore(sliderImage, list.childNodes[3]);
sliderImage.setAttribute("src","img/slider1.jpg");
sliderImage.setAttribute("class","slider_image border_off");
sliderImage.setAttribute("id","slider_image");
sliderImage.onclick = function() {toggleSlider()};

list.insertBefore(sliderMessage, list.childNodes[4]);

// Fonction de gestion des images du diaporama
function showSlider() {
  image = document.getElementById("slider_image");
	imageName = "img/slider" + imageIndex + ".jpg";
	image.setAttribute("src",imageName);
		
  if (imageIndex < numberOfImages) {
    imageIndex++; 
  } else {
		imageIndex = 1;
  }
}

// Fonction "marche/arrêt" du diaporama
function toggleSlider() {
  if (slider === true) {
		clearInterval(interval);
		sliderMessage.setAttribute("class","message message_start");
    sliderMessage.innerHTML = "Cliquez sur l'image pour lancer le diaporama";
    slider = false;
	} else {
		showSlider();
		interval = setInterval(showSlider,timer);
		sliderMessage.setAttribute("class","message message_stop");
    sliderMessage.innerHTML = "Cliquez sur l'image pour arrêter le diaporama";
    slider = true;
	}
}

// Initialisation du diaporama automatique
imageIndex = 1;
numberOfImages = 3;
timer = 3000; //millisecondes
slider = false;
toggleSlider();




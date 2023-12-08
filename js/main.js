//Création du deck
class ClassicCardSet {
    constructor(weight, name, family) {
        this.weight = weight;
        this.name = name;
        this.family = family;
    };
};
var cardDeck = [];
const cardWeight = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const cardName = ["Ace","Deuces","Treyes","Four","Five","Six","Seven","Eight","Nine","Ten","Valet","Queen","King"];
const cardFamily = [" of Hearts"," of Spades"," of Diamonds"," of Clubs"];
//Génère les cartes et les mets dans l'array cardDeck
function generateCard() {
    let i = 0;

    while (i < 52) {
        let card = new ClassicCardSet(cardWeight[i % cardWeight.length], cardName[i % cardName.length], cardFamily[i % cardFamily.length]);
        cardDeck.push(card);
        i++;
    };
};
generateCard();

//Tire un nombre qui devient une carte du deck
function drawCardNumber() {
    let cardNumber = Math.floor(Math.random()*52+1);
    return cardNumber;
};

/*
CARTES DU CROUPIER
*/
const croupierCardOne = document.getElementById("CarteCroupier-1");
const croupierCardTwo = document.getElementById("CarteCroupier-2");
const croupierCardThree = document.getElementById("CarteCroupier-3");
function croupierPiocheOne() {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === false) {
        croupierPioche();
    }
    cardDeck.splice(num,1);
    croupierCardOne.innerHTML = objCard.name + objCard.family;
}
function croupierPiocheTwo() {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === false) {
        croupierPioche();
    }
    cardDeck.splice(num,1);
    croupierCardTwo.innerHTML = objCard.name + objCard.family;
}
function croupierPiocheThree() {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === false) {
        croupierPioche();
    }
    cardDeck.splice(num,1);
    croupierCardOne.innerHTML = objCard.name + objCard.family;
}
//Tirage initiale du croupier
croupierPiocheOne();

/*
CARTES DU JOUEUR
*/
const BoutonPiocheOne = document.getElementById("BoutonPioche-1");
const BoutonPiocheTwo = document.getElementById("BoutonPioche-2");
const BoutonPiocheThree = document.getElementById("BoutonPioche-3");
const playerCardOne = document.getElementById("CarteJoueur-1");
const playerCardTwo = document.getElementById("CarteJoueur-2");
const playerCardThree = document.getElementById("CarteJoueur-3");
//Syntaxe pour tirer un objet d'un array et imprimer un de ses attributs
BoutonPiocheOne.addEventListener("click", function() {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === false) {
        alert("error");
    }
    cardDeck.splice(num,1);
    playerCardOne.innerHTML = objCard.name + objCard.family;
});
BoutonPiocheTwo.addEventListener("click", function() {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === false) {
        alert("error");
    }
    cardDeck.splice(num,1);
    playerCardOne.innerHTML = objCard.name + objCard.family;
});
BoutonPiocheThree.addEventListener("click", function() {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === false) {
        alert("error");
    }
    cardDeck.splice(num,1);
    playerCardOne.innerHTML = objCard.name + objCard.family;
});
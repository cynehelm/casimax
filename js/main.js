//Création du deck
class BlackjackCardSet {
    constructor(weight, name, family) {
        this.weight = weight;
        this.name = name;
        this.family = family;
    };
};
var cardDeck = [];
const cardWeight = [1,2,3,4,5,6,7,8,9,10,10,10,10];
const cardName = ["Ace","Deuces","Treyes","Four","Five","Six","Seven","Eight","Nine","Ten","Valet","Queen","King"];
const cardFamily = [" of Hearts"," of Spades"," of Diamonds"," of Clubs"];
//Génère les cartes et les mets dans l'array cardDeck
function generateCard() {
    let i = 0;

    while (i < 52) {
        let card = new BlackjackCardSet(cardWeight[i % cardWeight.length], cardName[i % cardName.length], cardFamily[i % cardFamily.length]);
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
    SCORE BOARD
*/
let playerScore = 0;
let croupierScore = 0;
const selectPlayerScore = document.getElementById("ScoreJoueur");
const selectCroupierScore = document.getElementById("ScoreCroupier");
const printPlayerScore = (num) => {
    selectPlayerScore.innerText = "Player Score: " + num;
}
const printCroupierScore = (num) => {
    selectCroupierScore.innerText = "Dealer Score: " + num;
}

/*
    CARTES DU CROUPIER
*/
const croupierCardOne = document.getElementById("CarteCroupier-1");
const croupierCardTwo = document.getElementById("CarteCroupier-2");
const croupierCardThree = document.getElementById("CarteCroupier-3");
//PREMIERE PIOCHE
//Pioche carte 1 croupier
function croupierPiocheOne() {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === undefined) {
        croupierPiocheOne();
    }
    cardDeck.splice(num,1);
    croupierCardOne.innerHTML = objCard.name + objCard.family;
    croupierCardOne.setAttribute("class", "carte");
    return croupierScore = croupierScore + objCard.weight;
}
//Crée carte 2 cachée du croupier
function croupierPiocheTwo() {
    croupierCardTwo.setAttribute("class", "carte");
}
//Dévoile carte 2 du croupier
function croupierRevealTwo() {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === undefined) {
        croupierPiocheTwo();
    }
    cardDeck.splice(num,1);
    croupierCardTwo.innerHTML = objCard.name + objCard.family;
    return croupierScore = croupierScore + objCard.weight;
}
//Pioche la troisième carte si besoin
function croupierPiocheThree() {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === undefined) {
        croupierPiocheThree();
    }
    cardDeck.splice(num,1);
    croupierCardThree.innerHTML = objCard.name + objCard.family;
    croupierCardThree.setAttribute("class", "carte");
}

//  TODO croupier reveal card

/*
    CARTES DU JOUEUR
*/
const BoutonPioche = document.getElementById("BoutonPioche");
const BoutonPasser = document.getElementById("BoutonPasser");
const playerCardOne = document.getElementById("CarteJoueur-1");
const playerCardTwo = document.getElementById("CarteJoueur-2");
const playerCardThree = document.getElementById("CarteJoueur-3");
//Syntaxe pour tirer un objet d'un array et imprimer un de ses attributs

//PREMIERE PIOCHE
//Pioche carte 1 du joueur
function playerInitialDrawOne () {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === undefined) {
        playerInitialDrawOne();
    }
    cardDeck.splice(num,1);
    playerCardOne.innerHTML = objCard.name + objCard.family;
    playerCardOne.setAttribute("class", "carte");
    return playerScore = playerScore + objCard.weight;
}
//Pioche carte 2 du joueur
function playerInitialDrawTwo () {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === undefined) {
        playerInitialDrawTwo();
    }
    cardDeck.splice(num,1);
    playerCardTwo.innerHTML = objCard.name + objCard.family;
    playerCardTwo.setAttribute("class", "carte");
    return playerScore = playerScore + objCard.weight;
}
//Joueur choisis de tirer une troisième carte
BoutonPioche.addEventListener("click", function() {
    let num = drawCardNumber();
    let objCard = cardDeck[num];
    if (objCard === undefined) {
        alert("Error, Hit again");
    }
    cardDeck.splice(num,1);
    playerCardThree.innerHTML = objCard.name + objCard.family;
    playerCardThree.setAttribute("class", "carte");
    playerScore = playerScore + objCard.weight;
    croupierRevealTwo();
    printPlayerScore(playerScore);
    printCroupierScore(croupierScore);
});
//Joueur choisis de passer
BoutonPasser.addEventListener("click", function() {
    croupierRevealTwo();
    printCroupierScore(croupierScore);
});

/*
    IF UNDEFINED WRITE ANOTHER FUNCTION THAT CAN BE RECURSIVE INSTEAD OF CLICK BASED
*/

/*
    GAME TIME
*/
//Tirage initiale du croupier
croupierPiocheOne();
croupierPiocheTwo();
//Pioche les deux cartes initiales du joueur
playerInitialDrawOne();
playerInitialDrawTwo();
//Original Scoreboard
printPlayerScore(playerScore);
printCroupierScore(croupierScore);

//Debug purposes
console.log(playerScore);
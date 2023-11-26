const buttonTirage = document.getElementById("tirageCarte");
var cardDeck = [];
const cardWeight = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const cardName = ["Ace","Deuces","Treyes","Four","Five","Six","Seven","Eight","Nine","Ten","Valet","Queen","King"];
const cardFamily = [" of Hearts"," of Spades"," of Diamonds"," of Clubs"];
const p1 = document.getElementById("p1");

class ClassicCardSet {
    constructor(weight, name, family) {
        this.weight = weight;
        this.name = name;
        this.family = family;
    };
};

function generateCard() {
    //Create cards objects
    let i = 0;

    while (i < 52) {
        let card = new ClassicCardSet(cardWeight[i % cardWeight.length], cardName[i % cardName.length], cardFamily[i % cardFamily.length]);
        cardDeck.push(card);
        i++;
    };
}

function drawCardNumber() {
    let cardNumber = Math.floor(Math.random()*51);
    return cardNumber;
};

generateCard();

//Syntaxe pour tirer un objet d'un array et imprimer un de ses attributs
buttonTirage.addEventListener("click", function() {
    let num = drawCardNumber();
    let objCard = cardDeck[num];

    p1.innerText = objCard.name + objCard.family;
});

console.log(cardDeck[40].weight);
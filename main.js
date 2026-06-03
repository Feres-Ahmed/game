let myD = document.querySelector(".container");

let showUser = ["?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?"];

let emoji = [
    "🚀","🍎",
    "🎵","🐱",
    "🍕","⚽",
    "🦋","🚗",
    "🌟","🎈",
    "🍎","🚀",
    "🚗","🦋",
    "🎈","🌟",
    "⚽","🍕",
    "🐱","🎵"
];

let stateCards = [
    { state:"close" },{ state:"close" },{ state:"close" },{ state:"close" },
    { state:"close" },{ state:"close" },{ state:"close" },{ state:"close" },
    { state:"close" },{ state:"close" },{ state:"close" },{ state:"close" },
    { state:"close" },{ state:"close" },{ state:"close" },{ state:"close" },
    { state:"close" },{ state:"close" },{ state:"close" },{ state:"close" }
];

let cardsDiv = [];

let firstCard = undefined;
let secondCard = undefined;

let lock = false;

function showCards(){

    for(let i = 0; i < showUser.length; i++){

        let newCards = document.createElement("div");
        newCards.textContent = showUser[i];
        newCards.className = 'cards';
        myD.appendChild(newCards);

        cardsDiv.push(newCards);

        newCards.onclick = function(){

            if(lock) return;

            if(stateCards[i].state === "open") return;

            newCards.textContent = emoji[i];
            stateCards[i].state = "open";

            if(firstCard === undefined){
                firstCard = i;
                return;
            }

            secondCard = i;

            lock = true;

            if(emoji[firstCard] === emoji[secondCard]){

                stateCards[firstCard].state = "open";
                stateCards[secondCard].state = "open";

                firstCard = undefined;
                secondCard = undefined;

                lock = false;

            } else {

                setTimeout(function(){

                    stateCards[firstCard].state = "close";
                    stateCards[secondCard].state = "close";

                    cardsDiv[firstCard].textContent = "?";
                    cardsDiv[secondCard].textContent = "?";

                    firstCard = undefined;
                    secondCard = undefined;

                    lock = false;

                }, 800);
            }
        };
    }
}

showCards();
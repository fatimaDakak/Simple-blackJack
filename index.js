
let firstCard = 0;
let secondCard = 0;
let sum = [];
let hasBlackJack = false;
let isAlive = false;

let message = "";
let MessageBar = document.getElementById('message-el');
let cards = document.getElementById('cards');
//let som = document.getElementById("sum");
let som=document.querySelector('#sum');//we can use . for classes or call the element name directly

//array of cards
let cardsList = [firstCard,secondCard];
let addbtn = document.getElementById("addCard");

let player = {
    name: "Fatima" ,
    chips: 145 ,
    
}
let playerEl =document.getElementById('player-el')
playerEl.textContent= player.name +" : $"+player.chips 
//render game function
function renderGame() {
    cards.textContent = "Cards: "
    for (let i = 0; i < cardsList.length; i++) {
        cards.textContent += cardsList[i] + " "
    }
    
    som.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    MessageBar.textContent = message
}

//new card function
function newCard(){
    if(isAlive && !hasBlackJack){
    let card = getRandomCard();
    //to add an element at the end of an array
    cardsList.push(card);
    //to remove the last element
    //cardsList.pop()
    sum += card;
    renderGame();
}
else {
    addbtn.ariaDisabled=true;
    console.log(addbtn)
}
}

function startGame(){
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cardsList = [firstCard,secondCard];
    sum = firstCard + secondCard
    renderGame();
}
 
function getRandomCard(){
    let num = (Math.floor(Math.random()*13))+1;
    if(num > 10){
        return 10;
    }
    else if(num === 1){
        return 11;
    }
    else return num;
}

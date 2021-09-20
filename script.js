const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard = secondCard;



function flipCard(){
    this.classlist.add('flip');
    if(!hasFlippedCard){
        //first card click
        hasFlippedCard = true;
        firstCard = this;
        return 
    } 
        //second click
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch()
    }


function checkForMatch(){
     //check if card match
     let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
   isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}


function unflipCards(){
    //unflip the cards if they dont match
     setTimeout(() => {
        firstCard.remove('flip');
        secondCard.remove('flip');
    }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));
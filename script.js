const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard = secondCard;
let lockBoard = false;


function flipCard(){
    if(lockBoard) return;
    if (this === firstCard) return;

    this.classlist.add('flip');

    if(!hasFlippedCard){
        //first card click
        hasFlippedCard = true;
        firstCard = this;
        return 
    } 
        //second click
      
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

    resetBoard();
}


function unflipCards(){
    lockBoard = true;
    //unflip the cards if they dont match
     setTimeout(() => {
        firstCard.remove('flip');
        secondCard.remove('flip');


        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }


cards.forEach(card => card.addEventListener('click', flipCard));
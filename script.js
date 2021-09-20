const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard = secondCard;



function flipCard(){
    this.classlist.add('flip');
    if(!hasFlippedCard){
        //first card click
        hasFlippedCard = true;
        firstCard = this;

    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;

        //check if card match
        
    }
}


cards.forEach(card => card.addEventListener('click', flipCard))

;
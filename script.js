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
        if(firstCard.dataset.framework ===secondCard.dataset.framework){
            //its a match
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            //not a match
            setTimeout(() => {
            firstCard.remove('flip');
            secondCard.remove('flip');
        }, 1500);
    }
}

}
cards.forEach(card => card.addEventListener('click', flipCard));
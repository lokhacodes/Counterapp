let firstCard = 10
let secondCard=11
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true
let message = ""

if ( sum<21 )
    {
       message="Do u want to draw new card ? 🙂"  
    } else if (sum === 21){
        message= "Wohoo! You've got Blackjack 🥳"
        hasBlackJack = true
    } else if (sum > 21){
        message="U are out of the Game ! 😭"
        isAlive = false
    }

console.log(message)

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
const nextPlayer = () => {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0
    document.querySelector('#current-0').textContent = 0
    document.querySelector('#current-1').textContent = 0
    
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display= 'none'
}

const rollHandler = () => {
    var dice = Math.floor(Math.random()*6) + 1
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'
    diceDOM.src = 'dice-' + dice + '.png'

    if(dice !== 1)
    {
        roundScore += dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore
    }
    else
    {
        nextPlayer()
    }
}

const holdHandler = () => {
    scores[activePlayer] += roundScore
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

    if(scores[activePlayer] >= 20)
    {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
    }
    else {
        nextPlayer()
    }
}

let scores, roundScore, activePlayer
scores = [0,0] 
roundScore = 0
activePlayer = 0

document.querySelector('.dice').style.display = 'none'
document.getElementById('current-0').textContent = 0
document.getElementById('current-1').textContent = 0
document.getElementById('score-0').textContent = 0
document.getElementById('score-1').textContent = 0
document.querySelector('.btn-roll').addEventListener('click' , rollHandler)
document.querySelector('.btn-hold').addEventListener('click' , holdHandler)



// document.querySelector('#current-' + activePlayer).textContent = dice

// let x = document.querySelector('#score-0').textContent 
// console.log(x)
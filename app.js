/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*///

var score,roundScore,activePlayer,hold,gamePlaying;

initialize();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) 
    {
    //random n.o
    var dice = Math.floor(Math.random() * 6) + 1;
    //display
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //update score
    if(dice != 1) 
    {
        //add round score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } 
    else 
    {
        //nxtplayer
        nextPlayer();
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
    }
    }
});

document.querySelector('.btn-hold').addEventListener('click' , function() {
    if(gamePlaying)
    {
    //adding Score
    score[activePlayer] += roundScore
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    //UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    //check if player wins
     if(score[activePlayer] >= 50)
        {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!' ;
        document.querySelector('.dice').style.display = 'none' ;
        document.querySelector('.player-' + activePlayer + '-panel') .classList.add('winner') ;
        document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
        gamePlaying = false;
        } 
     else 
        {
        nextPlayer() ;
        }
    }
});

document.querySelector('.btn-new').addEventListener('click' , initialize);

function nextPlayer() {
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
};
function initialize() {
    activePlayer = 0;
    roundScore = 0;
    score = [0,0];
    gamePlaying = true;
    document.querySelector('.dice').style.display='none';
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};





//document.querySelector('#current-' + activePlayer).textContent = dice ;
//function btn() {
//btn();














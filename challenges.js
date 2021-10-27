







var score,roundScore,activePlayer,hold,gamePlaying;

initialize();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) 
    {
    //random n.o
    var dice1  = Math.floor(Math.random() * 6) + 1;
    var dice2  = Math.floor(Math.random() * 6) + 1;
    //display
    var diceDOM1 = document.querySelector('.dice-1');
    var diceDOM2 = document.querySelector('.dice-2');
    diceDOM1.style.display = 'block';
    diceDOM2.style.display = 'block';
    diceDOM1.src = 'dice-' + dice1 + '.png';
    diceDOM2.src = 'dice-' + dice2 + '.png';    
    //update score
    /*if(dice === 6 && lastDice === 6)
    {
        //palyerLoses
        score[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = 0;
        nextPlayer();
    } 
        */
    if(dice1 != 1 && dice2 != 1) 
    {
        //add round score
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } 
    else 
    {
        //nxtplayer
        nextPlayer();
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
    }
    
        //lastDice = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click' , function() {
    if(gamePlaying)
    {
    //adding Score
    score[activePlayer] += roundScore
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    //UI
        var input = document.querySelector('.final-score').value
        var winningScore;
        console.log(input);
        
        if(input)
            {
                winningScore=input;
                
            }
        else
            {
                winningScore = 100;
            }
        
    //check if player wins
     if(score[activePlayer] >= winningScore)
        {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!' ;
        document.querySelector('.dice-1').style.display='none';
        document.querySelector('.dice-2').style.display='none';
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
    document.querySelector('.dice-1').style.display='none';
    document.querySelector('.dice-2').style.display='none';
};
function initialize() {
    activePlayer = 0;
    roundScore = 0;
    score = [0,0];
    gamePlaying = true;
    document.querySelector('.dice-1').style.display='none';
    document.querySelector('.dice-2').style.display='none';
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

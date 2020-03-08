/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// define the variables to be used
var scores, roundScore, activePlayer, dice, gamePlaying, prevDice;

init();

// Now add an eventlistner for the dice roll button to.... roll the dice
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. roll the dice
        dice = Math.floor(Math.random() * 6) + 1;

        // 2. display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. update the round score if the rolled number is not 1 and not two 6s rolled
        if (dice !== 1) {
            if ((dice === 6) && (prevDice === 6)) {
                prevDice = 0;
                loseEntireScore();
                nextPlayer();
            }
            else { 
                prevDice = dice;
                // add the dice number to the round score
                roundScore += dice;
                // display the updated round score
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
        } else {
            // current play is done and loses score
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {

        // add round score to total score
        scores[activePlayer] += roundScore;

        // update the UI with new score information
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // get the current value set for the final score
        var input = document.querySelector('.final-score').value;
        console.log(input);

        // check to see if current player won the game
        if (scores[activePlayer] >= input) {
            gamePlaying = false;
            document.querySelector('.dice').style.display = 'none';
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else {
            // if not winner, then change player
            nextPlayer();
        }
    }
});

// add event handler for creat enew game button
document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer() {
    document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    // reset the play panel to the other player
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active'); 
    document.querySelector('.player-1-panel').classList.toggle('active');

    // remove the dice for a clean start for the next player
    document.querySelector('.dice').style.display = 'none';
};

// Player loses entire score accumulated
function loseEntireScore() {
    scores[activePlayer] = 0;
    // update the UI with new score information
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
}

function init() {

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    prevDice = 0;

    // perform initial game setup / initialization
    // first make the dice image non-viewable to start off the game
    document.querySelector('.dice').style.display = 'none';

    //then zero out the scores
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // clean up the active player panels and then reset to player1
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // now initial Player 1 to active
    document.querySelector('.player-0-panel').classList.add('active');    

};

const gameData =[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

// Background blackish overlay and player name input form
const backgroundDark = document.querySelector('#background-dark');
const gameConfigurationInput = document.querySelector('#game-configuration-input');

// Player name imput form cancel button
const configurationCancelBtn =  document.querySelector('#configuration-cancel-btn');

// Form that's submitted to server, in our case FormData will receive it
const formData = document.querySelector('form');

// If user inputs invalid player name
const errorMsgPlayerName = document.querySelector('.error-msg');
const errorColorInputForm = document.querySelector('#player-name');;

// Edit button of both 2 players
const editPlayer1BtnElemenet = document.querySelector('#edit-player-1-btn');
const editPlayer2BtnElemenet = document.querySelector('#edit-player-2-btn');

//Start new game button
const startNewGameBtn = document.getElementById('startNewGameBtn');
//Show active game when start new button is clicked
const activeGame = document.getElementById('active-game');

//active-player-name
const activePlayerName = document.getElementById('active-player-name');

//game fieds/ list items
const gameFieldElements = document.querySelectorAll('#gameboard li');

//your-turn-paragraph
const yourTurnParagraph = document.getElementById('your-turn-paragraph');

//game-over
const gameOver = document.getElementById('game-over');

//winner-name
const winnerName = document.getElementById('winner-name');

editPlayer1BtnElemenet.addEventListener('click', openPlayerConfig);
editPlayer2BtnElemenet.addEventListener('click', openPlayerConfig);

backgroundDark.addEventListener('click', closePlayerConfig);
configurationCancelBtn.addEventListener('click', closePlayerConfig);

formData.addEventListener('submit', savePlayerConfig);

startNewGameBtn.addEventListener('click', startNewGame);

for(gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click', selectGameField);
}



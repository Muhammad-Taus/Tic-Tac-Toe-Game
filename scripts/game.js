//use reset button if you want to use reset instead of browser refreshing
// function resetGameStatus() {
//     let activePlayer = 0;
//     let currentRound = 1;
//     gameIsOver = false;
//     gameOver.firstElementChild.innerHTML = 
//     'You won, <span id="winner-name">PLAYER NAME!</span>';
//     gameOver.style.display = 'none';

//     let gameBoardIndex = 0;
//     for(let i = 0; i < 3; i++){
//         for(let j = 0; j < 3; j++)
//         gameData [i][j] = 0;
//         // const gameBoardItemElement = gameFieldElements.children[gameBoardIndex];
//         // const gameBoardItemElement = gameFieldElements[gameBoardIndex];
//         const gameBoardItemElement = gameFieldElements[i][j];
//         console.log(gameBoardItemElement);
//         gameBoardItemElement.textContent = '';
//         gameBoardItemElement.classList.remove('disabled');
//         gameBoardIndex++;
//     }
// }

function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please enter both the players name to start a new game!');
        return;
    }
    activeGame.style.display = 'block';

    // resetGameStatus();
    activePlayerName.textContent = players[activePlayer].name;

}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {

    if(gameIsOver === true){
        return;
    }

    const selectField = event.target;
    const selectRow = selectField.dataset.row - 1;
    const selectColumn = selectField.dataset.col - 1;

    if (gameData[selectRow][selectColumn] > 0) {
        alert('Please select a field that\'s not selected yet!');
        return;
    } else {
        gameData[selectRow][selectColumn] = activePlayer + 1;
        // console.log (gameData[selectRow][selectColumn]);
    }

    selectField.textContent = players[activePlayer].symbol;
    selectField.classList.add('disabled');

    const winnerId = checkForGameOver();
    

    if (winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound = currentRound + 1;
    switchPlayer();
}

function checkForGameOver() {
    //Checking rows for equality
    for (let i = 0; i < 3; i++) {
        if (
           gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]) {
            return gameData[i][0]; 
        }
    }
    //Checking columns for equality
    for (let j = 0; j < 3; j++) {
        if (
            gameData[0][j] > 0 &&
            gameData[0][j] === gameData[1][j] &&
            gameData[1][j] === gameData[2][j]) {
            return gameData[0][j];
        }
    }



    //Checking top left to bottom right for equality
    if (gameData[0][0] > 0
        && gameData[0][0] === gameData[1][1]
        && gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }
    //Checking top right to bottom left for equality
    if (gameData[0][2] > 0
        && gameData[0][2] === gameData[1][1]
        && gameData[1][1] === gameData[0][2]) {
        return gameData[0][2];
    }
    // if (currentRound === 9) {
    //     return -1;
    // }
    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOver.style.display = 'block';
    yourTurnParagraph.style.display = 'none';
    
    if (winnerId > 0) {
        gameOver.style.display = 'block';
        winnerName.textContent = players[winnerId - 1].name;
        
    } else {
        gameOver.firstElementChild.textContent = 'It\'s a draw!';
    }
}
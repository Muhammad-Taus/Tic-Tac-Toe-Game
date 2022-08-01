function startNewGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('Please enter both the players name to start a new game!');
        return;
    }
    activeGame.style.display = 'block';
    activePlayerName.textContent = players[activePlayer].name;
    
}

function switchPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event){
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    switchPlayer();
}
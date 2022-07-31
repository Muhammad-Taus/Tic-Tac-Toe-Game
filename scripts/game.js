function startNewGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert('Please enter both the players name to start a new game!');
        return;
    }
    activeGame.style.display = 'block';
}
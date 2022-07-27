function openPlayerConfig(){
    backgroundDark.style.display = 'block'; 
    gameConfigurationInput.style.display = 'block'; 
}

function closePlayerConfig(){
    backgroundDark.style.display = 'none'; 
    gameConfigurationInput.style.display = 'none'; 
    errorMsgPlayerName.textContent = '';
    errorColorInputForm.style.border = '1px solid rgb(133, 25, 133)';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('player-name').trim();
    console.log(enteredPlayerName);

    if(!enteredPlayerName){
        errorMsgPlayerName.textContent = 'Please Enter a Valid Player Name!';
        errorMsgPlayerName.style.color = 'red';
        errorColorInputForm.style.border = '1px solid red';
        // console.dir(errorMsgPlayerName);
        return;
    }
}
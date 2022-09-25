function newGame(){
    navigator.virtualKeyboard.show();
    
    containerOfSpacesForWordChars.innerHTML = '';
    containerOfIncorrectChars.innerHTML = '';
    
    const wordsToPlayList = JSON.parse(localStorage.getItem('wordsToPlay'));
    const wordToGuess = wordsToPlayList[Math.floor(Math.random() * wordsToPlayList.length)];
    
    let correctCharList = [];
    let incorrectCharList = [];
    let correctChars = 0;
    let spaceOfChar;
    let appearedIndexes;
    let searchedChar;
    let incorrectCharToRender;
    let indexOfHangManImg = 1;

    for(let index=0 ; index < wordToGuess.length ;index++){
        spaceOfChar = document.createElement('span');
        spaceOfChar.setAttribute('class','wordChar');
        containerOfSpacesForWordChars.appendChild(spaceOfChar);
    }
    
    console.log(wordToGuess);
    const spacesOfCharsToFill = document.querySelectorAll(".wordChar");
    
    document.addEventListener('keydown', (event) => {

        let keyValue = event.key.toUpperCase();

        if(correctChars==wordToGuess.length || incorrectCharList.length==6) return;
        if((!keyValue.match(/[ÑA-Z]/i) || keyValue.length>1 ) || correctCharList.includes(keyValue)) return ;

    
        if(wordToGuess.includes(keyValue)){
            if(!correctCharList.includes(keyValue)) correctCharList.push(keyValue);

            appearedIndexes = [];
            searchedChar = wordToGuess.indexOf(keyValue);
            while (searchedChar != -1) {
                appearedIndexes.push(searchedChar);
                searchedChar = wordToGuess.indexOf(keyValue, searchedChar + 1);
            }
    
            appearedIndexes.forEach(indice => {
                correctChars++;
                spacesOfCharsToFill[indice].textContent=keyValue;
            });
    
            if(correctChars == wordToGuess.length){
                showNotification("./assets/winImg.png","¡¡Ganaste!!",`"${wordToGuess}" era la palabra!`);
                setTimeout(()=>{
                    location.hash="#home";
                    location.reload();
                },2000)
            };

            return;
        }
    
        if(!incorrectCharList.includes(keyValue)){
            incorrectCharList.push(keyValue);

            indexOfHangManImg++
            contenedorImagenHang.src = `./assets/hangman${indexOfHangManImg}.png`

            incorrectCharToRender = document.createElement('p');
            incorrectCharToRender.textContent=keyValue;
            containerOfIncorrectChars.appendChild(incorrectCharToRender);
    
            if(incorrectCharList.length==6){
                showNotification("./assets/loseImg.png","Perdiste :(",`"${wordToGuess}" era la palabra!`);

                setTimeout(()=>{
                    location.hash="#home";
                    location.reload();
                },2000)
            };
        }  
            
    });
}
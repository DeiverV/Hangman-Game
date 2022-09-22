function newGame(){
            
    containerOfSpacesForWordChars.innerHTML = '';
    containerOfIncorrectChars.innerHTML = '';

    const wordsToPlayList = JSON.parse(localStorage.getItem('wordsToPlay'));
    const wordToGuess = wordsToPlayList[Math.floor(Math.random() * wordsToPlayList.length)];
    
    let correctCharList = [];
    let incorrectCharList = [];
    let spaceOfChar;
    
    for(let index=0 ; index < wordToGuess.length ;index++){
        spaceOfChar = document.createElement('span');
        spaceOfChar.setAttribute('id',index);
        spaceOfChar.setAttribute('class','wordChar');
        containerOfSpacesForWordChars.appendChild(spaceOfChar);
    }
    
    const spacesOfCharsToFill = document.querySelectorAll(".wordChar");
    
    document.addEventListener('keydown', (event) => {
    
        let keyValue = event.key.toUpperCase();
        let correctChars = 0;
        if(!abecedaryInMayus.includes(keyValue)) return;
    
        if(wordToGuess.includes(keyValue)){
    
            if(!correctCharList.includes(keyValue)) correctCharList.push(keyValue);
    
            let appearedIndexes = [];
            let searchedChar = wordToGuess.indexOf(keyValue);
    
            while (searchedChar != -1) {
                appearedIndexes.push(searchedChar);
                searchedChar = wordToGuess.indexOf(keyValue, searchedChar + 1);
            }
    
            appearedIndexes.forEach(indice => {
                spacesOfCharsToFill[indice].textContent=keyValue;
            });
    
            spacesOfCharsToFill.forEach(space=>{
                if(space.textContent!=''){
                    correctChars++
                }
            })
    
            if(correctChars == wordToGuess.length){
                showNotification("./assets/winImg.png","¡¡Ganaste!!",`"${wordToGuess}" era la palabra!`)

                setTimeout(()=>{
                    location.hash = '#home';
                },4000)
            };
            
            return;
        }
    
        if(!incorrectCharList.includes(keyValue)){
            let incorrectCharToRender = document.createElement('p');
            incorrectCharToRender.textContent=keyValue;
            
            containerOfIncorrectChars.appendChild(incorrectCharToRender);
            incorrectCharList.push(keyValue);
    
            if(incorrectCharList.length==9){
                showNotification("./assets/loseImg.png","Perdiste :(",`"${wordToGuess}" era la palabra!`)

                setTimeout(()=>{
                    location.hash = '#home';
                },4000)

            };
        }  
            
    });
}


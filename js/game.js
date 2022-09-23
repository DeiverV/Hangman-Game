function newGame(){
    
    containerOfSpacesForWordChars.innerHTML = '';
    containerOfIncorrectChars.innerHTML = '';
    
    const wordsToPlayList = JSON.parse(localStorage.getItem('wordsToPlay'));
    const wordToGuess = wordsToPlayList[Math.floor(Math.random() * wordsToPlayList.length)];
    
    let correctCharList = [];
    let incorrectCharList = [];
    let correctChars = 0;
    let spaceOfChar;

    for(let index=0 ; index < wordToGuess.length ;index++){
        spaceOfChar = document.createElement('span');
        spaceOfChar.setAttribute('class','wordChar');
        containerOfSpacesForWordChars.appendChild(spaceOfChar);
    }
    
    console.log(wordToGuess);
    const spacesOfCharsToFill = document.querySelectorAll(".wordChar");
    
    document.addEventListener('keydown', (event) => {


        let keyValue = event.key.toUpperCase();

        if((!keyValue.match(/[ÑA-Z]/i) || keyValue.length>1 ) || correctCharList.includes(keyValue)) return ;
    
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
                correctChars++;
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

            let incorrectCharToRender = document.createElement('p');
            incorrectCharToRender.textContent=keyValue;
            
            containerOfIncorrectChars.appendChild(incorrectCharToRender);
            incorrectCharList.push(keyValue);
    
            if(incorrectCharList.length==9){
                showNotification("./assets/loseImg.png","Perdiste :(",`"${wordToGuess}" era la palabra!`);

                setTimeout(()=>{
                    location.hash="#home";
                    location.reload();
                },2000)

            };
        }  
            
    });
}


if(!localStorage.getItem('wordsToPlay')){
    let startWordList = [];
    localStorage.setItem('wordsToPlay',JSON.stringify(startWordList));
}

addNewWordButton.addEventListener("click",(e)=>{
    let newWord = document.querySelector("#newWord"); 
    let wordList = JSON.parse(localStorage.getItem('wordsToPlay'));
    let wordToSave = newWord.value.toUpperCase();

    if(!wordList.includes(wordToSave)){
        wordList.push(wordToSave);
        localStorage.setItem('wordsToPlay',JSON.stringify(wordList));
        
        showNotification("./assets/checkSaved.png","Guardado!",`"${newWord.value}" acaba de ser guardado!`);
        newWord.value='';
        return;
    }
    showNotification("./assets/errorSaved.png","Alerta!",`"${newWord.value}" Ya se encuentra agregado!`);

})


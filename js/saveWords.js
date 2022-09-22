if(!localStorage.getItem('wordsToPlay')){
    let startWordList = [];
    localStorage.setItem('wordsToPlay',JSON.stringify(startWordList));
}

addNewWordButton.addEventListener("click",(e)=>{
    let newWord = document.querySelector("#newWord"); 
    let wordList = JSON.parse(localStorage.getItem('wordsToPlay'));
    let wordToSave = newWord.value.toUpperCase()

    if(!wordList.includes(wordToSave)){
        wordList.push(wordToSave)
        localStorage.setItem('wordsToPlay',JSON.stringify(wordList));
        
        showNotification("./assets/errorSaved.png","No Guardado!",`"${newWord.value}" Ya se encuentra agregado!`)
        newWord.value=''
        return
    }
    showNotification("./assets/errorSaved.png","No Guardado!",`"${newWord.value}" Ya se encuentra agregado!`)

})


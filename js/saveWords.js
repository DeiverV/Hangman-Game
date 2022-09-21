if(!localStorage.getItem('wordsToPlay')){
    let startWordList = [];
    localStorage.setItem('wordsToPlay',JSON.stringify(startWordList));
}

addNewWordButton.addEventListener("click",(e)=>{
    let newWord = document.querySelector("#newWord");
    let wordList = JSON.parse(localStorage.getItem('wordsToPlay'));

    if(!wordList.includes(newWord.value)){

        wordList.push(newWord.value)
        localStorage.setItem('wordsToPlay',JSON.stringify(wordList));
        
        imgAlertSavedWord.src="./assets/checkSaved.png";
        tittleAlertSavedWord.textContent="Guardado!"
        textAlertSavedWord.textContent=`"${newWord.value}" Agregado exitosamente`;
        alertSavedWord.style.right="0";

        setTimeout(()=>{
            alertSavedWord.style.right="-100%";
        },3000)

        newWord.value=''
        return
    }

    imgAlertSavedWord.src="./assets/errorSaved.png";
    tittleAlertSavedWord.textContent="No Guardado!"
    textAlertSavedWord.textContent=`"${newWord.value}" Ya se encuentra agregado!`;
        alertSavedWord.style.right="0";

    setTimeout(()=>{
        alertSavedWord.style.right="-100%";
    },4000)

})
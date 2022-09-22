const wordsToPlayList = JSON.parse(localStorage.getItem('wordsToPlay'));
const wordToGuess = wordsToPlayList[Math.floor(Math.random() * wordsToPlayList.length)];

let correctCharList = [];
let incorrectCharList = [];

for(let index=0 ; index < wordToGuess.length ;index++){
    let spaceOfChar = document.createElement('span');
    spaceOfChar.setAttribute('id',index);
    spaceOfChar.setAttribute('class','wordChar');
    containerOfSpacesForWordChars.appendChild(spaceOfChar);
}

const spacesOfCharsToFill = document.querySelectorAll(".wordChar");
console.log(wordToGuess);

document.addEventListener('keydown', (event) => {
    let keyValue = event.key.toUpperCase();
    
    if(parseInt(keyValue)) return;

    if(wordToGuess.includes(keyValue)){

        !correctCharList.includes(keyValue) ? correctCharList.push(keyValue) : null ;

        let appearedIndexes = [];
        let searchedChar = wordToGuess.indexOf(keyValue);

        while (searchedChar != -1) {
        appearedIndexes.push(searchedChar);
        searchedChar = wordToGuess.indexOf(keyValue, searchedChar + 1);
        }

        appearedIndexes.forEach(indice => {
            spacesOfCharsToFill[indice].textContent=keyValue;
        });
      
        return;
    }

    if(!incorrectCharList.includes(keyValue)){
        let incorrectCharToRender = document.createElement('p');
        incorrectCharToRender.textContent=keyValue;
        
        containerOfIncorrectChars.appendChild(incorrectCharToRender);
        incorrectCharList.push(keyValue);

        if(incorrectCharList.length==9){
            alert("PERDISTE NOOB")
        }
    }  
        
});
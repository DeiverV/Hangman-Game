//Footers of the website
const footerOfmainPage = document.querySelector('#footer-container');
const footerOfAddWord = document.querySelector('#second-footer-container');

//Containers of the DOM
const homePageContainer = document.querySelector('#homePage-container');
const newWordContainer = document.querySelector('#newWord-container');
const gameStartedContainer = document.querySelector('#game-started-container');

//Items of the alerts of the website
const alertSavedWord = document.querySelector(".alert-saved");
const textAlertSavedWord = document.querySelector("#text-alert-saved");
const titleAlertSavedWord = document.querySelector("#title-alert-saved");
const imgAlertSavedWord = document.querySelector("#img-alert-saved");

//Buttons to save, come back, etc.
const backHomeButton =  document.querySelector('.backHome-button');
const addNewWordButton = document.querySelector(".addWord-button");
const startGameButton = document.querySelector('.start-game');
const goToSaveNewWord = document.querySelector('.add-word');
const leaveGameButton = document.querySelector('.leaveGame-button');
const newWordToPlayButton = document.querySelector('.newGame-button');

//Variables to in game functionalities
const containerOfSpacesForWordChars = document.querySelector(".word-container")
const containerOfIncorrectChars = document.querySelector(".bad-letters-container")

const contenedorImagenHang = document.querySelector("#imgHangMan")

//Recurrent Function
function showNotification(imgUrl,title,text) {
    imgAlertSavedWord.src=imgUrl;
    titleAlertSavedWord.textContent=title;
    textAlertSavedWord.textContent=text;
    alertSavedWord.style.left="0";

    setTimeout(()=>{
        alertSavedWord.style.left="-100%";
    },4000);
}
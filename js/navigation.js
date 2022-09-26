startGameButton.addEventListener('click', ()=>{
    location.hash = '#game';
});
goToSaveNewWord.addEventListener('click', ()=>{
  location.hash = '#newWord';
});
backHomeButton.addEventListener('click', ()=>{
  location.hash = '#home';
});
leaveGameButton.addEventListener('click', ()=>{
  location.hash = '#home';
});
newWordToPlayButton.addEventListener('click', ()=>{
  location.reload();
});

window.addEventListener('DOMContentLoaded', navigator, true);
window.addEventListener('hashchange', navigator, true);

function navigator() {
    if (location.hash.startsWith('#home')) {
      homePage();
    } else if (location.hash.startsWith('#newWord')) {
      newWordPage();
    } else if (location.hash.startsWith('#game')) {
      navigator.virtualKeyboard.overlaysContent = true
      gamePage();
      newGame();
    }
}

function homePage() {
  footerOfmainPage.classList.remove('inactive');
  homePageContainer.classList.remove('inactive');
  footerOfAddWord.classList.add('inactive');
  newWordContainer.classList.add('inactive');
  gameStartedContainer.classList.add('inactive');
}

function newWordPage() {
  footerOfAddWord.classList.remove('inactive');
  newWordContainer.classList.remove('inactive');
  footerOfmainPage.classList.add('inactive');
  homePageContainer.classList.add('inactive');
  gameStartedContainer.classList.add('inactive');
}

function gamePage() {
  footerOfAddWord.classList.add('inactive');
  newWordContainer.classList.add('inactive');
  footerOfmainPage.classList.add('inactive');
  homePageContainer.classList.add('inactive');
  gameStartedContainer.classList.remove('inactive');
}
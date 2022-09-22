startGameButton.addEventListener('click', ()=>{
    location.hash = '#game';
})
goToSaveNewWord.addEventListener('click', ()=>{
  location.hash = '#newWord';
})
backHomeButton.addEventListener('click', ()=>{
  location.hash = '#home';
})
leaveGameButton.addEventListener('click', ()=>{
  location.hash = '#home';
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    if (location.hash.startsWith('#home')) {
      homePage();
    } else if (location.hash.startsWith('#newWord')) {
      newWordPage();
    } else if (location.hash.startsWith('#game')) {
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
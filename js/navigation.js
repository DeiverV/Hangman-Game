startGameButton.addEventListener('click', ()=>{
    location.hash = '#game';
})
addNewWordButton.addEventListener('click', ()=>{
  location.hash = '#newWord';
})
backHomeButton.addEventListener('click', ()=>{
  location.hash = '#home'
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    if (location.hash.startsWith('#home')) {
      homePage();
    } else if (location.hash.startsWith('#newWord')) {
      newWordPage();
    }
  
    function smoothscroll(){
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo (0,currentScroll - (currentScroll/5));
      }
    };
    smoothscroll();
}

function homePage() {
  footerOfmainPage.classList.remove('inactive');
  homePageContainer.classList.remove('inactive');
  footerOfAddWord.classList.add('inactive');
  newWordContainer.classList.add('inactive');
}

function newWordPage() {
  footerOfAddWord.classList.remove('inactive');
  newWordContainer.classList.remove('inactive');
  footerOfmainPage.classList.add('inactive');
  homePageContainer.classList.add('inactive');

}
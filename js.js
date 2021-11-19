let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};

let readButton = document.querySelector('.read-button');
readButton.onclick = function() {
  console.log('Привет от Димы этот сайт сделал Дима Саней')
};
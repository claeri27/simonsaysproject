// Constant variables pointing to elements in html //
const startButton = document.querySelector('.start-button');
const hardButton = document.querySelector('.hard-button');
const turnText = document.querySelector('.turn-count');
const titleText = document.querySelector('h1');
const levelCount = document.querySelector('.level-count');
const redButton = document.querySelector('#redButton');
const blueButton = document.querySelector('#blueButton');
const greenButton = document.querySelector('#greenButton');
const purpleButton = document.querySelector('#purpleButton');
const orangeButton = document.querySelector('#orangeButton');
const yellowButton = document.querySelector('#yellowButton');

//Console logs to make sure buttons are getting pressed properly//
redButton.addEventListener('click', x => console.log('red clicked'))
blueButton.addEventListener('click', x => console.log('blue clicked'))
greenButton.addEventListener('click', x => console.log('green clicked'))
purpleButton.addEventListener('click', x => console.log('purple clicked'))
orangeButton.addEventListener('click', x => console.log('orange clicked'))
yellowButton.addEventListener('click', x => console.log('yellow clicked'))

//Variables that may change//
let compPattern = [];
let newCompMove;

//---------------EXECUTED CODE----------------------------//
//Calling
startGame();

//--------------------------------------------------------//

//---------------FUNCTIONS---------------------//
function startGame() {
  startButton.addEventListener('click', computerTurn);
}

function computerTurn() {
  if(levelCount.innerHTML === '1') {
    for(let i=0;i<3;i++){
      compPattern.push(Math.floor(Math.random() * Math.floor(6)));
    }
    levelCount.innerHTML = '2';
  } else {
    compPattern.push(Math.floor(Math.random() * Math.floor(6)));
    }
  for(let i=0;i<compPattern.length;i++) {
    switch (compPattern[i]) {
      case 0:
        redButton.click();
        break;
      case 1:
        blueButton.click();
        break;
      case 2:
        greenButton.click();
        break;
      case 3:
        purpleButton.click();
        break;
      case 4:
        orangeButton.click();
        break;
      case 5:
        yellowButton.click();
        break;
    }
  }
  console.log(compPattern);
}

function playerInput() {

}
//--------------------------------------------------------//

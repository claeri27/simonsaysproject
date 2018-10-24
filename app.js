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

//Variables that may change//
let compPattern = [];
let playerPattern = [];
let hard = null;
let winStatus = null;
let playerTurnStatus = false;

//Console logs to make sure buttons are getting pressed properly//
if(playerTurnStatus === false) {
  redButton.addEventListener('click', x => console.log('red clicked'));
  blueButton.addEventListener('click', x => console.log('blue clicked'));
  greenButton.addEventListener('click', x => console.log('green clicked'));
  purpleButton.addEventListener('click', x => console.log('purple clicked'));
  orangeButton.addEventListener('click', x => console.log('orange clicked'));
  yellowButton.addEventListener('click', x => console.log('yellow clicked'));
}


//---------------EXECUTED CODE----------------------------//

//Calling functions to give start and hard buttons functionality//
startGame();
hardCheck();

//---------------FUNCTIONS---------------------//

//startGame and hardCheck give click actions to the start and hardmode buttons//
function startGame() {
  startButton.addEventListener('click', computerTurn);
}

function hardCheck() {
  hardButton.addEventListener('click', hardMode);
}

// hardMode gives hardButton functionality to put game in/out of hard mode//
function hardMode() {
  if(hard === null || hard === false) {
    hardButton.style.backgroundColor = 'red';
    hard = true;
  } else {
    hardButton.style.backgroundColor = 'lightgreen';
    hardButton.style.transformY = '0px';
    hardButton.style.border = '1px solid black';
    hard = false;
  }
  console.log('hard pressed');
}

//computerTurn is the AI's turn//
function computerTurn() {
  if(levelCount.innerHTML === '1') {
    turnText.innerHTML = 'AI Turn';
    for(let i=0;i<3;i++){
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
  } else {
      switch (compPattern.push(Math.floor(Math.random() * Math.floor(6)))) {
        case 0:
          console.log('red click');
          break;
        case 1:
          console.log('red click');
          break;
        case 2:
          console.log('red click');
          break;
        case 3:
          console.log('red click');
          break;
        case 4:
          console.log('red click');
          break;
        case 5:
          console.log('red click');
          break;
        }
    }
  console.log(compPattern);
  playerTurnStatus = true;
  playerInput();
}

//playerInput tests users input button presses towards computer picks//
function playerInput() {
  if(playerTurnStatus === true) {
    turnText.innerHTML = 'Your Turn!';
    redButton.onclick = (x => {
      playerPattern.push(0);
      if(isEqual() === true) {
        if(JSON.stringify(playerPattern) == JSON.stringify(compPattern)) {
          levelCount.innerHTML++;
          playerTurnStatus = false;
          playerPattern = [];
          computerTurn();
        } else {
          winStatus = false;
          if(winStatus === false) loser();
        }
      }
    });
    blueButton.onclick = (x => {
      playerPattern.push(1);
      if(isEqual() === true) {
        if(JSON.stringify(playerPattern) == JSON.stringify(compPattern)) {
          levelCount.innerHTML++;
          playerTurnStatus = false;
          playerPattern = [];
          computerTurn();
        } else {
          winStatus = false;
          if(winStatus === false) loser();
        }
      }
    });
    greenButton.onclick = (x => {
      playerPattern.push(2);
      if(isEqual() === true) {
        if(JSON.stringify(playerPattern) == JSON.stringify(compPattern)) {
          levelCount.innerHTML++;
          playerTurnStatus = false;
          playerPattern = [];
          computerTurn();
        } else {
          winStatus = false;
          if(winStatus === false) loser();
        }
      }
    });
    purpleButton.onclick = (x => {
      playerPattern.push(3);
      if(isEqual() === true) {
        if(JSON.stringify(playerPattern) == JSON.stringify(compPattern)) {
          levelCount.innerHTML++;
          playerTurnStatus = false;
          playerPattern = [];
          computerTurn();
        } else {
          winStatus = false;
          if(winStatus === false) loser();
        }
      }
    });
    orangeButton.onclick = (x => {
      playerPattern.push(4);
      if(isEqual() === true) {
        if(JSON.stringify(playerPattern) == JSON.stringify(compPattern)) {
          levelCount.innerHTML++;
          playerTurnStatus = false;
          playerPattern = [];
          computerTurn();
        } else {
          winStatus = false;
          if(winStatus === false) loser();
        }
      }
    });
    yellowButton.onclick = (x => {
      playerPattern.push(5);
      if(isEqual() === true) {
        if(JSON.stringify(playerPattern) == JSON.stringify(compPattern)) {
          levelCount.innerHTML++;
          playerTurnStatus = false;
          playerPattern = [];
          computerTurn();
        } else {
          winStatus = false;
          if(winStatus === false) loser();
        }
      }
    });
  }
}

//isEqual checks whether the player has pressed the amount of buttons as the AI//
function isEqual() {
  console.log('this is player:', playerPattern.length);
  console.log('this is comp:', compPattern.length);
  if(playerPattern.length === compPattern.length) return true;
}

//loser controls what happens when the player loses/inputs incorrect match//
function loser() {
  alert('Sorry. You lose.');
  location.reload();
}

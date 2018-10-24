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
let redButtonPressed = 'background-color: #F08080;transform: translateY(6px);box-shadow: 10px 10px 15px black;';
let blueButtonPressed = 'background-color: deepskyblue;transform: translateY(6px);box-shadow: 10px 10px 15px black;';
let greenButtonPressed = 'background-color: #00FF7F;transform: translateY(6px);box-shadow: 10px 10px 15px black;';
let purpleButtonPressed = 'background-color: #EE82EE;transform: translateY(6px);box-shadow: 10px 10px 15px black;';
let orangeButtonPressed = 'background-color: #FFCF9E;transform: translateY(6px);box-shadow: 10px 10px 15px black;';
let yellowButtonPressed = 'background-color: #FFFFCC;transform: translateY(6px);box-shadow: 10px 10px 15px black;';


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
    let i=0;
    let intervalID = setInterval(x => {
      if(compPattern.length === i) {
        playerInput();
        return clearInterval(intervalID)
      };
      switch (compPattern[i]) {
        case 0:
          redTimeout();
          break;
        case 1:
          blueTimeout();
          break;
        case 2:
          greenTimeout();
          break;
        case 3:
          purpleTimeout();
          break;
        case 4:
          orangeTimeout();
          break;
        case 5:
          yellowTimeout();
          break;
      }
      i++;
    }, 3000)
  } else {
      switch (compPattern.push(Math.floor(Math.random() * Math.floor(6)))) {
        case 0:
          redTimeout();
          break;
        case 1:
          blueTimeout();
          break;
        case 2:
          greenTimeout();
          break;
        case 3:
          purpleTimeout();
          break;
        case 4:
          orangeTimeout();
          break;
        case 5:
          yellowTimeout();
          break;
        }
    }
  console.log(compPattern);
  playerTurnStatus = true;
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

function redTimeout() {
  let origRed = redButton.style;
  redButton.style = redButtonPressed;
  setTimeout(x => {
    redButton.style = origRed;
  }, 2000);
}

function blueTimeout() {
  let origBlue = blueButton.style;
  blueButton.style = blueButtonPressed;
  setTimeout(x => {
    blueButton.style = origBlue;
  }, 2000);
}

function greenTimeout() {
  let origGreen = greenButton.style;
  greenButton.style = greenButtonPressed;
  setTimeout(x => {
    greenButton.style = origGreen;
  }, 2000);
}

function purpleTimeout() {
  let origPurple = purpleButton.style;
  purpleButton.style = purpleButtonPressed;
  setTimeout(x => {
    purpleButton.style = origPurple;
  }, 3000);
}

function orangeTimeout() {
  let origOrange = orangeButton.style;
  orangeButton.style = orangeButtonPressed;
  setTimeout(x => {
    orangeButton.style = origOrange;
  }, 2000);
}

function yellowTimeout() {
  let origYellow = yellowButton.style;
  yellowButton.style = yellowButtonPressed;
  setTimeout(x => {
    yellowButton.style = origYellow;
  }, 2000);
}

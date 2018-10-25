// Constant variables pointing to elements in html //
const startButton = document.querySelector('.start-button');
const hardButton = document.querySelector('.hard-button');
const allButtons = document.querySelectorAll('.button');
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
let redButtonPressed = 'transform: translateY(10px);box-shadow: inset -5px -5px 60px black;';
let blueButtonPressed = 'transform: translateY(10px);box-shadow: inset -5px -5px 60px black;';
let greenButtonPressed = 'transform: translateY(10px);box-shadow: inset -5px -5px 60px black;';
let purpleButtonPressed = 'transform: translateY(10px);box-shadow: inset -5px -5px 60px black;';
let orangeButtonPressed = 'transform: translateY(10px);box-shadow: inset -5px -5px 60px black;';
let yellowButtonPressed = 'transform: translateY(10px);box-shadow: inset -5px -5px 60px black;';


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
    disableUserInput();
    turnText.innerHTML = 'AI Turn';
    for(let i=0;i<3;i++){
      compPattern.push(Math.floor(Math.random() * Math.floor(6)));
    }
    thing();
    } else {
      disableUserInput();
      turnText.innerHTML = 'AI Turn';
      compPattern.push(Math.floor(Math.random() * Math.floor(6)));
      thing();
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
          // levelCountColor();
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
          // levelCountColor();
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
          // levelCountColor();
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
          // levelCountColor();
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
          // levelCountColor();
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
          // levelCountColor();
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
  }, 800);
}

function blueTimeout() {
  let origBlue = blueButton.style;
  blueButton.style = blueButtonPressed;
  setTimeout(x => {
    blueButton.style = origBlue;
  }, 800);
}

function greenTimeout() {
  let origGreen = greenButton.style;
  greenButton.style = greenButtonPressed;
  setTimeout(x => {
    greenButton.style = origGreen;
  }, 700);
}

function purpleTimeout() {
  let origPurple = purpleButton.style;
  purpleButton.style = purpleButtonPressed;
  setTimeout(x => {
    purpleButton.style = origPurple;
  }, 800);
}

function orangeTimeout() {
  let origOrange = orangeButton.style;
  orangeButton.style = orangeButtonPressed;
  setTimeout(x => {
    orangeButton.style = origOrange;
  }, 800);
}

function yellowTimeout() {
  let origYellow = yellowButton.style;
  yellowButton.style = yellowButtonPressed;
  setTimeout(x => {
    yellowButton.style = origYellow;
  }, 800);
}

function thing() {
  let i=0;
  let intervalID = setInterval(x => {
    if(compPattern.length === i) {
      playerTurnStatus === true;
      disableUserInput();
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
  }, 1600)
};

function levelCountColor() {
  switch (Number(levelCount.innerHTML)) {
    case 1:
    case 2:
    case 3:
      levelCount.style.color = 'lightgreen';
      break;
    case 4:
    case 5:
    case 6:
      levelCount.style.color = 'yellow';
      break;
    case 7:
    case 8:
    case 9:
      levelCount.style.color = 'red';
      break;
  }
}

function disableUserInput() {
  if(playerTurnStatus === false) {
    for(let i =0;i<allButtons.length;i++) {
      allButtons[i].style.pointerEvents = 'none';
    }
    startButton.style.pointerEvents = 'none';
    hardButton.style.pointerEvents = 'none';
  } else if (playerTurnStatus === true){
    for(let i =0;i<allButtons.length;i++) {
      allButtons[i].style.pointerEvents = 'all';
    }
    startButton.style.pointerEvents = 'all';
    hardButton.style.pointerEvents = 'all';
  }
}

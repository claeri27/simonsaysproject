// Constant variables pointing to elements in html //
const startButton = document.querySelector('.start-button');
const hardButton = document.querySelector('.hard-button');
const popUp = document.querySelector('#popup');
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
let grid = [redButton,blueButton,greenButton,purpleButton,orangeButton,yellowButton];
let compPattern = [];
let playerPattern = [];
let hard = null;
let winStatus = null;
let playerTurnStatus = false;
let redButtonPressed = 'transform: translateY(8px);box-shadow: inset -5px -5px 80px black;';
let blueButtonPressed = 'transform: translateY(8px);box-shadow: inset -5px -5px 80px black;';
let greenButtonPressed = 'transform: translateY(8px);box-shadow: inset -5px -5px 80px black;';
let purpleButtonPressed = 'transform: translateY(8px);box-shadow: inset -5px -5px 80px black;';
let orangeButtonPressed = 'transform: translateY(8px);box-shadow: inset -5px -5px 80px black;';
let yellowButtonPressed = 'transform: translateY(8px);box-shadow: inset -5px -5px 80px black;';


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
    hardButton.style.boxShadow = 'inset -2px -2px 25px black';
    hard = true;
  } else {
    hardButton.style.backgroundColor = '#00cd00';
    hardButton.style.transformY = '0px';
    hard = false;
  }
  console.log('hard pressed');
}

//computerTurn is the AI's turn//
function computerTurn() {
  if(levelCount.innerHTML === '1') {
    disableUserInput();
    turnText.innerHTML = 'AI Turn';
    startButton.innerHTML = 'REPLAY';
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
    disableUserInput();
    redButton.onclick = (x => {
      playerPattern.push(0);
      otherThing();
    })
    ;
    blueButton.onclick = (x => {
      playerPattern.push(1);
      otherThing();
    })
    ;
    greenButton.onclick = (x => {
      playerPattern.push(2);
      otherThing();
    })
    ;
    purpleButton.onclick = (x => {
      playerPattern.push(3);
      otherThing();
    })
    ;
    orangeButton.onclick = (x => {
      playerPattern.push(4);
      otherThing();
    })
    ;
    yellowButton.onclick = (x => {
      playerPattern.push(5);
      otherThing();
    })
    ;
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
  if (hard === true) {
    setTimeout(x => {
      redButton.style = origRed;
    }, 500);
  } else {
    setTimeout(x => {
      redButton.style = origRed;
    }, 1000)
  }
}

function blueTimeout() {
  let origBlue = blueButton.style;
  blueButton.style = blueButtonPressed;
  if (hard === true) {
    setTimeout(x => {
      blueButton.style = origBlue;
    }, 500);
  } else {
    setTimeout(x => {
      blueButton.style = origBlue;
    }, 1000)
  }
}

function greenTimeout() {
  let origGreen = greenButton.style;
  greenButton.style = greenButtonPressed;
  if (hard === true) {
    setTimeout(x => {
      greenButton.style = origGreen;
    }, 500);
  } else {
    setTimeout(x => {
      greenButton.style = origGreen;
    }, 1000)
  }
}

function purpleTimeout() {
  let origPurple = purpleButton.style;
  purpleButton.style = purpleButtonPressed;
  if (hard === true) {
    setTimeout(x => {
      purpleButton.style = origPurple;
    }, 500);
  } else {
    setTimeout(x => {
      purpleButton.style = origPurple;
    }, 1000)
  }
}

function orangeTimeout() {
  let origOrange = orangeButton.style;
  orangeButton.style = orangeButtonPressed;
  if (hard === true) {
    setTimeout(x => {
      orangeButton.style = origOrange;
    }, 500);
  } else {
    setTimeout(x => {
      orangeButton.style = origOrange;
    }, 1000)
}
}

function yellowTimeout() {
  let origYellow = yellowButton.style;
  yellowButton.style = yellowButtonPressed;
  if (hard === true) {
    setTimeout(x => {
      yellowButton.style = origYellow;
    }, 500);
  } else {
    setTimeout(x => {
      yellowButton.style = origYellow;
    }, 1000)
  }
}

function thing() {
  let i=0;
  let intervalID = setInterval(x => {
    if(compPattern.length === i) {
      playerTurnStatus === true;
      disableUserInput();
      playerInput();
      clearInterval(intervalID);
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
  }, 1500)
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

function otherThing() {
  if(isEqual() === true) {
    if(JSON.stringify(playerPattern) == JSON.stringify(compPattern)) {
      levelCount.innerHTML++;
      levelUpBox();
      // levelCountColor();
      playerTurnStatus = false;
      playerPattern = [];
      computerTurn();
    } else {
      winStatus = false;
      if(winStatus === false) loser();
    }
  }
}

function levelUpBox() {
  popUp.style.display = 'block';
  popUp.innerHTML = `Level: ${Number(levelCount.innerHTML)}!`;
  setTimeout(x => {
    popUp.style.display = 'none';
  }, 1000);
}

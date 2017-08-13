const redSquare = document.getElementById('redSquare');
const blueSquare = document.getElementById('blueSquare');
const greenSquare = document.getElementById('greenSquare');
const yellowSquare = document.getElementById('yellowSquare');
const displayCount = document.getElementById('count');
const strictButton = document.getElementById('strict');
const startButton = document.getElementById('start');

const redSound = new Audio('./simonSound1.mp3');
const blueSound = new Audio('./simonSound2.mp3');
const greenSound = new Audio('./simonSound3.mp3');
const yellowSound = new Audio('./simonSound4.mp3');

//Button interactions and animations
const redAct = () => {
  redSound.currentTime = 0;
  redSound.play();
  document.getElementById('red').style = 'background-color: rgb(249, 128, 128)';
  setTimeout(() => {
    document.getElementById('red').style = 'background-color: rgb(195, 45, 45)'
  }, 100);
  displayCount.innerHTML = count;
  if(player === 'human'){
    copyArr.push(0);
    testPatrn();
  }
}
const blueAct = () =>{
  blueSound.currentTime = 0;
  blueSound.play();
  document.getElementById('blue').style = 'background-color: rgb(156, 165, 255)';
  setTimeout(() => {
    document.getElementById('blue').style = 'background-color: rgb(75, 98, 195)'
  }, 100);
  displayCount.innerHTML = count;
  if(player === 'human'){
    copyArr.push(1);
    testPatrn();
  }
}
const greenAct = () =>{
  greenSound.currentTime = 0;
  greenSound.play();
  document.getElementById('green').style = 'background-color: rgb(130, 249, 128)';
  setTimeout(() => {
    document.getElementById('green').style = 'background-color: rgb(45, 195, 45)'
  }, 100);
  displayCount.innerHTML = count;
  if(player === 'human'){
    copyArr.push(3);
    testPatrn();
  }
}
const yellowAct = () =>{
  yellowSound.currentTime = 0;
  yellowSound.play();
  document.getElementById('yellow').style = 'background-color: rgb(236, 255, 172)';
  setTimeout(() => {
    document.getElementById('yellow').style = 'background-color: rgb(182, 214, 55)'
  }, 100);
  displayCount.innerHTML = count;
  if(player === 'human'){
    copyArr.push(2);
    testPatrn();
  }
}
//strict mode switching
let strict = false;

const strictMode = () => {
  if(!strict){
    strict = true;
    strictButton.style = 'background-color: rgb(255, 244, 185); color: red';
    return;
  }
  strictButton.style = 'background-color: rgb(219, 240, 137)';
}
//game variables
let gameArr = [];
let count = 1;
let move = 0;
let player = 'comp'
//game logic
//changes the delay based on how many moves into the game the player has made it
const delayTones = () => {
  let delay = 750;
  if(count > 5){delay = 700};
  if(count > 9){delay = 500};
  if(count > 13){delay = 400};
  let nextRun = window.setTimeout(() => turnInit(), delay);
}
//initiates turns and makes the computer's move based on the game array
const turnInit = () => {
  if(move < count){
    if(gameArr[move] === 0){
      redAct();
      move = move + 1;
      if(move > 0){
      return delayTones();
      }
    }
    if(gameArr[move] === 1){
      blueAct();
      move = move + 1;
      if(move > 0){
      return delayTones();
      }
    }
    if(gameArr[move] === 2){
      yellowAct();
      move = move + 1;
      if(move > 0){
      return delayTones();
      }
    }
    if(gameArr[move] === 3){
      greenAct();
      move = move + 1;
      if(move > 0){
      return delayTones();
      }
    }
  }
  if(move === count){
    player = 'human';
    return copyMove();
 }
}
//a copy of moves made by the player to test agains the game array
let copyArr = [];
//Resets the players moves each turn
const copyMove = () => {
  copyArr = [];
}
//tests the copy vs game arrays to continue the game
const testPatrn = () => {
  //check if moves match the game array
  if(gameArr.join('').startsWith(copyArr.join(''))){
    //if the moves match and youve finished the whole array
    if(copyArr.length === 20){
      displayCount.innerHTML = 'You Win!!!';
      startButton.innerHTML = 'Start'
      move = 0;
      count = 1;
      return;
    }
    //attempts have been successful and now its the comps turn
    if(copyArr.length === count){
      move = 0;
      count = count + 1;
      player = 'comp'
      return delayTones();
    }
  }
  //failed attempt restarts at last turn
  if(!gameArr.join('').startsWith(copyArr.join('')) && !strict){
    move = 0;
    player = 'comp';
    displayCount.innerHTML = '!!!';
    setTimeout(() => {
      return delayTones();
    }, 1000)
    return;
  }
  //failed attempt restarts at the beginning in strict mode
  if(!gameArr.join('').startsWith(copyArr.join('')) && strict){
    move = 0;
    count = 1;
    player = 'comp';
    displayCount.innerHTML = '!!!';
    setTimeout(() => {
      return delayTones();
    }, 1000)
    return;
  }
}
//sets up the initial conditions of the game
const startGame = () => {
  createGameArr();
  count = 1;
  move = 0;
  startButton.innerHTML = 'Reset'
  return delayTones();
}
//initiates the random moves the game will play for the durration of the game
const createGameArr = () => {
  for(let i = 0; i < 20; i++){
    let rnd = Math.floor(Math.random() * 4);
    gameArr.splice(i, 0, rnd);
    }
}
//you have to listen for events
window.redSquare.addEventListener('click', () => redAct());
window.blueSquare.addEventListener('click', () => blueAct());
window.yellowSquare.addEventListener('click', () => yellowAct());
window.greenSquare.addEventListener('click', () => greenAct());

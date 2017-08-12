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
  setTimeout(() => {document.getElementById('red').style = 'background-color: rgb(195, 45, 45)'}, 100);
  displayCount.innerHTML = count;
}
const blueAct = () =>{
  blueSound.currentTime = 0;
  blueSound.play();
  document.getElementById('blue').style = 'background-color: rgb(156, 165, 255)';
  setTimeout(() => {document.getElementById('blue').style = 'background-color: rgb(75, 98, 195)'}, 100);
  displayCount.innerHTML = count;
}
const greenAct = () =>{
  greenSound.currentTime = 0;
  greenSound.play();
  document.getElementById('green').style = 'background-color: rgb(130, 249, 128)';
  setTimeout(() => {document.getElementById('green').style = 'background-color: rgb(45, 195, 45)'}, 100);
  displayCount.innerHTML = count;
}
const yellowAct = () =>{
  yellowSound.currentTime = 0;
  yellowSound.play();
  document.getElementById('yellow').style = 'background-color: rgb(236, 255, 172)';
  setTimeout(() => {document.getElementById('yellow').style = 'background-color: rgb(182, 214, 55)'}, 100);
  displayCount.innerHTML = count;
}

let strict = false;

const strictMode = () => {
  if(!strict){
    strict = true;
    strictButton.style = 'background-color: rgb(255, 244, 185); color: red';
    return;
  }
  strictButton.style = 'background-color: rgb(219, 240, 137)';
}

let gameArr = [];
let count = 14;
var move = 1;

const delayTones = () => {
  let delay = 750;
  if(count > 5){delay = 700};
  if(count > 9){delay = 500};
  if(count > 13){delay = 400};
  let nextRun = window.setTimeout(() => turnInit(), delay);
}

const turnInit = () => {
  console.log(move)
  if(move <= count){
    if(gameArr[move] === 0){
      redAct();
      move = move + 1;
      if(move > 0){
      delayTones();
      return;
      }
    }
    if(gameArr[move] === 1){
      blueAct();
      move = move + 1;
      if(move > 0){
      delayTones();
      return;
      }
    }
    if(gameArr[move] === 2){
      yellowAct();
      move = move + 1;
      if(move > 0){
      delayTones();
      return;
      }
    }
    if(gameArr[move] === 3){
      greenAct();
      move = move + 1;
      if(move > 0){
      delayTones();
      return;
      }
    }
  }
  if(move > count){
  copyMove();
  return
 }
}

const copyMove = () => {
  console.log('human move')
}

const startGame = () => {
  createGameArr();
  count = 3;
  turnInit();
}
const createGameArr = () => {
  for(let i = 0; i < 20; i++){
    let rnd = Math.floor(Math.random() * 4);
    gameArr.splice(i, 0, rnd);
    }
}

window.redSquare.addEventListener('click', () => redAct());
window.blueSquare.addEventListener('click', () => blueAct());
window.yellowSquare.addEventListener('click', () => yellowAct());
window.greenSquare.addEventListener('click', () => greenAct());

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

let strict = false;

const redAct = () => {
  redSound.currentTime = 0;
  redSound.play();
  document.getElementById('red').style = 'background-color: rgb(249, 128, 128)';
  setTimeout(() => {document.getElementById('red').style = 'background-color: rgb(195, 45, 45)'}, 250);
  displayCount.innerHTML = count;
  console.log('red');
  return;
}
const blueAct = () =>{
  blueSound.currentTime = 0;
  blueSound.play();
  document.getElementById('blue').style = 'background-color: rgb(156, 165, 255)';
  setTimeout(() => {document.getElementById('blue').style = 'background-color: rgb(75, 98, 195)'}, 250);
  displayCount.innerHTML = count;
  console.log('blue');
  return;
}
const greenAct = () =>{
  greenSound.currentTime = 0;
  greenSound.play();
  document.getElementById('green').style = 'background-color: rgb(130, 249, 128)';
  setTimeout(() => {document.getElementById('green').style = 'background-color: rgb(45, 195, 45)'}, 250);
  displayCount.innerHTML = count;
  console.log('green');
  return;
}
const yellowAct = () =>{
  yellowSound.currentTime = 0;
  yellowSound.play();
  document.getElementById('yellow').style = 'background-color: rgb(236, 255, 172)';
  setTimeout(() => {document.getElementById('yellow').style = 'background-color: rgb(182, 214, 55)'}, 250);
  displayCount.innerHTML = count;
  console.log('yellow');
  return;
}

const strictMode = () => {
  if(strict === false){
    strict = true;
    strictButton.style = 'background-color: rgb(255, 244, 185); color: red';
    return;
  }
  strict = false;
  strictButton.style = 'background-color: rgb(219, 240, 137)';
}

let gameArr = [];
let count = 1;
let move = 20;

const startGame = () => {
  count = 1;
  for(let i = 0; i < 20; i++){
    let rnd = Math.floor(Math.random() * 5);
    gameArr.splice(i, 0, rnd);
  }
  turnInit();
  return;
}

const turnInit = () => {
  if(move > 0){
    clearTimeout();
    compMove();
    return;
  }else{
    copyMove();
    return;
 }
}

const compMove = () => {
  move = move - 1;
  if(gameArr[move] === 1){
    redAct();
    setTimeout(() => turnInit(), 400);
    return;

  }
  if(gameArr[move] === 2){
    blueAct();
    setTimeout(() => turnInit(), 400);
    return;

  }
  if(gameArr[move] === 3){
    yellowAct();
    setTimeout(() => turnInit(), 400);
    return;

  }
  if(gameArr[move] === 4){
    greenAct();
    setTimeout(() => turnInit(), 400);
    return;

  }

}

const copyMove = () => {
  console.log('human move')
  return;
}

window.redSquare.addEventListener('click', () => redAct());
window.blueSquare.addEventListener('click', () => blueAct());
window.yellowSquare.addEventListener('click', () => yellowAct());
window.greenSquare.addEventListener('click', () => greenAct());

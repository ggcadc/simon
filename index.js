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
}
const blueAct = () =>{
  blueSound.currentTime = 0;
  blueSound.play();
  document.getElementById('blue').style = 'background-color: rgb(156, 165, 255)';
  setTimeout(() => {document.getElementById('blue').style = 'background-color: rgb(75, 98, 195)'}, 250);
  displayCount.innerHTML = count;
  console.log('blue');
}
const greenAct = () =>{
  greenSound.currentTime = 0;
  greenSound.play();
  document.getElementById('green').style = 'background-color: rgb(130, 249, 128)';
  setTimeout(() => {document.getElementById('green').style = 'background-color: rgb(45, 195, 45)'}, 250);
  displayCount.innerHTML = count;
  console.log('green');
}
const yellowAct = () =>{
  yellowSound.currentTime = 0;
  yellowSound.play();
  document.getElementById('yellow').style = 'background-color: rgb(236, 255, 172)';
  setTimeout(() => {document.getElementById('yellow').style = 'background-color: rgb(182, 214, 55)'}, 250);
  displayCount.innerHTML = count;
  console.log('yellow');
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
let move = 8;
let turn = null;

const startGame = () => {
  count = 1;
  gameArr = [];
  displayCount.innerHTML = 'STARTING';
  for(let i = 0; i < 20; i++){
    let rnd = Math.floor(Math.random() * 5);
    gameArr.splice(i, 0, rnd);
  }
  turnInit();
}

const turnInit = () => {

  if(move > 0){
    compMove(move);
    turn = 'player';
    return;
  }
  copyMove();
  return;
}

const compMove = () => {
  let delay = 500;
  if(count > 5){delay = 400};
  if(count > 9){delay = 300};
  if(count > 13){delay = 200};

  if(gameArr[move - 1] === 1){
    redAct();
    move = move - 1;
    setTimeout(() => turnInit(), delay);
  }
  if(gameArr[move - 1] === 2){
    blueAct();
    move = move - 1;
    setTimeout(() => turnInit(), delay);
  }
  if(gameArr[move - 1] === 3){
    yellowAct();
    move = move - 1;
    setTimeout(() => turnInit(), delay);
  }
  if(gameArr[move - 1] === 4){
    greenAct();
    move = move - 1;
    setTimeout(() => turnInit(), delay);
  }

}

const copyMove = () => {
  console.log('human move')
}

window.redSquare.addEventListener('click', () => redAct());
window.blueSquare.addEventListener('click', () => blueAct());
window.yellowSquare.addEventListener('click', () => yellowAct());
window.greenSquare.addEventListener('click', () => greenAct());

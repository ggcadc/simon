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

const strictMode = () => {
  if(!strict){
    strict = true;
    strictButton.style = 'background-color: rgb(255, 244, 185); color: red';
    return;
  }
  strict = false;
  strictButton.style = 'background-color: rgb(219, 240, 137)';
}

let gameArr = [];
let count = 1;
let move = 7;

const createGameArr = () => {
  for(let i = 0; i < 20; i++){
    let rnd = Math.floor(Math.random() * 5);
    gameArr.splice(i, 0, rnd);
    }
}

const startGame = () => {
  createGameArr();
  count = 1;
  turnInit();
}

const turnInit = () => {
  if(move > 0){
    setTimeout(() => compMove(), 500);
  }else{
    copyMove();
 }
}

const compMove = () => {
  if(gameArr[move] === 1){
    redAct();
    move = move - 1;
    turnInit();

  }
  if(gameArr[move] === 2){
    blueAct();
    move = move - 1;
    turnInit();

  }
  if(gameArr[move] === 3){
    yellowAct();
    move = move - 1;
    turnInit();

  }
  if(gameArr[move] === 4){
    greenAct();
    move = move - 1;
    turnInit();

  }

}

const copyMove = () => {
  console.log('human move')
}

window.redSquare.addEventListener('click', () => redAct());
window.blueSquare.addEventListener('click', () => blueAct());
window.yellowSquare.addEventListener('click', () => yellowAct());
window.greenSquare.addEventListener('click', () => greenAct());

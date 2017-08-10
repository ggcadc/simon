const redSquare = document.getElementById('redSquare');
const blueSquare = document.getElementById('blueSquare');
const greenSquare = document.getElementById('greenSquare');
const yellowSquare = document.getElementById('yellowSquare');
const displayCount = document.getElementById('count');

const redSound = new Audio('./simonSound1.mp3');
const blueSound = new Audio('./simonSound2.mp3');
const greenSound = new Audio('./simonSound3.mp3');
const yellowSound = new Audio('./simonSound4.mp3');

let count = 0;

const redAct = () => {
  redSound.currentTime = 0;
  redSound.play();
  document.getElementById('red').style = 'background-color: rgb(249, 128, 128)';
  setTimeout(() => {document.getElementById('red').style = 'background-color: rgb(195, 45, 45)'}, 250);
  count = count + 1;
  displayCount.innerHTML = count;
  console.log('red');//this will have to lod moves somehow
}
const blueAct = () =>{
  blueSound.currentTime = 0;
  blueSound.play();
  document.getElementById('blue').style = 'background-color: rgb(156, 165, 255)';
  setTimeout(() => {document.getElementById('blue').style = 'background-color: rgb(75, 98, 195)'}, 250);
  count = count + 1;
  displayCount.innerHTML = count;
  console.log('blue');//this will have to lod moves somehow
}
const greenAct = () =>{
  greenSound.currentTime = 0;
  greenSound.play();
  document.getElementById('green').style = 'background-color: rgb(130, 249, 128)';
  setTimeout(() => {document.getElementById('green').style = 'background-color: rgb(45, 195, 45)'}, 250);
  count = count + 1;
  displayCount.innerHTML = count;
  console.log('green');//this will have to lod moves somehow
}
const yellowAct = () =>{
  yellowSound.currentTime = 0;
  yellowSound.play();
  document.getElementById('yellow').style = 'background-color: rgb(236, 255, 172)';
  setTimeout(() => {document.getElementById('yellow').style = 'background-color: rgb(176, 196, 49)'}, 250);
  count = count + 1;
  displayCount.innerHTML = count;
  console.log('yellow');//this will have to lod moves somehow
}

window.redSquare.addEventListener('click', () => redAct());
window.blueSquare.addEventListener('click', () => blueAct());
window.yellowSquare.addEventListener('click', () => yellowAct());
window.greenSquare.addEventListener('click', () => greenAct());

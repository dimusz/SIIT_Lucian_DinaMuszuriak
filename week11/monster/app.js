import Player from './Player.js'
import Monster from './Monster.js'

const gameContainer = document.getElementById('game-container')

const player = new Player(gameContainer);
document.addEventListener("keydown", function (eventKeydown) {
  if (eventKeydown.code === "ArrowDown") {
    // console.log("keydown", eventKeydown)
    player.moveDown()
  }
  if (eventKeydown.code === "ArrowLeft") {
    player.moveLeft()
  }
  if (eventKeydown.code === "ArrowRight") {
    player.moveRight()
  }
  if (eventKeydown.code === "ArrowUp") {
    player.moveUp()
  }

})
// am creea monstrii
const monsterList = []
for (let i = 0; i < 1; i++) {
  const monster = new Monster(gameContainer);
  monsterList.push(monster);
}

setInterval(function () {
  for (let i = 0; i < monsterList.length; i++) {
    const monster = monsterList[i];
    moveMonster(monster);
  }

}, 1000)
/**
 * Misca un monstru random
 * @param {*} myMonster 
 */
function moveMonster(myMonster) {
  const movement = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
  const randomIndex = Math.floor(Math.random() * movement.length);
  const randomMove = movement[randomIndex];

  if (randomMove === "ArrowDown") {
    myMonster.moveDown()
  }
  if (randomMove === "ArrowLeft") {
    myMonster.moveLeft()
  }
  if (randomMove === "ArrowRight") {
    myMonster.moveRight()
  }
  if (randomMove === "ArrowUp") {
    myMonster.moveUp()
  }
  if (checkTouch === true) {
    touchPlayer()
  }
}

let checkTouch = true;
function touchPlayer() {

  for (let i = 0; i < monsterList.length; i++) {
    const monsterElement = monsterList[i].element
    const positionPlayerTop = parseInt(player.element.style.top);
    const positionPlayerLeft = parseInt(player.element.style.left);
    const positionMonsterTop = parseInt(monsterElement.style.top);
    const positionMonsterLeft = parseInt(monsterElement.style.left);

    if (positionMonsterTop=== positionPlayerTop ||
  positionMonsterLeft === positionPlayerLeft ){
      alert('game over!');
    }
  }
}
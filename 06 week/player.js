let player = document.querySelector(".player");

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowDown") {
    let oldTop = parseInt(player.style.top);
    if (oldTop < 350) {
      player.style.top = `${oldTop + 10}px`;
    }
  }
  if (event.code === "ArrowRight") {
    let oldLeft = parseInt(player.style.left);
    if (oldLeft < 350) {
      player.style.left = `${oldLeft + 10}px`;
    }
  }
  if (event.code === "ArrowLeft") {
    let oldLeft = parseInt(player.style.left);
    if (oldLeft >= 10) {
      player.style.left = `${oldLeft - 10}px`;
    }
  }
  if (event.code === "ArrowUp") {
    let oldTop = parseInt(player.style.top);
    if (oldTop >= 10) {
      player.style.top = `${oldTop - 10}px`;
    }
  }
});

let playBox = document.querySelector(".play-box");
let container = document.querySelector(".container");

function obstacole() {
  let obstacle = document.createElement("div");
  obstacle.className = "obstacle";
  obstacle.style.top = `${Math.random() * 350}px`;
  obstacle.style.left = `${Math.random() * 350}px`;

  playBox.appendChild(obstacle);
}
obstacole();
obstacole();
obstacole();
obstacole();

function createLives() {
  let lives = document.createElement("div");
  lives.className = "lives";

  container.appendChild(lives);
}
createLives();
createLives();
createLives();


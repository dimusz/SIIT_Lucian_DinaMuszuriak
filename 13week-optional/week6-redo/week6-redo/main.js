import './style.css'

let player = document.querySelector('.player')

document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowDown') {
        let oldTop = parseInt(player.style.top)
        if (oldTop < 370) {
            player.style.top = `${oldTop + 10}px`
        }

    }
    if (event.code === "ArrowRight") {
        let oldLeft = parseInt(player.style.left)
        if (oldLeft < 370) {
            player.style.left = `${oldLeft + 10}px`
        }
    }
    if (event.code === 'ArrowLeft') {
        let oldLeft = parseInt(player.style.left)
        if (oldLeft >= 10) {
            player.style.left = `${oldLeft - 10}px`
        }
    }
    if (event.code === 'ArrowUp') {
        let oldTop = parseInt(player.style.top)
        if (oldTop >= 10) {
            player.style.top = `${oldTop - 10}px`
        }
    }
});

const obstaclesClass = document.getElementsByClassName("obstacol")

const obstaclesList = [];


for (let i = 0; i < obstaclesClass.length; i++) {
    let obstacle;
    do {
        obstacle = {
            top: Math.random() * 380,
            left: Math.random() * 380
        }
    } while (obstacle.top > 50 && obstaclesClass.left > 50)


    obstaclesClass[i].style.top = `${obstacle.top}px`
    obstaclesClass[i].style.left = `${obstacle.left}px`

    obstaclesList.push(obstacle)
}




// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

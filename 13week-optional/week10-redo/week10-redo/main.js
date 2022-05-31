

import Spaceship, {activeSpace} from "./components/spaceShipGenerator";

const gameContainer = document.querySelector(".game-container");


const btnGen = document.querySelector(".generate");
const listSpaceship = []
btnGen.addEventListener("click", () => {
  console.log("se da click");


  const newSpaceShip = new Spaceship(gameContainer);
  listSpaceship.push(newSpaceShip)
});

document.addEventListener('keydown', function(event){
    if(event.code === 'ArrowUp'  && activeSpace){
        activeSpace.moveUp()
    }
  
    if(event.code === 'ArrowDown'  && activeSpace){
        activeSpace.moveDown()
    }
    if(event.code === 'ArrowLeft'  && activeSpace){
        activeSpace.moveLeft()
    }
    if(event.code === 'ArrowRight'  && activeSpace){
        activeSpace.moveRight()
    }
})

// document.querySelector('#app').innerHTML = `
//   <SpaceApp/>
// `

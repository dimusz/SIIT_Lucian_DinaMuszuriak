let player = document.querySelector('.player')

document.addEventListener('keydown', function(event){
    if (event.code === 'ArrowDown'){
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
    if(event.code === 'ArrowLeft'){
        let oldLeft = parseInt(player.style.left)
        if (oldLeft >= 10) {
            player.style.left = `${oldLeft -10}px`
        }
    }
    if(event.code === 'ArrowUp'){
        let oldTop = parseInt(player.style.top)
        if (oldTop >= 10) {
            player.style.top = `${oldTop -10}px`
        }
    }
    });
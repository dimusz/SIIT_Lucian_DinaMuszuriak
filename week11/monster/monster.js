import ElementMove from './ElementMove.js';

class Monster extends ElementMove {
  constructor(location) {
    super();
    const monsterImg = document.createElement("img");
    monsterImg.style.position = 'relative'
    monsterImg.style.width='30px';
    monsterImg.style.height='30px';
    monsterImg.style.top = "30px";
    monsterImg.style.left = "30px";
    const randomNumber = Math.floor(Math.random() * 11) + 1;

    monsterImg.src = `./monsterImg/monster${randomNumber}.svg`;

    location.appendChild(monsterImg);
    monsterImg.classList.add('monster')
    this.element = monsterImg;
  }
}


export default Monster;

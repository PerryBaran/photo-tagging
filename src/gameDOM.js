import board from "./images/gameboard.jpg";
import waldo from "./images/waldo.png";
import odlaw from "./images/odlaw.png";
import wenda from "./images/wenda.png";

const charactersArray = [
    {name: 'Waldo', src: waldo}, 
    {name: 'Odlaw', src: odlaw},
    {name: 'Wenda', src: wenda}
];

function initializeGame() {
    const characters = document.getElementById('characters');
    createCharacters(characters, charactersArray);

    const board = document.getElementById('board');
    createBoard(board);
    
}

const createCharacters = (container, array) => { 
    const p = document.createElement('p');
    p.innerHTML = 'Can you find...'
    container.appendChild(p);

    const length = array.length;
    for (let i = 0; i < length; i++) {
        const character = document.createElement('div');
        character.className = 'character'

        const img = document.createElement('img');
        img.src = array[i].src;
        
        const name = document.createElement('p');
        name.innerHTML = array[i].name;

        character.appendChild(img);
        character.appendChild(name);
        container.appendChild(character)
    }
}

const createBoard = (container) => {
    const gameboard = document.createElement('img');
    gameboard.src = board;
    gameboard.className = "board";
    container.appendChild(gameboard);

    getMousePosition(gameboard);
}

const getMousePosition = (element) => {
    element.onclick = (e) => {
        const area = e.target.getBoundingClientRect();
        const x = e.clientX - area.left;
        const y = e.clientY - area.top;
        console.log(x, y);
    }
}

export default initializeGame
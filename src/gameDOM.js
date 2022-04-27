import board from "./images/gameboard.jpg";
import waldo from "./images/waldo.png";
import odlaw from "./images/odlaw.png";
import wenda from "./images/wenda.png";
import getMousePosition from "./game.js";
import checkWin from "./youwin.js";
import reset from "./reset.js";

const initializeGame = () => {
    const charactersArray = [
        {name: 'Waldo', src: waldo, found: false}, 
        {name: 'Odlaw', src: odlaw, found: false},
        {name: 'Wenda', src: wenda, found: false}
    ];

    const characters = document.getElementById('characters');
    createCharacters(characters, charactersArray);

    const boardContainer = document.getElementById('board');
    const board = createBoard(boardContainer);
    boardClick(board, characters, charactersArray, boardContainer);
}

const createCharacters = (container, array) => { 
    reset(container)
    const p = document.createElement('p');
    p.innerHTML = 'Can you find...'
    container.appendChild(p);

    const length = array.length;
    for (let i = 0; i < length; i++) {
        const character = document.createElement('div');
        if (array[i].found) {
            character.className = 'character found'
        } else {
          character.className = 'character'  
        }

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

    return gameboard;
}

const boardClick = (board, characters, array, boardContainer) => {
    board.onclick = (e) => {
        getMousePosition(e, array);
        createCharacters(characters, array)
        checkWin(boardContainer, array);
    }
}

export default initializeGame
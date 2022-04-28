import board from "./images/gameboard.jpg";
import waldo from "./images/waldo.png";
import odlaw from "./images/odlaw.png";
import wenda from "./images/wenda.png";
import getMousePosition from "./position.js";
import checkWin from "./youwin.js";
import reset from "./reset.js";
import checkFound from "./found";

const start = () => {
    const boardContainer = document.getElementById('board');
    reset(boardContainer);
    
    const charactersArray = [
        {name: 'Waldo', src: waldo, found: false}, 
        {name: 'Odlaw', src: odlaw, found: false},
        {name: 'Wenda', src: wenda, found: false}
    ];

    const charactersContainer = document.getElementById('characters');
    createCharacters(charactersContainer, charactersArray);

    const button = document.createElement('button');
    button.className = 'start';
    button.innerHTML = 'start';

    button.addEventListener('click', () => {
        initializeGame(boardContainer, charactersArray, charactersContainer);
    })
    
    boardContainer.appendChild(button);

}

const initializeGame = (boardContainer, charactersArray, charactersContainer) => {
    reset(boardContainer);
    const board = createBoard(boardContainer);
    
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup';
    boardContainer.appendChild(popupContainer);

    board.onclick = (e) => {
        const coordinates = getMousePosition(e);
        const x = coordinates.x;
        const y = coordinates.y;
        popup(x, y, popupContainer, charactersArray, charactersContainer)
    }

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

const popup = (x, y, container, characters, charactersContainer) => {
    reset(container);
    container.style.left = `${x + 20}px` 
    container.style.top = `${y + 20}px`

    const length = characters.length;
    for (let i = 0; i < length; i++) {
        const character = characters[i]
        const select = document.createElement('div');
        select.className = "select";
         
        const name = document.createElement('p');
        name.innerHTML = character.name

        select.addEventListener('click', () => {
            checkFound(character.name, x, y, characters);
            createCharacters(charactersContainer, characters);
            checkWin(characters);
            reset(container);
        })

        select.appendChild(name);
        container.appendChild(select);
    }
}

export default start
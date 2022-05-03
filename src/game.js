import board from "./images/gameboard.jpg";
import waldo from "./images/waldo.png";
import odlaw from "./images/odlaw.png";
import wenda from "./images/wenda.png";
import getMousePosition from "./position.js";
import checkWin from "./youwin.js";
import reset from "./reset.js";
import checkFound from "./found";
import Timer from "./timer.js";
import leaderboardButton from "./leaderboardDOM";

//sets up start button
const start = () => {
    const timer = Timer();
    //gets container and resets - allows for restarting of game on completion
    const boardContainer = document.getElementById('boardContainer');
    reset(boardContainer);
    const gameContainer = document.createElement('div');
    gameContainer.id ='board';
    boardContainer.appendChild(gameContainer);
    
    //creates array characters
    const charactersArray = [
        {name: 'Waldo', src: waldo, found: false}, 
        {name: 'Odlaw', src: odlaw, found: false},
        {name: 'Wenda', src: wenda, found: false}
    ];

    //gets container for characters + creates DOM elements
    const charactersContainer = document.getElementById('characters');
    createCharacters(charactersContainer, charactersArray);

    //start button creation and listeners
    const button = document.createElement('button');
    button.className = 'start';
    button.innerHTML = 'START';

    button.onclick = () => {
        //loads art and starts game loop
        initializeGame(gameContainer, charactersArray, charactersContainer, timer);
        timer.start();
    }
    
    gameContainer.appendChild(button);
    //open leaderboard button
    leaderboardButton(gameContainer);
}

//creates characters DOM elements and styles depending on found status
const createCharacters = (container, array) => { 
    reset(container)

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

const initializeGame = (gameContainer, charactersArray, charactersContainer, timer) => {
    //resets board (removes start button)
    reset(gameContainer);
    const board = createBoard(gameContainer);
    
    //creates the popupContainer for selecting characters (left empty)
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup';
    gameContainer.appendChild(popupContainer);

    //board listeners
    board.onclick = (e) => {
        //gets cooridnates of click
        const coordinates = getMousePosition(e);
        const x = coordinates.x;
        const y = coordinates.y;

        //creates a popup allowing for selection of found character
        popup(x, y, popupContainer, charactersArray, charactersContainer, timer)
    }
}

//creates gameboard DOM elements and returns the board for event listener
const createBoard = (container) => {
    const gameboard = document.createElement('img');
    gameboard.src = board;
    gameboard.className = "boardImage";
    container.appendChild(gameboard);

    return gameboard;
}

//creates popup for selecting found character
const popup = (x, y, container, characters, charactersContainer, timer) => {
    reset(container);

    //positions popup near mouse
    container.style.left = `${x + 20}px` 
    container.style.top = `${y + 20}px`

    //creates character selection list
    const length = characters.length;
    for (let i = 0; i < length; i++) {
        const character = characters[i]
        const select = document.createElement('div');
        select.className = "select";
         
        const name = document.createElement('p');
        name.innerHTML = character.name;

        //event listener for when selecting character
        select.addEventListener('click', () => {
            //checks if the character is found
            checkFound(character.name, x, y, characters);
            //updates UI if character is found or game is won
            createCharacters(charactersContainer, characters);
            checkWin(characters, timer);
            //hides container after making selection
            reset(container);
        });

        select.appendChild(name);
        container.appendChild(select);
    }
};

export default start
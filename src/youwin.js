import start from './game.js';
import reset from './reset.js';

//creates winning screen
const youWin = () => {
    const container = document.getElementById('boardContainer')

    const div = document.createElement('div');
    div.className = 'win'

    const p = document.createElement('p');
    p.innerHTML = 'You Win';
    div.appendChild(p);

    const time = document.createElement('p');
    //todo - implement timer
    time.innerHTML = `Time: ${time}`
    div.appendChild(time);

    const input = document.createElement('input');
    input.placeholder = 'name';
    div.appendChild(input);

    const submit = document.createElement('button');
    submit.innerHTML = 'submit'
    div.appendChild(submit);

    const restart = document.createElement('button');
    restart.innerHTML = 'restart';
    restart.onclick = () => {
        start();
        reset(div);
    }
    div.appendChild(restart)

    container.appendChild(div);
    console.log('you win!')
}

const checkWin = (array) => {
    const length = array.length;
    //check if all characters are found by looping through character array again
    for (let n = 0; n < length; n++) {
        //if a character isn't found return
        const found = array[n].found;
        if (!found) {
            return
        }
    }
    //if all character found - you win!!
    youWin();
        
}

export default checkWin
import start from './game.js';
import reset from './reset.js';
import submitToLeaderboard from './firebase/submitTime.js';
import getLeaderboard from './firebase/leaderboard.js';

//creates winning screen
const youWin = (timer) => {
    const container = document.getElementById('boardContainer')

    const div = document.createElement('div');
    div.className = 'win'

    const p = document.createElement('p');
    p.innerHTML = 'Your time:';
    div.appendChild(p);

    const time = document.createElement('p');
    time.innerHTML = timer.getTime();
    div.appendChild(time);

    const p2 = document.createElement('p');
    p2.innerHTML = 'To submit your time to the leaderboard please enter a name'
    p2.className = 'small'
    div.appendChild(p2);

    const form = document.createElement('form');
    form.className = 'leaderboardForm'
    const name = document.createElement('input');
    name.placeholder = 'name';
    name.required = true;
    form.appendChild(name);

    const submit = document.createElement('button');
    submit.innerHTML = 'submit'
    submit.onclick = (e) => {
        e.preventDefault();
        const valid = form.checkValidity();
        if (valid) {
            const doc = {name: name.value, time: timer.getTime()}
            submitToLeaderboard(doc);
            reset(div);
            start();
        }
    }
    form.appendChild(submit);
    div.appendChild(form);

    const restart = document.createElement('button');
    restart.innerHTML = 'restart';
    restart.className = 'restart';
    restart.onclick = () => {
        reset(div);
        start();
    }
    div.appendChild(restart)

    container.appendChild(div);

    getLeaderboard(container, 'endscreen');
}

const checkWin = (array, timer) => {
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
    //stop timer
    timer.stop();
    youWin(timer);
        
}

export default checkWin
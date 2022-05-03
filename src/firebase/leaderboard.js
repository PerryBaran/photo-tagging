import db from './initialize.js'
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const getLeaderboard = (container, classname) => {
    //collection ref
    const colRef = collection(db, 'leaderboard');

    //queries
    const q = query(colRef, orderBy('time'));

    const leaderboard = []; 

    getDocs(q)
       .then((snapshot) => { 
        snapshot.docs.forEach((doc) => {
            leaderboard.push({ ...doc.data(), id: doc.id })
        })
        createLeaderboard(leaderboard, container, classname);
    });
};

const createLeaderboard = (leaderboard, container, classname) => {
    const div = document.createElement('div');
    div.className = `leaderboardContainer ${classname}`;

    const h2 = document.createElement('h2');
    h2.innerHTML = 'Leaderboard'
    div.appendChild(h2);

    const board = document.createElement('div');
    board.className = 'leaderboard';
    div.appendChild(board);

    const length = leaderboard.length;
    for (let i = 0; i < length; i++) {
        const entry = document.createElement('div');
        entry.className = 'row';

        const place = document.createElement('p');
        place.innerHTML = i + 1;
        place.className = 'place';
        entry.appendChild(place);

        const name = document.createElement('p');
        name.innerHTML = leaderboard[i].name;
        name.className = 'name';
        entry.appendChild(name);

        const time = document.createElement('p');
        time.innerHTML = leaderboard[i].time;
        time.className = 'time';
        entry.appendChild(time);

        board.appendChild(entry);
    }

    container.appendChild(div);
}

export default getLeaderboard
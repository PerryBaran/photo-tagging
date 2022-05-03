import db from './initialize.js'
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const getLeaderboard = () => {
    //collection ref
    const colRef = collection(db, 'leaderboard');

    //queries
    const q = query(colRef, orderBy('time'));

    const leaderboard = []; 

    getDocs(q)
       .then((snapshot) => { 
        snapshot.docs.forEach((doc) => {
            leaderboard.push({ ...doc.data(), id: doc.id })
        });
    });

    return leaderboard;
};

export default getLeaderboard
import db from './initialize.js'
import { collection, addDoc } from 'firebase/firestore';

const submitToLeaderboard = (doc) => {
    const leaderboard = collection(db, 'leaderboard')
    addDoc(leaderboard, doc);
}

export default submitToLeaderboard
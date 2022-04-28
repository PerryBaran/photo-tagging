import db from './initialize.js'
import { collection, getDocs } from 'firebase/firestore';


//collection ref
const leaderboard = collection(db, 'leaderboard')

//get collection data
getDocs(leaderboard)
    .then((snapshot) => {
        let leaderboard = [];
        snapshot.docs.forEach((doc) => {
            leaderboard.push({ ...doc.data(), id: doc.id })
        })
    })
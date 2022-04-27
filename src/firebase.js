import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCs0FKbOhiv-dteU4vSm-cjwVU7Mm-24H0",
    authDomain: "photo-tagger-8b5df.firebaseapp.com",
    projectId: "photo-tagger-8b5df",
    storageBucket: "photo-tagger-8b5df.appspot.com",
    messagingSenderId: "237989634585",
    appId: "1:237989634585:web:278aff7d0724e80821c088"
};

//init firebase
initializeApp(firebaseConfig);

//init services
const db = getFirestore()

//collection ref
const colRef = collection(db, 'leaderboard')

//get collection data
getDocs(colRef)
    .then((snapshot) => {
        let leaderboard = [];
        snapshot.docs.forEach((doc) => {
            leaderboard.push({ ...doc.data(), id: doc.id })
        })
        console.log(leaderboard);
    })
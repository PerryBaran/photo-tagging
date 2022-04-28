import db from './initialize';
import { collection, getDocs } from 'firebase/firestore';

const positions = collection(db, 'locations');

function getLocations() {
    const locations = []

    getDocs(positions)
    .then((snapshot => {
        snapshot.docs.forEach((doc) => {
            locations.push({...doc.data()})
        })
    }))
    return locations
}

export default getLocations()
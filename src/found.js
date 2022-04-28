import getLocations from './firebase/coordinates';

const checkFound = (name, x, y, characters) => {
    //array of locations
    const locations = getLocations;
    const locationsLength = locations.length;

    //loop through locations
    for (let i = 0; i < locationsLength; i++) {

        //check if area clicked falls within a character location and the name selected = name
        const location = locations[i]
        if (location.name === name
        && x > location.left && x < location.right
        && y > location.top && y < location.bottom) {
            
            //if true - set correct character to found
            const charactersLength = characters.length;
            for (let j = 0; j < charactersLength; j++) {
                const character = characters[j];
                if (character.name === name) {
                    character.found = true
                }
            }
        }
    } 
}

export default checkFound
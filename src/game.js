import getLocations from './firebase.js';

const getMousePosition = (e, array) => {
    const area = e.target.getBoundingClientRect();
    const x = e.clientX - area.left;
    const y = e.clientY - area.top;

    const locations = getLocations;
    const locationsLength = locations.length;
    //loop through locations
    for (let i = 0; i < locationsLength; i++) {

        //check if area clicked falls within a character location
        const location = locations[i]
        if (x > location.left && x < location.right
            && y > location.top && y < location.bottom) {

            //if yes - check which character you've found by looping through character array
            const arrayLength = array.length
            for (let j = 0; j < arrayLength; j++) {

                //if match found, set character found to true
                const character = array[j]
                if (location.name === character.name) {
                    character.found = true
                }
            }
        }
    } 
}

export default getMousePosition;
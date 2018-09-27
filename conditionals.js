const MAJORITY_OF_AGE = 18

var me = {
    name: 'Enrique',
    lastName: 'Devars',
    age: '21',
    enginner: true,
    cook: false,
    singer: true,
    dj: false,
    guitarrist: false,
    drone_pilot: false
}

function showTalents(person) {
    console.log(`${person.name} is: `)
    if (person.enginner === true) {
        console.log('Enginner')
    }
    if (person.cook === true) {
        console.log('Cook')
    }
    if (person.singer === true) {
        console.log('Singer')
    }
    if (person.dj === true) {
        console.log('DJ')
    }
    if (person.guitarrist === true) {
        console.log('Guitarrist')
    }
    if (person.drone_pilot === true) {
        console.log('Drone pilot')
    }
}

/*Arrow function, if we has only one parameter in the function we can delete the parentheses, and if the function only has 
one sentece we can delete the return value
*/
const is_an_Adult = ({age}) => age >= MAJORITY_OF_AGE

function show_if_is_adult(person) {
    if (is_an_Adult(person)) {
        console.log(`${person.name} is an adult`)
    } else {
        console.log(`${person.name} isn't an adult`)
    }
}

showTalents(me)
show_if_is_adult(me)
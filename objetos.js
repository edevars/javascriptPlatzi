var me={
    name: 'Enrique',
    lastName:'Devars',
    age: 21
}
function showNameAndAge(person){
    var {name, age}=person
    return console.log(`Hi my name is ${name} and I'm ${age} years old`)
} 
function birthday(person){
    return { ...person,
         age: person.age + 1
        }
}
birthday(me)
showNameAndAge(me)
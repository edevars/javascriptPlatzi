var me = {
    name: 'Enrique',
    lastName: 'Devars',
    weight: 71,
}
const WEIGHT_INCREMENT = .200
const DAYS_OF_THE_YEAR = 365
const gainWeight = (person) => person.weight+= WEIGHT_INCREMENT
const loseWeight = (person) => person.weight-= WEIGHT_INCREMENT

console.log(`${me.name} started the year weighing ${me.weight}`)
//simulation of a year time in days
for(var i=1; i<=DAYS_OF_THE_YEAR; i++){
    var random = Math.random()
    if(random < 0.25){
        gainWeight(me)
    }else if(random<0.5){
        loseWeight(me)
    }
}
console.log(`And finished the year weighing ${me.weight.toFixed(1)}`)
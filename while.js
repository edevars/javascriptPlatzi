var me = {
    name: 'Enrique',
    lastName: 'Devars',
    weight: 71,
}
const WEIGHT_INCREMENT = .3
const DAYS_OF_THE_YEAR = 365
const gainWeight = (person) => person.weight+= WEIGHT_INCREMENT
const loseWeight = (person) => person.weight-= WEIGHT_INCREMENT
const eat_a_lot = () => Math.random() < 0.3
const doExercise = () => Math.random() < 0.4 
console.log(`${me.name} started the year weighing ${me.weight}`)
const goal = me.weight - 3 
var days_passed=0
while(me.weight> goal){
    if(eat_a_lot()){
        gainWeight(me)
    }
    if(doExercise()){
        loseWeight(me)
    }
    days_passed++
}
console.log(`${days_passed} days passed to reach the goal to lose 3 kilograms`)
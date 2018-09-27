var counter = 0
const rain = () => Math.random() < 0.25

do {
    counter++
} while (!rain())
if (counter > 1) {
    console.log(`I go to see if it is raining ${counter} times`)
} else {
    console.log(`I go to see if it is raining ${counter} time`)
}
console.log('for loop')
for (let number = 0; number < 10; number++) {
    if(number == 5){
        // break
        continue
    }
    console.log(number)
}

console.log('while loop')
let number1 = 11;
while (number1 < 10){
    console.log(number1)
    number1++
}

console.log('do-while loop')
let number2 = 11;
do {
    console.log(number2)
    number2++
} while (number2 < 10)

console.log('for-each loop')
const cars = ['Audi', 'Tesla', 'BMW']
cars.forEach((car) => {
    console.log(car)
})

const person = {
    firstname: 'Kadi',
    lastname: 'Tamm',
    age: 40
}

console.log('for-in loop')
for (let personKey in person) {
    console.log(person[personKey])
}
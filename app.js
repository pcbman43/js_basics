/*
if(condition) {
    // if statements
} else {
    // else statements
}
== equal   ->  ===
!= not equal  ->  !==
*/

let personID = 34;

/*if(typeof personID === 'undefined'){
    console.log('id is not correct')
} else {
    console.log(`id is ${personID}`)
}*/

/*
if(condition) {
    // if statements
} else if(condition1){
    // if1 statements
} else {
    else statement
}
*/

/*const color = 'blue'
if(color === 'red'){
    console.log('Stop!')
} else if(color === 'yellow'){
    console.log('Attention!')
} else if(color === 'green'){
    console.log('Go!')
} else {
    console.log('Error!')
}*/

/*
condition1 && condition2 - and
condition1 || condition2 - or
* */

const name = 'Kadi'
const age = 1

if(age > 0 && age <= 12){
    console.log(`${name} on laps`)
} else if(age > 12 && age < 18){
    console.log(`${name} on nooruk`)
} else {
    console.log(`${name} on täiskasvanu`)
}

let id = 5

if(id === 100){
    console.log('Ok')
} else {
    console.log('Not')
}

// ? - ternary
console.log(id === 100 ? 'Ok' : 'Not')

// switch
const color = 'blue'

switch (color) {
    case "red":
        console.log('Stop!')
        break;
    case "yellow":
        console.log('Attention!')
        break;
    case "green":
        console.log('Go!')
        break;
    default:
        console.log('Error!')
}
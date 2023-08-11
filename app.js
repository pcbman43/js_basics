const numbers1 = [43, 56, 33, 23, 44, 36, 5]
const numbers2 = new Array(22, 45, 33, 76, 54)

let val

val = numbers1.length
val = numbers2.length

val = numbers1[3]
val = numbers1.indexOf(36)

val = Array.isArray(numbers2)

numbers1.push(250) // Adds an object to the end of the array
numbers1.pop() // Deletes the last object from the array
numbers1.unshift(120) // Adds an object to the start of the array
numbers1.shift() // Deletes the first object from the array

val = numbers1.concat(numbers2)

const fruits = ['banana', 'apple', 'orange']
val = fruits.sort()

val = numbers1.sort(function (x, y) {
    return x - y
})


val = numbers1.sort(function (x, y) {
    return y - x
})

console.log(val)
/*
function greeting(name){
    // console.log(`Hello, ${name}!`)
    return `Hello, ${name}!`
}
// greeting('Anna')
// let greet = greeting('Anna')
// console.log(greet)
const square = function(number) {
    return number * number
}
// let result = square(3)
// console.log(result)
*/

// IIFE - Immediately Invokable Function Expression
(function (){
    console.log('function is running')
})();

(function (name){
    console.log(`Hello, ${name}!`)
})('Anna')

const todo = {
    add: function (){
        console.log('add todo...')
    },
    edit: function (){
        console.log('edit todo...')
    },
    delete: function (){
        console.log('delete todo...')
    }
}

todo.add()
todo.edit()
todo.delete()
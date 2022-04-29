// console.log('checking connection ⛓')

// // functions are 'first-class'
// // functions can be anything

// // defining a named function
// function funcName() {}

// // function expressions (anonomymous functions)
// const varName = function() {}

// // callback and higher order functions

// // a higher order function is one that recieves antoher function as arguments
// // the function that is pased in AS args is called a 'callback function'
// const higherOrder = function(callback) {
//   // accepts a callback and invokes
//   callback()
// }
// // a callback can be any function
// const callbackFunc = function() {
//   console.log('the callback has been invoked!')
// }

// // pass the callback to the higher order function
// higherOrder(callbackFunc)

// higherOrder(function() {
//   console.log('hello from the anon function')
// })

// // callback/hihger order function example
// // asyncrounous code/async (doesn't run right away) waits for the user to interact
// // document.querySelector('button').addEventListener('click', function() {})

// // callback calculator
// // higher order function that needs a callback to do math
// const calc = function(num1, num2, math) {
//   // 10, 5
//   return math(num1, num2)
// }

// // callback can be used with the higher order calc
// const add = function(num1, num2) {
//   return num1 + num2
// }

// const subtract = function(num1, num2) {
//   return num1 - num2
// }

// console.log(calc(10, 5, add))
// console.log(calc(20, 7, subtract))

// const myValue = calc(10, 10, function(num1, num2) {
//   return num1 * num2
// })

// // const myFunctions = [
// //   add,
// //   subtract
// // ]

// // const takeOut = myFuctions[0]
// // takeOut()

// const myObj = {
//   myFunction: function() {
//     console.log('hello')
//   }
// }

// myObj.myFunction()

// console.log(console)

// console.log(myValue)

/*
TIMING FUNCTIONS
*/

// asyncrounous??? code 

// setTimeout
const justOnce = function() {
  console.log('I only happen once')
}

//setTimeout(callback, time in ms)
// invokes the cb once after X ms have passed
setTimeout(justOnce, 5000)
setTimeout(function() {
  console.log('i actually will happen first')
}, 2500) // 2.5 seconds

// setInterval
const tick = function() {
  console.log('tick')
}

// setInterval(callback, frequency (interval) in ms)
setInterval(tick, 1000) // no was to clear this tick without varibale assignment
const tock = setInterval(function() {
  console.log('tock') 
}, 1001)

// stop either interval -- needs varaible that has a interval assigned to it
// setTimeout(function() {
//   // clear the tocking after 5 seconds
//   console.log('clearing the tock interval!')
//   clearInterval(tock)
// }, 5000)
setTimeout(clearInterval(tock), 5000)
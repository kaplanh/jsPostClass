// ? ======================================
// ?              SCOPE
// ? ======================================

console.log("******* SCOPE ********")

let number1 = 3 //?Global
let number2 = 5 //?Global
console.log(number1) //?3

const funk1 = () => {
  number1 = 44 //? Global deiskene atama yapildi
  const number2 = 7 //? local (block-scoped) degisken
  console.log("LOCAL:", number2) //? 7
}

funk1()

console.log(number1) //? 44
console.log("GLOBAL:", number2) //? global number2 (5)

//? Blocked Scope
{
  let x = 77
  x++
  console.log(x)
}
// console.log(x) //! Error: Scope Dışı

//! Uncaught SyntaxError: Identifier 'number2' has already been declared (at scope.js:29:5)
// let number2 = 99

number2 = 4
console.log(number2)

//  number3 = 101 //? hosited degisken (var)

// console.log(number3)
// var number3 = 101 //? Hoisted degiskendir

//? Muadili
var number3
console.log(number3)
number3 = 101 //? Hoisted degiskendir
console.log(number3)

// var result
if (number3 === 102) {
  let result = "Hi"
  console.log(result)
} else {
  console.log(result)
  var result = "Hello"
}
console.log(result)

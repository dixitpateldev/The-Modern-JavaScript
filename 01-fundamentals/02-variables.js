// Topic: Variables & Data Types
// Source: https://javascript.info/variables  |  https://javascript.info/types
// ────────────────────────────────────────────────────────────────────────────

//Legacy term to define a variable is "var" but now we use "let" and "const" to define a variable.
//let x = 10; we can't use "let" to declare a variable more than once in the same scope. It will throw an error.

let fullName = "Dixit Patel"; //string
let age = 33; //number
let x = null; //object
let y = undefined; //undefined
let z = BigInt (123); //bigint
let isFollow = true; //boolean
let cost = 121212121212121212121212121212121212121212121221212121212121212121212121212121212121212121212121212121212121212121212121212121n; //bigint



let name = "John";
let admin = name; //admin is assigned the value of name variable
alert(`Hello, ${name}`); //John

let isGreater = 4 > 1; //true
console.log(`Is 4 greater than 1? ${isGreater}`); //true
typeof isGreater; //boolean
console.log(`The type of isGreater is ${typeof isGreater}`); //boolean
typeof alert; //function
console.log(`The type of alert is ${typeof alert}`); //function
result = prompt("Enter your name:"); //prompt is a function that takes input from the user and returns it as a string
console.log(`You entered: ${result}`); //prints the value entered by the user

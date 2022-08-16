//function

// =======================
// Function declaration
// =======================

// function work(resources){
//     return  "work done"
// }

// =======================
// Function Expression
// =======================

// const work = function(resources){
//     return  "work done"
// }
// work()

// =======================
// First class function
// =======================

// First-class functions are JavaScript functions that can behave like variables.
// They can also be parsed as arguments to higher-order functions.
// Higher-order functions are functions that return a function or
// take in a function as an argument.

// function square(num){
//     return num * num;
// }

// function displaySquare(fn){
// square is parsed as arguments to higher-order functions displaySquare
//     console.log("Square is" +" " + fn(5))
// }

// displaySquare(square)

// =======================
// IIFE with Clouser
// =======================

// (function (x){
//     return (function(y){
//         return (function(x){
//             console.log(x)
//         })(3)
//     })(2)
// })(1)

// =======================
// Function scope
// =======================

// The following variables are defined in the global scope
// var num1 = 20;
// var num2 = 3;
// const name = 'Shubham';

// This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }
// console.log(multiply()); // Returns 60

// A nested function example
// function getScore() {
//   var num1 = 2;
//   var num2 = 3;
//   function add() {
//     return name + ' scored ' + (num1 + num2);
//   }
//   return add();
// }

// console.log(getScore()); => Returns "Shubham" scored 5"

// =======================
// Function Hoisting
// =======================

//Functions are hoisted completely

// function funName(){
//     console.log("Shubham")
// }
// funName()=> works normally
// ------------------------------------------
// funName()=> works normally
// function funName(){
//     console.log("Shubham")
// }
// funName()=> works normally
// ------------------------------------------
// var x = 21;
// function fun(){
//     console.log(x)
//     var x = 10
// }
// fun()
// *Notes:> Hoisting is a 2 step process
// step 1-first it initialize the complete code i.e (global scope)
// Step 2 - It's gonna initialize the local scope and when does soo it's gonna
// hoist all the variables at top of the local scope

// =======================
// params,args
// =======================

// function fun(params) {
//     console.log(params)
// }
// fun("Arguments")

// =======================
// Spread,rest
// =======================

// Spread syntax (...) allows an iterable, such as an array or string,
// to be expanded in places where zero or more arguments (for function calls) or elements
// (for array literals) are expected.

// Spread syntax "expands" an array into its elements,
// while rest syntax collects multiple elements and "condenses" them into
// a single element.

// Spread Operator (USE CASE :1)
// The JavaScript spread operator (...) allows us to quickly copy
// Example
//  all or part of an existing array or object into another array or object.

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined)

// Spread Operator (USE CASE :2)
// The spread operator is often used in combination with destructuring.
// Example
// Assign the first and second items from numbers to variables and put the rest in an array:

// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...rest] = numbers;
// console.log(one,two,...rest)

// Spread Operator (USE CASE :3)
// We can use the spread operator with objects too:
// Example
// Combine these two objects:

// const myVehicle = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red'
// }
// const updateMyVehicle = {
//   type: 'car',
//   year: 2021,
//   color: 'yellow'
// }
// const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
// console.log(myUpdatedVehicle)

// Examples
// -----------------------------------------

// function multiply(num1,num2) {
//     console.log(num1*num2)
// }
// multiply(5,6)

// 0r

// function multiply(num1,num2){
//     return [num1 ,num2]
// }
// const arr =[2,3,2]
// console.log(multiply(...arr))

// or (using rest )

// function multiply(...arr){=> here ... is used as rest to condense
//     return arr
// }
// const arr =[2,3,2]
// console.log(multiply(...arr))=> here ...is used as spread to expand

// =======================
// Callback function
// =======================

// A callback function is a function passed into another function as an argument, which is
// then invoked inside the outer function to complete some kind of routine or action.

// function greeting(name) {
//     console.log(('Hello ' + name));
//   }

//   function processUserInput(callback) {
//     var name = 'shubham'
//     callback(name);
//   }

//   processUserInput(greeting);

// =======================
// Arrow Function
// =======================

//1: Syntax

// function square(num){
//     return num * num
// }

// const square = (num)=>{
//     return num * num
// }

//2: Implicit Return keyword

// if function is one liner we need not to write return

// const square = (num)=>num*num;

// 3: Arguments is inbuilt keyword in normal function(can directly access args) but not for arrow function

// const args = ()=>{
//     console.log(arguments)
// }
// args()

// function arg(){
//     console.log(arguments)
// }
// arg(1,2,3)

// 4: this keyword

// let user =  {
//     username : "Shubham Dubey",
//     p1: ()=>{
//         console.log(this.username) => here this points to global
//     },
//     p2: function () {
//       console.log(this.username)  => here this points to local
//     }
// }
// user.p1()
// user.p2()

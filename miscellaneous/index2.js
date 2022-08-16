// var let & const

// function declaration() {
//   console.log(a);
//   {
//     let c = 30;
//     const b = 20;
//     console.log(c, b);
//   }
//   var a = 10;
// }
// declaration();

/////////////////////////////\\\\\\\\\\\\\\\\\\\\

// Implicit and explicit Binding

// let nam = {
//   myName: 'shubham',
//   display: () => {
//     console.log(this.myName);
//   },
// };
// console.log(nam.myName);
// var myName = 'shubham';

// it will print shubham as in arrow function this points to
// window obj and here it will find myName

// let nam = {
//   myName: 'shubham',
//   display: function cll() {
//     console.log(this.myName);
//   },
// };
// var nam2 = {
//   myame: 'saumaya',
// };

// nam.display();

// in normal function  this point to its local scope and we can
// use call meathod to provide a different context to a particular function;

/////////////////////////////\\\\\\\\\\\\\\\\\\\\

// Implement Caching/Memoize Function

// const slow = (num1, num2) => {
//   for (var i = 0; i < 10; i++) {
//     return num1 * num2;
//   }
// };

// console.time('First Call');
// console.log(slow(2, 5));
// console.timeEnd('First Call');

// console.time('Second Call');
// console.log(slow(2, 5));
// console.timeEnd('Second Call');

///////////////////////\\\\\\\\\\\\\\\\

// map vs for each  ans chaining and return values

// const arr = [1, 2, 3, 4, 5];

// const mapResult = arr.map((ar) => {
//   return ar + 2;
// }).filter((e)=>e%2===1)

// arr.map((ar) => {
//   return ar + 2;
// });

// const forEachResult = arr.forEach((ar, i) => {
//   console.log((arr[i] = ar + 2));
// });

// console.log(mapResult, forEachResult, arr);

////\\\\MAP is itself a clousers
// const myFun = () => {
//   const arr = [1, 2, 3, 4, 5];
//   return arr.map((ar) => {
//     console.log(ar + 2);
//   });
// };
// myFun();
// x();

/////\\\\clousers-revisit
// function a() {
//   var b = 12;
//   return function () {
//     console.log(b);
//   };
// }

// var c = a();
// c();

///////\\\\\
// null vs undefined

// null is an actual value
// undefined means variable is declared but not initialized yet

// console.log(typeof null);
// console.log(typeof undefined);

// let see
// let a = null;
// console.log(a);

// == vs ===

// console.log(null == undefined);
// both are falsy by default so 1st will return true
// lets check
// console.log(null);
// console.log(undefined);
// console.log(null === undefined);
// In JavaScript, both null and undefined have a falsy value
// so when you do an equality check with == they are considered the same.
// If you use a strict equality check with === they are considered different.

// Event Delegation
// without adding event listner to all the list items we just
// added to the parents item and access to all the items

// difference bw var let and const

// function diff() {
//   var a = 20;
//   console.log(a);
// }

// diff();

// var is global scoped and function scoped

// {
//   let a = 20;
//   const b = 30;
// }
// console.log(a);
// console.log(b);

// let is global scoped and function scoped

// lets see re-declaration

// const a = 20;

// a = 20;

// let and var can be redeclared
// but const cannot

// const a;

// const conot be initilized without  declaration

// {
//   let a = 5;

//   a = 10;

//   let a = 5;
// }

// It can be updated but cannot be
// re-declared into the scope.

// {
//   const a = 9;
// }
// {
//   const a = 9;
// }

// console.log(a);
// var a;
// It can be accessed without initialization
// as its default value is “undefined”

// console.log(a);
// let a;
// due to temporal dead zone

// let sum = a + 5;        //---------
// //some other code       //         | ------>  this is TDZ for variable a
//                         //         |
// console.log(sum)        //---------
// let a = 5;
// above code gives an error

// the same code will not give an error when we use var for variable 'a',

// ex.

// var sum = a;
// console.log(sum)     //prints undefined
// var a = 5;

// set setTimeout question

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1*1000);
//   }
// }
// a();

// setTimeout will run when complete code has run
// O/P = three time 3 because var has function scoped
// var has a function scope

// function a() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i*1000);
//   }
// }
// a();
// let has a block scope
// O/P 1,2,3 after delay of 1 sec

// call apply and bind


// Clouser

// A clouser is a function that references
// variable from outer scope from its inner scope

// // A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

// Lexical scope :- it refers to the current context of the code
// it can be either globally or locally defined
// we also have block scope from es6 vr

// global scope
// function local() {
//   // local
// }
//  A variable defined outside a function can be accessed
// inside a function
// But opposite is not true

// var global = "Global scope"
// function scope(params) {
//     var scope2 = "Scope 2"
//     function displayScope(params) {=> this is clouser
//         console.log(scope2)
//     }
//     displayScope()
// }
// scope()

// or

// function makefun(params) {
//     var name = "Shubham"
//     return function displayScope(params) {
//         console.log(name)
//     }
// }
// var value = makefun()
// value()

// or

// var globalScope = "Shubham"
// function makeFun(params) {
//     var localScope = "Dubey"
//     return function displayScope(params) {
//         console.log(localScope,globalScope)
//     }
// }
// makeFun()()

//Clousers allow us to make a function to have value private

// Closure scope chain
// Every closure has three scopes:

// Local scope (Own scope)
// Enclosing scope (can be block, function, or module scope)
// Global scope

// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // log 20

// global scope
// const e = 10;
// function sum(a) {
//   return function sum2(b) {
//     return function sum3(c) {
//       // outer functions scope
//       return function sum4(d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// const sum2 = sum(1);
// const sum3 = sum2(2);
// const sum4 = sum3(3);
// const result = sum4(4);
// console.log(result); //log 20

// Clouser with shadowing

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })();

// function a(params) {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(function log(){
//             console.log(i)
//         },i * 1000);
//     }
// }
// a()

// it will print 3 Times

// function a(params) {
//     for (let i = 0; i < 3; i++) {
//         setTimeout(function log(){
//             console.log(i)
//         },i * 1000);
//     }
// }
// a()

// it will print 1,2 3

// so if we use clouser we can get the above res with clouser

function a() {
  for (let i = 0; i < 3; i++) {
     function inner(i) {
      setTimeout(function log() {
        console.log(i);
      }, i * 1000);
    };
    inner(i)
  }
}
a()

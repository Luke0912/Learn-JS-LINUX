// function a() {
//   var c = 20;
//   function d() {
//     console.log(b);
//   }
//   d();
// }
// a();
// var b = 10;
// a();

// let & const declaration

//console.log(b);//hoisted
// var a = 100;
// let b = 200;
// console.log(b)

//temporal dead zone-->phase between declaration to assignment of a value
// ..whenever you try to access to a variable inside temporal dead zone it will give reference error
//i.e you cannot access a variable before initilization
//ref error
//type errorr==const gives it when it has been reassigned
//syntax error==const keyword expect to be declared in that line it self
//undefined
// not defined
// let is more strict
// use const==>use let==> var

// block

// {
//     compound Statement
// }

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   {
//     console.log(c);
//   }
// }
// b and c are block scoped in another memory location other than global
// a is hoisted in global scope

// function x() {
//   var a = 7;
//   function y() {
//     var b = 300;
//     function z() {
//       console.log(a, b);
//     }
//     z();
//   };
// return y
// }
// var g = x()
// console.log(g)
// g()

// w()

// when function is returned it remembers that where it came from
//if we return the value the values wont be garbage collected

// setTimeout-Clouser
// function y(){
//   var i = 1
//   setTimeout(function(){
//     console.log(i)
//     console.log("i will w8 till timeends")
//   },3000)
// }
// y()

// function x(){
//   var i = 1
//   console.log(i)
//   console.log("i will w8 till timeends")
// }

// function a(){
//   for(let i = 0;i<=5;i++){
//     setTimeout(function(){
//       console.log(i)
//     },i*1000)
//   }
//   console.log("i is now a new clouser")
// }
// a()

// function a(){
//   for(var i = 0;i<=5;i++){
//     setTimeout(function(){
//       console.log(i)
//     },i*1000)
//   }
//   console.log("i is now a new clouser")
// }
// a()

// function a() {
//   for (var i = 0; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("i is now a new clouser");
// }
// a();

// var n = 2
//  function square(num){
//   var ans = num * num
//   return ans
//  }
//  var square2 = square(n)
//  var square4 = square(4)

// Hoisting in JS

// Normal case
//  var x = 7

//  function getName(){
//   console.log("Namaste JavaScript")
//  }
//  getName()
//  console.log(x)
// console.log(getName)

// Experimental case

// getName();
// console.log(x);
// console.log(getName);
// var x = 7;

// var getName = () => {
//   console.log("Namaste JavaScript");
// };

//clouser

// hotest is a hotest interview questions\

//clouser is related to function

// revisitng that how function normally works

// function greet(){
//   let n = "raj"
//   console.log(n)
// }
// greet()

// global execution context is created when javaScript see's a whole .js i.e script file and it know's all the variables and function declarations that are present in script.
//variables are by default assigned as null and for functions a whole functional block is .
//and when when is see's a function a functional execution context is created.
//also when the function is executed the functional execution context is destroyed.

//on the above fundamental concept a new concept is introduced that is clouser

//in this example we will be returning greet here

// function greet(){
//   let n = "raj"
//   return n
// }
// console.log(greet())

//in this example we will return a function

// function greet(){
//   let n = "raj" //when greet is going to be executed then a functional execution context is being created and after
//   return function(){ //the function is executed completely then it will be destroyed along with the variables inside it.
//                     //
//     console.log(n)
//   }
// }
// var x = greet()

// x()
//i.e function(){ is going to be called but according to the js greet function is destroyed so how it remember the declaration n;
//
//console.log(n)
//}

//Answer:- Just because there is a dependency between child and parent function
//that is parents knows that child will need a value that is inside it
//so it will create a clouser and store a value inside it.

//clouser will be created when there is a dependency in the return value. here it is n

//application of closure:-debouncing

// let ans = new Promise((resolve, reject) => {
//   if (1 + 1 === 2) {
//     resolve('true');
//   } else {
//     reject('false');
//   }
// });

// ans
//   .then((message) => {
//     console.log('this is in then' + message);
//   })
//   .catch((message) => {
//     console.log('this is in then' + message);
//   });

// let ans = new Promise((resolve, reject) => {
//   if (1 + 1 === 2) {
//     resolve('true');
//   } else {
//     reject('false');
//   }
// });

// ans
//   .then((message) => {
//     console.log('this is 1st then');
//   })
//   .then((message) => {
//     console.log('this is in the second then');
//   })
//   .catch((message) => {
//     console.log('console.log error');
//   });

// let nam = {
//   f: 'shubham',
//   l: 'dubey',
// };

// let getFullName = function (home, village) {
//   console.log(this.f + ' ' + this.l + ' ' + home + ' ' + village);
// };

// let nam2 = {
//   f: 'himanshu',
//   l: 'dubey',
// };

// let nam3 = {
//   f: 'nira',
//   l: 'dubey',
// };
// getFullName.call(nam, 'ghar', 'varanasi');
// getFullName.apply(nam2, ['ghar', 'varanasi']);

// bind help to keep copy of meathad and use it later

// let printMyName = getFullName.bind(nam3, 'ghar', 'varanasi');
// printMyName();

// let getFulName = () => {
//   console.log(this);
// };
// getFulName();

// let getFullName = function () {
//   console.log(this);
// };
// getFullName();


 
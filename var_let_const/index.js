// var let and const

// function name(){
//     // function scope
// }

// {
//     block scope
// }

// =======================================================
// SCOPE of var let and const
// =======================================================

// scope=> var

// A variable declared with var in a function scope can't be accessed outside that function scope.
//  A variable declared with var in a block scope is available outside of that block scope.
// A variable declared with var in global can be accessed anywhere

// function varScope(){
//     var a = 10
// }
// varScope()
// console.log(a)

// {
//     var a = 5
// }
// console.log(a)

// var a = 10
// function nam() {
//     console.log(a)
// }
// nam()
// {
//     console.log(a)
// }

//---------------------

// scope=> let

// let allows you to declare variables that are limited to the scope of a block statement,
// or expression on which it is used, unlike the var keyword, which declares a variable globally,
// or locally to an entire function regardless of block scope

// {
//     let a = 10
// }
// console.log(a)==>not defined

// {
//     var a = 10
//     console.log(a)=>10
// }

// function nam(params) {
//     let a = 10
//     console.log(a)=>10
// }
// nam()

// function nam(params) {
//     let a = 10
// }
// nam()
// console.log(a)=>not defined

// let a = 10
// function nam(params) {
// console.log(a)
// }
// nam()

//-------------------------------------

//scope=> const

// The scope of a const variable is block scope.

// {
//     const a = 10
// }
// console.log(a)==>not defined

// {
//     const a = 10
//     console.log(a)=>10
// }

// function nam(params) {
//     const a = 10
//     console.log(a)=>10
// }
// nam()

// function nam(params) {
//     const a = 10
// }
// nam()
// console.log(a)=>not defined

// const a = 10
// function nam(params) {
// console.log(a)=>10
// }
// nam()

// ==========================================================
// Variable Shadowing comes with the concept of block scope
// function test(params) {
//     let a = "hello"
//     if(true){
//         let a = "hi"
//         console.log(a)
//     }
//     console.log(a)
// }
// test()
// variable a inside if will shadow the value of variable  a
// above it
// var can be shadowed with let but opposite is called illegal
// shadowing
//=======================================================

// =======================================================
// Declaration of var let and const
// =======================================================

//Declaration => let
// let a;
// let a;
// Cannot be reDeclared
// {
//     let a =10
//     let a =20
// }=> Cannot be ReDeclared in same scope
// {
//     let a
// }
// {
//     let a
// }
// But can be re ReDeclared in different scopes

//--------------------------

//Declaration => const
// const a;
// const a;
// Cannot be reDeclared and also cannot be declared without Initialization
// {
//     const a =10
//     const a =20
// }=> Cannot be ReDeclared in same scope
// {
//     const a =10
// }
// {
//     const a = 20
// }=> Can be ReDeclared in same scope

//------------------------

//Declaration => var
// var a;
//  var a;
// var a = 10
// var a = 20
// Can be reDeclared and also can be declared without Initialization

// =======================================================
// Re-Initialization is of var let and const
// =======================================================

// Re-Initialization => var
// var a = 5
// var a = 6 => can be

//-----------------------

// Re-Initialization => let
// let a = 10
// a = 10 => can be

//-----------------------

// Re-Initialization => const

// const a = 1
// a = 2 =>  Assignment to constant variable.

// =======================================================
// Hoisting is of var let and const
// =======================================================

// Hoisting => var

// console.log(a)=>undefined
// var a = 10
// when a is hoisted it is assigned as undefined in creation phase and now it exists

// -------------------------

// Hoisting => let
// console.log(a)
// let a = 10
// a is hoisted in temporal dead zone not in global but in separate script

//--------------------------------

// Hoisting => const
// console.log(a)
// const a = 10
// a is hoisted in temporal dead zone not in global but in separate script

// TEMPORAL DEAD ZONE => A temporal dead zone (TDZ) is the area of a block
// where a variable is inaccessible until the moment the computer completely initializes it with a value.

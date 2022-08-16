// MAP FILTER REDUCE
// THESE ARE ARRAY METHOD

//=========================
// MAP
//=========================

// const num = [1, 2, 3, 4];

//let's transform the array by doing certain operations on array by using map

// const multiply = num.map((num) => {
//   return num * 3;
// });
// console.log(multiply);

// // or the other way is

// function binary(x){
//   return x.toString(x)
// }

// const ans = num.map(binary)
// console.log(ans);

//Line number 23 is like we can say map is higher order
//function which take another function as a argument

//=========================
// FILTER
//=========================

// const num = [1, 2, 3, 4];

// function odd(x){
//   return x % 2
// }

// const filter = num.filter(odd)
// console.log(filter)

// const isEven = num.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(isEven);

//=========================
// Reduce
//=========================

const num = [1, 2, 3, 4];
//  uses like => sum or find-max etc....

//Example 1 let's starts with a normal function to find sum

// function findSum (arr){
//   let sum = 0;
//   for(let i = 0 ; i < arr.length; i++){
//     sum = sum + arr[i]
//   }
//   return sum
// }
// console.log(findSum(num))

// in filter function we use accumulator just like above we used sum var

// const output = num.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// },0);=> initial value of accumulator
// console.log(output);

// Example 2 let's starts with a normal function to find max

// function findSum (arr){
//   let max = 0;
//   for(let i = 0 ; i < arr.length; i++){
//     if(arr[i]>max){
//       max = arr[i]
//     }
//   }
//   return max
// }
// console.log(findSum(num))

// const output = num.reduce((max, curr) => {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);=> initial value of max

// console.log(output);



// =========================================================



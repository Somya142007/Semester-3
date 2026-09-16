// import fs from "fs";

// function sizeChecker(filename) {
//     const stats = fs.statSync(filename);
//     const limit = 2 * 1024 * 1024; // 2MB

//     // check the file size
//     if (stats.size > limit) {
//         console.log("File should be less than 2MB");
//     } else {
//         console.log("File has been submitted successfully");
    
//     }
// }







// sizeChecker("checker.txt");
// const sizeChecker=()=>{

// }







// 1. Keyword Function (Regular Function)
function greet(name) {
  return "Hello, " + name;
}
console.log("Keyword Function:", greet("Somya"));

// 2. Arrow Function
const add = (a, b) => a + b;
console.log("Arrow Function:", add(5, 3));

// 3. Anonymous Function (stored in a variable)
const square = function(num) {
  return num * num;
};
console.log("Anonymous Function:", square(4));

// 4. Immediately Invoking Function Expression (IIFE)
(function() {
  console.log("IIFE: This runs immediately!");
})();

// 5. Higher-Order Function (returns another function)
// function multiplier(factor) {
//   return function(num) {
//     return num * factor;
//   };
// }
// const double = multiplier(2);
// console.log("Higher-Order Function:", double(10));



//Create a list of numbers
const nums=[1, 2, 3, 4, 5];
nums.map((num, index) => {
    console.log(`Number ${index + 1}:`, num * 2);
});

nums.filter((num, index) => {
    if(num>2){
        console.log(num);
    }
});
// Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const appluFun = (a, b, val) => b(a(val));

const double = (x) => x * 2;
const sqaure = (x) => x * x;
console.log(appluFun(double, sqaure, 5));

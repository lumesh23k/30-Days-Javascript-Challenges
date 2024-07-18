// Use the filter method to create a new array with only even number and log the new array.
var myArr = [1, 2, 5, 7, 10, 45, 14, 12];
console.log(myArr);
var newEvenArr = myArr.filter((myArr) => myArr % 2 == 0);
console.log(newEvenArr);

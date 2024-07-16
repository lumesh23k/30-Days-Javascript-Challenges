// Write a program to calculate the facotrial of a number using a do ... while loop.
var i = 5;
var ans = 1;
do {
  ans = ans * i;
  i--;
} while (i > 0);

console.log("Factorial is : ", ans);

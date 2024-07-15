// Write a program to check if a year is leap year using multiple comdition and log the result to the console.
var year = 2024;
if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}

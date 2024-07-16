// Write a program to print a pattern using nested for loops;
var i, j;
for (i = 1; i <= 5; i++) {
  var row = "";
  for (j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

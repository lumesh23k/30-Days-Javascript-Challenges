//  Write a program that uses a switch case to assign a grade (A,B,C,D,E) base on a score and log the grade to the console.
var marks = 97;
switch (true) {
  case marks >= 90:
    console.log("A");
    break;
  case marks >= 80:
    console.log("B");
    break;
  case marks >= 70:
    console.log("C");
    break;
  case marks >= 60:
    console.log("D");
    break;
  case marks >= 50:
    console.log("E");
    break;
  default:
    console.log("F");
    break;
}

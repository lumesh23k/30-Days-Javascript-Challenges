// Write a higher-order function that takes a function and a number, and calls the function that many times.
const repeatFunction = (str, times) => {
  for (i = 0; i < times; i++) {
    str();
  }
};
const strVal = () => {
  console.log("Welcome");
};
repeatFunction(strVal, 3);

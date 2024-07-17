// Write a function that takes a person's name and age and return a greeting message. Provided a dufault value for the age.
const personal = (a, b = 25) => {
  console.log(a + "---" + b);
};
personal("ABC");

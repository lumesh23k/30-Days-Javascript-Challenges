// Access and log a specific element from the 2D array.
const size = 10;
const table = [];
for (i = 0; i <= size; i++) {
  table[i] = [];
  for (j = 0; j <= size; j++) {
    table[i][j] = i * j;
  }
}
console.log(table);
var result = table[3][4];
console.log(result);

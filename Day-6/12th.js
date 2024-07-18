// Create a 2D array (matrix) and log the entire array to the console.
function matrixArray(size) {
  const table = [];
  for (i = 1; i <= size; i++) {
    const row = [];
    for (j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

var result = matrixArray(5);

console.log(result);

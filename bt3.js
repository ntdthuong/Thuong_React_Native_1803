let dong = 8;
for (let i = 1; i <= dong; i++) {
  let row = '';
  for (let j = 1; j < i; j++) {
    row += j;
  }
  console.log(row + i);
}
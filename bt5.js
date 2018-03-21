let dong = 5;
for (let i = 1; i <= dong; i++) {
  let row = '';
  let space = '';
  let row2 = '';
  for (let j = 1; j < dong; j++) {
    if (j < i) {
      row += j;
      row2 += i + j;
    } else {
      space += ' ';
    }
  }
  console.log(space + row + i + row2);
}
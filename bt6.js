let dong = 5;
for (let i = 1; i < 2*dong; i++) {
  let row = '';
  let space = '';
  let space2 = '';
  let row2 = '';
  for (let j = 1; j < dong; j++) {
    if (j < i) {
      row += j;
    } else {
      space += ' ';
    }
  }
  for (let j = dong; j > 0; j--) {
    if (j <= 2*dong - i) {
      row2 = j + row2;
    } else {
      space2 += ' ';
    }
  }
  if (i <= dong) {
    console.log(space + row + i);
  } else {
    console.log(space2 + row2);
  }
}
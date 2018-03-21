let dong = 5;
let row1 = '';
let row2 = '';
let row3 = '';
let row4 = '';
for (let i = 1; i <= dong; i++) {
  let row = '';
  let space = '';
  let row12 = '';
  for (let j = 1; j < dong; j++) {
    if (j < i) {
      row += j;
      row12 += i + j;
    } else {
      space += ' ';
    }
  }
  switch (i) {
    case 1:
      row1 = space + row + i + row12;
      break;
    case 2:
      row2 = space + row + i + row12;
      break;
    case 3:
      row3 = space + row + i + row12;
      break;
    case 4:
      row4 = space + row + i + row12;
      break;
  }
  console.log(space + row + i + row12);
}
console.log(row4);
console.log(row3);
console.log(row2);
console.log(row1);
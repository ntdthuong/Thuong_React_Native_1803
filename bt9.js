let dong = 5;
let row1 = '';
let row2 = '';
let row3 = '';
let row4 = '';
let row5 = '';
for (let i = 1; i <= dong; i++) {
  let space = '';
  let space2 = '';
  let row12 = '';
  let full1 = '';
  let full2 = '';
  for (let j = 1; j < dong; j++) {
    if (j < i) {
      row = j;
      full1 += j;
      row12 = i + j;
      full2 += i + j;
      switch (i + j - 1) {
        case 2:
          space2 = (i + j + 1)/2;
          break;
        case 4:
          space2 = ' ' + (i + j + 1)/2 + ' ';
          break;
        case 6:
          space2 = '  ' + (i + j + 1)/2 + '  ';
          break;
      }
    } else {
      space += ' ';
    }
  }
  switch (i) {
    case 1:
      row1 = space + 1 + space2 + row12;
      break;
    case 2:
      row2 = space + 1 + space2 + row12;
      break;
    case 3:
      row3 = space + 1 + space2 + row12;
      break;
    case 4:
      row4 = space + 1 + space2 + row12;
      break;
    case 5:
      row5 = space + full1 + i + full2;
    break;
  }
  if (i === dong) {
    console.log(row5);
  } else {
    console.log(space + 1 + space2 + row12);
  }
}
console.log(row4);
console.log(row3);
console.log(row2);
console.log(row1);
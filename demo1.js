let demo = 8;
for (let i = 0; i <= demo; i++) {
  let row = '';
  let row2 = '';
  let space = '';
  for (let j = 1; j <= demo; j++) {
    if (j <= i) {
      row = j + row;
      row2 += j;
    } else {
      space += '&nbsp;&nbsp;';
    }
  }
  document.write(space + row + '0' + row2 + '<br/>');
}
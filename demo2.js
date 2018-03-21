// function bt4(dong) {
//   let tr = document.querySelectorAll('tr');
//   for (var i=0; i < dong; i++) {
//     for (var j= dong - 1; j >= i; j--) {
//       let td = tr[i].children;
//       td[j].innerHTML = '*';
//     }
//   }
// }
// bt4(8);
function bt4(dong) {
  let tr = document.querySelectorAll('tr');
  for (var i= dong - 1; i >= 0; i--) {
    for (var j= dong - 1; j >=0; j--) {
      let td = tr[i].children;
      if (j >= dong - i - 1) td[j].innerHTML = '*';
    }
  }
}
bt4(8);
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
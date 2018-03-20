function bt4(dong) {
  let tr = document.querySelectorAll('tr');
  for (var i=0; i < dong; i++) {
    for (var j= dong - 1; j >= i; j--) {
      let td = tr[i].children;
      td[j].innerHTML = '*';
    }
  }
}
bt4(8);
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
let dong = 8;
for (let i = 1; i <= dong; i++) {
  let row = '';
  let space = '';
  for (let j = 1; j < dong; j++) {
    if (j < i) {
      row += j;
    } else {
      space += '&nbsp;&nbsp;';
    }
  }
  document.write(space + row + i + '<br/>');
}
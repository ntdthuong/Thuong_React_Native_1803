function bt3(dong) {
  let tr = document.querySelectorAll('tr');
  for (var i=0; i < dong; i++) {
    for (var j=0; j <= i; j++) {
      let td = tr[i].children;
      td[j].innerHTML = '*';
    }
  }
}
bt3(8);

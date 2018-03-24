function veHinh(n, checkPoint, tinhSoCot) {
  for (let dong = 1; dong <= n; dong++) {
      let str = '';
      let soCot = tinhSoCot ? tinhSoCot(n) : n;
      for (let cot = 1; cot <= soCot; cot++) {
          const dk = checkPoint(dong, cot, n);
          str += dk ? '*' : ' ';
      }
      console.log(str);
  }
}
veHinh(9, (dong, cot) => dong >= cot);
veHinh(9, (dong, cot, n) => dong + cot >= n + 1);
veHinh(9, (dong, cot, n) => {
  const tongQuangDuong = (n - 1) / 2;
  const trungTam = (n + 1) / 2;
  const quangDuongDoc = Math.abs(dong - trungTam);
  const quangDuongNgang = Math.abs(cot - trungTam);
  const dk = quangDuongDoc + quangDuongNgang <= tongQuangDuong;
  return dk;
});
veHinh(9, (dong, cot, n) => {
  const tongQuangDuong = (n - 1) / 2;
  const trungTam = (n + 1) / 2;
  const quangDuongDoc = Math.abs(dong - trungTam);
  const quangDuongNgang = Math.abs(cot - trungTam);
  const dkDuongVien = quangDuongDoc + quangDuongNgang === tongQuangDuong;
  const dkTrucDoc = cot === trungTam;
  const dkTrucNgang = dong === trungTam;
  const dk = dkDuongVien || dkTrucDoc || dkTrucNgang;
  return dk;
});
veHinh(9, (dong, cot, n) => {
  const tongQuangDuong = (n - 1) / 2;
  const trungTam = (n + 1) / 2;
  const quangDuongDoc = Math.abs(dong - trungTam);
  const quangDuongNgang = Math.abs(cot - trungTam);
  const dk = quangDuongDoc + quangDuongNgang <= tongQuangDuong;
  return dk;
}, n => (n + 1) / 2);
veHinh(9, (dong, cot, n) => {
  const tongQuangDuong = n -1;
  const trungTam = n;
  const quangDuongDoc = Math.abs(dong - trungTam);
  const quangDuongNgang = Math.abs(cot - trungTam);
  const dk = quangDuongDoc + quangDuongNgang <= tongQuangDuong;
  return dk;
}, n => (n * 2) - 1);

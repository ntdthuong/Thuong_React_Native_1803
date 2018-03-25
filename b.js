const a = { name: 'Teo' };
const b = { name: 'Teo' };

const c = a;
a.name = 'Ti';
console.log(a === b);
console.log(c);

const e = 5;
const d = 5;
console.log(e === d);

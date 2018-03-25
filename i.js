const person = {name: 'Teo', age: 17};
// const teo = Object.assign({}, person);
const teo = {...person, height: 100};

person.name = 'Teo Nguyen';

// console.log(person);
// console.log(teo);

const arr = [1, 3, 5, 7, 9];
const arr2 = [2, ...arr, 6];

console.log(arr2);

const [a, b, c, ...rest] = arr;
console.log({a, b, c, rest});
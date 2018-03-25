const arr = [1, 3, 5, 7, 2, 4, 6];
const people = [
  {name: 'Teo', age: 12, height: 100},
  {name: 'Ti', age: 15, height: 90},
  {name: 'Tung', age: 10, height: 105},
  {name: 'Tuan', age: 13, height: 115}
]
console.log(arr.reduce((a,b) => a + b));
// const arrAge = people.map(people => people.age);
// console.log(arrAge.reduce((a,b) => a + b));
console.log(people.reduce((a,b) => ({age: a.age + b.age})).age);
const arr = [1, 3, 5, 7, 2, 4, 6];
const people = [
  {name: 'Teo', age: 12, height: 100},
  {name: 'Ti', age: 15, height: 90},
  {name: 'Tung', age: 10, height: 105},
  {name: 'Tuan', age: 13, height: 115}
]
Array.prototype.myMap = function(fn) {
  const output = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    output.push(fn(element));
  }
  return output;
}
// console.log(arr.myMap(x => x*x));
// console.log(arr.map(x => 1));
Array.prototype.myFind = function(fn) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (fn(element)) return element;
  }
}
Array.prototype.myFindIndex = function(fn) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (fn(element)) return index;
  }
}
console.log(people.myFindIndex(person => person.height + person.age === 105));
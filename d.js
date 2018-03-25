const arr = [1, 3, 5, 7, 2, 4, 6];
const people = [
  {name: 'Teo', age: 15, height: 100},
  {name: 'Ti', age: 12, height: 90},
  {name: 'Tung', age: 14, height: 120},
  {name: 'Tuan', age: 13, height: 115}
]
Array.prototype.myFilter = function(fn) {
  const output = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (fn(element)) output.push(element);
  }
  return output;
}

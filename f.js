const arr = [1, 3, 5, 7, 2, 4, 6];
const people = [
  {name: 'Teo', age: 12, height: 100},
  {name: 'Ti', age: 15, height: 90},
  {name: 'Tung', age: 10, height: 105},
  {name: 'Tuan', age: 13, height: 115}
]
Array.prototype.myEvery = function(fn) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (!fn(element)) {
      return false;
    }
  }
  return true;
}
Array.prototype.mySome = function(fn) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (fn(element)) {
      return true;
    }
  }
  return false;
}
console.log(arr.mySome(x => x > 7));
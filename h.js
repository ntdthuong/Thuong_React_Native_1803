const person = {
  name: 'teo',
  school: {
    name: 'x',
    x: 2,
    y: 4
  }
}

const {name, x, y} = person.school;
console.log(name);
console.log(x);
console.log(y);

const a = 5;
const b = 10;
const point = {a, b};
console.log(point);
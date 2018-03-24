const person = {
    name: 'Teo',
    age: 10,
    school: { name: 'Khoa Pham' },
    sayHello: function() {
        console.log('Hello ' + this.name);
    }
};

person.sayHello();
console.log(person.name);
person.name = 'Teo Nguyen';
console.log(person);
person.height = 100;
console.log(person.school.name);

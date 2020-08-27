"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(`Hello! ${message}`);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 45,
    experience: 10,
    greeting(message) {
        console.log(`Hello! ${message}`);
    }
};
// const user = new Developer('Quill', 45, 10);
const user = tmpDeveloper;

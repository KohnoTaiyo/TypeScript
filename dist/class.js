"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`My name is  ${this.name}. I am ${this.age} years old.`);
    }
}
const quill = new Person('Quill', 25);
quill.incrementAge();
quill.greeting();
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    greeting() {
        console.log(`My name is  ${this.name}. I am ${this.age} years old. I terch ${this.subject}`);
    }
}
const teacher = new Teacher('Yamada', 54, 'Math');
console.log(teacher.subject);
teacher.subject = 'Music';
teacher.greeting();

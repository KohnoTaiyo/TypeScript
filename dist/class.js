"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAge(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`My name is  ${this.name}. I am ${this.age} years old.`);
        this.explainJpb();
    }
}
Person.species = 'Homo sapiens';
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJpb() {
        console.log(`I am a teacher and I teach ${this.subject} `);
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
}
const teacher = new Teacher('Quill', 45, 'Math');
teacher.greeting();

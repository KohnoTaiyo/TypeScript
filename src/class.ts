class Person {
  constructor(public name: string, protected age: number) { }
  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`My name is  ${this.name}. I am ${this.age} years old.`)
  }
  // クラスも型になる。（より厳密にできる。）
}
const quill = new Person('Quill', 25);
quill.incrementAge();
quill.greeting();

class Teacher extends Person {
  get subject(): string {
    if (!this._subject) {
      throw new Error('There is no subject.');
    }
    return this._subject
  }
  set subject(value) {
    if (!value) {
      throw new Error('There is no subject.');
    }
    this._subject = value;
  }
  constructor(name: string, age: number, public _subject: string) {
    super(name, age);
  }
  greeting() {
    console.log(`My name is  ${this.name}. I am ${this.age} years old. I terch ${this.subject}`)
  }
}
const teacher = new Teacher('Yamada', 54, 'Math');
console.log(teacher.subject)
teacher.subject = 'Music'
teacher.greeting();
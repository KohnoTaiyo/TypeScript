abstract class Person {
  static species = 'Homo sapiens';
  static isAge(age: number) {
    if (age > 17) return true;
    return false;
  }
  constructor(public name: string, protected age: number) { }
  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`My name is  ${this.name}. I am ${this.age} years old.`)
    this.explainJpb();
  }
  // クラスも型になるし、より厳密にできる。
  abstract explainJpb(): void;
}

class Teacher extends Person {
  explainJpb() {
    console.log(`I am a teacher and I teach ${this.subject} `)
  }
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
}
const teacher = new Teacher('Quill', 45, 'Math');
teacher.greeting();
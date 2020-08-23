class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting() {
    console.log(`hello ${this.name}`)
  }
}
const quill = new Person('Quill');
quill.greeting();
console.log(quill);
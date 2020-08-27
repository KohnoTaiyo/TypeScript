interface Nameable {
  name: string;
}

interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) { }
  greeting(message: string) {
    console.log(`Hello! ${message}`)
  }
}
const tmpDeveloper = {
  name: 'Quill',
  age: 45,
  experience: 10,
  greeting(message: string) {
    console.log(`Hello! ${message}`)
  }
}
// const user = new Developer('Quill', 45, 10);
const user: Human = tmpDeveloper;
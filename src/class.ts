class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: Person) {
    console.log(`hello ${this.name}`)
  }
  // クラスも型になる。（より厳密にできる。）
}
const quill = new Person('Quill');
quill.greeting();

const anotherQuill = {
  name: 'anotherQuill',
  // quill.greeting(), これだとエラー
  greeting: quill.greeting
}
anotherQuill.greeting();
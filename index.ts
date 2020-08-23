let greet = 'hello';
let hasValue = true;
let numberTen = 10;

const person = {
  name: {
    first: "山田",
    last: "太郎"
  },
  age: 20
}

const book: [string, number, boolean] = ['business', 1500, false]
book.push('aa')

console.log(book)

enum CoffeSize {
  SHOTE = 'SHOTE',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTY = 'VENTY'
}

const coffee = {
  hot: true,
  size: CoffeSize.TALL
}

// coffee.size = 'aa';
coffee.size = CoffeSize.GRANDE;

const apple: 'apple' = 'apple'
let clothSize: 'small' | 'medium' | 'large' = 'medium'

type ClothSize = 'small' | 'medium' | 'large'

const cloth: {
  color: string;
  size: ClothSize
} = {
  color: 'white',
  // size: 'big'
  size: 'medium'
}

function add(num1: number, num2: number): number {
  return num1 + num2
}
console.log(add(2, 5))

let tmp: undefined;

// const dubleNumber = num => num * 2;
const dubleNumber: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum)
}

doubleAndHandle(10, doubleNum => {
  return doubleNum
})
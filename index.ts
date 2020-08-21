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
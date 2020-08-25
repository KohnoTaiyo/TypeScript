"use strict";
let greet = 'hello';
let hasValue = true;
let numberTen = 10;
const person = {
    name: {
        first: "山田",
        last: "太郎"
    },
    age: 20
};
const book = ['business', 1500, false];
book.push('aa');
console.log(book);
var CoffeSize;
(function (CoffeSize) {
    CoffeSize["SHOTE"] = "SHOTE";
    CoffeSize["TALL"] = "TALL";
    CoffeSize["GRANDE"] = "GRANDE";
    CoffeSize["VENTY"] = "VENTY";
})(CoffeSize || (CoffeSize = {}));
const coffee = {
    hot: true,
    size: CoffeSize.TALL
};
// coffee.size = 'aa';
coffee.size = CoffeSize.GRANDE;
const apple = 'apple';
let clothSize = 'medium';
const cloth = {
    color: 'white',
    // size: 'big'
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 5));
let tmp;
// const dubleNumber = num => num * 2;
const dubleNumber = num => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(10, doubleNum => {
    return doubleNum;
});

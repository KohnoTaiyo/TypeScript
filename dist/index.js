"use strict";
var greet = 'hello';
var hasValue = true;
var numberTen = 10;
var person = {
    name: {
        first: "山田",
        last: "太郎"
    },
    age: 20
};
var book = ['business', 1500, false];
book.push('aa');
console.log(book);
var CoffeSize;
(function (CoffeSize) {
    CoffeSize["SHOTE"] = "SHOTE";
    CoffeSize["TALL"] = "TALL";
    CoffeSize["GRANDE"] = "GRANDE";
    CoffeSize["VENTY"] = "VENTY";
})(CoffeSize || (CoffeSize = {}));
var coffee = {
    hot: true,
    size: CoffeSize.TALL
};
// coffee.size = 'aa';
coffee.size = CoffeSize.GRANDE;
var apple = 'apple';
var clothSize = 'medium';
var cloth = {
    color: 'white',
    // size: 'big'
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 5));
var tmp;
// const dubleNumber = num => num * 2;
var dubleNumber = function (num) { return num * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(10, function (doubleNum) {
    return doubleNum;
});

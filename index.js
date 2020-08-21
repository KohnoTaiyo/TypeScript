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

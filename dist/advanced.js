"use strict";
var _a, _b, _c;
const quill = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = toUpperCase('hello');
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    // roleが入っているinterface
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
}
class Dog {
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird()); //->tweet-tweet,flutter
const input = document.getElementById('input');
input.value = 'initial input value';
const downloadedData = {
    id: 1
};
// ?で値がなければundefinedを返す
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
// 0の場合でも'no-user'になってしまう。
// const userData = downloadedData.user || 'no-user';
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
// レストパラメータには配列で型を指定
function advancedFn(...args) { }
advancedFn(5, 2, 53, 4);
// 勝手にリードオンリーなども着くので、完全に固定できる。
const milk = 'milk';
const array = [10, 20];
const peter = {
    name: 'Peter',
    age: 38
};

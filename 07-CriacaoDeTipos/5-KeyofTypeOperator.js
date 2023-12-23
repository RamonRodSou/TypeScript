"use strict";
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: 'Ramon',
    age: 30,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));

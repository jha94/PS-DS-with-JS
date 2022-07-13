// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };
// a[b] = 123;
// a[c] = 456;
// console.log(a[c]);



var num = 4;
const outer = () => {
var num = 2;
function inner() {
num++;
var num = 3;
console.log("num", num);
}
inner();
}
outer();



// function sayHi() {
// return (() => 0)();
// }
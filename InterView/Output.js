// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);



// var num = 4;
// const outer = () => {
// var num = 2;
// function inner() {
// num++;
// var num = 3;
// console.log("num", num);
// }
// inner();
// }
// outer();



// function sayHi() {
// return (() => 0)();
// }

// console.log(sayHi())


// 4 - guess the output

// for(var i=0;i<4;i++){
// setTimeout(()=>{
// console.log(i)
// },1000);
// }

// 6 - guess the output

// const obj1 = {
// x:1,
// y:2
// }

// const obj2 = obj1;
// obj1.x = 4;
// console.log(obj1===obj2)

// 3 - guess output

// console.log(1)
// setTimeout(()=>{
// console.log(2)
// },0)

// console.log(3)
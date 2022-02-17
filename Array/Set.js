// the set object let us store unique values of any type, whether it's primitive or object values
// NaN and undefiened can also be stored in set

// constructor :- new Set(); - creates a set object

// Properties :- size

// Methods :- add(), clear(), delete(), has()

// Iteration methods :- values(), keys(), entries(), .forEach()

const mySet1 = new Set();
mySet1.add(1);
mySet1.add(2);
mySet1.add(2);
mySet1.add(3);
console.log(mySet1)
console.log(mySet1.entries())
mySet1.forEach(value=>{
    console.log(value)
})
console.log(mySet1.has(2))
console.log(mySet1.has(5))
mySet1.delete(2);
console.log(mySet1.has(2))


const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])

console.log([...new Set("Firefox")]) 
console.log([...new Set("firefox")])
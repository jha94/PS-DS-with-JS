var firstMissingPositive = function(nums) {
    let positiveNumbers = nums.filter(value=>value>0);
    positiveNumbers.sort((a,b)=>a-b)
    let unique = [...new Set(positiveNumbers)];
    var min = 1;
    for(let index=0;index<=unique.length;index++){
        if(unique[index]===min){
            min++
        } else{
            return min;
        }
    }
};
console.log(firstMissingPositive([1,7,8,9,11,12]))

// sortSentence("is2 sentence4 This1 a3")

// let, var, const

// console.log(a)            
// var a = 10;
// console.log(x);          


// callback, promise, async-await

// console.log('start')
// setTimeout(function(){
// 	Console.log('hi')
// }, 0)
// console.log('end')

// what is HOF

// Parameters vs Arguments :-
// function xyz(param1, param2){
// 	Console.log('hi');
// }
// xyz(arg1, arg2)


// getName();               // Namaste JS
// console.log(x);        //  undefined
// var x = 7;
//  function getName(){
// 	console.log('Namaste JS')
// }


// getName();           // Namaste JS
// console.log(x);     // Ref error : x isn't defined
// function getName(){
// console.log('Namaste JS');
// }


// function along with it's lexical scope in closure

// function x(){
// 	var a = 7;
// 	function y(){
// 	console.log(a);        
// 	}
// 	a = 100;
// 	return y;
// }
// var z = x();
// z();
// x()();


// function x(){
// 	for(var i = 1;i<=5;i++){
// 	setTimeout(function(){
// 	console.log(i)
// 	}, i*1000)
// 	}
// 	console.log('hello')
// }
// x();



// Function statement (function declaration) :-
// function a(){
// 	console.log('a is called')
// 	}
// a();
// This way of creating fucntion is known as function statement.

// Function expression :-
// var b = function(){
// 			Console.log('b is called')
// 			}
// 	b();
			
// Both are same but will give different results while hoisting.

// Anonymous function :-
// function(){
// 	}

// Here it'll throw err.
// Syntax Error :- function statement requires a function name but we can assign anonymous function to a variable.

// Named function expression :-
// var b = function xyz(){
// 	console.log('b')
// }
// b();
// xyz();         // Ref error: xyz isn't defined


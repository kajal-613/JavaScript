let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); (NaN)

// null=>0
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// undefined => NaN 

 let isLoggedIn = "hitesh" // true 

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber); 33 has become string 

// *********************** Operations ***********************

let value = 3
let negValue = -value // it'll print negative of value i.e -3 
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3); use parenthesis 

// console.log(+true); o/p 1 
// console.log(+""); o/p 0 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // not recommneded to use thi way but it works fine

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
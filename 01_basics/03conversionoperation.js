let score = "zayd"

//const {score}req.body

//console.log(typeof score);
//console.log(typeof(score));


let valueInNumber = Number(score)
//console.log(typeof valueInNumber);


//NaN(not a number)
//console.log(valueInNumber);


// "33" => 33
// "33abc"  => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"zays" => true


let someNumber = 33
 let stringNumber = String(someNumber)
 //console.log(stringNumber);

 //console.log(typeof stringNumber);

  //*************OPERATIONS***********

  //********* OPERATIONS **********

let value = 3
let negValue = -value 
//console.log(negValue); = -3


//console.log(2+2) = 4 
//console.log(2-2);; = 0
//console.log(2*2) = 4
//console.log(2**3) = 8
//console.log(2/2); = 1
//console.log(2%2);   cryptography algorithm

let str1 = "hello"
let str2 = "zayd"

let str3 = str1 + str2

//console.log(str3);

//console.log("1" + 2) => 12
//console.log(1 + "2") => 12
//console.log("1" + 2 + 2); => 122
//console.log(1 + 2 + "2"); => 32


//string first then all are converted to strings
//string last then all are converted as commanded

//console.log(+true);
//console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
//console.log(2 % 2);
//gameCounter++ (101)
//gameCounter++ console.log(gameCounter); =101 postfix operator (value incrimint after usage)
//++gameCounter console.log(gameCounter); = 101 prefix operator (value incrimint before usage)
 //console.log(gameCounter);


 //************COMPARISONS**************

// console.log(2 > 1); true boolean
// console.log(2 >= 1); 
//console.log(2 < 1); false
//console.log(2 == 1); false
//console.log(2 != 1); true


//problem is when you compare different data types
// like

//console.log("2" > 1); true (string is converted to number automatically by js)
//console.log("02" > 1);


//typescript dont allow you to compare different data types

//console.log(null > 0); false (converter converted null to zero so 0!>0 and 0>0 is false)
//console.log(null == 0); false (no comparison operator used so null != 0 {null has a value})
//console.log(null >= 0); true(comparison operator converted null to zero so 0=0 is true)

//*************** SOMETIMES NULL IS CONVERTEDTO 0 AND SOMETIMES NaN*********************


// comparisons convert null to a number, treating it as zero(0)

//console.log(undefined == 0); false

//console.log(undefined > 0); false

//console.log(undefined < 0); false

//*************SYNTAX************ 

//== alag syntax === alag
//<> alag syntax

// strict check (===) also check data types

//console.log("2" == 2); true

//console.log("2" === 2); false ( data type checked by strict check)


//********************************************

//stack and heap memory 

// stack(primitive) , heap(non-primitive)

// stack gives you a copy of the value and heap gives you refernce to the original value



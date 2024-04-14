// Classes
// - Variables
// - Operators
// - Objects
// - Functions (custom functions & inbuilt functions)
// - Anonymous function (custom ann & inbuilt functions)
// - Asynchronous functions
// - Control Flow (If statement, Switch Statement & Loops with iteration)

// - Nomenclature for Naming
// - {camel case variableOne, lowercase variableone, snake variable_one, pascal case VariableOne} - Esohe

// - Declaration of Variables
// - Let (Can not be recreated but can be reassigned){}, Const (Cannot be recreated and reassigned, var(default) - can be recreated and reassigned) - Gideon

// Logical Operators - Numerical Operators (James)
// Logical - >,<,!=,==,>=,<=,&&,||
// Numerical - +,-,*,%,/

// 20%5=0, 4%3=1

// Object for a small store (Esohe)

let one = 1;

function firstFunc() {
  let one = 2;
}

function secondFunc() {
  let one = 2;
}

// Today's Date

// date=new Date()
// console.log(date.current)

let date = new Date();
console.log(date.toDateString());

// c/5 = (f-32)/9 -2 Joy
function FromFahrenheitToCelsius(f) {
  c = ((f - 32) / 9) * 5;
  console.log(c);
  return c;
}

// prints multiplication table (2) 100 (Esohe)

number = 2;
for (let i = 1; i <= 100; i++) {
  const result = number * i;
  console.log(`${number}*${i}=${result}`);
}

//grading System Function - 0-39 -F, 40-69 - Okay, 70 and above - Excellent

const checkGrade = (grade) => { 
  if (grade <= 39) {
    console.log('F');
  }
  else if(grade>=40 && grade<=69){
    console.log("okay")
  }
  else{
    console.log("excellent")
  }
};
checkGrade(39)

// Hello World - Extract only orl & ello  Barikpe

let extract ="Hello World" 
let extractString=extract.substring(7,10)
let extractELLO=extract.substring(1,5)
console.log(extract[7,8,9])
console.log(extract[1,2,3,4])
let concatenateString=extractString.concat(extractELLO)
console.log(extractString)
console.log(extractELLO)
console.log(concatenateString)

// Esohe - 4
// Gideon - 2
// Joy - 1
// Barikpe - 1
// James -1 

// 1-100, create a list and multiple value in the list by 3

let listOne = []
for (let i=1;i<=100;i++){
    if(i%2==0){
        listOne.push(i)
    }
}
// console.log(listOne.le)
// for(let i=0;i<=listOne.length;i++){
//     listOne[i]=listOne[i]*3
// }
// console.log(listOne)
listItem=listOne.map(item=>{
    return item=item*3})
console.log(listItem)

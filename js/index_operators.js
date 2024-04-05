//Arithmetic Operators + - Addition, - \- Subtraction, * - Multiplication, / - Division, % - Modulus (remainder), // - 

// Assignment Operators - +=, -=,*=,/=, %=,//=

// Logical/Conditional Operators >,<,>=,<=,!=,==

variableOne=90
variableTwo=120
variableThree=65

result=variableOne+variableTwo
console.log(`Addition: ${result}`)
result=variableTwo/variableOne
console.log(`Division: ${result}`)
result=variableTwo%variableOne
console.log(`Modulus: ${result}`)
variableOne+=30
console.log(`Assignment By Variable: ${variableOne}`)
console.log(`Assignment: ${variableTwo+=30}`)
variableThree-=10
console.log(variableThree)
console.log(`Assignment: ${variableTwo*=2}`)

result=variableOne>variableTwo
console.log(result)
result=variableOne<=variableTwo
console.log(result)
result=variableOne!=variableThree
console.log(result)
console.log(10==2*5)

// Logical Joining Operators - And (&&) - All condition must be met, Or (||) - Any condition can be met

result=variableOne!=variableThree && variableOne>variableThree
console.log(result)

variableOne=90
variableTwo=120
variableThree=65
result=variableOne!=variableThree && variableOne>variableThree && variableOne<variableTwo
console.log(result)
result=variableOne!=variableThree && variableOne>variableThree && variableOne>variableTwo
console.log(result)
result=(variableOne>variableThree && variableOne>variableTwo) ||(variableOne<=variableTwo && variableOne!=variableTwo+20)
console.log(result)

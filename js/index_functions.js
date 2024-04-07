// Unit of functional web application - Functions/Methods/Actions
// Functions - 4 Parts {function keyword, method name, parameter or overload (optional), action/body}

function printOnConsole(){
    // Action Happens here
    console.log("Hello World")
}

function printOnConsoleTwo(param_one){
    // Action Happens here
    console.log(param_one)
}
function printOnConsoleThree(param_one, param_two){
    // Action Happens here
    console.log(`${param_one}-${param_two}`)

}
printOnConsole()
printOnConsole()
printOnConsoleTwo('My name is Ifeanyi')
printOnConsoleTwo('My name is Joy')
printOnConsoleThree("Hello","How are you?")
function addParams(num_one,num_two,num_three){
    console.log(num_one+num_two+num_three)
}

addParams(10,90,33)
// Reusability
//Response
let profit=10
function percentProfit(selling_price, cost_price){
    let profit=selling_price-cost_price
    let percent_profit=profit*100/cost_price
    console.log(percent_profit)
    return percent_profit
}
let percent_profit=percentProfit(1200,1000)
console.log(percent_profit+"%")

// Custom Functions - Inbuilt Functions (Connected to variable || Not Connected to Variable)
// Use Inbuilt Function

//Anonymous Functions - Embedded inside variable or inbuilt function -- Cannot stand alone

let anonymousFunction=function(){
    // Action Happens here
    console.log("Hello World")
    return "Hello, value has been set"
}
console.log(anonymousFunction)
console.log(anonymousFunction())

let annFunc=()=>{
    return "This is an anonymous function"
}
console.log(annFunc())

let annFuncWithParam=(param_1, param_2)=>{
    return "This is an anonymous function "+param_1+" "+param_2
}
console.log(annFuncWithParam(5,10))
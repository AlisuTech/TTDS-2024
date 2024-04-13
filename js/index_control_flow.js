// Control Flow - Condition Processes

function checkAgeGrade(_age){
    if (_age>=18){
        console.log("Person is an Adult")
    }
}

const checkAgeGradeNew=(_age)=>{
    if(_age>=13 && _age<18){
        console.log("Person is a Teenager")
    }
    else if(_age>=50){
        console.log("Person is an Adult - 2")
    }
    else if(_age>=18){
        console.log("Person is an Adult - 3")
    }
    else{
        console.log("No Condition Met")
    }
}

function checkSizeTitle(key){
    if(key=="s"){
        console.log("Small")
    }
    else if(key=="m"){
        console.log("Medium")
    }
    else if(key=="l"){
        console.log("Large")
    }
    else{
        console.log("Extra Large")
    }
    switch (key){
        case 's':
            console.log("Small")
            break;
        case 'm':
            console.log("Medium")
            break;
        case 'l':
            console.log("Large")
            break;
        default:
            console.log("Extra Large")
            break;
    }
    console.log("End of Switch Statement one")
    switch (key){
        case 's':
            console.log("Small")
            return;
        case 'm':
            console.log("Medium")
            return;
        case 'l':
            console.log("Large")
            return;
        default:
            console.log("Extra Large")
    }
    console.log("End of Switch Statement two")
}

function checkAgeGradeNested(_age){
    if (_age>=18){
        if(_age==50){
            console.log('Person is an Adult - Golden')
        }
        else if(_age==70){
            console.log('Person is an Adult - Platinum')
        }
        else{
            console.log("Person is an Adult")
        }
    }
}

checkAgeGrade(18)
checkAgeGradeNew(5)
checkSizeTitle("l")
checkAgeGradeNested(70)

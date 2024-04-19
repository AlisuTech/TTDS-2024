// Cancel once time exceeds a particular limit

let limit =5
let interval=0
let processCompleted=false
let timer=setInterval(()=>checkForStopProcess(),1000)



async function LongProcess(){
    if(processCompleted){
        return "Process Completed"
    }
    else{
        return "In Progress"
    }
}

async function MainProcess(){
    timer
    let result=await LongProcess()
    console.log(result)
}

async function checkForStopProcess(){
    interval++
    if(interval==limit){
        processCompleted=true
        clearInterval(timer)
    }
    console.log(await LongProcess())
    // processCompleted=(interval==limit)
}

MainProcess()

//Token - Personal Token (30s)
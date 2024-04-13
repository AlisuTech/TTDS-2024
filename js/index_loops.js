// Loops - forEach and maps without an array object
// Loops - Repeated Actions

// for & while - iteration 
    //for keyword (count/length of repeat/array)
    //while keyword (condition)

let start=50
let end=100 //repeatition
let increase=5
for (start=50;start<=end;start+=increase){//lcv - Loop Control Variable 1-start, 2-end, 3-increment (++, +=,--,-=)
    console.log(start)
}
let array=[2,4,6,8,10]
for(let item in [2,4,6,8,10]){
    console.log(item)
}
array.forEach((item)=>{
    console.log(item)
})
console.log("=======while======")

let count=0
while(count<10000000){
    console.log(count+=1)
}

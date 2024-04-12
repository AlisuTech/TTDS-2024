// Number, Strings, Arrays, Object
//Math
console.log(Math.E)
console.log(Math.LN10)
console.log(Math.LN2)
console.log(Math.PI)
console.log(Math.SQRT2)

console.log(Math.abs(-10))
console.log(Math.pow(5,2))
console.log(Math.pow(10,20))
console.log(Math.tan(90))
console.log(Math.sin(30))
console.log(Math.floor(10/3))
console.log(Math.round(10/3,2))
console.log(Math.min(10,30,25,90,15))
console.log(Math.max(10,30,25,90,15))
console.log(Math.sqrt(25))
console.log(Math.pow(25,1/2))

// Date
// console.log(Date())
let date=Date()
console.log(date)
let date2=new Date() // Constructor - Initialises
console.log(date2)
console.log(date2.getTime())
console.log(date2.getDate())
console.log(date2.getDay())// Sunday - Saturday (0 - 6)
console.log(date2.toLocaleTimeString())
console.log(date2.toTimeString())
console.log(date2.getMonth()) // Jan - Dec (0 - 11)
let date3=new Date(2024,4,25,12,55,0)
console.log(date3)

let month=3
let day=2
let year=3005
let setDate=new Date(year,month,day)
console.log(setDate)


// String 
let string_one="Bassey"
let string_two="Gideon"
let string_three="Esohe"

let concat_string=string_one.concat(" ",string_two," ",string_three)
console.log(concat_string)
console.log(concat_string.startsWith("He"))
console.log(concat_string.endsWith("he"))
console.log(concat_string.includes("on"))
console.log(concat_string.includes("he"))
console.log(" ifeanyi@gmail"=="ifeanyi@gmail")
let email=" ifeanyi@gmail"
let actual_email="ifeanyi@gmail"
console.log(email.trim()==actual_email)
console.log(email.trimStart()==actual_email)
console.log(email.trimEnd()==actual_email)
email=" IFEANYI@GMAIL"
console.log(email.toLocaleLowerCase().trim()==actual_email)
console.log(actual_email.toLocaleUpperCase())
let replace_value=concat_string.replace("Gid","Hid")
console.log(replace_value)
console.log(concat_string.indexOf("Esohe"))
console.log(concat_string[4])
console.log(concat_string.substring(0,5))
console.log(concat_string)
console.log(concat_string.substring(0,8))
let file="string content, number value, date object"
let split=file.split(",")
console.log(split[2])
console.log(split.length)

// Array
let item_array=[2,4,6,8,10,12,14,16,18,20]
item_array.push(22)
console.log(item_array)
item_array.pop()
console.log(item_array)
let concatenation=item_array.concat([24,26,28])
console.log(concatenation)
item_array.push([30,32,34])
console.log(item_array)
console.log(item_array[10][0])

console.log(item_array.length)

let array_two=["Ada","Joy","Esohe","Gideon"]
let array_two_2=[10,25,75,68,93,101,1025]

let sorted=array_two_2.sort((b,a)=>a-b)
console.log(sorted)

let slicer=array_two.slice(0,3)
console.log(slicer)

let slicer2=array_two.slice(1,3)// first parameter - index based // second parameter -Length based
console.log(slicer2)

let slicer3=array_two.slice(2,3)
console.log(slicer3)

let slicer4=array_two.slice(3,3)
console.log(slicer4)


let splice=array_two.splice(0,2)
console.log(splice)

array_two=["Ada","Joy","Esohe","Gideon"]
splice=array_two.splice(0,1)
console.log(splice)


array_two=["Ada","Joy","Esohe","Gideon"]
splice=array_two.splice(1,2)
console.log(splice)

array_two=["Ada","Joy","Esohe","Gideon"]
splice=array_two.splice(2,2)
console.log("============")
console.log(array_two)
console.log(splice)

//find - search for the first matching item
//filter - search for every matching item
const search_item=array_two.find((value)=>{
    return value=="Joy2"
});
console.log(search_item)

array_two=["Ada","Joy","Esohe","Gideon"]
const search_items=array_two.filter((value)=>{
    return value.includes("o") && value.includes('e')
});
console.log(search_items)

let array_object=[
    {
        id:0,
        name:"TTDS",
        type:"Software Development"
    },
    {
        id:1,
        name:"BuildersDeck",
        type:"Technology Consulting"
    },
    {
        id:2,
        name:"MyHospitul",
        type:"Technology Development"
    },
    {
        id:3,
        name:"BookSeven",
        type:"Productivity & Utility"
    }
]

console.log("============")
item=array_object.find((predicate)=>{
    let foundItem=predicate.id==1
    return foundItem
})
console.log(item)

items=array_object.filter((predicate)=>{
    let foundItem=predicate.id>1
    return foundItem
})
console.log(items)
console.log("============")
items=array_object.filter((predicate)=>predicate.id>1)
console.log(items)

//map - Transform a object by going through all the elements & can return a response
newArray=array_object.map((_element_)=>{
    _element_.id+=1
    return _element_
})
console.log(array_object)
console.log(newArray)
console.log("============")
//forEach -  Transform a object by going through all the elements but without response
array_object.forEach((element)=>{
    element.id+=1
})
console.log(array_object)



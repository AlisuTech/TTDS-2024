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




// Objects - JSON
// Key - Value (Dictionary) - Takes any of the variable type
// JSON Key must be unique
json_object = { 
    name:"Joy",
    age:25,
    areYouMale:false
}
console.log(json_object)
//  Accessing Key-Value
console.log(json_object.name)
console.log(json_object.age)
console.log(json_object.areYouMale)

// Accessing Key-Value 2
console.log(json_object['name'])

// Array or List Item - JSON
many_object=["English" ,"Pidgin","Igbo","French","Italian"]
console.log(many_object[2])
console.log(many_object[4])
single_json_object_with_array={
    name:"Joy",
    age:25,
    areYouMale:false,
    languages:["English","Pidgin","Igbo","French","Italian"]
}
console.log(single_json_object_with_array.languages[1])
many_object=[1,2,3,4]
many_object=[true,false, false]
many_object=[
    {
        name:"Joy",
        age:25
    },
    {
        name:"David",
        age:29
    },
    {
        name:"Ihuoma",
        age:21
    }
]
console.log(many_object[1].name)
many_object=[1,"Hello",true,{name:"Ifeanyi"}]
many_many_object={
    courses:[
        {
            title:"JS",
            duration:2
        },
        {
            title:"HTML",
            duration:1
        }
    ]
}
console.log(many_many_object.courses[1].title)
// Indexing
// First Item - 0, 1, 2, 3... n


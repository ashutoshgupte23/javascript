// singleton
//object.create


//object literals

// object in js => it is collection of key value pair.In which each key is called a property and each property stores a values.

 const mySym = Symbol("Key1")

const JsUser = {
    name:"ashutosh",
    "nickname": "ashubhai",
    [mySym]: "myKey1",
    age: 23,
    location: "pune",
    email:"ashutoshgupte23@gmil.com",
    isLoggedIn: false,
    lastLogInDays:["monday","sunday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["nickname"])
console.log(JsUser["name"])

console.log(JsUser[mySym])

JsUser.email = "ashutoshofficial39@gmail.com"
// Object.freeze(JsUser) //object ko freeze kr denta hai koi bhi changes nhi kr skte
JsUser.name = "vishu"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting( ))
console.log(JsUser.greetingTwo())



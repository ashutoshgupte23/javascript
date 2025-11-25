// Dates => typeof -> object

let myDate = new Date()
//console.log(myDate)
//console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())
// console.log(typeof myDate)


let myCreatedDate = new Date(2023,0,23) //Mon Jan 23 2023
// console.log(myCreatedDate.toDateString())

 //let myCreateDate = new Date(2023,0,23,5,3)
 //console.log(myCreateDate.toLocaleString()) //  1/23/2023, 5:03:00 AM

let myCreateDate = new Date("2025-11-24")
// console.log(myCreateDate.toLocaleString()) //11/24/2025, 5:30:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp) //milisecond me
// console.log(myCreateDate.getTime()) //milisecond me time display krega jan se nov tak

// interview question - convert current time in milisecond to second then remove the decimal using the [Math.floor]
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getFullYear())
console.log(newDate.getMonth())

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone: ""
    })
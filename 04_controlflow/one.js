// if 

// const isUserLoggedIn = true
// const temperature = 4
// if(temperature < 50){
//     console.log("less than 50")
// }
// else{
//     console.log("temperature is greater than 50")
// }


// < , > , <= , >= , != , == , === (value + types ko bhi check krta hai), !==


// const score = 200
// if(score>100)
// {    let power = "fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)


// implicit scope => single line me  he console.log likhna
//const balance = 100
// if(balance>500) console.log("test");

// if(balance < 500)
// {
//     console.log("less thn 500")
// }else if(balance <750)
// {
//     console.log("less thn 750")
// }else if(balance <900)
// {
//     console.log("less than 750")
// }else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard )
{
    console.log("Allow to buy courses")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
    
}
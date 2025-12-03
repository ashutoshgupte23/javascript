const userEmail = []

// if(userEmail) {
//     console.log("got user email")
// }else{
//     console.log("dont have user email")
// }

//  falsy value
// false , 0 , -0 , bigInt 0n , null , undefined, NAN,

// truthy value
// "0" , "false" ,  " ", [] , { }, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }


const emptyObj = {}
if(Object.keys(emptyObj).length ===0 ){
    console.log("object is empty")
}


// nullish coalescing operator( ??) : is do keyword me dekhna hai (null , undefined)

let val1;
// val1 = 5  ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ??15
// val1 = null ?? undefined
console.log(val1)


// Terniary Operator

//  condition ? true : false

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
function sayMyname(){
    // define the function(scope)
    console.log("A")
    console.log("s")         
    console.log("h")
    console.log("u")
}
//sayMyname=> reference 
// () => execute
// sayMyname()

function addTwoNumber(num1,num2){
    console.log(num1+num2) 
}
// addTwoNumber(2,2)


function addTwoNumber(num1,num2){
 
    // let result = num1 + num2
    // return result
    return num1 +num2
}
const result = addTwoNumber(2,2)
//console.log("Result",result)


/*

| Value       | Behavior with `+`    |
| ----------- | -------------------- |
| `"2"`       | "22" (string concat) |
| `null`      | 2 (null → 0)         |
| `undefined` | NaN                  |
| `true`      | 3 (true → 1)         |
| `false`     | 2 (false → 0)        |

*/



function userLoggIn(username = "sam"){
    if(!username)
    {
        console.log("Please entr a username")
        return
    }
    return `${username} is logged in`
}
//console.log(userLoggIn())
console.log(userLoginIn()) 
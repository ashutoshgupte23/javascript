function one(){
const userName ="hitesh"
function two(){
    const website ="youtube"
    console.log(userName)
}
// console.log(website)
two()
}
//one()

if(true){
    const username = "ashu "
    if(username == "ashu"){
        const website ="github"
        //console.log(username + website)
    }
   // console.log(website) // ye acces nhi hoga kyuki iska scope andar second if loop me hai
}
//console.log(username)


//+++++++++++++++++++++++ interesting +++++++++++++++++++++

function addone(num){
    return num+1
}
console.log(addone(5))

  


console.log(addTwo(4))
const addTwo = function(num){
    return num+2
}
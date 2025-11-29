//this => current context ko access krne ke liye hota hai with in scope

const user = {
    username: "ashutosh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "apex"
// user.welcomeMessage()
//console.log(this)



// function formulaOne(){
//     let driver = "max verstappen"
//     console.log(this.driver)
// }
// formulaOne()
// function ke andar this use nhi hota



// +++++++++++++ arrow function+++++++++++

// const formulaOne = () =>{
//     let driver = "max verstappen"
//     console.log(this)
// }
// formulaOne()


// const addTwo =(num1,num2) =>{
//   return num1+num2
// }


// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) =>({usernmame: "ashu"})
 console.log(addTwo(1,1))
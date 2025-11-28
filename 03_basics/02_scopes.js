
// {} => it is known as scope. it is mainly use in if,else.


// bhar jo bhi likh rhe vo hai "global scope".
var c =300
// if ke andar jo bhi function likha gya hai use hum "block-scope " bolte hai.
if(true)
{
    let a =10;
const b =20 
var c =30;
}
// console.log(a)
// console.log(b)
// console.log(c)


let a =300
if(true){
    let a =10;
    const b =20 
     console.log("inner: ", a)
}
console.log(a)
// console.log(b)
// console.log(c)


/*
browser ke andar global scope alag hota hai or code environment me global scope alag hota hai

*/

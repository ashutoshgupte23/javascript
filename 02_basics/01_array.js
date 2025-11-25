//array

const myArr =  [0,12,3,4,5,6]
// console.log(myArr[5])

const myArr2 = new Array(99,4,88,76)
// console.log(myArr2)

// Array methodss

//  myArr.push(6) //element last me add hoti hai array ke andar
//  myArr.push(111)
//  myArr.push(74)
//  myArr.pop() // last element remove hota hai arrays se.


//myArr.unshift(55)//element fisrt me add hoti hai array ke andar
//myArr.shift() // first elemnt remove hota hai arrays se


//  [.include] give us  true or false only if the element is present in the array.
// console.log(myArr.includes(99)) // o/p -> false
// console.log(myArr.indexOf(12))


const newArr = myArr.join()
// console.log(newArr)
// console.log(myArr)
// console.log(typeof newArr)



// slice, splice



console.log("A",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)
const myn2 = myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)
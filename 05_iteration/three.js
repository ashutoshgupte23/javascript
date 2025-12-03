 // for of



 //["","",""]
//  [{},{},{}]

const arr= [1,2,3,4,5]
for (const i of arr) {
    //console.log(i)
    
}

const greeting = "HELLO BHAI"
for (const greet of greeting) {
    // console.log(greet)
    
}

// Maps
//  unique values ke jani jaati hai

const map = new Map()
map.set('IN' , 'India')
map.set('usa' , 'United state of america')
map.set('fr' , 'France')
map.set('IN' , 'India')

// console.log(map)

for(const [ key, value] of map){
    console.log(key,":-", value)
}

//  myObject is not iterable
// const myObject ={
//     'game1': "NFS",
//     "game2": "COD"
// }
// for (const [key,value] of myObject) {
//     console.log(key,":-", value)
    
// }




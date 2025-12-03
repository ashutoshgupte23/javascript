//  for - loop


// for (let value= 0; value <= 10; value++) {
//     const element = value;
//     console.log(element)
// }
 
for(let i = 0 ; i<=10 ; i++){

    const element = i;
    if(element  == 5)
    {
        console.log("5 is the best")
    }
    // console.log(element)
}

for (let i = 0; i <= 10; i++) {
   // console.log(`outer loop ${i}`)
    for (let j=0 ;j<= 10; j++) {
        
       // console.log(`inner loop ${j} and inner loop ${i}`)
        
       }
    }

let myArray = ["flash","superman","batman"]
//console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const elemen = myArray[index];
    //console.log(elemen)
}


// break  and continue

for (let index = 1; index <= 20; index++) {
    if(index== 5)
    {
        // console.log(`detected ${index}`)
        break
    }
    // console.log("value of i is",index)
    
}



for (let index = 1; index <= 20; index++) {
    if(index== 5)
    {
        console.log(`detected ${index}`)
        continue
    }
    console.log("value of i is",index)
    
}
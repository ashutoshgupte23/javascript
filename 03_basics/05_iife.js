// Immediate Invoked Function Expression(IIFE)


// global scope ke pollution se problem hoti hai kai bar toh vo global scope ke variable toh jo bhi declaration hai toh uske pollution hayne ke liye  hum  iffe ka use krte hai
(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})
();

((name) =>{
    // unnamed iife
    console.log(`DB CONNECTED ${name}`)
}) ("ashu");

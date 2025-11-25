

const name = "ashu"
const repoCount = 50
// console.log(`my name is ${name} and my repo count is ${repoCount}`);

// different way to DECLAARE the string

const fullname = new String("ASHUTOSH.GPT.com")
console.log(fullname.length)
console.log( fullname[0]); //access of the key value pair
console.log(fullname.__proto__)//to seee the object. note-> we can see the object in the browser.in the it showing empty but its not empty
console.log(fullname.toLowerCase());
console.log(fullname.charAt(6)); // hum isme "check krte hai ki kis index pe konsa CHAR hai".
console.log(fullname.indexOf('H')) // to check "kon se position me character present hai "

const newWay = fullname.substring(0,5)
console.log(newWay)

const anotherString = fullname.slice(-5,4) // we can include the negative value
console.log(anotherString)

const newStringOne = "  hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim()) //it remove the starting space and the ending space.


const url = "hhtps://ashutosh.com/ashutosh%20gupte"
console.log(url.replace('%20','-'))
console.log(url.includes('gpt'))

//convert the sting into array using split method 
console.log(fullname.split('.'))
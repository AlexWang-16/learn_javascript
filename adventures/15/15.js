// Async and Await

// Async is a keyword added to a function to enable the use of "await" keyword
// When a function calls another that returns a promise, the await keyword can
// be used to cause javascript to block execution until the promise is returned

// Normal function that returns a promise does not require async keyword
function add (a, b){
  return new Promise ((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number"){
      reject(`Error: Please provide numbers only`)
    }else{
      setTimeout(() => {
        resolve(a + b)  
      },1500)
      
    }
  })
}

// Functions that utilize add(), which returns a promise. Notice they use
// "async" keyword

//== Error handling ==

//When handling errors with async/await, it uses standard try/catch mechanism.

// All code execution that leads to success must be placed under try block

// All error handling code must be wraped under catch() block. Otherwise,
// the variables will be undefined and Node.js will throw UnhandledPromiseRejectionWarning


async function f1 (){
  console.log('adding 1 + 2')
  try{
    let result = await add (1, 2)  
    console.log(`The result is ${result}`)
  }catch (e) {
    return console.log (`${e}`)
  }
}

async function f2(){
  console.log('adding two and 3')
  try {
    let result = await add ('two', 3)  
    console.log(`The result is ${result}`)
  } catch (e) {
    return console.log(`${e}`)
  }
}

f1()
f2()

//Result:
// adding 1 +2
// adding two and 3
// Error: Please provide numbers only
// The result is 3

// This is the expected result because on reject(), the message is returned
// instantly while on resolve(), there is a setTimeout of 1.5 seconds before 
// the result is returned.
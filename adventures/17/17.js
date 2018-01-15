//  == History ==

//  Promise is the next evolution to callback functions. It is part of a
//  JavaScript library called bluebird. Developers developed the idea of
//  promise to overcome "callback hell" as the need to perform multiple
//  subsequent actions required nesting of multiple callback functions.
//  Error handling was also a nightmare as if statements to check for errors
//  were needed for every nested callback function. Due to its popularity, it
//  has been added to standard JavaScript in ES6 (2015).

//  Promises solve this problem by allow chaining of anonymous functions or
//  arrow functions by daisy chaining .then() statements. It also provides a
//  single .catch() statement that can be chained to the returned promise
//  to handle all errors. It allows cleaner and more simple readable code.

//  == How promises work ==

//  Any function can return a promise. A promise is an object that takes
//  an anonymous or arrow function with 2 parameters: resolve, reject.
//  Successful results are passed to "resolve", while errors are passed to
//  "reject". Resolve must be the first argument, followed by reject. A promise
//  can only return resolve or reject. Once either of them have been called
//  the other cannot be called. Resolve and reject can only be called once.
//  This means you cannot call resolve twice and vice versa.

function add(a, b){
  return new Promise ((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number"){
      resolve(a + b)
    }else{
      reject('Inputs can only be numbers')
    }
  })
}

add(1,2).then(sum => console.log(sum))
  .catch(e => console.log(`Error: ${e}`))

add ('one', 2).then(sum => console.log(sum))
  .catch(e => console.log(`Error: ${e}`))

//  == Promise.all() ==

//  JavaScript has an all() method inside Promise object, which allows
//  async code to be execute concurrently. Promise.al() takes an array of 
//  promises and waits for them to all resolve before returning it as a single
//  promise. The developer can then obtain the result (array of promises) and 
//  iterate through the array of results to perform some action.

const results = Promise.all([add(1,2), add(2,3), add (4,5)])

results.then(sums => {
  //sums is the array containing the sum of the added numbers
  sums.forEach(sum => console.log(sum))
})
//  Callback functions

//  A callback function is a function passed as an argument into another which 
//  enables asynchronous processing. The function to which the callback is 
//  passed into will perform some tasks and when the task is done, will return
//  the results back to the callback function. The callback function is an 
//  anonymous function or an arrow function.

//  As a developer, by passing the callback function into another function, the
//  callback function will recieve 2 arguments passed back 1) An error message
//  or object, if an error occured, otherwise it is null. 2) The results from
//  the function the callback was passed into.

//  The callback function should contain logic for processing both error and
//  data returned and perform some action based on those results

function add(a,b, callback){
  if (typeof a  === "number" && typeof b === "number"){
    let sum = a + b
    // Error is set to null and sum is returned
    callback(null, sum)
  }else{
    //  If error occurs, return error message. Don't bother with the result.
    //  If caller tries to check for result, it will be undefined, which is
    //  expected.
    callback('Error: both numbers must be numbers')
  }
}

//  Example of what happens if result is returned
add(1, 2, (err, result) => {
  if (err){
    console.log(err);
  }else{
    console.log(`The sum of 1 and 2 is ${result}`)
  }
})

//  Example of what happens when error is returned
add('one', 2, (err, result) => {
  if (err){
    console.log(err);
  }else{
    console.log(`The sum of one and 2 is ${result}`)
  }
})
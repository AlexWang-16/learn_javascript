/* Try-Catch blocks provide a clean way to do error handling */

function f1(a){
  if (a > 5){
    throw new Exception(`Number exceeded 5`)
  }
  console.log(`f1 is ${a}`)
}

function f2(b){
  if (b < 5){
    throw new Exception(`Number is below 5`)
  }
  console.log(`f2 is ${b}`)
}

// Exception class and constructor
function Exception(msg){
  this.msg = msg;
}

try{
  f1(2)
}catch(e){
 // catch takes in the error object passed in 
 console.error(e.msg)
}

try {
  f2(2)
}catch(e){
  console.error(e.msg)
}
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
  let x = f1(3)
  let y = f2(1)
}catch(e){
 // catch takes in the error object passed in 
 if (e.msg == "Number exceeded 5"){
  console.log('f1 error caught')
 } else if (e.msg == "Number is below 5") {
   console.error(`f2 error caught`)
 }
}

// try {
//   f2(2)
// }catch(e){
//   console.error(e.msg)
// }
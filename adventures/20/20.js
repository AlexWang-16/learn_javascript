/*
 Attn 1: arguments is a JavaSript built-in object is an array like object
 corresponding to arguments passed to a function.
*/

function func(a, b, c){
  console.log(arguments[0]);  // outputs: 1
  console.log(arguments[1]);  // outputs: 2
  console.log(arguments[2]);  // outputs: 3

  let args = Array.prototype.slice.call(arguments);
  console.log(args); // [1, 2, 3]
}

func(1,2,3);

/*
  Attn 2: Arguments object is not an Array. It only has a length property.

  To make it iteratable and random accessible, we must use Array's slice method 
  on it.
*/ 

let args = Array.prototype.slice.call(arguments);
console.log(args); 
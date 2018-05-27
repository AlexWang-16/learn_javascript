/* Object Destructuring

  Assigning new variable names during object destructuring. There are two ways
  to do this:

  1) Wrapping the assignment statement using round braces ( ) without a 
  declaration

  2) Using a declaration without round brances.

*/

// Option 1: This will return an object with a and b assigned to their respective values
({ a, b } = { a: 1, b: 2 });
console.log(a); // 1
console.log(b); // 2

// Option 2: This will not return an object. Instead variables a and b will be assigned their respective values
var { a, b } = { a: 3, b: 4 };
console.log(a); // 3
console.log(b); // 4

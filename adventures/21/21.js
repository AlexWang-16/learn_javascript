/* Object Destructuring

Object destructuring provides a shortcut to pull out and use variable and 
funciton names from within an object

Let us take the example of some data object with the user John Smith, whose email is john.smith@example.com.

*/

let data = {
  email: 'john.smith@example.com',
  firstName: 'John',
  lastName: 'Smith'
};

// Perform object destructuring
let {email, firstName, lastName} = data;

// We can now use those variable names that once belong to data natively
console.log(email); // john.smith@example.com
console.log(firstName); // John
console.log(lastName); // Smith

/* 
  What happens if we use destructuring on an object whose variable does not 
  exist?

  It simply becomes undefined.
*/

let { age } = data;

console.log(age); // undefined
/* Adventure 28: ES2015 For-of loop
 *
 * For-of loop provides a variable named iterator for the developer
 * to travese through the *values* of the array. It is useful for
 * iterating through an array whos length cannot be pre-determined.
 *
 */

const arr = [ 1, 2, 3, 4, 5 ];

// Prints all the numbers in the array arr
for (let number of arr) {
  console.log(number);
}

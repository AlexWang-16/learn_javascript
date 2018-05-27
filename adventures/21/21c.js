/* Spread operator with Object Destructuring

The spread operator ... is used to unpack remaining own enumerable property keys
that were not picked off by the destructuring pattern.

*/

let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
console.log(a); // 10
console.log(b) // 20
console.log(rest); // { c: 30, d: 40 }

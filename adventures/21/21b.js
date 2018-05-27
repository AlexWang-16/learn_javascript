/* Object Destructuring

  Assigning default values while assigning new variables during object destructuring

*/

var { a: aa = 10, b:bb = 7 } = { a: 3 };
console.log(aa); // 3
console.log(bb); // 7

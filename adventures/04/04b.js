//  Types of function body
//
//  Arrow functions come in two flavors: "conscise body" and "block body".
//  In a conscise body, only the expression is specified, which becomes the
//  explicit return value; The "return" keyword is implied. In block body,
//  you must use an explicit return statement.

//  Conscise body
let func =  x => x * x
console.log(func(3))

// Block body
func = (x, y) => {return x + y}
console.log(func(1,2))

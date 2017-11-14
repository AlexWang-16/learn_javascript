// Parsing order
//
// The arrow in an arrow function is not an operator, but arrow functions
// have special parsing rules that interact differently with operator precedence
// compared to regular functions

//Uncomment each code statement below one by one to see their effects
let callback

//callback = callback || function() {} // Ok

//callback = callback || () => {} //  Syntax error: Token unexpected at )

callback = callback || (() => {}) // Ok

console.log(callback)

//  When a comparison operator is thrown in, the () has a very high order of
//  precedence. This means the expression () will be evaluated first instead
//  of the entire arrow function expression.

// To ensure the entire expression is evaluated as a function, () surrounding
// the arrow function is needed.

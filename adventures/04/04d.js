//  An arrow function cannot contain line break between its parameter and
//  its arrow

//  This results in syntax error: unexpected token. Expected expression,
//  but got '=>'. Uncomment lines 6 and 7 to see the effects.
//let func = a
//  => 1

//Proper use of line break
func = a =>
    b => a + b

console.log(func(1)(2)) // Result: 3

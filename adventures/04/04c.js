//  Returning object literals using conscise body syntax will not work.
//  This is because { } that follow an arrow signify a sequence of statements.
//  It is part of the arrow function syntax. Thus, it will not be treated as
//  the object literal symbols.

//let func = () => { foo : 1 } // Returns undefined. 'foo' is parsed as a label

//  Syntax error: function statement requires a name
//func = () => { foo : function() {} }

'use strict'
function func(){
  this.foo = 1
}

const thing = Object.create(func)
console.log(thing.foo)

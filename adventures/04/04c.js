//  Returning object literals using conscise body syntax will not work.
//  This is because { } that follow an arrow signify a sequence of statements.
//  It is part of the arrow function syntax. Thus, it will not be treated as
//  the object literal symbols.

//  Code below returns undefined as 'foo' is parased as a label.
//  For more information about JavaScript Labels, see adventure 09
let func = () => { foo : 1 } // Returns undefined. 'foo' is parsed as a label
console.log(func())

//  Syntax error: function statement requires a name
//func = () => { foo : function() {} }

//  The solution is to wrap the object literal around with parenthesis
func = () => ({foo:1})
console.log(func()) // Returns {foo:1} anonymous object


//  The following is a proof of concept of how "this" keyword behaves with
//  arrow functions vs standard function

let f = () => {
  console.log(this) // results in {} because arrow fn does not have "this"
  return this
}

console.log(f() === global) //  False

let g = function() {
  //  Standard functions have its own "this"
  return this
}

console.log(g() === global) // True


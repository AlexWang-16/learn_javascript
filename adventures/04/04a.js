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

//  Example 2
//  What happens if an arrow function is used as a method inside an object?

let cat = {
  species: "cat",
  talk: () => `${this.name}: meow!`,
  speak: function() { return `${this.name}: meow!` }
}

let munchkin = {
  name: "fluffly"
}

Object.setPrototypeOf(munchkin, cat) // Sets cat to be prototype of munchkin

console.log(munchkin.name)
console.log(munchkin.__proto__)
console.log(munchkin.talk())  // 'undefined: meow!'

this.name = 'ahahaha'
console.log(munchkin.talk())  // 'ahahaha: meow!'
console.log(munchkin.speak()) // 'fluffy: meow!'

//  We see that because arrow function does not have the concept of "this"
//  "this" will mean the surrounding "thing" at the time when talk() method
//  was invoked.
//
//  This means despite munchkin was the object for which talk() was invoked on,
//  "this" was captured as the global object
//
//  In contrast, a regular function(){} will have the concept of this and
//  thus this.name can be inferred

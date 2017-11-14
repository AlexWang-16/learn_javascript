//  Constructor function object
function Person(name, age){
  this.name = name
  this.age = age
}

Person.prototype.talk = function() { console.log(`${this.name} says hi`) }

// spawn() performs like new(). We use spawn() due to "new"
// being a reserved JavaScript word
function spawn(constructor){
  //  1. Create an empty object
  var obj = {}

  //  2. Sets the prototype of the object to the prototype property of
  //  constructor function
  Object.setPrototypeOf(obj, constructor.prototype)

  //  "arguments" is a reserved word for arguments passed into a function
  //  Unfortunately it does not return an array, furthermore, the first
  //  element is the constructor function. Hence, slice is used.
  var slicedArgs = Array.prototype.slice.apply(arguments)

  //  Uncomment the line below to see how arguments look like in array form
  //console.log(slicedArgs)

  //  3. The object is then passed into the constructor as "this". The apply()
  //  method takes an object and a set of arguments. It will then set "this" as
  //  the object and pass the remaining arguments into the constructor function
  //
  //  4. The object is returned. If the constructor returns something,
  //  it will return that instead
  return constructor.apply(obj, slicedArgs.slice(1)) || obj
}

let jon = spawn(Person, 'Jon', 15)

//  Uncomment the line below to see the results of Jon
//console.log(jon)

jon.talk()

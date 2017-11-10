
function Person(name, age){
  this.name = name
  this.age = age
}

Person.prototype.talk = function() { console.log(`${this.name} says hi`) }

function spawn(constructor){
  var obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  var slicedArgs = Array.prototype.slice.apply(arguments)
  //console.log(slicedArgs)
  return constructor.apply(obj, slicedArgs.slice(1)) || obj
}

let jon = spawn(Person, 'Jon', 15)
//console.log(jon)
jon.talk()

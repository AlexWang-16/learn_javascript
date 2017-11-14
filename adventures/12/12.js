//  Classical inheritence with Object.create()

function Shape() {
  this.x = 0
  this.y = 0
}

// adding superclass method
Shape.prototype. = function (x,y) {
  this.x += x
  this.y += y
}

//  Rectangle - subclass
function Rectangle(){
  //  The call method is a static method of all functions. It works like
  //  apply() by binding the object passed in as "this" in the constructor
  //  function. Beyond the first parameter, it accepts up to 254 arguments
  //  to be passed in as well. The difference between apply() and call() is
  //  that apply takes an "array of arguments" while call accepts an
  //  "argument list"
  Shape.call(this)  // Invokes superclass constructor
}

//  subclass extends superclass by setting Rectangle prototype
//  to an object with a prototype of Shape function
Rectangle.prototype = Object.create(Shape.prototype)

//  Rectangle is a function, so it has prototype property. The constructor
//  property is really a method used when constructing new object using "new"
//  keyword in ES6
Rectangle.prototype.constructor = Rectangle

let rect = new Rectangle()

console.log('Is rect an instance of rectangle?',
rect instanceof Rectangle)  // true
console.log('Is rect an instance of Shape?',
rect instanceof Shape)  //  true because Shape is part of Rectangle's prototype
rect.move(1,1)  //  'Shape moved.'

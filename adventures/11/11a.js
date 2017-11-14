// In this snippet, we will examine how constructor behaves when an object's
// prototype is changed

class Polygon{
  constructor (){
    this.name = 'polygon'
  }
}

class Square extends Polygon{
  constructor(){
    super()
  }
}

class Rectangle{}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype)

// False
console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype)

//True
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype)

const square1 = new Square()
console.log(square1.name) // polygon

//  While the prototype of Square has been changed to rectangle, the super() in
//  constructor still references the constructor of Polygon

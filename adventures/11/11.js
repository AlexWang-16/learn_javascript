// Constructors
//
// Constructor method is a special method for creating and initializing an
// object created within a class.
//
// There can be only one special method with th ename constructor in a class.
// More than one occurence of constructor method results in syntax error.
//
// A consturctor can use super() to call the constructor of a parent class.
//
// If no constructor method is specified, a default constructor is used.

class Animal {
  constructor (name, species){
    this.name = name
    this.species = species
  }
}

class Dog extends Animal{
  constructor (name){
    super (name, "dog") // Calls Animal constructor()
  }
}

const snoopy = new Dog ("Snoopy")
console.log(snoopy)

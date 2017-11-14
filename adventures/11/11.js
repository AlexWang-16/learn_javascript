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
    //  This is where all properties are defined
    this.name = name
    this.species = species
  }

  //  Getter
  get getName(){
    return this.name
  }

  //  Setter
  set setName(newName){
    this.name = newName
  }

  //  Method
  poop() {
    return 'poop!'
  }

  //  Static methods
  static makeFriends(a, b){
    return `${a} and ${b} are both friends!`
  }
}

class Dog extends Animal{
  constructor (name){
    super (name, "dog") // Calls Animal constructor()
  }
}

const snoopy = new Dog ("Snoopy")
console.log(snoopy)
console.log(snoopy.getName) // getters are called as a property
console.log(snoopy.poop())

snoopy.setName = 'snooop' // Arguments are passed into setter using assignment
console.log(snoopy.getName)

// Result: stacey and jackson are both friends!
console.log(Dog.makeFriends('stacey', 'jackson'))

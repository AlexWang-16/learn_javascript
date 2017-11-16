//  Classes in JavaScript

class Mammal {
 constructor(sound, name){
   this.sound = sound
   this.name = name
 }

 // Getter methods cannot accept any arguments
 get getName() {
   return this.name
 }

 // Setter methods can only accept one argument
 set setName(name){
   this.name = name
 }

 talk(){
   return this.sound
 }
}

class Dog extends Mammal {
  constructor(name){
    super('wooooollllffff', name)
  }
}

const flufflykins = new Mammal('wooof!', 'flufflykins')
console.log(flufflykins.getName)  //Calling getter function
console.log(flufflykins.talk())

const snoopy = new Dog('snoopy')
console.log(snoopy.talk())
snoopy.setName = 'snoooop'
console.log(`snoopy's new name is ${snoopy.getName}`)

//  Keep in mind that properties and methods in ES6 classes are all public.
//  There is no way to make them private. Hence @MPJ recommends using
//  composition rather than inheritence

//  Some coders use '_' in front of propert names as a convention to indicate
//  that the property is supposed to be private, but there is no mechanism
//  to prevent other developers from directly accessing those properties.
//  The reason that this behavior is not implemented is because JavaScript
//  does not have classes! The concept of class is purely syntatic sugar.

function cat (name, species){
  this.name = name
  this.species = species
}

let fluff = Object.create(cat)
console.log(cat.isPrototypeOf(fluff))

//  How do we know that classes is just snytatic sugar?
console.log(typeof Dog) // function! A class is just a function!

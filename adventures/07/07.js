
function talk() {
  console.log(this)
  console.log(this.sound)
}

let animal = {
  //talk: talk  // The property talk is referring to talk()
  talk // In ES6, "talk: talk" can be simplifed to "talk"
}

let cat = {
  sound: 'meow!'
}

//cat.talk() // This will throw an error because cat does not have a talk method

Object.setPrototypeOf(cat, animal);

cat.talk()  //  This will work because animal has talk() and is the prototype

//  Prototypes are delegates. It allows one object to reference another in the
//  event the developer invokes a property or method it does not have.
//  It is also important to remember that delegates are references and not
//  a copy of the prototype object (unlike a base class in object oriented
//  programming).
//
//  Think of this as a scenario of three students: John, Stacey, and Tom.
//  John wants to borrow a pencil and asks Stacey, but Stacey does not have a
//  pencil so she asks Tom. Tom lends the pencil to Stacey, who gets passed
//  back to John. In this scenario, Tom is the delegate of Stacey. John is
//  the developer.

//  When talk() executes when being called by cat.talk(), the "this" keyword
//  will still refer to the cat because the cat object is executing talk()

let dog = {
  sound: 'woof'
}

Object.setPrototypeOf(dog, animal)

dog.talk()  // Returns 'woof' as dog is invoking talk() even though it belongs
            // to animal. It is simply referring to talk() in animal

//  Lets take a look at an example where we refer a property to an object's
//  delegate

let prarieDog = {
  howl: function() {
    console.log(this.sound.toUpperCase())
  }
}

Object.setPrototypeOf(prarieDog, dog)

prarieDog.howl() // returns WOOF

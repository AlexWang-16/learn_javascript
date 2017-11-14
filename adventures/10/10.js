//  Classes in JavaScript
class Mammal {
  constructor(sound){
    this.sound = sound
  }

  talk(){
    return this.sound
  }
}

class Dog extends Mammal {
  constructor(){
    super('wooooollllffff')
  }
}

let fluffykins = new Dog('woof!')
let x = fluffykins.talk()
x

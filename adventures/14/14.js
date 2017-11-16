//  Composition solves the problem of inheritence in JavaScript by categorizing
//  objects by their behaviour rather than by type.

// Consider the traditional inheritence model

class Animal {
  constructor(name){
    name
  }

  poop() { console.log ('poop') }
}

class Dog extends Animal{
  constructor(name){
    super(name)
  }

  bark(){ console.log(`Woof I am ${name}`) }
}

class Robot {
  constructor(name){
    name
  }
}

class DriverRobot extends Robot {
  constructor(state){
    super(state.name)
  }

  drive() { state.position += state.speed }
}

class KillerRobot extends Robot {
  constructor(state){
    super(state.name)
    this.attribute = 'kill'
  }
}

//  But what if we want to add a killer dog robot that drives, barks, and kills
//  but does not poop? This hybrid creature will not fit into either models.
//  This is where inheritence fails and composition becomes powerful

//  By using composition, we make the dog, based on its behavior. In our case,
//  barking and pooping

// Behavior 1
const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
})

// Behavior 2
const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
})

// Behavior 3
const killer = (state) => ({
    attribute: 'killer'
})

barker({name: 'karo'}).bark() //  Woof, I am karo

//  Both barker and driver behave like factory functions (see adventure 13), but
//  both functions accept the state. The purpose of accepting a state is such
//  that the states can be shared

//  Consider our murder robot
const murderRobotDog = (name) => {
  let state = { // Initial state of the murder robot dog
    name,
    speed: 100,
    position: 0,
  }
  return Object.assign(
    // Object.assign takes an object (an empty obj in this case), and assigns
    // all the properties of the rest of the arguments to that object.
    // Caution: Object.assign() is an ES6 feature.
    {},
    barker(state),
    driver(state),
    killer(state)
  )
}

const sniffles = murderRobotDog('sniffles')
sniffles.bark()
console.log(sniffles.attribute)
console.log(sniffles)

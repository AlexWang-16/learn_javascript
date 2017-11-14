//  Factory functions are functions that create and return an object
function dog(name, age){
  //  Since these variables are under a function, they are private
  const sound = 'woof!'
  return {
    //  This where public methods and properties belong. It is public because
    //  these properties and methods get returned. It is able to reference
    //  private function variable due to JavaScript closure behaviour
    age,
    talk: () => console.log(sound),
    getName: () => name
  }
}

const snoopy = dog('snoopy', 5)

console.log(dog.sound)  // Undefined. No access to function variables
console.log(snoopy.getName())
console.log(snoopy.age) // 5
snoopy.talk() // woof!

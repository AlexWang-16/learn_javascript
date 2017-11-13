//  Object.create() is a static method from Object's prototype which allows
//  creating a new object with the prototype set to a certin object

const human = {
  'species' : 'human',
  speak: function() {console.log('hello!')}
}

let alex = Object.create(human)
alex.name = 'Alex'
console.log(`${alex.name} is a ${alex.species}`)

alex.speak()

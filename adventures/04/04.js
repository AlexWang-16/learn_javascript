//  Arrow functions

// Arrow functions are annonymous functions designed with as little syntax
// as possible. They are great for doing 1 thing really well, keeping syntax
// to a minimum and allows code to be more readable and easier to understand.
// This makes them the primary candidate for callback functions.

// Constraints of arrow functions
// 1. They do not have an instance of "this". Therefore, they are useless
//    as methods.
// 2. They are anonymous functions, so no names can be assigned to them.
//    They cannot be reused.
// 3. ...
// 4. ...

var animals = [
  {name : "Fluffy", species: "cat", attack: "scratching"},
  {name: "Snoopy", species: "dog", attack: "clawing"},
  {name: "Joey", species: "dog", attack: "clawing"},
  {name: "Buster", species: "dog", attack: "clawing"},
  {name: "Perrrot", species: "bird", attack: "pecking"}
];

// filter() takes a callback function and iterates through each element in an
// array. It then returns the item where the call back function determines to be
// true.

//Here, we are filtering all animals for the name snoopy.
var snoopy = animals.filter(animal => animal.name == 'Snoopy')
console.log("filtering for snoopy...")
console.log(snoopy)

console.log("\n")

var dogs = animals.filter(animal => animal.species == 'dog')
console.log("filtering for dogs...")
console.log(dogs)

console.log("\n")

//  Map() takes a call back function's data and transforms each element into
//  some output
var attacks = animals.map(animal => `${animal.name} attacks by ${animal.attack}`)
console.log(attacks)
console.log("")

//  Reduce() takes an array and reduces all elements into one output. A common
//  usage is to obtain the sum of a set of numbers

var companyExpense = [
  { description: "TV Purchase", cost: 2000 },
  { description: "iPhone X", cost: 2000},
  { description: "Apple Watch", cost: 500},
  { expense: "MacBook Air", cost: 1200 }
];

//  reduce() takes 2 arguments: a call back function that reduces the values and
//  for each element in the array. The second is the optional inital value of //  the accumulator.

//  The call back function takes 2 arguments:
//  The first argument is the accumulator that accumulates the total of all
//  values. The second is current element being processed in the array)

//  In this example, "total" argument is the accumulator. "expense" argument
//  is the element being processed. "0" on line 67 is the optional intial
//  value of the accumulator
console.log(companyExpense)
var totalExpense = companyExpense.reduce((total, expense) => total + expense.cost, 0)
console.log("Total expense...")
console.log(totalExpense)

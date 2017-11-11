//  Currying is the idea of successive functions taking arguments one at a time
//  instead of taking all the arguments up front. It does this by taking an
// argument into the initial function and returning its inner function, which
// takes the required argument and so forth until the most inner function is
// called, to which the output is returned.

//  The benefit of currying is that the order of which arguments are passed are guaranteed.

let add =
  a =>
  b =>
  c =>
    a + b + c
console.log(`1 + 2 + 3 = ${add(1)(2)(3)}`)
console.log("")

//  This in turn allows us to create a function that can accumulate arguments throughout the
//  application and return the result once it has gathered all required data

let dog =
  name =>
  emotion =>
  hobby =>
    `${name} is a ${emotion} dog that likes to ${hobby}`

let snoopy = dog('snoopy')

let happyDog = snoopy('happy')

console.log (happyDog('sniff coffee'))

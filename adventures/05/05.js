"use strict"
var talk = function(){
  console.log(this.sound);
}

// An object called bormir which makes a sound
var bormir = {
  sound: "mur mur mur mur",
}

// If executed without bind, the talk function's "this" keyword will refer to
// the global object even if it is assigned to bormir.speak property.
// The property merely references talk(). bind() will create a copy of talk(),
// infer "this" to be bormir and return the new talk().

// Try this code first as is, it show throw undefined error
// then comment out ln 18 and uncomment ln 19 to see the effects
//bormir.speak = talk;
bormir.speak = talk.bind(bormir);
var blabber = bormir.speak
blabber()

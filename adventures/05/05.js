"use strict"
var talk = function(){
  console.log(this.sound);
}

// An object called bormir which makes a sound
var bormir = {
  sound: "mur mur mur mur",
}

// Without bind, the talk function's "this" keyword will refer to
// the global object even if it is assigned to bormir.speak property.
// the property merely references the function. Binding will provide
// "this" inside talk() with the context of bormir

// Try this code first as is, it show throw undefined error
// then comment out ln 18 and uncomment ln 19 to see the effects
//bormir.speak = talk;
bormir.speak = talk.bind(bormir);
var blabber = bormir.speak
blabber()

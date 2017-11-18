var talk = function(){
  console.log(this.sound);
}

// An object called bormir which makes a sound
var bormir = {
  sound: "mur mur mur mur",
}

// If executed without bind, the talk function's "this" keyword will refer to
// the global object (NodeJS environment) or window object (browser)
// even if it is assigned to bormir.speak property.
// The property merely references talk(). bind() will create a copy of talk(),
// infer "this" to be bormir and return the new talk().

// Try this code first as is, it show throw undefined error
// then comment out ln 18 and uncomment ln 19 to see the effects
//bormir.speak = talk;
bormir.speak = talk.bind(bormir);
var blabber = bormir.speak
blabber() //  This still works because bormir.speak is talk() bounded to bormir

//How do we know that bind returns a copy of talk()?
talk() // Execute this in node and you will see it return undefined

// Can we embed external functions into an object to make use of it? Yes!

var bormir2 = {
  speak: talk,
  sound: "One does not walk into Mordor!"
}

//  Because speak is referencing talk() within its own object, "this" will now
//  refer to bormir2. JavaScript determines what "this" refers to at runtime
//  when the function is called
bormir2.speak()

// new.target is a property that lets you detect if a function or constructor
// was called using the new operator.
//
// If new operator was used, new.target will return a reference to the function
// or constructor. Otherwise, it will return undefined.

class A {
  constructor(){
    console.log(new.target)
  }
}

class B extends A{
  constructor(){
     super()
  }
}

let a = new A() // returns Function: A
let b = new B() // returns Function: B

function C (){
 console.log(new.target)
}

let c = C() // undefined
let c_with_new = new C() // Function: C


// Object.defineProperty() is a method that allows defining or modifying a new
// property directly on an object and returns the object

// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

// == Usage ==

// Information regarding descriptor:
// A descriptor is an object containing specific configuration properties to configure the property

// writable: a boolean that specifies if the assignment operator can be used to modify the value of the property. By default, it is false.

// value: the value of the property.

// == Format ==

// let descriptor ={
//   value: 'some value',
//   writable: false,  
//   get: function(){
//     // Getter for the property. Default is undefined.
//   },
//   set: function() {
//     // Setter for the property. Default is undefined.
//   }
// };

// Object.defineProperty(object, 'property', descriptor);

var obj = {};

Object.defineProperty(obj, 'name', {
  value: 'Johnny',
  writable: true
});

console.log(obj.name);
console.log();
console.log('Now changing object.name property to Stacey');
console.log();

obj.name = "Stacey";

console.log(obj.name);
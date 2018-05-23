/* 
Adventure 24: Object.seal()

The purpose of Object.seal() is to disable the ability for a developer to add
new properties to the object without restricting the ability to modify the
values of existing properties
*/

let obj = {
  propOne: 'property1',
  propTwo: 'property2'
};

obj.propThree = 'property3';

// Should show property 1,2, and 3. Object is not yet sealed.
console.log("Before Seal: ");
console.log(obj); 
console.log(); // Create space between two outputs

Object.seal(obj);

obj.propFour = 'property4';

console.log("After Seal:");
console.log(obj); // Should contain property 1,2, and 3 only.

// Object.assign() is a method used to perform deep copy of data from one
// object into another. It returns the copied object.

// == Usage ==
// Object.assign(targetObject, sources)

const objectA = {
  toys: ['teddy bear', 'action figures', 'Nintendo Switch']
};

const objectB = {};
const objectC = Object.assign(objectB, objectA);

// Expect objectB to be the same as objectA
console.log('Object B:', objectB);

// Expect objectC to be the same as objectA also. The point is to show 2
// different ways of assigning the target object.
console.log('Object C: ', objectC);
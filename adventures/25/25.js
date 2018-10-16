import ModuleA from './moduleA'; // Import from an export defaulted file

// ModuleB_string is imported as default. Defaults must be declared first as shown below.
import ModuleB_String, { PropA, PropB, PropC } from './moduleB'; 
import {PropA as RefA } from './moduleB'; // Using 'as' keyword to rename imported PropA to RefA
import { PropD } from './moduleB'; // PropD is not exported; Becomes 'undefined'.
import * as Stuff from './moduleC'; // Import everything in moduleC, store it in 'Stuff' variable.

// Object imported on an export defaulted anonymous object
console.log('-- From Module A --');
console.log (`${ModuleA.toString()}`);

// Object destructuring on an exported anonymous object
console.log(`-- From Module B --`);
console.log(`Property A: ${ PropA }`);
console.log(`Property A imported using 'as' keyword: ${ RefA }`);
console.log(`Property B: ${ PropB }`);
console.log(`Property C: ${ PropC }`);
console.log(`Property D: ${ PropD }`); // PropD = undefined
// If import default is a function, it will directly map to a function
console.log(`Default import from ModuleB: ${ModuleB_String()}\n`);

// Using * to import an export defaulted anonymous object and
// store it into 'Stuff' variable
console.log(`-- From Module C --`)
console.log(`printA(): ${Stuff.printA()}`);
console.log(`printB(): ${Stuff.printB()}`);
console.log(`printC(): ${Stuff.printC()}`);
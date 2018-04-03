# learn_javascript
My JavaScript adventures

## Requirements
1. [Node JS with Node Package Manager (NPM)](https://nodejs.org/en/)

## Installation Instructions
1. git clone this repository
2. change directory into *learn_javascript*
3. execute `npm install`

The node modules from *package.json* will be downloaded.

## Directory structure
All adventures are store inside adventure/ directory. Inside that directory are a series of numerically labeled adventure. The description of each adventure is documented below.

## Adventures
**01** - Using Jest for Unit testing - See `__test__` folder. [Jest](http://facebook.github.io/jest/) is a javascript unit testing framework used by FaceBook. It uses a series of *expected()* style functions to perform assertions; see [API for expected()](http://facebook.github.io/jest/docs/en/expect.html) usage.

To run a test, execute `npm test`. All tests needs to be included inside `__test__` folder. *sum.test.js* will run tests against /adventure/01/sum.js

To view this adventure, use `npm test` command in terminal

---

**02** - Modifying the DOM with JavaScript. In this adventure, I have created a `<ul>` and `<li>` element. I then added my own text into `<li>` and appended `<li>` into `<ul>`. The purpose of this adventure is to learn creating HTML elements using pure JavaScript and adding content into the webpage.

To view this adventure, please use browser to launch the containing index.html

---

**03** - Recoding ECMAScript6's **new** keyword. In this adventure, I have coded the implementations under the hood of the **new** keyword in JavaScript.

To view this adventure, use NodeJS to execute this code in terminal: `node 03.js` inside the adventure folder

---

**04** - Arrow functions. In this adventure, I will explore how arrow functions in ES6 works.

This adventure includes use of Javascript's map(), filter(), and reduce() methods for arrays.

To view this adventure, use NodeJS to execute this code in terminal: `node 04.js` inside the adventure folder
 
Additional adventures:
```
04a - The behavior of "this" in arrow functions
04b - The different types of body for arrow functions
04c - Returning object literals with arrow functions
04d - Arrow in arrow functions cannot be separated from its parameter
04e - Arrow in arrow funciton behavior when combined with operation precedence
04f - How to immediately invoke an arrow function
```

To view additional adventures, use NodeJS to execute this code in terminal: `node 04<letter>.js` (i.e. `node 04a.js`)

---

**05** - **bind** keyword. In this adventure, I will explore what is the purpose of bind and how to use it.

To view this adventure, use NodeJS to execute this code in terminal: `node 05.js` inside the adventure folder

---

**06** - Currying. Currying in JS allows a function to accumulatively collect its arguments and process output when all arguments have been collected. It guarantees the order in which arguments are collected by returning a series of functions that are nested. ECMAScript does not currently have a curry method to curry functions natively, but libraries such as lodash can be imported to perform this function. Reference to the adventure can be found [here](https://youtu.be/iZLP4qOwY8I)

To view this adventure, use NodeJS to execute this code in terminal: `node 06.js` inside the adventure folder

---

**07** - Prototypes. Prototypes allows objects in JavaScript to behave like classes. It is a simpler model of object oriented class model in that it allows delegation rather than creating a completely new instance while inheriting the design of the base class. This means if a developer requests for a property or method that the current object does not have, it will reference its prototype object in 
search for those properties/methods. Only when the property or method is not found in a the prototype will it return undefined.

To view this adventure, use NodeJS to execute this code in terminal: `node 07.js` inside the adventure folder

---

**08** - Object.create(). Object.create() is a static method from Object function object that creates an object and sets its prototype to that of another object.

To view this adventure, use NodeJS to execute this code in terminal: `node 08.js` inside the adventure folder

---

**09** - JavaScript Labels. JavaScript Labels provide a way for loops and code blocks to be labeled such that the `break` command can be applied to a code block or loop. Labels also support `continue` command for loops.

To view this adventure, use NodeJS to execute this code in terminal: `node 09.js` inside the adventure folder

---

**10** - JavaScript Classes in ES6. JavaScript classes is syntatic sugar for programmers who are coming from a heavily object oriented programming language and paradigm. Under the hood, it uses functions and prototypes. All variables and methods in classes are public and cannot be made private because JavaScript does not have classes, only prototypes. We are also introduced to the concept of the constructor(), which is a specialized function specifically for classes in ES6.

Classes includes getter and setter methods. Getter methods cannot accept arguments. Setter methods can only accept one argument.

To view this adventure, use NodeJS to execute this code in terminal: `node 10.js` inside the adventure folder

---

**11** - JavaScript constructor() for class feature in ES6. The constructor() is a function specifically for class feature in ES6. It can only be declared within a class declaration and can only be declared once. Its purpose is for object creation via `new` keyword. When extending a class in JavaScript, the super() can be invoked inside the child class' constructor to call the parent's constructor.

To view this adventure, use NodeJS to execute this code in terminal: `node 11.js`

**11a** - We examine the behaviour of super() in scenarios where prototype of a child class is switched to another class. In summary, the constructor's super() still refers to the original parent class' constructor.

To view this adventure, use NodeJS to execute this code in terminal: `node 11a.js` inside the adventure folder

---

**12** - Classical inheritence with `Object.create()`. In this adventure, we will see that classes are really functions and how the `extends` keyword works under the hood in traditional JavaScript.

To view this adventure, use NodeJS to execute this code in terminal: `node 12.js` inside the adventure folder

---

**13** - Factory functions in Javascript. Factory functions are functions that create objects and return them. To view how they work, check out this adventure.

To view this adventure, use NodeJS to execute this code in terminal: `node 13.js` inside the adventure folder

---

**14** - Limitations of inheritence in JavaScript and how to overcome them using composition.

To view this adventure, use NodeJS to execute this code in terminal: `node 14.js` inside the adventure folder

---

**15** - Async/Await. A new ES7 feature which allows asynchoronous code to be executed synchronously. The power of Async/Await comes from being able to chain it with promise.all() to write code that is easier to understand and more predictiable while maintaining the performance of asynchronous processing.

To view this adventure, use NodeJS to execute this code in terminal: `node 15.js` inside the adventure folder

---

**16** - Callback functions. A mechanism in JavaScript to execute code asynchronously.

To view this adventure, use NodeJS to execute this code in terminal: `node 16.js` inside the adventure folder

---

**17** - Promises. A newer mechanism in JavaScript that allows chaining asynchronous code and handling errors without the mess that is associated with Callback functions. It avoids *callback hell*.

To view this adventure, use NodeJS to execute this code in terminal: `node 17.js` inside the adventure folder

---

**18** - Object.defineProperty(). Defines a new property directly on an object or modifies the property on an existing object.

To view this adventure, use NodeJS to execute this code in terminal: `node 18.js` inside the adventure folder

---

**19** - Object.assign(). A static method that copies enumerable items from one or more sources into another.

To view this adventure, use NodeJS to execute this code in terminal: `node 19.js` inside the adventure folder

---

**20** - *arguments* object. Arguments is a built-in JavaScript object that holds key-value pairs based on arguments passed into a function.

To view this adventure, use NodeJS to execute this code in terminal: `node 19.js` inside the adventure folder


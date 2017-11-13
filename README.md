# learn_javascript
My JavaScript adventures

## Requirements
1. Node JS
2. Node Package Manager (NPM)

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

To view this adventure, use NodeJS to execute this code in terminal: `node 03.js`

---

**04** - Arrow functions. In this adventure, I will explore how arrow functions in ES6 works.

To view this adventure, use NodeJS to execute this code in terminal: `node 04.js`

Additional adventures:
04a - The behavior of "this" in arrow functions
04b - The different types of body for arrow functions
04c - Returning object literals with arrow functions

---

**05** - **bind** keyword. In this adventure, I will explore what is the purpose of bind and how to use it.

To view this adventure, use NodeJS to execute this code in terminal: `node 05.js`

---

**06** - Currying. Currying in JS allows a function to accumulatively collect its arguments and process output when all arguments have been collected. It guarantees the order in which arguments are collected by returning a series of functions that are nested. ECMAScript does not currently have a curry method to curry functions natively, but libraries such as lodash can be imported to perform this function. Reference to the adventure can be found [here](https://youtu.be/iZLP4qOwY8I)

To view this adventure, use NodeJS to execute this code in terminal: `node 06.js`

---

**07** - Prototypes. Prototypes allows objects in JavaScript to behave like classes. It is a simpler model of object oriented class model in that it allows delegation rather than creating a completely new instance while inheriting the design of the base class. This means if a developer requests for a property or method that the current object does not have, it will reference its prototype object in 
search for those properties/methods. Only when the property or method is not found in a the prototype will it return undefined.

To view this adventure, use NodeJS to execute this code in terminal: `node 07.js`

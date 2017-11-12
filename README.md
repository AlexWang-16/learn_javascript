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

---

**05** - **bind** keyword. In this adventure, I will explore what is the purpose of bind and how to use it.

To view this adventure, use NodeJS to execute this code in terminal: `node 05.js`


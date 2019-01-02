/* ES2018 Async for-of loop
 *
 * The purpose of async for-of loop is to allow things like file
 * reading or fetching data over the internet to be done asynchronously.
 * See 28.js for more details of for-of loop
 *
 */

// The following example code is not meant to be executed but serves
// as reference for how asynch for of loop may work

// To activate the asynchronous capability of for-of loop, you must put
// it under a function with async specified

async function readFile() {
  for await (let name of readNamesOf40GBFiles('names.txt')) {
    console.log(name);
  }
}

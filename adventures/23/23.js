/* Aray.find() returns the first value which the arrow function returns true */
let arr = [1,2,4,3,4,5]

let result = arr.find(element => {
  return (element > 3)
})

console.log(result) // 4 (from index 2 of array)
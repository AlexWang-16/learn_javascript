//  Labels are a way to label a block of code or loops.
//  Labels are used in tandem with "continue" and "break"
//  to determine if it should interrupt the loop or continue its execution.
//
//  Break statements can be used with any labeled statement
loop1:
for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    if (i === 1 && j === 2){
      break loop1
    }
    console.log(`i:${i}, j:${j}`)
  }
}
console.log("")

foo: {
  console.log('this will be executed\n')
  break foo
  console.log('this will not')
}

//  Continue statements are used with looping labeled statements.
loop2:
for (let i = 0; i < 3; i++){
  for (let j = 0; j < 4; j++){
    if (i == 1 && j == 2){
      continue loop2
    }
    console.log(`i: ${i}, j:${j}`)
  }
}

//  Labels must not use JavaScript reserved keywords. In strict mode,
//  "let" cannot be used as a label name. Otherwise, it will result
//  in syntax error. Uncomment the following code to see the result.

//for :
//for (let k = 0; k < 4; k++){
//  for (let l = 0; l < 4; l++){
//    console.log("label with JSKeyword")
//  }
//}

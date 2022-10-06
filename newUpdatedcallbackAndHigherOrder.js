////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

// CODE HERE
const multiply = (num1, num2, cb) => cb(num1 * num2)
// this is equivalent to the above
function multiplyAlt(num1, num2, anotherFunctionCb) {
  let product = num1 * num2
  return anotherFunctionCb(product)
}



// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

multiply(4, 3, answer => {
console.log('The answer is ' + answer) //should console.log 12
})
// this is equivalent to the above
function callback(answer) {
  console.log('The answer is ' + answer) //should console.log 12
}
multiply(4, 3, callback)
console.log('----------------------------------------------------------------------')



////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE 
let first  = (arr, callback) => callback(arr[0])
// this is equivalent to the above
//function first(arr, callback) {
  //return callback(arr[0])
//}
//let first  = (arr, callback) => {
  //return callback(arr[0])
//}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

first(names, firstName => {
  console.log('The first name in names is ' + firstName)
})
// this is equivalent to the anonymous (also known as arrow or lambda) function above
function logFirstName(firstName) {
  console.log('The first name in names is ' + firstName)
}
console.log('--------------------------------------------------------------')



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE
let last = (arr, callback) => callback(arr[arr.length - 1])
// this is functionally equivalent to the above
function lastAlt (arr, callback) {
  return callback(arr[arr.length - 1])
}
//let Last = (arr, callback) => callback(arr[arr.length - 1])
// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

last(names, lastName => {
console.log('The last name in names is ' + lastName)
})
console.log('-----------------------------------------------')


////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE 
const contains = (arr, name, cb) => {
  if (arr.includes(name) === true) {
      cb(true)
  } else {
      cb(false)
  }
}
function containsAlt(list, name, callback) {
  /*if (list.includes(name)) {
    callback(true)
  } else {
    callback(false)
  }*/
  callback(list.includes(name))
}
const containsAlt2 = (list, name, callback) => callback(list.includes(name))






// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

contains(names, 'Colt', result => {
if(result === true){
  console.log('Colt is in the array')
} else {
console.log('Colt is not in the array')
}
})
function containsCallback (result) {
  if(result){
    console.log('Colt is in the array')
  } else {
  console.log('Colt is not in the array')
  }  
}



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE

let uniq = (arr, cb) => {
  let newArr = Array.from(new Set(arr))
  //sets require all of their items to be unique
  //if there are duplicates they will not show
  cb(newArr)
}
// this is functionally equivalent to the above
function uniqAlt(list, callback) {
  const result = []
  for (let i = 0; i < list.length; i++) {
    let value = list[i]
    if (result.includes(value) === false) {
      result.push(value)
    }
  }
  return result
}

/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE
uniq(names, uniqArr => {
  console.log('The new names array with all the duplicate items removed.', uniqArr)
})





////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// CODE HERE 
function each(names, callback){
  for(let i = 0; i < names.length; i++){
    let name = names[i]
    callback(name, i)
  }
}
// this is functionally equivalent to the above
function eachAlt(names, callback){
  names.forEach((name, i) => callback(name, i))
}
// this is functionally equivalent to the above
const eachAlt2 = (names, callback) => {
  for(let i = 0; i < names.length; i++){
    let name = names[i]
    callback(name, i)
  }
}

/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two parameters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE
each(names, (name, index) => {
  console.log('The item at index ' + index.toString() + ' is ' + name)
})


////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

// CODE HERE 

function getUserById(arrOfObjs, id, cb){
  let matchingUser = null
  for(let i = 0; i < arrOfObjs.length; i++){
    if (arrOfObjs[i], id === id){
      matchingUser = arrOfObjs[i]
    }
  }
  callback(matchingUser)
}

function getUserByIdAlt(users, userIdToFind, callback) {
  // 1. iterate over the users array - users.forEach(() => {})
  // 2. check if the current user has a matching id 
  // 3. invoke the callback with the user
  users.forEach((user) => {
    if (user.id === userIdToFind) {
      callback(user)
    }
  })
}


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

getUserById(users, '16t', user => {
console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
})

////////// CHALLENGE //////////

/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE

/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE







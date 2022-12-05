// Both are undefined when called before invoking the function
// console.log("localVar in outer script before function invoke", localVar);
// console.log("testingVar in outer script before function invoke", testingVar);

// Local variables can't be accessed outside the scope of the function
// console.log(value1, value2, value3);

// Logs an array of 3 values
console.log('Exact number of args', printVariables(1, 2, 3));

// Setting a default value for all args to 0 is logical to solve the undefined value issue
console.log('Less that required args', printVariables(1, 2));

// Will only log the first 3 values because they are taken as args in the function header
console.log('More than required args', printVariables(6, 7, 8, 4, 5));

// The variable declared with var is undefined after the function is invoked and destroyed
// console.log("localVar in outer script after function invoke", localVar);

// The variable that was declared without a keyword is still accessible after the function is invoked and destroyed
// console.log("testingVar in outer script after function invoke", testingVar);

//Get username from user, transforms it to uppercase then logs it in consol
// console.log(getInput().toUpperCase());

console.log(getInputv2());
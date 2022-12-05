// console.log(printVariables(2,3,4)); // This runs ok due to hoisting
// function printVariables(value1=0, value2=0, value3=0)
// {
//   return [value1, value2, value3];
// }

let localVar = 90;

// function printVariables(value1=0, value2=0, value3=0)
// {
//   // Won't affect the global variable because this local variable that has the same name is saved in another place in memory it also logs "undefined"

//   // If we remove the keyword var it logs 3 in both cases
//   console.log("Local var inside printVaribles() before declaring it as local variable",localVar);
//   var localVar=3;
//   console.log("Local var inside printVaribles() after declaring it as a local variable",localVar);
//   testingVar=5;
//   for (let i = 0; i < arguments.length; i++)
//   {
//     console.log("arg in index", i, "=" ,arguments[i]);
//   }

//   return arguments;
// }

const printVariables = function (value1 = 0, value2 = 0, value3 = 0) {
  // Won't affect the global variable because this local variable that has the same name is saved in another place in memory it also logs "undefined"

  // If we remove the keyword var it logs 3 in both cases
  console.log(
    'Local var inside printVaribles() before declaring it as local variable',
    localVar
  );
  var localVar = 3;
  console.log(
    'Local var inside printVaribles() after declaring it as a local variable',
    localVar
  );
  testingVar = 5;
  for (let i = 0; i < arguments.length; i++) {
    console.log('arg in index', i, '=', arguments[i]);
  }

  return arguments;
};

// const  printVariables = (value1=0, value2=0, value3=0) =>
// {
//   // Won't affect the global variable because this local variable that has the same name is saved in another place in memory it also logs "undefined"

//   // If we remove the keyword var it logs 3 in both cases
//   console.log("Local var inside printVaribles() before declaring it as local variable",localVar);
//   var localVar=3;
//   console.log("Local var inside printVaribles() after declaring it as a local variable",localVar);
//   testingVar=5;
//   for (let i = 0; i < arguments.length; i++)
//   {
//     console.log("arg in index", i, "=" ,arguments[i]);
//   }

//   return arguments;
// }

const isValidUsername = (username) => {
  let flag = true;

  // Checks if user pressed cancel
  if (username === null) {
    flag = false;
    return flag;
  }

  for (let i = 0; i < username.length; i++) {
    // Checks if username contains only letters
    if (
      !(username[i].charCodeAt() >= 65 && username[i].charCodeAt() <= 90) &&
      !(username[i].charCodeAt() >= 97 && username[i].charCodeAt() <= 122)
    ) {
      flag = false;
    }
  }
  return flag;
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const getInput = () => {
  let username = '';
  do {
    username = prompt('Enter username');
  } while (!isValidUsername(username));
  return username;
};

const getInputv2 = () => {
  let data = '';
  let current = 0;
  let flag = false;
  let students_number = 0;
  let classroom = [];
  let data_arr = [];

  do {
    students_number = prompt('Enter number of students');
  } while (students_number == null || students_number == 0);

  do {
      flag = false;
      data = prompt(`Enter user ${current} data`);
      if(data === null) break;
      data_arr = data.split(',');

      if (!isValidUsername(data_arr[0])) {
        alert('Enter a valid name for student ' + current);
        flag = true;
      }
      if (isNaN(Number(data_arr[1]))) {
        alert('Enter a valid id for student ' + current);
        flag = true;
      } else data_arr[1] = Number(data_arr[1]);
      if (!validateEmail(data_arr[2])) {
        alert('Enter a valid email for student ' + current);
        flag = true;
      }
      if (
        data_arr[3] == undefined ||
        (data_arr[3].toLowerCase() != 'os' &&
        data_arr[3].toLowerCase() != 'sd' &&
        data_arr[3].toLowerCase() != 'ai') 
      ) {
        alert('Enter a valid track');
        flag = true;
      }

      if (flag) continue;

      classroom.push(data_arr);
      console.table(classroom);
      current++;
  
  } while (current < students_number);

  console.table(classroom);
};

const { myConsoleLog } = require("./utils");


/*
          EXERCISE 1
 
The addNumber function should add both parameters and return the result

*/

const addNumber = (a, b) => {
  let result = a + b;
 return (result);
};

const addNumber2 = (a, b) => {
  return a + b
}

const addNumber3 = (a, b) => a + b

/*
          EXERCISE 2
 
The subtractFive function should subtract 5 to the passed parameter return the result

*/

const subtractFive = (a) => {
  return (a - 5);
};

const subtractFive2 = (a) => a - 5

/*
          EXERCISE 3

The addOneToEachElement has a number array as parameter. The function should
return a new array containing all the values increased by 1.
i.e:
          const result = addOneToEachElement([1, 2, 3])
          result should be equal to [2, 3, 4]

If the function is called with no parameter or an empty array, it should return an empty array

*/

//Aux function
const validateArray =  (parameter) =>  {

  let emptyArray =[];
  let x;
  // It returns 1 if  the parameter is an array and it is not empty.
  if (Array.isArray(parameter) && parameter.length >  0) {
   return (1);
  // It returns 0 if  the parameter is not an array or if is an array but  it is  empty.
  }else{
    return (0);
  } 

};

const validateArray2 =  (parameter) =>  {
  // It returns 1 if  the parameter is an array and it is not empty.
  if (Array.isArray(parameter) && parameter.length >  0) {
   return true;
  // It returns 0 if  the parameter is not an array or if is an array but  it is  empty.
  }else{
    return false;
  } 

};

const addOneToEachElement = (numbers) => {
  const validity = validateArray(numbers);

  // It returns the new added values in the array
  if (validity == 1) {

    for (const i = 0 ; i < numbers.length ; i++){
      const asa = numbers[i];
      const b  = asa +1;
      myConsoleLog(b)
    }
      
  }else{
    return (emptyArray =[]);
  }  
  
}

const addOneToEachElement2 = (numbers) => {
  // It returns the new added values in the array
  // if (validity === true)
  // if (validity)
  // if (validity === false)
  // if (!validity)
  if (validateArray(numbers)) {
    for (const i = 0 ; i < numbers.length ; i++){
      numbers[i] = numbers[i] + 1
    }
    return numbers
  } else {
    return [];
  }
}

/*
          EXERCISE 4

The displayArrayElementsInUpperCase function should log the uppercased version of the strings elements of the array
Instead of using the usual console.log for the loging, use myConsoleLog instead.
It works the same and allows me to test your function.
The usage is the same: myConsoleLog(string)

If the function is called with no parameter or an empty array, it should return an empty array

*/

const displayArrayElementsInUpperCase = (strings) => {
  validArray = validateArray(strings);
  // It logs the new added values in the array
  if (validArray  == 1) {
    for (let i = 0 ; i < strings.length ; i++){
      let stringValue;
      
      stringValue = String(strings[i]);
      strings[i]= stringValue.toUpperCase()
      myConsoleLog(strings[i]);
     
    }
  }else{
    return (emptyArray =[]);
  } 
   
}

const displayArrayElementsInUpperCase2 = (strings) => {
  myConsoleLog(strings.forEach(string => string.toUpperCase()));
}


/*
          EXERCISE 5

Same as the exercise as 3 but instead of using the Array.map function, complete the myMap function
for it to have the same behavior as the actual Array.map function.
Check the documentation to make sure all the requirements are met

The use of Array.map and all any other Array related function is PROHIBITED !!!

*/


const myMap = (numbers) => {
  for (let i = 0 ; i < numbers.length ; i++){
    numbers[i]= numbers[i] + 1;
    myConsoleLog(numbers[i]);
  }
};


const myMap2 = (numbers) => {
  const newArray = []
  for (let i = 0 ; i < numbers.length ; i++){
    newArray[i]= numbers[i] + 1;
  }
  return newArray
};

const forEach = (cb) => {
  for (const i = 0; i < array.length; i++) {
    cb(array[i])
  }
}

const printElement = (element) => {
  console.log(element)
}

myArray.forEach(printElement)

const map = (cb) => {
  // array
  const newArray = []
  for (const i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]))
  }
  return newArray
}

const incrementByOne = (element) => {
  return element + 1
}

const myArray = [34, 43, 54]


const newArray = myArray.map(incrementByOne)

// Call printElement function on every element of the array


const addOneToEachElementUsingMyMap = (numbers) => {
  return myMap(numbers);
};

/*
                  EXERCISE 6

Same as the exercise as 4 but instead of using the Array.forEach function, complete the myForEach function
for it to have the same behavior as the actual Array.forEach function.
Check the documentation to make sure all the requirements are met

The use of Array.forEach and all any other Array related function is PROHIBITED !!!

*/

const myForEach = (strings) => {
  validArray = validateArray(strings);
  let stringValue;
  // It logs the new added values in the array
  if (validArray  == 1) {
    for (let i = 0 ; i < strings.length ; i++){
      stringValue = String(strings[i]);
      strings[i]= stringValue.toUpperCase()
      myConsoleLog(strings[i]);
    }
   }else{
      return (emptyArray =[]);
    } 
};

const displayArrayElementsInUpperCaseUsingMyForEach = (strings) => {
  myForEach(strings);
};


/*
          EXERCISE 7

The bulletProodAddNumber function is the same as EXERCISE 1 but this time let's make sure the parameters are
of the expected type.

The new version of the function should:
1) Only accept numbers
2) If a parameter is not a number, omit it and return the other one
3) If both parameters are not numbers, return -1


*/

const bulletProodAddNumber = (a, b) => {
  switch (true){
      case (typeof a == 'number' && typeof b == 'number'):
          let result = a + b;
          myConsoleLog(result);
          return (result);
          break;
      case (typeof a == 'number' && typeof b != 'number'):
          myConsoleLog(a);
          return (a);
          break;
      case (typeof a != 'number' && typeof b == 'number'):
          myConsoleLog(b);
          return (b);
          break;       
      case (typeof a != 'number' && typeof b != 'number'):
          myConsoleLog(-1);
          return (-1);
          break;      
  }
    
};

const bulletProodAddNumber2 = (a, b) => {
  function isNumber(variable) {
    return typeof variable === 'number'
  }

  const isAANumber = isNumber(a)
  const isBANumber = isNumber(b)

  if (isAANumber && isBANumber) {
    return a + b
  } else if (isAANumber || isBANumber) {
    return isAANumber ? a : b
  }
  return -1    
};


/*
          EXERCISE 2

The subtractFive function is the same as EXERCISE 2 but this time let's make sure the parameters are
of the expected type.

The new version of the function should:
1) It should only accept numbers
2) if the parameter is not a number, return -1

*/

const bulletProofSubtractFive = (a) => {
  switch (true){
    case (typeof a == 'number'):
        let result = a - 5;
        myConsoleLog(result);
        return (result);
        break;
    case (typeof a != 'number'):
        myConsoleLog(a);
        return (-1);
        break;
    
}
};

module.exports = {
  addNumber,
  subtractFive,
  addOneToEachElement,
  displayArrayElementsInUpperCase,
  addOneToEachElementUsingMyMap,
  displayArrayElementsInUpperCaseUsingMyForEach,
  bulletProodAddNumber,
  bulletProofSubtractFive,
};



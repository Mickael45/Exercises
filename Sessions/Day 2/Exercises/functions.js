const { myConsoleLog } = require("./utils");
let validArray;

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

/*
          EXERCISE 1
 
The addNumber function should add both parameters and return the result

*/

const addNumber = (a, b) => {
  let result = a + b;
 return (result);
};


/*
          EXERCISE 2
 
The subtractFive function should subtract 5 to the passed parameter return the result

*/

const subtractFive = (a) => {
  return (a - 5);
};

/*
          EXERCISE 3

The addOneToEachElement has a number array as parameter. The function should
return a new array containing all the values increased by 1.
i.e:
          const result = addOneToEachElement([1, 2, 3])
          result should be equal to [2, 3, 4]

If the function is called with no parameter or an empty array, it should return an empty array

*/

const addOneToEachElement = (numbers) => {

  let validity;
  validity = validateArray(numbers);

  // It returns the new added values in the array
  if (validity  == 1) {

    for (let i = 0 ; i < numbers.length ; i++){
      let asa = numbers[i];
      let b  = asa +1;
      myConsoleLog(b);
     
    }
      
  }else{
    return (emptyArray =[]);
  }  
  
}


let nu  = [1,2,3]
addOneToEachElement(nu);

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

const addOneToEachElementUsingMyMap = (numbers) => {
  return myMap(numbers);
};

addOneToEachElementUsingMyMap(1,2);
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



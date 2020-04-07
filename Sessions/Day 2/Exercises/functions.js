const { myConsoleLog } = require("./utils");

/*
          EXERCISE 1
 
The addNumber function should add both parameters and return the result

*/

const addNumber = (a, b) => {
  // add your code here
};

/*
          EXERCISE 2
 
The subtractFive function should subtract 5 to the passed parameter return the result

*/

const subtractFive = (a) => {
  // add your code here
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
  // add your code here
  // HINT: Check the Array type related function on the internet
};

/*
          EXERCISE 4

The displayArrayElementsInUpperCase function should log the uppercased version of the strings elements of the array
Instead of using the usual console.log for the loging, use myConsoleLog instead.
It works the same and allows me to test your function.
The usage is the same: myConsoleLog(string)

If the function is called with no parameter or an empty array, it should return an empty array

*/

const displayArrayElementsInUpperCase = (strings) => {
  // add your code here
  // HINT: Check the Array type related function on the internet
};

/*
          EXERCISE 5

Same as the exercise as 3 but instead of using the Array.map function, complete the myMap function
for it to have the same behavior as the actual Array.map function.
Check the documentation to make sure all the requirements are met

The use of Array.map and all any other Array related function is PROHIBITED !!!

*/

const myMap = (numbers) => {
  // add your code here
};

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
  // add your code here
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
  // add your code here
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
  // add your code here
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
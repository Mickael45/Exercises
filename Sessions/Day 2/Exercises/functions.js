const { myConsoleLog } = require("./utils");

/*
          EXERCISE 1
 
The addNumber function should add both parameters and return the result

*/

const addNumber = (a, b) => {
  // add your code here
  return a+b;
};

console.log(addNumber(1,2));
/*
          EXERCISE 2
 
The subtractFive function should subtract 5 from the passed parameter and return the result

*/

const subtractFive = (a) => {
  // add your code here
return a-5;
};

subtractFive(10);


/*
          EXERCISE 3

The addOneToEachElement has a number array as parameter. The function should
return a new array containing all the values increased by 1.
i.e:
          const result = addOneToEachElement([1, 2, 3])
          result should be equal to [2, 3, 4]

If the function is called with no parameter or an empty array, it should return an empty array

*/
const addOneToEachElementTwo = (numbers) => {
  return numbers + 1  
  }
  const newArray = [1,2,3];
  newArray.map(addOneToEachElementTwo);

/*const addOneToEachElement = (numbers) => {
  // add your code here
  // HINT: Check the Array type related function on the internet {
    function myFunction(item, index, arr) {
      arr[index] = item + 1;
    }
    newArray.forEach(myFunction) 
};
let newArray= [1, 2, 3];  
addOneToEachElement();
console.log(newArray);

//or
const addOneToEachElementNew = (numbersNew) => {

  const array1 = [1, 2, 3];

// pass a function to map
const map1 = array1.map(x => x + 1);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
}
addOneToEachElementNew();
console.log();

//
const oldArray =[1, 2,3];
const addOneToEachElementTwo = (numbers, index, arr) => {
return numbers + 1  
}
const newArray = oldArray.map(addOneToEachElementTwo)
console.log(newArray)
;*/

//For each element in the array: update the value with 1 plus the original value

/*
          EXERCISE 4

The displayArrayElementsInUpperCase function should log the uppercased version of the strings elements of the array
Instead of using the usual console.log for the loging, use myConsoleLog instead.
It works the same and allows me to test your function.
The usage is the same: myConsoleLog(string)

If the function is called with no parameter or an empty array, it should return an empty array

*/

const displayArrayElementsInUpperCase = (item, index, array) => {
console.log(item.toUpperCase());
}
let myArray =['i', 'love', 'javascript'];
myArray.forEach(displayArrayElementsInUpperCase);

/*
          EXERCISE 5

Same as the exercise as 3 but instead of using the Array.map function, complete the myMap function
for it to have the same behavior as the actual Array.map function.
Check the documentation to make sure all the requirements are met

The use of Array.map and all any other Array related function is PROHIBITED !!!

*/

const myMap = (numbers) => {
  // add your code here
    // add your code here
    // HINT: Check the Array type related function on the internet {
      function myFunction(item, index, arr) {
        arr[index] = item + 1;
      }
      newArray.forEach(myFunction) 
  };
  let newArray= [1, 2, 3];  
  myMap();
  console.log(newArray);
  


const addOneToEachElementUsingMyMap = (numbers) => {
  return myMap(numbers);
};

addOneToEachElement();
console.log(newArray);

/*
                  EXERCISE 6

Same as the exercise as 4 but instead of using the Array.forEach function, complete the myForEach function
for it to have the same behavior as the actual Array.forEach function.
Check the documentation to make sure all the requirements are met

The use of Array.forEach and all any other Array related function is PROHIBITED !!!

*/

const myForEach = (strings) => {
  // add your code here
    let array1 = strings.split(' ');
    let newarray1 = [];
      
    for(let x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
  }
  console.log(myForEach("i love javascript"));


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
  // add yo  // add your code here
  
  if (Number(a) && (Number(b))) {
    return a + b;
  }
  else if  (!Number(a) && (Number(b)))
  {
    return b ;
  }
  else if  (Number(a) && (!Number(b)))
  {
    return a ;
}
  else return -1
}

console.log(bulletProodAddNumber("a", 2));



/*
          EXERCISE 8

The subtractFive function is the same as EXERCISE 2 but this time let's make sure the parameters are
of the expected type.

The new version of the function should:
1) It should only accept numbers
2) if the parameter is not a number, return -1

*/

const bulletProofSubtractFive = (a) => {
  // add your code here
  const subtractFive = (a) => {
    // add your code here
      if (!Number(a)) {
        return -1;
      }
      else return a-5
    }     
  
    console.log(bulletProofSubtractFive("test")); 
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

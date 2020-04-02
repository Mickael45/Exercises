///////////////////////////////////////////////////////// PART 1 /////////////////////////////////////////////////////////

function addNumbers(a, b) {
  return a + b;
}

const firstResult = addNumbers(1, 2);
console.log(firstResult, " is a ", typeof firstResult);
// Expected type:
const secondResult = addNumbers("1", 2);

console.log(secondResult, " is a ", typeof secondResult);
// Expected type:
const thirdResult = addNumbers("3", "2");

console.log(thirdResult, " is a ", typeof thirdResult);
// Expected type:

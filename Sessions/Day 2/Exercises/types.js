///////////////////////////////////////////////////////// PART 1 /////////////////////////////////////////////////////////

function addNumbers(a, b) {
  return a + b;
}

const firstResult = addNumbers('a', 'b');
console.log(firstResult, " is a ", typeof firstResult);
// Expected type: String because of the a & b in quotes
const secondResult = addNumbers("£1", 2);

console.log(secondResult, " is a ", typeof secondResult);
// Expected type: string
const thirdResult = addNumbers(3, 2);

console.log(thirdResult, " is a ", typeof thirdResult);
// Expected type:  integer


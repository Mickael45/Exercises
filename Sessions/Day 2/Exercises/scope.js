///////////////////////////////////////////////////////// PART 1 /////////////////////////////////////////////////////////

let count = 0;

function increaseCountByARandomValue() {
  const randomValue = Math.random();

  function makeSureValueIsNotHigherThanAHundred() {
    return randomValue > 100 ? 100 : randomValue;
  }

  const safeValue = makeSureValueIsNotHigherThanAHundred(randomValue);
  count += randomValue;
  // += is just a shorter way to write "count = count + randomValue"
  // This also works with -, /, * and %

}


function decreaseCountByARandomValue() {
  const randomValue = Math.random();

  function makeSureValueIsNotLowerThanZero() {
    return randomValue > 0 ? randomValue : 0;
  }

  const safeValue = makeSureValueIsNotLowerThanZero(randomValue);
  count -= randomValue;
 

}


increaseCountByARandomValue();
decreaseCountByARandomValue();


// is increaseCountByARandomValue accessible in the file's global scope ?
// RR : Yes, it can be  accessed anywhere
// is decreaseCountByARandomValue accessible in the file's global scope ?
// RR : Yes, it can be  accessed anywhere
// is makeSureValueIsNotHigherThanAHundred accessible in the file's global scope ?
// RR : No. Only in the scope of makeSureValueIsNotHigherThanAHundred
// is makeSureValueIsNotHigherThanAHundred accessible in the increaseCountByARandomValue function scope ?
// RR: Yes
// is makeSureValueIsNotHigherThanAHundred accessible in the decreaseCountByARandomValue function scope ?
//  RR: No
// is increaseCountByARandomValue accessible in the decreaseCountByARandomValue function scope ?
//RR :Yes
// is increaseCountByARandomValue accessible in the increaseCountByARandomValue function scope ?
//RR : No
// Where is the count variable accessible from ?
//RR : anywhere
// Where is decreaseCountByARandomValue's randomValue and safeValue accessible from ?
//RR  : safeValue  = decreaseCountByARandomValue and increaseCountByARandomValue
//randomValue = decreaseCountByARandomValue and increaseCountByARandomValue

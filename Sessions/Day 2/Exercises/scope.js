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
// is decreaseCountByARandomValue accessible in the file's global scope ?
// is makeSureValueIsNotHigherThanAHundred accessible in the file's global scope ?
// is makeSureValueIsNotHigherThanAHundred accessible in the increaseCountByARandomValue function scope ?
// is makeSureValueIsNotHigherThanAHundred accessible in the decreaseCountByARandomValue function scope ?
// is increaseCountByARandomValue accessible in the decreaseCountByARandomValue function scope ?
// is increaseCountByARandomValue accessible in the increaseCountByARandomValue function scope ?

// Where is the count variable accessible from ?
// Where is decreaseCountByARandomValue's randomValue and safeValue accessible from ?

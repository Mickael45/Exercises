///////////////////////////////////////////////////////// PART 1 /////////////////////////////////////////////////////////

let count = 0;

function increaseCountByARandomValue() {
  const randomValue = Math.random();

  function makeSureValueIsNotHigherThanAHundred() {
    return randomValue > 100 ? 100 : randomValue;
  }

  const safeValue = makeSureValueIsNotHigherThanAHundred(randomValue);
  count += safeValue;
  // += is just a shorter way to write "count = count + randomValue"
  // This also works with -, /, * and %

}

function decreaseCountByARandomValue() {
  const randomValue = Math.random();

  function makeSureValueIsNotLowerThanZero() {
    return randomValue > 0 ? randomValue : 0;
  }

  const safeValue = makeSureValueIsNotLowerThanZero(randomValue);
  count -= safeValue;
}

increaseCountByARandomValue();
decreaseCountByARandomValue();

// is increaseCountByARandomValue accessible in the file's global scope ? Yes
// is decreaseCountByARandomValue accessible in the file's global scope ? Yes
// is makeSureValueIsNotHigherThanAHundred accessible in the file's global scope ? No
// is makeSureValueIsNotHigherThanAHundred accessible in the increaseCountByARandomValue function scope ? Yes
// is makeSureValueIsNotHigherThanAHundred accessible in the decreaseCountByARandomValue function scope ? No
// is increaseCountByARandomValue accessible in the decreaseCountByARandomValue function scope ? no
// is increaseCountByARandomValue accessible in the increaseCountByARandomValue function scope ? yes

// Where is the count variable accessible from ? accessible from decreaseCountByARandomValue and makeSureValueIsNotHigherThanAHundred and increaseCountByARandomValue functions
// Where is decreaseCountByARandomValue's randomValue and safeValue accessible from ? accessible from makeSureValueIsNotLowerThanZero and makeSureValueIsNotLowerThanZero functions

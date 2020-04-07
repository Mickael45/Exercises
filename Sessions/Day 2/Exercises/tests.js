const functions = require("./functions");
const { getLogs, resetLogs, checkExercise } = require("./utils");

const runExerciseEight = () => {
  const { bulletProofSubtractFive } = functions;
  const results = [];

  results.push(bulletProofSubtractFive(12));
  results.push(bulletProofSubtractFive(44));
  results.push(bulletProofSubtractFive(-4));
  results.push(bulletProofSubtractFive(548));
  results.push(bulletProofSubtractFive(547806));
  results.push(bulletProofSubtractFive(121));
  results.push(bulletProofSubtractFive(""));
  results.push(bulletProofSubtractFive());
  results.push(bulletProofSubtractFive([]));
  checkExercise(results, 8);
};

const runExerciseSeven = () => {
  const { bulletProodAddNumber } = functions;
  const results = [];

  results.push(bulletProodAddNumber(1, 3));
  results.push(bulletProodAddNumber(-23, 3));
  results.push(bulletProodAddNumber(10, 12));
  results.push(bulletProodAddNumber(22, 22));
  results.push(bulletProodAddNumber(1, -0));
  results.push(bulletProodAddNumber(0, 0));
  results.push(bulletProodAddNumber(1, "fnrwjfheow"));
  results.push(bulletProodAddNumber({}, []));
  results.push(bulletProodAddNumber("d", 0));
  checkExercise(results, 7);
};

const runExerciseSix = () => {
  const { displayArrayElementsInUpperCaseUsingMyForEach } = functions;

  displayArrayElementsInUpperCaseUsingMyForEach(["i", "love", "pasta"]);
  displayArrayElementsInUpperCaseUsingMyForEach([
    "mickael",
    "is",
    "so",
    "sexy",
  ]);
  displayArrayElementsInUpperCaseUsingMyForEach([
    "i",
    "really",
    "should",
    "give",
    "him",
    "all",
    "the",
    "Nutella",
    "i",
    "promised",
    "him",
  ]);
  displayArrayElementsInUpperCaseUsingMyForEach([]);
  displayArrayElementsInUpperCaseUsingMyForEach();

  checkExercise(getLogs(), 6);
  resetLogs();
};

const runExerciseFive = () => {
  const { addOneToEachElementUsingMyMap } = functions;
  const results = [];

  results.push(addOneToEachElementUsingMyMap([1, 2, 3]));
  results.push(addOneToEachElementUsingMyMap([11, 32, 545]));
  results.push(
    addOneToEachElementUsingMyMap([4, 443, 432, 44, 445, 86, 654, 654222])
  );
  results.push(
    addOneToEachElementUsingMyMap([4, 443, 432, 44, 445, 86, 654, "lol"])
  );
  results.push(
    addOneToEachElementUsingMyMap([4, 443, 432, 44, 445, 86, null, 654222])
  );
  results.push(addOneToEachElementUsingMyMap([]));
  results.push(addOneToEachElementUsingMyMap());

  checkExercise(results, 5);
};

const runExerciseFour = () => {
  const { displayArrayElementsInUpperCase } = functions;

  console.log("\x1b[31m");

  displayArrayElementsInUpperCase(["i", "love", "pasta"]);
  displayArrayElementsInUpperCase(["mickael", "is", "so", "sexy"]);
  displayArrayElementsInUpperCase([
    "i",
    "really",
    "should",
    "give",
    "him",
    "all",
    "the",
    "Nutella",
    "i",
    "promised",
    "him",
  ]);
  displayArrayElementsInUpperCase([]);
  displayArrayElementsInUpperCase();

  checkExercise(getLogs(), 4);
  resetLogs();
};

const runExerciseThree = () => {
  const { addOneToEachElement } = functions;
  const results = [];

  results.push(addOneToEachElement([1, 2, 3]));
  results.push(addOneToEachElement([11, 32, 545]));
  results.push(addOneToEachElement([4, 443, 432, 44, 445, 86, 654, 654222]));
  results.push(addOneToEachElement([4, 443, 432, 44, 445, 86, 654, "lol"]));
  results.push(addOneToEachElement([4, 443, 432, 44, 445, 86, null, 654222]));
  results.push(addOneToEachElement([]));
  results.push(addOneToEachElement());

  checkExercise(results, 3);
};

const runExerciseTwo = () => {
  const { subtractFive } = functions;
  const results = [];

  results.push(subtractFive(12));
  results.push(subtractFive(44));
  results.push(subtractFive(-4));
  results.push(subtractFive(548));
  results.push(subtractFive(547806));
  results.push(subtractFive(121));
  checkExercise(results, 2);
};

const runExerciseOne = () => {
  const { addNumber } = functions;
  const results = [];

  results.push(addNumber(1, 3));
  results.push(addNumber(-23, 3));
  results.push(addNumber(10, 12));
  results.push(addNumber(22, 22));
  results.push(addNumber(1, -0));
  results.push(addNumber(0, 0));
  checkExercise(results, 1);
};

const runExercises = () => {
  try {
    runExerciseOne();
    runExerciseTwo();
    runExerciseThree();
    runExerciseFour();
    runExerciseFive();
    runExerciseSix();
    runExerciseSeven();
    runExerciseEight();
  } catch (e) {
    console.error(e);
  }
};

runExercises();

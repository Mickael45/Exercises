const areArrayValuesDifferent = (expectedResult, actualResult) => {
  if (!expectedResult.length) {
    return !Array.isArray(actualResult) || actualResult.length;
  }
  expectedResult.forEach((result, i) => {
    if (result !== actualResult[i]) {
      return true;
    }
  });
  return false;
};

const areResultsDifferent = (expectedResult, actualResult) => {
  if (!Array.isArray(expectedResult)) {
    return expectedResult !== actualResult;
  }

  return areArrayValuesDifferent(expectedResult, actualResult);
};

const checkExercise = (results, exerciseNumber) => {
  const expectedResults = exercisesExpectedResults[exerciseNumber - 1];

  results.forEach((result, i) => {
    if (areResultsDifferent(expectedResults[i], result)) {
      console.log("\x1b[31m");
      let formattedExpectedResult = expectedResults[i];
      if (Array.isArray(expectedResults[i]) && !expectedResults[i].length) {
        formattedExpectedResult = "[]";
      }
      throw new Error(
        `EXERCISE ${exerciseNumber}: KO\nExpected result: ${formattedExpectedResult}\nActual result: ${result}`
      );
    }
  });
  console.log("\x1b[32m", `EXERCISE ${exerciseNumber}: OK`);
};

const exercisesExpectedResults = [
  [4, -20, 22, 44, 1, 0],
  [7, 39, -9, 543, 547801, 116],
  [
    [2, 3, 4],
    [12, 33, 546],
    [5, 444, 433, 45, 446, 87, 655, 654223],
    [5, 444, 433, 45, 446, 87, 655],
    [5, 444, 433, 45, 446, 87, 654223],
    [],
    [],
  ],
  [
    "I",
    "LOVE",
    "PASTA",
    "MICKAEL",
    "IS",
    "SO",
    "SEXY",
    "I",
    "REALLY",
    "SHOULD",
    "GIVE",
    "HIM",
    "ALL",
    "THE",
    "NUTELLA",
    "I",
    "PROMISED",
    "HIM",
    ,
  ],
  [
    [2, 3, 4],
    [12, 33, 546],
    [5, 444, 433, 45, 446, 87, 655, 654223],
    [5, 444, 433, 45, 446, 87, 655],
    [5, 444, 433, 45, 446, 87, 654223],
    [],
    [],
  ],
  [
    "I",
    "LOVE",
    "PASTA",
    "MICKAEL",
    "IS",
    "SO",
    "SEXY",
    "I",
    "REALLY",
    "SHOULD",
    "GIVE",
    "HIM",
    "ALL",
    "THE",
    "NUTELLA",
    "I",
    "PROMISED",
    "HIM",
    ,
  ],
  [4, -20, 22, 44, 1, 0, 1, -1, 0],
  [7, 39, -9, 543, 547801, 116, -1, -1, -1],
];

let savedLogs = [];

const myConsoleLog = (result) => {
  console.log("\x1b[0m", result);
  savedLogs.push(result);
};

const resetLogs = () => {
  savedLogs = [];
};

const getLogs = () => {
  return savedLogs;
};

module.exports = { myConsoleLog, getLogs, resetLogs, checkExercise };

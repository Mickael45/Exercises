///////////////////////////////////////////////////////// PART 1 /////////////////////////////////////////////////////////

// This can look scary but keep in mind that this notation is equivalent to
// function writeMyNameProperly() for now
const writeMyNameProperly = name => {
  // This function should return a one word string with the first letter in uppercase and the rest in lowercase
};

const nameProperlyWritten = writeMyNameProperly("MiCkAeL");

console.log(nameProperlyWritten);
// Expected output result: "Mickael"
console.log(writeMyNameProperly("MiCkAeL and a bunch of crap"));
// Expected output result: "Mickael"

const writeMyNameInUpperCase = () => {};

console.log(writeMyNameInUpperCase(nameProperlyWritten));
// Expected output result: "MICKAEL"

///////////////////////////////////////////////////////// PART 2 /////////////////////////////////////////////////////////

const logMyHobbiesOneByOne = hobbies => {
  // This function should console.log each hobby one by one
};

const hobbies = ["Sleeping", "Eating", "Annoying whamen", "Eating some more"];

logMyHobbiesOneByOne(hobbies);
// Expected output result:
// "Sleeping"
// "Eating"
// "Annoying whamen"
// "Eating some more"

const addPlayingGamesInMyHobbies = () => {};

addPlayingGamesInMyHobbies();
console.log(hobbies);
// Expected output result:
// "Sleeping"
// "Eating"
// "Annoying whamen"
// "Eating some more"
// "Playing Games"

const removePlayingGamesInMyHobbies = () => {};

removePlayingGamesInMyHobbies();
console.log(hobbies);
// Expected output result:
// "Sleeping"
// "Eating"
// "Annoying whamen"
// "Eating some more"

  
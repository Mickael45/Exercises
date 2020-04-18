///////////////////////////////////////////////////////// PART 1 /////////////////////////////////////////////////////////

// This can look scary but keep in mind that this notation is equivalent to
// function writeMyNameProperly() for now


const writeMyNameProperly = name => {
   // This function should return a one word string with the first letter in uppercase and the rest in lowercase
return name;
 
};

console.log(name);


const nameProperlyWritten = writeMyNameProperly("MiCkAeL");

console.log(nameProperlyWritten);
// Expected output result: "Mickael"
console.log(writeMyNameProperly("MiCkAeL and a bunch of crap"));
// Expected output result: "Mickael"

const writeMyNameInUpperCase = (nameProperlyWritten) => {};
writeMyNameInUpperCase();

console.log(writeMyNameInUpperCase(nameProperlyWritten));
// Expected output result: "MICKAEL"

///////////////////////////////////////////////////////// PART 2 /////////////////////////////////////////////////////////

const logMyHobbiesOneByOne = hobbies => {
  // This function should console.log each hobby one by one
};

const hobbies = ["Sleeping", "Eating", "Annoying whamen", "Eating some more"];
//let oneByOne = [hobbies[0],hobbies[1],hobbies[2],hobbies[3] ];
logMyHobbiesOneByOne(hobbies);
console.log(hobbies);


// Expected output result:
// "Sleeping"
// "Eating"
// "Annoying whamen"
// "Eating some more"

const addPlayingGamesInMyHobbies = () => {
  hobbies.push("Playing games")
};


addPlayingGamesInMyHobbies();
console.log(hobbies);
// Expected output result:
// "Sleeping"
// "Eating"
// "Annoying whamen"
// "Eating some more"
// "Playing Games"

const removePlayingGamesInMyHobbies = () => {
  hobbies.pop();
};

removePlayingGamesInMyHobbies();
Console.log(hobbies);
// Expected output result:
// "Sleeping"
// "Eating"
// "Annoying whamen"
// "Eating some more"

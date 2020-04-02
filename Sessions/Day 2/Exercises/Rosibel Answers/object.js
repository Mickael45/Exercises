///////////////////////////////////////////////////////// PART 1 /////////////////////////////////////////////////////////

// This can look scary but keep in mind that this notation is equivalent to
// function writeMyNameProperly() for now

const writeMyNameProperly = name => {
  // This function should return a one word string with the first letter in uppercase and the rest in lowercase
  //name.toLoweCase();
  
  let calLength = (name.length)-1;
  name = (name.charAt(0).toUpperCase() + name.substring(name.length-calLength));
   return name;
};

const nameProperlyWritten = writeMyNameProperly("MiCkAeL");

//const nameProperlyWritten = writeMyNameProperly("MiCkAeL");
console.log(nameProperlyWritten);
// Expected output result: "Mickael"

console.log(writeMyNameProperly("MiCkAeL and a bunch of crap"));

// Expected output result: "Mickael"

const writeMyNameInUpperCase = name => {
return ame = name.toUpperCase();
};

console.log(writeMyNameInUpperCase(nameProperlyWritten));
// Expected output result: "MICKAEL"

///////////////////////////////////////////////////////// PART 2 /////////////////////////////////////////////////////////

const logMyHobbiesOneByOne = hobbies => {
  for (var i in hobbies) {
    console.log(hobbies[i]);
  }
};

const hobbies = ["Sleeping", "Eating", "Annoying whamen", "Eating some more"];

logMyHobbiesOneByOne(hobbies);
// Expected output result:
// "Sleeping"
// "Eating"
// "Annoying whamen"
// "Eating some more"

const addPlayingGamesInMyHobbies = ()  => {
  const otherHobbies = ["Playing Games"];
  logMyHobbiesOneByOne(hobbies);
  logMyHobbiesOneByOne(otherHobbies);
 

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
  logMyHobbiesOneByOne(hobbies);
};

removePlayingGamesInMyHobbies();
console.log(hobbies);
// Expected output result:
// "Sleeping"
// "Eating"
// "Annoying whamen"
// "Eating some more"

  
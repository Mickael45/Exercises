///////////////////////////////////////////////////////// PART 1 /////////////////////////////////////////////////////////

function logMyName() {
  let name = "Dwayne The Rock Johnson";

  name = "Mickael";
  console.log("\NAME:\"",name)
  
}

function logMyFavoriteDish() {
  const favoriteDish = "Nutella Pancakes";

  /*favoriteDish = "It won't change";*/
  console.log("Favorite Dish: ", favoriteDish);
}

logMyName();
// Expected console output: "NAME: Mickael"
logMyFavoriteDish();
// Expected console output: "Favorite Dish: Nutella Pancakes"

///////////////////////////////////////////////////////// PART 2 /////////////////////////////////////////////////////////

/* 
                                                      INTRODUCTION:

This was pretty easy so far, now let's look at some black magic

*/

function logMyHobbies() {
  const hobbies = ["Sleeping", "Eating", "Annoying whamen", "Eating some more"];

  hobbies[1] = "Working";
  hobbies[0]="dancing";
  // This means I'm accessing the second element (arrays indexes start at 0) and assigning it the value "Working"
  console.log(hobbies);
}

function logMyWardrobeItemsNumber() {
  const wardrobeItems = {
    underwear: 1,
    pants: 0,
    socks: 2000
  };
Object.freeze(wardrobeItems)
  wardrobeItems.pants = 2;

  // This means I'm accessing the pants key of the wardrobeItems object and assigning it the value 2
  console.log(wardrobeItems);
}

logMyHobbies();
// Expected console output: ["Sleeping", "Working", "Annoying whamen", "Eating some more"]
logMyWardrobeItemsNumber();
// Expected console output: { underwear: 1, pants: 2, socks: 2000 }

/*   The two following functions behave properly but why ? The hobbie and wardrobeItems variable were defined as const, they should be unpdatable. 
   Try to find why and answer below. */





   
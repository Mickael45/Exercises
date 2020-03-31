// ######################################################  Variables ###################################################### //

let iCanBeChanged = "changeable";
// This variable can be updated
// Example: iCanBeChanged = "new value"; => OK

const iAmConstant = "constant";
// This variable CAN'T be updated
// Example: iAmConstant = "new value"; => KO

// ######################################################  Types ###################################################### //

/* 
                                                      INTRODUCTION:

Js variables have no type. So you can create a variable, assign a number to it and then assign a string to it a few lines later
this is valid and part of the language in itself. The issue with that is that it is super prone to issues in big apps since we have no
way to keep track of the variable type from beginning to end properly. That's why tools like TypeScript and Flow.js were created.

*/

function log(result) {
  console.log(result);
}

function addNumbers(a, b) {
  log(a + b);
}

addNumbers(4, 5); // This is valid JS
addNumbers("3", 4); // This is valid JS
addNumbers({ type: "lol" }, []); // This is valid JS

// In those 3 cases nothing will happen if you're not using any tooling. It would work even in the react project at building time. No issue here
// The problem lies in the logic, I created a addNumbers function to add numbers, nothing more.
// Even though this will work and not crash (which is even worse !!!) this is not what we wanted the function to be used in the first place.

// ######################################################  In JS Everything is an object ###################################################### //

/* 
                                                      INTRODUCTION:

When assigning a value to a variable, the variable become a string/number/obj/array/function depending on what you assign it with. So for example
Check line 51 and 52 for an example.
By doing so, it becomes an object that allows you to access many utility functions for each type

*/

let text = "I am a string"; // This is a String
let number = 0; // This is a Number

// Here's an example of what lies in the String type
// It's basically an object containing functions and variables
// Check this link for a full overview of what this object contains https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

const String = {
  toLowerCase: () => {},
  length: 33
};

// ######################################################  SCOPE ###################################################### //

/* 
                                                      INTRODUCTION:

A scope is just a block of code delimited by brackets.
Here you have the file scope and its children.
Just one rule to keep in mind here, variables are naturally accessible from the current AND children scopes no matter how deep the scope tree goes.

*/

const global = "I am a global";
{
  // Scope of the file
  const variable = "lol";
  // secondVariable => available ? No

  function bFunction() {
    const secondVariable = "test";
    // secondVariable => available ? Yes
    function secondFunction() {
      // secondVariable => available ? Yes
    }
  }
  bFunction();
}

function aFunction() {
  console.log(global);
  // working
  function secondFunction() {
    const variable = "variable";
    console.log(global);
    // working
  }
  console.log(variable);
  // not working
}

console.log(variable);
// not working

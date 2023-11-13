// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// .includes is a built-in Method that is tesing on the string value the phrase Hello World, having Hello within the string. 
//Because "Hello" is in the string this produces the return value of "true"

"Hello World".endsWith("Hello");

//.endsWith is a built-in method that is testing the string value for "Hello World", and whether it ends with the string "Hello"
//Because the string does not end with "Hello", the Return value is "False"


"Hello World".endsWith("rld");

//.endsWith is a built-in method that is testing the string value for "Hello World" for the last three letters of "World". 
//Though this is not the whole word, the build-in still can preform the function and produces a return value of "true"


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// In this example, the return value replaces the the string "sloth" with "panda".
// The console.log prints out "panda is my favorite".

var animalFavorite = "sloth is my favorite!";

console.log(animalFavorite.replace("sloth", "panda");


// In this example, the return value changes the case of the string to uppercase.
// The console.log prints out "HANGMAN"

var songFavorite = "Hangman"

console.log(songFavorite.toUpperCase);


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// In this Example the variable of songs was defined to an array of various songs. These songs were in no particular order. 
// The method called for the array to be sorted from last to first.
// The console.log printed the songs 'Bitter', 'Mine', 'Sugar', 'Rain', 'Hangman'

var songs = ['Hangman', 'Rain', 'Sugar', 'Mine', 'Bitter'];
songs.sort();
console.log(songs);



//In this example, the variable of cups was defined to an array of various cup brands.
// the method called to see if the cup brand 'Meoky' was present in the array.
// The console.log printed out the return value of true verifying that the brand 'Meoky' was present in the array.
var cups= ['Stanley', 'Yeti', 'Mossyoak', 'Meoky', 'Rtic']

console.log(cups.includes('Meoky'));

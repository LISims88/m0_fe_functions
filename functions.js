// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greet() {
    return "Hi! How are you today";
}
console.log(greet('Hi'))

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function greet(name) {
    return `Hi ${name}! How are you today? `;
  }
  
  console.log(greet("Karen"));
  

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetperson(name1, name2, name3) {
    return `Hi ${name1} ${name2} ${name3} How are you today?`;
  }  
    
  console.log(greetperson("Karen", "Joyce", "Sims"));


// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num) {
    var total =  num * num;
    console.log(total)
  }
  square(9)

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock(num, item) {
    if (num === 0) {
        return `${item} - OUT of Stock`;
    } else if (num > 3) {
        return `${item} is stocked`;
    } else {
        return `${item}- running low`;
    }
  }
  console.log(checkStock());
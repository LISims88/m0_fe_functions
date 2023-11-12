// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
//function askForName() { console.log("Hello, what is your name?") }
 
function askForName() {
return "Hello, what is your name?"
};

console.log(askForName("Hi"));

// For this example I corrected the code so that it follows the syntax of function coding. 
// I also fixed for the void by putting a string placeholder of "Hi".


// EX 2:
//function addThreeNums(first, second, third) {
//var sum = first + second + third
//return sum;
//      }

//addThreeNums(1, 2, 3);
//addThreeNums(4, 2, 7);

function addThreeNums(num1,num2,num3){
  var sum = num1 + num2 + num3;
  return sum;
}
console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// For this expample i corrected the format for the console code. 
//By adding the addThreeNums to console.log this allowed the code to complete it's task. 


// EX 3:
//func makeFreshPesto(){
  //console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  //console.log("Pulse basil and pine nuts");
  //console.log("Add garlic and cheeses");
  //console.log("Slowly pour in oil");
  //console.log("Season");    }

//makeFreshPesto();

function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();

// Corrected the func variable to function by doing so this allowed JavaScript to run the code as func wasn't a known variable and caused errors.

//  EX 4:
//function average(num1, num2) 
  //{
//var sum = num1 + num2;
    //var avg = sum / 2;

//return avg
 // }

 function average(num1, num2) 
 {
var sum = num1 + num2;
   var avg = sum / 2;

return avg
 }

console.log(average(10, 20));

// For this example, I gave the code a command so that it could produce a return value, to ensure that the code works.
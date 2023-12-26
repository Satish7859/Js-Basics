/*Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.*/

var input = prompt("Guess a Number");
output = 25;

while(input != output){
    input = prompt("You Entered a Wrong number, Please Enter a Different Number.")
}

alert("Congrats !! you guessed the proper number");

// To print all the Even Numbers from 0 to 100

for(let i =0;i<=1000;i++){
    if(i%2==0){
        console.log(i)
    }
    }
    
// Js code to Generate username by appending the Necessary Suffixes & Prefixes.
let name = prompt("Enter Your Name for Generating Username of Your Profile");
let username = `$${name}${name.length} `;
alert(`Your Username for the profile is ${username}`);

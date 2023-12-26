var a = prompt("Enter a Number:");
if(a%2==0){
    console.log("Number Entered is Even");
}
else{
    console.log("The Number Entered is Odd");
}


var marks = parseInt(prompt("Enter Your Marks:"));

var Grade;

if (marks <= 100 && marks > 80) {
    Grade = "A";
}
else if (marks <= 80 && marks > 60) {
    Grade = "B";
}
else if (marks <= 60 && marks > 50) {
    Grade = "C";
}
else if (marks <= 50 && marks > 40) {
    Grade = "D";
}
else {
    Grade = "F";
}

console.log("The Grade According to your marks is:", Grade);

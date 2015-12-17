// function addNums(){
//    var num1 = document.getElementById('num1').value;   
//    var num2 = document.getElementById('num2').value;   
//    document.getElementById('result').innerHTML = (parseInt(num1) + parseInt(num2)); 
// }














// Variables

var x = 4
var y = 5
console.log(4 + 5);

var price1 = 5;
var price2 = 6;
var total = price1 + price2;

// ways of declaring variables
var person = "John Doe", carName = "Volvo", price = 200;
var person = "John Doe",
carName = "Volvo",
price = 200;


// Alerts
alert("I'm an alert box!");

var peanuts = ["Snoopy", "Charlie Brown"];
var muppets = ["Kermit", "Big Bird"];
alert(peanuts + "," + muppets);






//Output
Writing into an alert box, using window.alert().
Writing into the HTML output using document.write().
Writing into an HTML element, using innerHTML.
Writing into the browser console, using console.log().
// console output example
var user = {firstName: 'Matthew', lastName: 'Novick', birthday: '11/15/91', interests: 'scuba'};
console.log(user.firstName, user.lastName, user.birthday, user.interests);





// Different data types
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var cars = ["Saab", "Volvo", "BMW"];           // Array
var x = {firstName:"John", lastName:"Doe"};    // Object
// Boolean
var x = true;
var y = false;
// Arrays - JavaScript arrays are written with square brackets.
var cars = ["Saab", "Volvo", "BMW"];

// Array storing other arrays - declare the first array 
var toyotas = ["Camry", "Prius"]; 
// declare the second array 
var porsches = ["Camero", "Boxer"]; 
// declare a third array that contains the first // and second array 
var cars = [toyotas, porsches];

// Objects - JavaScript objects are written with curly braces.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// Objects Dot Notation -- Create an array with strings for keys 
var user = {firstName: 'Lucille', lastName: 'Bluth'};
// Pull out data using dot notation 
console.log(user.firstName);



// Testing
// Tests returns Boolean true or false
// Using three equals signs instead of two also checks the object type
"stringone" === "string two";
>false
// To test if two strings are NOT equal:
"stringone" !== "string two"; >true
 // To test if one number is greater than another:
5 > 10; > false
// The if statement allows us to run code only if a certain test
// evaluates to true
if(5>10){  
console.log("You'll never see this in the console because 5 is not greater than 10");
}
if(5<10){  
console.log("But you'll definitely see this");
}
// The else statement runs only if the statement in the ifstatement is false
if(5>10){  
console.log("You'll never see this because 5 is not greater than 10");
} else{  
console.log("You will see this though, since 5 < 10 evaluates to false");
}

// Logic
// Operators
==        equals to                                 x==8
===      equal value and equal type        x===5
!=         not equal                                  x ! = 8
!==       not equal value or type              x! == 8
><        greater than, less than
>= <=   greather than or equal/less
&&        and                                           (x < 10 && y > 1) is true
||       or                                   (x == 5 || y == 5) is false
!        not                                 !(x == y) is true

var user = {firstName: 'Matthew', lastName: 'Novick', birthday: '11/15/91', interests: 'scuba'};
console.log(user.firstName, user.lastName, user.birthday, user.interests);




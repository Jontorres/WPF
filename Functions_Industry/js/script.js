//Jonathan Torres
//May 1, 2014
//Functions Industry

/*This code will tell you how much you made per month depending on the amount of 
hours you worked in four weeks.
*/

// this alert will start off the code
alert("Hi welcome to your new job. You will be getting paid 10 dollars per hour and will recieve a paycheck every two weeks, goodluck!");

//this will be the function that will be used
var payCheck = function(hours){
// now will add a variable that will * the hours you work with your wage 10 
	var wage = hours * 10; 
//now will add an alert that will tell you how much you made each pay check 
	alert("You earned $"+ wage+ ".00" +" this paycheck.");
//now will add a console.log that will print out the result
	console.log("You earned $"+ wage+ ".00" +" this paycheck.");
}

// this is th first prompt
var payCheckOne = prompt("How many hours have you worked for the first two weeks?");
//and the first calling of the function
payCheck(payCheckOne);
// second prompt 
var payCheckTwo = prompt("How many hours have you worked for the second two weeks?");
// and second calling 
payCheck(payCheckTwo);
/* variable for the total, the * 2 at the end would have to change depending on what
the wage hours are times by (example: wage = hours * 20, the total would now have to 
be times by 4 instead of 2).
*/
var total = payCheckOne * payCheckTwo * 2;
// alert that lets the user know their total earned in a month
alert("This month you have earned a total of $"+ total+ ".00" +" congratulations!");
//console.log that prints out the total earned
console.log("This month you have earned a total of $"+ total+ ".00" +" congratulations!");

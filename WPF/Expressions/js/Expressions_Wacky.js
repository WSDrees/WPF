/**
 * Created by Steve Drees on 1/15/14 Assignment: Expressions_Wacky.
 */

//Find the remainder
var firstNumber = parseFloat(prompt("Enter a number: "));
var secondNumber = parseFloat(prompt("Enter a second number: "));
var dividedBy = parseInt(firstNumber / secondNumber);
var remainder = firstNumber % secondNumber;

console.log("Your first number " + firstNumber + " divided by " +secondNumber + " is " + dividedBy +
            " and has a remainder of " + parseFloat(remainder));


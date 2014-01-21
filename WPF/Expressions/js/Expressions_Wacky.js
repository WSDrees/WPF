/**
 * Created by Steve Drees on 1/15/14 Assignment: Expressions_Wacky.
 */

//Find the remainder
var firstNumber = parseFloat(prompt("Enter a number: "));                           // User inputs first number
var secondNumber = parseFloat(prompt("Enter a second number: "));                   // User inputs second number
var dividedBy = parseInt(firstNumber / secondNumber);                               // First number divided by the second
var remainder = parseInt(firstNumber % secondNumber);                               // Provides the remainder of the two numbers provided by the user


//Output
//Your first number X divided by X is X and has a remainder of X.
console.log("Your first number " + firstNumber + " divided by " +secondNumber + " is " + dividedBy +
            " and has a remainder of " + remainder + ".");


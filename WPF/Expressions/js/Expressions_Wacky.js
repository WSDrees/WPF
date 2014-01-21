/**
 * Created by Steve Drees on 1/15/14 Assignment: Expressions_Wacky.
 */

//Find the remainder
var firstNumber = parseFloat(prompt("Enter a number: "));                           // User inputs first number
var secondNumber = parseFloat(prompt("Enter a second number: "));                   // User inputs second number
var dividedBy = parseInt(firstNumber / secondNumber);                               // First number divided by the second
var remainder = parseInt(firstNumber % secondNumber);                               // Provides the remainder of the two numbers provided by the user
var sentenceA = "Your first number ";                                               // Sentence structureA
var sentenceB = " divided by ";                                                     // Sentence structureB
var sentenceC = " equals ";                                                         // Sentence structureC
var sentenceD = " and has a remainder of ";                                         // Sentence structureD
var sentenceE = ".";                                                                // Sentence structureE

//Output
//Your first number X divided by X is X and has a remainder of X.
console.log(sentenceA + firstNumber + sentenceB +secondNumber + sentenceC + dividedBy + sentenceD + remainder + sentenceE);
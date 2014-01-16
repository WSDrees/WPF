/**
 * Created by Steve Drees on 1/15/14.
 */

//Time Management
//Given how many months, weeks, days, hours, minutes, and seconds in a year.
//Information from https://support.google.com/websearch/answer/3284611?hl=en#unitconverter

var totalMonths = 12;
var totalWeeks = 52.1775;
var totalDays = 365.242;
var totalHours = 8765.81;
var totalMinutes = 525949;
var totalSeconds = 31558152.96;

//User Input
var workHours = parseInt(prompt("How many hours a week do you spend at work?"));
var workTravel = parseInt(prompt("How many hours a week do you spend traveling to and from work"));
var sleepTime = parseInt(prompt("How many hours a night do you sleep?"));
var internetTime = parseInt(prompt("How many hours a day do you spend on the internet?"));
var phoneTime = parseInt(prompt("How many hours a day do you spend on your phone?"));

//Mathematical operations


//Output
//In a year your spend X months, X Weeks, X Days, X Hours, X Minutes, and X Seconds at work.
console.log("In a year you spend" + + " months, " + + " weeks, " + + " days, " + + " hours "
             + + " minutes, " + + " and " + + " seconds at work.");


//In a year your spend X months, X Weeks, X Days, X Hours, X Minutes, and X Seconds traveling to work.
console.log("In a year you spend" + + " months, " + + " weeks, " + + " days, " + + " hours "
    + + " minutes, " + + " and " + + " traveling to work.");

//In a year your spend X months, X Weeks, X Days, X Hours, X Minutes, and X Seconds sleeping.
console.log("In a year you spend" + + " months, " + + " weeks, " + + " days, " + + " hours "
    + + " minutes, " + + " and " + + " sleeping.");

//In a year your spend X months, X Weeks, X Days, X Hours, X Minutes, and X Seconds on the internet.
console.log("In a year you spend" + + " months, " + + " weeks, " + + " days, " + + " hours "
    + + " minutes, " + + " and " + + " on the internet.");

//In a year your spend X months, X Weeks, X Days, X Hours, X Minutes, and X Seconds on your phone.
console.log("In a year you spend" + + " months, " + + " weeks, " + + " days, " + + " hours "
    + + " minutes, " + + " and " + + " on your phone.");
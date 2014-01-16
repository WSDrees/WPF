/**
 * Created by Steve Drees on 1/15/14.
 */

//Time Converter
//Given how many weeks, days, hours, minutes, and seconds in a year.
//Information from https://support.google.com/websearch/answer/3284611?hl=en#unitconverter
//User Input
var workHours = parseFloat(prompt("How many hours a day do you spend at work?"));
var workTravel = parseFloat(prompt("How many hours a day do you spend traveling to and from work"));
var sleepTime = parseFloat(prompt("How many hours a day do you sleep?"));
var internetTime = parseFloat(prompt("How many hours a day do you spend on the internet?"));
var phoneTime = parseFloat(prompt("How many hours a day do you spend on your phone?"));


//var week = 1;
//var day = 7;
//var hours = 24;
//var minutes = 1400;
//var seconds = 86400;

//Doing the Math
//7 days in a week (5 working days), 24 hours in 1 day, 60 minutes in an hour, 60 seconds in a minute
var totalWorkHours = parseFloat(workHours*5); //Only 5 work days
var totalTravelHours = parseFloat(workTravel*5); //Only 5 work days
var totalSleepHours = parseFloat(sleepTime*7);  //7 days in a week
var totalInternetTime = parseFloat(internetTime*7); //7 days in a week
var totalPhoneTime = parseFloat(phoneTime*7);   //7 days in a week

//Convert hours to weeks

//Every 168 hours equals 1 week
//Convert hours to days
//Every 24 hours equals 1 day
//Convert hours to minutes
//Every 1 hour equals 60 minutes
//Convert hours to seconds
// Every 1 hour equals 3600 seconds

//Output
//In a year your spend X Weeks, X Days, X Hours, X Minutes, and X Seconds at work.
console.log("In a year you spend" + + " weeks, " + + " days, " + + " hours "
            + + " minutes, " + + " and " + + " seconds at work.");


//In a year your spend X months, X Weeks, X Days, X Hours, X Minutes, and X Seconds traveling to work.
console.log("In a year you spend" + + " weeks, " + + " days, " + + " hours "
             + + " minutes, " + + " and " + + " traveling to work.");

//In a year your spend X months, X Weeks, X Days, X Hours, X Minutes, and X Seconds sleeping.
console.log("In a year you spend" + + " weeks, " + + " days, " + + " hours "
            + + " minutes, " + + " and " + + " sleeping.");

//In a year your spend X months, X Weeks, X Days, X Hours, X Minutes, and X Seconds on the internet.
console.log("In a year you spend"  + + " weeks, " + + " days, " + + " hours "
            + + " minutes, " + + " and " + + " on the internet.");

//In a year your spend X months, X Weeks, X Days, X Hours, X Minutes, and X Seconds on your phone.
console.log("In a year you spend" + + " weeks, " + + " days, " + + " hours "
            + + " minutes, " + + " and " + + " on your phone.");
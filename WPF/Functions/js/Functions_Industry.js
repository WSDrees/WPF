/**
 * Created by Steve Drees on 1/27/14, Assignment: Functions_Industry.
 */

function totalMiles(){
    //User input miles
    var mpg1 = parseFloat(prompt("How many miles did you get on your first tank of gas?"));
    //User input miles
    var mpg2 = parseFloat(prompt("How many miles did you get on your second tank of gas?"));
    //User input miles
    var mpg3 = parseFloat(prompt("How many miles did you get on your third tank of gas?"));
    //User input miles
    var mpg4 = parseFloat(prompt("How many miles did you get on your fourth tank of gas?"));
    //User input miles
    var mpg5 = parseFloat(prompt("How many miles did you get on your fifth tank of gas?"));


    console.log("You average " +(mpg1+mpg2+mpg3+mpg4+mpg5)/5+ " mpg.");
}

totalMiles();
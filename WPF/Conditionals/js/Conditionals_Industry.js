/**
 * Created by Steve Drees on 1/15/14 Assignment: Conditionals_Industry.
 */

//Unit Converter Miles to Kilometers OR Kilometers to miles
var unitOfMeasurement = prompt("How are you measuring you distance? (k = kilometers, m = miles)").toLowerCase();        //User inputs either kilometers or miles
var distance = parseFloat(prompt("How far will you be traveling?")).toFixed(2);                                         //User inputs distance

if(unitOfMeasurement == "k")                                                                                            //User inputted kilometers as unit of measurement
{
    //Output
    //You will be traveling X kilometers, or X miles.
    console.log("You will be traveling " +distance+ " kilometers, or " +(distance*1.609344).toFixed(2)+ " miles.");     //Convert kilometers to miles: 1 mile = 1.609344 kilometers
}else if(unitOfMeasurement == "m")                                                                                      //User inputted miles as unit of measurement
{
    //Output
    //You will be traveling X miles, or X kilometers.
    console.log("You will be traveling " +distance+ " miles, or " +(distance/0.6214).toFixed(2)+ " kilometers.");       //Convert miles to kilometers: 1 kilometer = 1 mile/0.62137
}else{
    console.log("You have entered and invalid unit of measurement.");                                                   //Error message if user didn't input correct unit of measurement
}
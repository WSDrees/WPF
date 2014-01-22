/**
 * Created by Steve Drees on 1/15/14, Activity: Celsius_to_Fahrenheit.
 */

//Convert Fahrenheit to Celsius
//User input - Temperature in Fahrenheit

var scale = prompt("Fahrenheit OR Celsius? (F = Fahrenheit, C = Celsius").toUpperCase();            //User inputs which scale
var temp = parseFloat(prompt("What is the temperature?"));                                          //User inputs temperature

//Convert from either Fahrenheit to Celsius || Celsius to Fahrenheit
if(scale == "F"){
    console.log((temp-32)*5/9);                                                                     //Math done to convert Fahrenheit to Celsius
}else
    console.log((temp*9)(2)/5+32);                                                                  //Math done to convert Celsius to Fahrenheit

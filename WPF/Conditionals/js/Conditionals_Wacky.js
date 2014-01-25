/**
 * Created by Steve Drees on 1/15/14, Assignment: Conditionals_Wacky.
 */

//Creating a sandwich
var bread = prompt("What type of bread would you like? (White or Wheat?").toLowerCase();
var meat = prompt("What type of meat would you like? (Ham or Turkey?").toLowerCase();
var topping1 = prompt("Would you like lettuce? (Yes or No)").toLowerCase();
var topping2 = prompt("Would you like tomato? (Yes or No)").toLowerCase();
var topping3 = prompt("Would you like onion? (Yes or No)").toLowerCase();
var topping4 = prompt("Would you like peppers? (Yes or No)").toLowerCase();
var dressing1 = prompt("Would you like ranch dressing? (Yes or No)").toLowerCase();
var dressing2 = prompt("Would you like oil and vinegar? (Yes or No)").toLowerCase();
var breadAnswer = bread;
var meatAnswer = meat;
var topping1Answer = "";
var topping2Answer = "";
var topping3Answer = "";
var topping4Answer = "";
var dressing1Answer = "";
var dressing2Answer = "";
var lettuce = "";
var tomato = "";
var onion = "";
var peppers = "";
var ranch = "";
var oilAndVinegar = "";

//Bread type
if(bread == "white" || bread == "wheat"){
    breadAnswer = bread;
}else{
    console.log("We can not make your sandwich without bread!");                        //Error message
}

//Meat type
if(meat == "ham" || meat == "turkey"){
    meatAnswer = meat;
}else{
    console.log("We can not make your sandwich without meat");                          //Error message
}

//Lettuce topping
if ((topping1 == "yes") || (topping1 == "y")){
    topping1Answer = " with lettuce, ";
}else{
    lettuce = "";                                                                       //If user doesn't want lettuce, then he doesn't get lettuce
}

//Tomato topping
if ((topping2 == "yes") || (topping2 == "y")){
    topping2Answer = ", tomato";
}else{
    tomato = "";                                                                       //If user doesn't want lettuce, then he doesn't get lettuce
}

//Onion topping
if ((topping3 == "yes") || (topping3 == "y")){
    topping3Answer = ", onion";
}else{
    onion = "";                                                                       //If user doesn't want lettuce, then he doesn't get lettuce
}

//Peppers topping
if ((topping4 == "yes") || (topping4 == "y")){
    topping4Answer = ", peppers";
}else{
    peppers = "";                                                                       //If user doesn't want lettuce, then he doesn't get lettuce
}

if ((dressing1 == "yes" || dressing1 =="y")){
    dressing1Answer = ", ranch";
}else{
    ranch = "";
}

if ((dressing2 == "yes" || dressing2 + "y")){
    dressing2Answer = ", oil and vinegar. ";
}else {
    oilAndVinegar = "";
}

//Dressing
//Output
//You ordered a X sandwich on X bread with X, X, X, X, and X. Enjoy!
console.log("You ordered a(n) " +meat+ " sandwich on " +bread+topping1Answer+topping2Answer+topping3Answer+topping4Answer+dressing1Answer+dressing2Answer+ "Enjoy!");
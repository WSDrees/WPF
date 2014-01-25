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
var topping1Answer;
var topping2Answer;
var topping3Answer;
var topping4Answer;
var dressing1Answer;
var dressing2Answer;


//Bread type
if(bread == "white" || bread == "wheat"){                                               //User's two choices
    breadAnswer = bread;                                                                //User choices between white and wheat bread
}else{
    breadAnswer = "";                                                                   //User does NOT want any bread. WEIRD, but okay
}

//Meat type
if(meat == "ham" || meat == "turkey"){                                                  //User's choice
    meatAnswer = meat;                                                                  //User choices between ham and turkey for their meat type
}else{
   meatAnswer = "";                                                                     //User does NOT get any meat
}

//Lettuce topping
if ((topping1 == "yes") || (topping1 == "y")){                                          //Does the user want lettuce? (yes OR y)
    topping1Answer = " with lettuce";                                                   //User adds lettuce
}else{
    topping1Answer = "";                                                                //User does NOT get lettuce
}

//Tomato topping
if ((topping2 == "yes") || (topping2 == "y")){                                          //Does the user want tomatoes? (yes OR y)
    topping2Answer = ", tomatoes";                                                      //User adds tomatoes
}else{
    topping2Answer = "";                                                                //User does NOT get tomatoes
}

//Onion topping
if ((topping3 == "yes") || (topping3 == "y")){                                          //Does the user want onions? (yes OR y)
    topping3Answer = ", onions";                                                        //User adds onions
}else{
    topping3Answer = "";                                                                //User does NOT get onions
}

//Peppers topping
if ((topping4 == "yes") || (topping4 == "y")){                                          //Does the user want peppers? (yes OR y)
    topping4Answer = ", peppers";                                                       //User adds peppers
}else{
    topping4Answer = "";                                                                //User does NOT get peppers.
}

if ((dressing1 == "yes" || dressing1 =="y")){                                           //Does the user want ranch dressing? (yes OR y)
    dressing1Answer = ", ranch";                                                        //User adds ranch dressing
}else{
    dressing1Answer = "";                                                               //User does NOT get ranch dressing
}

if ((dressing2 == "yes" || dressing2 + "y")){                                           //Does the user want oil and vinegar? (yes OR y)
    dressing2Answer = ", oil and vinegar. ";                                            //User adds oil and vinegar
}else {
    dressing2Answer = "";                                                               //User does NOT get oil and vinegar
}

//Dressing
//Output
//You ordered a X sandwich on X bread with X, X, X, X, and X. Enjoy!
console.log("You ordered a " +meatAnswer+ " sandwich on " + breadAnswer+ " with " +topping1Answer+topping2Answer+topping3Answer+topping4Answer+dressing1Answer+dressing2Answer+ " Enjoy!");
/**
 * Created by Steve Drees on 1/27/14, Assignment: Functions_Wacky.
 */

// How much change do you have?
//Quarters + Dimes + Nickles + Pennies
//Every 100 cents equals have a dollar

function change(){
    var quarterInput = parseInt(prompt("How many quarters do you have?"));
    var dimeInput = parseInt(prompt("How many dimes do you have?"));
    var nickleInput = parseInt(prompt("How many nickels do you have?"));
    var pennyInput = parseInt(prompt("How many pennies do you have?"));
    var quarter = quarterInput*0.25;
    var dime = dimeInput*0.10;
    var nickle = nickleInput*0.05;
    var penny = pennyInput*0.01;
    var dollar = quarter+dime+nickle+penny;
    console.log("You have a total of " +dollar+ " dollars. Don't spend it all in one place");
}

//OUTPUT: You have a total of X dollars. Don't spend it all in one place
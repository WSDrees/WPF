/**
 * Created by Steve Drees on 1/15/14, Assignment: Conditionals_Personal.
 */

//Are you old enough to gamble

var userAge = parseInt(prompt("How old are you? (Example: 20)"));                                                        //User input's age

if(userAge >= 21){                                                                                                      //Evaluate to ensure user is old enough to gamble && drink
    console.log("Since you are " +userAge+ " you are able to gamble and drink.");
}
//Evaluate to make sure user is old enough to gamble
//If NOT inform user they are too young to enter
else (userAge >=18) ? console.log("Since you are " +userAge+ " you are able to gamble.") : console.log("Sorry kid you are too young to enter.");


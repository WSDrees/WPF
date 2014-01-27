/**
 * Created by Steve Drees on 1/15/14, Assignment: Conditionals_Personal.
 */

//Are you old enough to gamble

var userAge = parseInt(prompt("How old are you?"));                                                                     //User input's age

if(userAge >= 21){
    console.log("Since you are " +userAge+ " you are able to gamble and drink.");                                       //Evaluate to ensure user is old enough to gamble && drink
} else if (userAge >= 18){
    console.log("Since you are " +userAge+ " you are able to gamble.");                                                 //Evaluate to make sure user is old enough to gamble
} else
    console.log("Sorry kid you are too young to enter.");                                                               //Evaluate to inform user they are too young to enter
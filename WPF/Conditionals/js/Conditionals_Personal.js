/**
 * Created by Steve Drees on 1/15/14, Assignment: Conditionals_Personal.
 */
//Old enough to gamble

var userAge = parseInt(prompt("How old are you?"));

if(userAge >= 21){
    console.log("Since you are " +userAge+ " you are able to gamble and drink.");
} else if (userAge >= 18){
    console.log("Since you are " +userAge+ " you are able to gamble.");
} else
    console.log("Sorry kid you are too young to enter.");
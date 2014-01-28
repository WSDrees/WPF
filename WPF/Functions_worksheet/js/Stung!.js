/**
 * Created by Steve Drees on 1/27/14, Function_worksheet: Stings.
 */

//Given it takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

function calcStings(){
    var victimType = prompt("What kind of animal is it?");                                                              //INPUT: Type of animal
    var victimWeight = parseFloat(prompt("How much does the animal weight? (In lbs)"));                                 //INPUT: Weight of animal in pounds
    var stingsPerPound = 8.666666667;                                                                                   //VAR of how many stings per pound
    var toDeath = (victimWeight*stingsPerPound).toFixed(2);                                                             //Math to find out how many stings it would take to kill inputted animal and weight
    console.log("It takes " +toDeath+ " bee stings to kill a " +victimWeight+ " pound " +victimType+ '.');              //OUTPUT: "It takes X bee stings to kill a X pound X.

}

calcStings();                                                                                                           //Return and print function
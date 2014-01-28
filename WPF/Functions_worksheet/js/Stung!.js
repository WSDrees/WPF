/**
 * Created by Steve Drees on 1/27/14, Function_worksheet: Stings.
 */

//Given it takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

function calcStings(){
    var victimType = prompt("What kind of animal is it?");
    var victimWeight = parseFloat(prompt("How much does the animal weight? (In lbs)"));
    var stingsPerPound = 8.666666667;
    var toDeath = (victimWeight*stingsPerPound).toFixed(2);
    console.log("It takes " +toDeath+ " bee stings to kill a " +victimWeight+ " pound " +victimType+ '.');

}

calcStings();
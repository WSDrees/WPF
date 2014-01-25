/**
 * Created by Steve Drees on 1/17/14.
 */

//var monsterArray=["Troll" , "Kobold" , "Merman"];

//Trolls > Forests, Kobolds > Desert, Merman > water

//Pass in the location and a random number
function makeMonster(landType, randomNumber)
{

//Takes in land type and a random number and returns a monster (maybe)
    var TrollPercentage = .5;
    var KoboldPercentage = .4;
    var MermanPercentage = .3;

    if(landType == String.fromCharCode(177) && randomNumber < TrollPercentage){
        return "Troll"
    }else
    if(landType == String.fromCharCode(178) && randomNumber < KoboldPercentage)
    { return "Kobold" }
    else
    if(landType == "w" && randomNumber < MermanPercentage){ return "Merman"}
    else
    if(landType == "C" && randomNumber < TrollPercentage){
        return "Bat"
    } else
    if(landType == "L" && randomNumber < KoboldPercentage)
    { return "Elemental"}
    else
    if(landType == "D" && randomNumber < MermanPercentage) {return "Merman"}
    else{ return "Worm";}
}

//Reference world position
//
//
//console.log(makeMonster("Forest",.2));
//console.log(makeMonster("Desert",.2));
//console.log(makeMonster("Water",.2));
//console.log(makeMonster("",.2));

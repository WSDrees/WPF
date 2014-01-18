/**
 * Created by wsdrees on 1/17/14.
 */

//var monsterArray=["Troll" , "Kobold" , "Merman"];

//Trolls = Forests, Kobolds = Desert, Merman = water

//Pass in the location and a random number
function makeMonster(landType, randomNumber)
{

//Takes in land type and a random number and returns a monster (maybe)
    var TrollPercentage = .5;
    var KoboldPercentage = .4;
    var MermanPercentage = .3;

    if(landType == "Forest" && randomNumber < TrollPercentage)
    {
        return "Troll"
    }
    else

    if(landType == "Desert" && randomNumber < KoboldPercentage)
    {
        return "Kobold"
    }
    else

    if(landType == "Water" && randomNumber < MermanPercentage)
    {
        return "Merman"
    }
    else
    {
        return ""
    }
}

//Reference world position


console.log(makeMonster("Forest",.2));
console.log(makeMonster("Desert",.2));
console.log(makeMonster("Water",.2));
console.log(makeMonster("",.2));

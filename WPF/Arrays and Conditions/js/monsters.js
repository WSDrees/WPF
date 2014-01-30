/**
 * Created by Steve Drees on 1/17/14.
 */

//var monsterArray=["Troll" , "Kobold" , "Merman"];

//Trolls > Forests, Kobolds > Desert, Merman > water
function craftMonster(monsterArray){
    if(monsterArray.length>1){
    var lowHP = monsterArray[4][0];
    var highHP = monsterArray[4][1];
    var lowGold = monsterArray[6][0];
    var highGold = monsterArray[6][1];
    monsterArray[4] = Math.floor((highHP-lowHP)*Math.random()) + lowHP;
    monsterArray[6] = Math.floor((highGold-lowGold)*Math.random()) + lowGold;
    return monsterArray;
    }
    else {return ""};


}
//Pass in the location and a random number
//takes in land type and random number and returns a monster (maybe)
//[
function makeMonster(landType, randomNumber)
{

//Takes in land type and a random number and returns a monster (maybe)

    var monster =
            [["Troll",1,4,2,[1,2],15,[5,12],200,[1,6]],

    var TrollPercentage = .5;
    var KoboldPercentage = .4;
    var MermanPercentage = .3;
    var wormPercentage = .5;
    var spiderPercentage = .4;
    var molePercentage = .3;
    var monsterSeletor = 0;

    if(landType == String.fromCharCode(177) && randomNumber < TrollPercentage){
        monsterSeletor=0;
    }else
    if(landType == String.fromCharCode(178) && randomNumber < KoboldPercentage)
    { monsterSeletor=1;
    }
    else
    if(landType == "w" && randomNumber < MermanPercentage){
    }
    else
    if(landType == "C" && randomNumber < TrollPercentage){
        return "Bat"
    } else
    if(landType == "L" && randomNumber < KoboldPercentage)
    { return "Elemental"}
    else
    if(landType == "D" && randomNumber < molePercentage) {return "mole"}
    else{ return monsterSeletor=5;

        }
    else{ return""}


    return craftMonster((monster[monsterSeletor]));
}

//Reference world position
//
//
//console.log(makeMonster("Forest",.2));
//console.log(makeMonster("Desert",.2));
//console.log(makeMonster("Water",.2));
//console.log(makeMonster("",.2));

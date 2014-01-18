/**
 * Created by wsdrees on 1/17/14.
 */
//Monster Array, Troll, Kobald, Merman
var type = 0;
var exp = 1;
var treasure = 2;
var troll = 0;
var kobald =1;
var merman = 2;
var min = 0;
var max = 1;

var monster=[["Troll",10,[5,12]],["Kobald",5,[3,20]], ["Merman",15,[9,34]]];

//Add two monster experience to three kobald experience
console.log(monster[troll][exp]+monster[troll][exp]+3*monster[kobald][exp]);

//Random treasure value for Troll between 5 - 12
console.log(Math.floor(
        (monster[troll][treasure][max]-monster[troll][treasure][min])
        *Math.random())
        +monster[troll][treasure][min]);

//Max treasure value of Merman, Kobald added to Min treasure value of Troll
console.log(monster[merman][treasure][max]+monster[kobald][treasure][max]+monster[troll][treasure][min]);

//var Monster = [];
//Monster [0] = [];
//Monster [1] = [];
//Monster [2] = [];
//
////      [x][y] Values
//Monster [0][0] = "Troll";   //Troll
//Monster [0][1] = "10";      //Experience points
//Monster [0][2] = "5";       //Treasure value
//
//Monster [1][0] = "Kobald";  //Kobald
//Monster [1][1] = "5";       //Experience points
//Monster [1][2] = "3";       //Treasure value
//
//Monster [2][0] = "Merman";  //Merman
//Monster [2][1] = "15";      //Experience points
//Monster [2][2] = "9";       //Treasure value
//
//
//
//var death = (Monster[1][1]*3) + (Monster[0][1]*2);
//
//console.log(death);


//var treasureArray=["Gold" , "Silver" , "Copper"];

//Trolls = Copper, Kobold = Silver, Merman = Gold

//Pass in the location and a random number
//function makeTreasure(treasureType, randomNumber)
//{
//    var CopperPercentage = .5;
//    var SilverPercentage = .4;
//    var GoldPercentage = .25;
//
////Conditions
//    if(treasureType == "Copper" && randomNumber < CopperPercentage)
//    {
//        return "Copper"
//    }
//    else
//
//    if(treasureType == "Silver" && randomNumber < SilverPercentage)
//    {
//        return "Silver"
//    }
//    else
//
//    if(treasureType == "Gold" && randomNumber < GoldPercentage)
//    {
//        return "Gold"
//    }
//
//    else
//    {
//        return ""
//    }
//
//}
//
//console.log(makeTreasure("Copper",.2));
//console.log(makeTreasure("Silver",.2));
//console.log(makeTreasure("Gold",.2));
//console.log(makeTreasure("",.2));
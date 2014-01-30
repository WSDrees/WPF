/**
 * Created by Steve Drees on 1/29/14.
 */
//str, dex, con,int, wis, cha, ac, hp, strmod, dexmod, conmod, damage, exp
    //stats 3d6
    //hp 10 - 20 +conmod
    //ac 10 + dexmod
    //damage d6
//strmod, conmod, dexmod, hp, ac, gold, exp damage
    function statMod(statValue){
    if(statValue == 18){return 4} else
    if(statValue == 17 || statValue==16){return 3} else
    if(statValue == 15 || statValue==14){return 2} else
    if(statValue == 13 || statValue==12){return 1} else
    if(statValue == 11 || statValue==10){return 0} else
    if(statValue == 9 || statValue==8){return -1} else
    if(statValue == 7 || statValue==8){return -2} else
    if(statValue == 5 || statValue==6){return -3} else
    if(statValue == 3){return -4}

}

var str = 0;
var con = 1;
var dex = 2;
var int = 3;
var wis = 4;
var cha = 5;
var strMod =6;
var conMod =7;
var dexMod =8;
var hp = 9;
var ac = 10;
var gold = 11;
var exp = 12;
var damage = 13;
var damLow = 0;
var damHigh = 1;


var player = [Math.flor(5*Math.random()+5*Math.random()+5*Math.random()+3),                    //Variable equal to an array
    Math.flor(5*Math.random()+5*Math.random()+5*Math.random()+3),
    Math.flor(5*Math.random()+5*Math.random()+5*Math.random()+3),
    Math.flor(5*Math.random()+5*Math.random()+5*Math.random()+3),
    Math.flor(5*Math.random()+5*Math.random()+5*Math.random()+3),
    Math.flor(5*Math.random()+5*Math.random()+5*Math.random()+3),
    Math.flor(5*Math.random()+5*Math.random()+5*Math.random()+3),
    0,  //str
    0,  //con
    0,  //dex
    Math.floor(10*Math.random())+10,        //hp
    10,                                     //ac
    0,
    0,
    [1,6]
];



//player[0]
//6-8 statmod
player[strMod] = statMod(player[str]);
player[conMod] = statMod(player[con]);
player[dexMod] = statMod(player[dex]);
player[hp] += player[conMod];
player[damage][damLow] += strMod;
player[damage][damHigh]+= strMod;


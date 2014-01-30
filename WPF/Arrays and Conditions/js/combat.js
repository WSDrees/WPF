/**
 * Created by Steve Drees on 1/27/14.
 */

//Add to arrays containing which player and monster information
function combat(player, monster){
//Monster stats -- strmod, conmod, dexmod, hp, ac, gold, exp, damage
    var strMon = 0;
    var conMon = 1;
    var dexMon = 2;
    var hpMon = 3;
    var acMon = 4;
    var goldMon = 5;
    var expMon = 6;
    var damageMon = 7;

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
//function

//init roll
    if(Math.floor(Math.random()*19+1) + player[dexMod] >=                           //>= Gives the player an advantage, PLAYER WINS TIES
        Math.floor(Math.random()*19+1) + monster[dexMod]
        )

        {
        while(player[hp]>0 && monther[hpMon]>0){
        //player hits monster
            if(player[hp]>0){
            if(Math.floor(Math.random()*19+1) + player[strMod] >= monster[ac]+monster[dexMon] )
                {
                    monster[hpMon] -= Math.floor((player[damage][damHigh] - player[damage][damLow] ) * Math.random())+player[damage][damLow]
                }
        }    else{
            //death
        }
               //monster hits player
        if(monster[hpMon] > 0){
            if(Math.floor(Math.random()*19+1) + monster[strMod] >= player[ac]+player[dexMon] ){
                player[hp] -= Math.floor((monster[damageMon][damHigh] - monster[damage][damLow] ) * Math.random())+monster[damage][damLow]
            }
        } else {
                //accrue exp
        }



    }
 }


    else
{}


//to hit roll for attacker1
//damage attacker1
//to hit roll attacker2
//damage attacker2
//evaluation of the combat

}
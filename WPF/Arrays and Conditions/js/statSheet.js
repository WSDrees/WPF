/**
 * Created by wsdrees on 1/17/14.
 */
//Creating a stat sheet for a monster
//User provides monster name

//var type = 0;
var monsterName = prompt("Name the monster");
var str = 0;                                     //Strength
var dex = 1;                                     //Dexterity
var con = 2;                                     //Charisma
var cha = 3;                                     //Constitution
var wis = 4;                                     //Wisdom
var int = 5;                                     //Intelligence

var min = 0;
var max = 1;

var stats=[[3,18],[3,18],[3,18],[3,18],[3,18],[3,18]];
//Random stat for Strength
console.log(Math.floor(
    (stats[str][max] - stats[str][min])
        *Math.random())
    +stats[str][min]);

//Random stat for Dexterity
console.log(Math.floor(
    (stats[dex][max] - stats[dex][min])
        *Math.random())
    +stats[dex][min]);

//Random stat for Charisma
console.log(Math.floor(
    (stats[con][max] - stats[con][min])
        *Math.random())
    +stats[con][min]);

//Random stat for Constitution
console.log(Math.floor(
    (stats[cha][max] - stats[cha][min])
        *Math.random())
    +stats[cha][min]);

//Random stat for Wisdom
console.log(Math.floor(
    (stats[wis][max] - stats[wis][min])
        *Math.random())
    +stats[wis][min]);

//Random stat for Intelligence
console.log(Math.floor(
    (stats[int][max] - stats[int][min])
        *Math.random())
    +stats[int][min]);
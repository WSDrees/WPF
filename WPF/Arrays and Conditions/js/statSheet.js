/**
 * Created by wsdrees on 1/17/14.
 */
//Creating a stat sheet for a monster

//var type = 0;
var monsterName = prompt("Name the monster");    //User provides monster name
var exp = 0;                                     //Experience
var str = 1;                                     //Strength
var dex = 2;                                     //Dexterity
var con = 3;                                     //Charisma
var cha = 4;                                     //Constitution
var wis = 5;                                     //Wisdom
var int = 6;                                     //Intelligence

var min = 0;
var max = 1;

var stats=[[50,100],[3,18],[3,18],[3,18],[3,18],[3,18],[3,18]];

//Monster name from user
console.log(monsterName);

//Random experience stat
console.log("Experience: \t" + (Math.floor(
    (stats[exp][max] - stats[exp][min])
        *Math.random())
    +stats[exp][min]));

//Random stat for Strength
console.log("Strength: \t\t" + (Math.floor(
    (stats[str][max] - stats[str][min])
        *Math.random())
    +stats[str][min]));

//Random stat for Dexterity
console.log("Dexterity: \t\t" + (Math.floor(
    (stats[dex][max] - stats[dex][min])
        *Math.random())
    +stats[dex][min]));

//Random stat for Charisma
console.log("Charisma: \t\t" + (Math.floor(
    (stats[con][max] - stats[con][min])
        *Math.random())
    +stats[con][min]));

//Random stat for Constitution
console.log("Constitution: \t" + (Math.floor(
    (stats[cha][max] - stats[cha][min])
        *Math.random())
    +stats[cha][min]));

//Random stat for Wisdom
console.log("Wisdom: \t\t" + (Math.floor(
    (stats[wis][max] - stats[wis][min])
        *Math.random())
    +stats[wis][min]));

//Random stat for Intelligence
console.log("Intelligence: \t" + (Math.floor(
    (stats[int][max] - stats[int][min])
        *Math.random())
    +stats[int][min]));
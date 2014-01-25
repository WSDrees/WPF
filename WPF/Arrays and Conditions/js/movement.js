/**
 * Created by Steve Drees on 1/15/14.
 */

//Step through each element of the array World and load the data into a formatted string and display the values
var outputString = "";
var character= "<STEVE>";
var xx = 1;
var yy = 1;
var whileCondition = true;
var currentLayer = 0;
console.log(worldDisplay(twoLayerWorld[currentLayer], xx, yy, character));

//Movement
while(whileCondition){

//  console.clear();
    console.log(twoLayerWorld[currentLayer][xx][yy]);
    console.log(worldDisplay(twoLayerWorld[currentLayer], xx, yy, character));
    console.log(makeMonster(world[xx][yy],0));

    var promptedDirectionValue = prompt("Direction? (n, s, w, e, u, d, f)").toLowerCase();
    if(promptedDirectionValue == "n"){yy--;}
    else if(promptedDirectionValue == "s"){yy++;}
    else if(promptedDirectionValue == "w"){xx--;}
    else if(promptedDirectionValue == "e"){xx++;}
    else if(promptedDirectionValue == "f"){whileCondition = false;}
    if((twoLayerWorld[currentLayer][yy][xx] == "Ladder" && promptedDirectionValue == "u")){currentLayer--;}
    if((twoLayerWorld[currentLayer][yy][xx] == "Dungeon" && promptedDirectionValue == "d")){currentLayer++;}
    console.log(twoLayerWorld[currentLayer][yy][xx]);

//    console.log(world[xx][yy]); //This allows us to check specific values of the world
}
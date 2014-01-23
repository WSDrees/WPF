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

    console.clear();
    console.log(twoLayerWorld[currentLayer][xx][yy]);
    console.log(worldDisplay(twoLayerWorld[currentLayer], xx, yy, character));
    console.log(makeMonster(world[xx][yy],0));

    var promptedDirectionValue = prompt("Direction? (n, s, w, e, u, d, f)").toLowerCase();
    if(promptedDirectionValue == "n"){xx--;}
    else if(promptedDirectionValue == "s"){xx++;}
    else if(promptedDirectionValue == "w"){yy--;}
    else if(promptedDirectionValue == "e") {yy++;}
    else if(promptedDirectionValue == "f"){whileCondition = false;}
    if((twoLayerWorld[currentLayer][xx][yy] == "Ladder" && promptedDirectionValue == "u")){currentLayer--;}
//    (twoLayerWorld[currentLayer][xx][yy] == "Ladder" && promptedDirectionValue == "u") ? currentLayer-- :currentLayer;
    if((twoLayerWorld[currentLayer][xx][yy] == "Dungeon" && promptedDirectionValue == "d")){currentLayer++;}





//    console.log(world[xx][yy]); //This allows us to check specific values of the world
}





//    for(outer=0; outer<world.length; outer++)
//    {
//        for(inner=0; inner<world[outer].length; inner++)
//        {
//            if(xx == outer && yy == inner)
//            {
//                outputString += character + "\t";
//            }
//            else
//            {
//                outputString = outputString + world[outer][inner] + "\t";
//            }
//        }
//        outputString += "\n";      //Same as outputString=outputString+"\n";
//    }
//    console.clear();
//    console.log(outputString);
//
//    {
//        (outputString= "");
//    }
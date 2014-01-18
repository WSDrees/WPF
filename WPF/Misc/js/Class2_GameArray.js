/**
* Created by wsdrees on 1/10/14.
on*/

////Class Jan 15
//var xx = 0;
//var yy = 3;
//var startPoint = world[xx][yy];
//console.log ("You started in the: " + startPoint);
//
////What direction to move
//var userInput = prompt("Which direction would you like to move?");

//if(userInput == "u")
//{
//    (xx--);
//}
//else if(userInput == "d")
//{
//    (xx++);
//}
//else if(userInput == "l")
//{
//    (yy--);
//}
//else if(userInput == "r")
//{
//    (yy++);
//}

//console.log ("You are now in the: " + world[xx][yy]);

//////while loop
//var whileCondition = TRUE;
//
//while(whileCondition)
//{
//    userInput;
//    if(userInput == "u")
//    {
//        (xx--);
//    }
//    else if(userInput == "d")
//    {
//        (xx++);
//    }
//    else if(userInput == "l")
//    {
//        (yy--);
//    }
//    else if(userInput == "r")
//    {
//        (yy++);
//    }
//    console.log("You are now in the: " + world[xx][yy]);
//}

//console.log(startPoint);

//console.log(Math.random());  //Math.random() syntax

//
//if(world[0][0]=="Water"){
//    console.log("Water");
//} else if(world[0][0]=="Forest"){
//    console.log("Forest");
//}
//else{console.log("Desert");}
//

//If statements (Student Example)
var seedx=15;
var seedy=15;
var seedz=15;

if(seedx>=seedy)
{
    console.log("Seedx is greater than or equal to Seedy");
}
else if(seedy>=seedz)
{
    console.log("Seedy is greater than or equal to Seedz");
}
else
{
    console.log("Seedz is less than both Seed1 and Seedy");
}


//If statements (Teacher Example)
var seed1=1;
var seed2=3;
var seed3=5;

if(seed2>=seed1)
{
    console.log('seed2>=seed1');
}
else if(seed2==seed1)
{
    console.log("seed2==seed1");
}
else
{
    console.log("seed2<=seed1");
}

if(seed1!=seed3){console.log("Seed1 and 3 are different.");}


//For Loop (Student Example)
for(loopItt = 0; loopItt<10; loopItt++)
{
    if (loopItt % 2 == 1)
    {
        console.log(loopItt);
    }
}

//var rowString = "";
//rowString = rowString + "\t";
//
//for(innerItt = 0; innerItt<world.length; innerItt++)
//{
//    rowString = rowString+world[0][innerItt]+"\t\n";
//
//}
//
//console.log(rowString);

//for(i=0;i<4;i++)
//{
//    for(j=0;j<4;j++)
//    {
//        for(k=0;k<4;k++)
//        {
//            console.log("i:"+i+"\tj:"+j+"\tk:"+k);
//
//        }
//    }
//}
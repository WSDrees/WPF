/**
* Created by wsdrees on 1/10/14.
on*/

var world = [];
world[0]=[];
world[1]=[];
world[2]=[];
world[3]=[];
world[4]=[];
world[5]=[];
world[6]=[];
world[7]=[];
world[8]=[];
world[9]=[];
//    x, y
world[0][0] = "Water";
world[0][1] = "Water";
world[0][2] = "Water";
world[0][3] = "Water";
world[0][4] = "Forest";
world[0][5] = "Forest";
world[0][6] = "Forest";
world[0][7] = "Forest";
world[0][8] = "Forest";
world[0][9] = "Desert";

world[1][0] = "Water";
world[1][1] = "Water";
world[1][2] = "Water";
world[1][3] = "Forest";
world[1][4] = "Forest";
world[1][5] = "Forest";
world[1][6] = "Forest";
world[1][7] = "Forest";
world[1][8] = "Forest";
world[1][9] = "Desert";

world[2][0] = "Water";
world[2][1] = "Water";
world[2][2] = "Water";
world[2][3] = "Forest";
world[2][4] = "Forest";
world[2][5] = "Forest";
world[2][6] = "Water";
world[2][7] = "Water";
world[2][8] = "Desert";
world[2][9] = "Desert";

world[3][0] = "Water";
world[3][1] = "Water";
world[3][2] = "Forest";
world[3][3] = "Forest";
world[3][4] = "Forest";
world[3][5] = "Forest";
world[3][6] = "Water";
world[3][7] = "Water";
world[3][8] = "Desert";
world[3][9] = "Desert";

world[4][0] = "Water";
world[4][1] = "Forest";
world[4][2] = "Forest";
world[4][3] = "Forest";
world[4][4] = "Forest";
world[4][5] = "Forest";
world[4][6] = "Forest";
world[4][7] = "Forest";
world[4][8] = "Desert";
world[4][9] = "Desert";

world[5][0] = "Forest";
world[5][1] = "Forest";
world[5][2] = "Forest";
world[5][3] = "Forest";
world[5][4] = "Forest";
world[5][5] = "Forest";
world[5][6] = "Forest";
world[5][7] = "Forest";
world[5][8] = "Desert";
world[5][9] = "Desert";

world[6][0] = "Forest";
world[6][1] = "Forest";
world[6][2] = "Forest";
world[6][3] = "Forest";
world[6][4] = "Forest";
world[6][5] = "Forest";
world[6][6] = "Forest";
world[6][7] = "Desert";
world[6][8] = "Desert";
world[6][9] = "Desert";

world[7][0] = "Forest";
world[7][1] = "Forest";
world[7][2] = "Forest";
world[7][3] = "Forest";
world[7][4] = "Forest";
world[7][5] = "Forest";
world[7][6] = "Forest";
world[7][7] = "Desert";
world[7][8] = "Desert";
world[7][9] = "Desert";

world[8][0] = "Forest";
world[8][1] = "Forest";
world[8][2] = "Forest";
world[8][3] = "Forest";
world[8][4] = "Forest";
world[8][5] = "Forest";
world[8][6] = "Desert";
world[8][7] = "Desert";
world[8][8] = "Desert";
world[8][9] = "Desert";

world[9][0] = "Forest";
world[9][1] = "Forest";
world[9][2] = "Forest";
world[9][3] = "Forest";
world[9][4] = "Forest";
world[9][5] = "Forest";
world[9][6] = "Desert";
world[9][7] = "Desert";
world[9][8] = "Desert";
world[9][9] = "Desert";


//Step through each element of the array World and load the data into a formatted string and display the values
var outputString = "";

for(outer=0; outer<world.length; outer++)
{
   for(inner=0; inner<world[outer].length; inner++)
   {
        outputString=outputString+world[outer][inner]+"\t";
   }
   outputString+="\n";      //Same as outputString=outputString+"\n";
}
console.log(outputString);

//console.log(Math.random());  //Math.random() syntax

//
//if(world[0][0]=="Water"){
//    console.log("Water");
//} else if(world[0][0]=="Forest"){
//    console.log("Forest");
//}
//else{console.log("Desert");}
//
//var seed1=15;
//var seed2=15;
//var seed3=15;
//
//if(seed1>=seed2)
//{
//    console.log("Seed1 is greater than or equal to Seed2");
//}
//else if(seed2>=seed3)
//{
//    console.log("Seed2 is greater than or equal to Seed3");
//}
//else
//{
//    console.log("Seed3 is less than both Seed1 and Seed2");
//}
//
//var seed1=1;
//var seed2=3;
//var seed3=5;
//
//if(seed2>=seed1)
//{
//    console.log('seed2>=seed1');
//}
//else if(seed2==seed1)
//{
//    console.log("seed2==seed1");
//}
//else
//{
//    console.log("seed2<=seed1");
//}
//
//if(seed1!=seed3){console.log("Seed1 and 3 are different.");}

//for(loopItt = 0; loopItt<10; loopItt++)
//{
//    if (loopItt % 2 == 1)
//    {
//        console.log(loopItt);
//    }
//}

//console.log(world[0][0]);
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

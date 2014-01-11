///**
// * Created by wsdrees on 1/10/14.
// */
//
//var world = [];
//world[0]=[];
//world[1]=[];
//world[2]=[];
//world[3]=[];
//world[4]=[];
//world[5]=[];
//world[6]=[];
//world[7]=[];
//world[8]=[];
//world[9]=[];
//
//world[0][0] = "Water";
//world[0][1] = "Water";
//world[0][2] = "Water";
//world[0][3] = "Water";
//world[0][4] = "Water";
//world[0][5] = "Frost";
//world[0][6] = "Frost";
//world[0][7] = "Frost";
//world[0][8] = "Frost";
//world[0][9] = "Frost";
//
//world[1][0] = "Water";
//world[1][1] = "Water";
//world[1][2] = "Water";
//world[1][3] = "Water";
//world[1][4] = "Frost";
//world[1][5] = "Frost";
//world[1][6] = "Frost";
//world[1][7] = "Frost";
//world[1][8] = "Frost";
//world[1][9] = "Frost";
//
//world[2][0] = "Water";
//world[2][1] = "Water";
//world[2][2] = "Water";
//world[2][3] = "Frost";
//world[2][4] = "Frost";
//world[2][5] = "Frost";
//world[2][6] = "Frost";
//world[2][7] = "Frost";
//world[2][8] = "Frost";
//world[2][9] = "Frost";
//
//world[3][0] = "Water";
//world[3][1] = "Frost";
//world[3][2] = "Frost";
//world[3][3] = "Frost";
//world[3][4] = "Frost";
//world[3][5] = "Frost";
//world[3][6] = "Frost";
//world[3][7] = "Frost";
//world[3][8] = "Frost";
//world[3][9] = "Frost";
//
//world[4][0] = "Frost";
//world[4][1] = "Frost";
//world[4][2] = "Frost";
//world[4][3] = "Frost";
//world[4][4] = "Frost";
//world[4][5] = "Frost";
//world[4][6] = "Frost";
//world[4][7] = "Frost";
//world[4][8] = "Frost";
//world[4][9] = "Frost";
//
//world[5][0] = "Frost";
//world[5][1] = "Frost";
//world[5][2] = "Frost";
//world[5][3] = "Frost";
//world[5][4] = "Frost";
//world[5][5] = "Frost";
//world[5][6] = "Frost";
//world[5][7] = "Frost";
//world[5][8] = "Frost";
//world[5][9] = "Frost";
//
//world[6][0] = "Frost";
//world[6][1] = "Frost";
//world[6][2] = "Water";
//world[6][3] = "Water";
//world[6][4] = "Frost";
//world[6][5] = "Frost";
//world[6][6] = "Frost";
//world[6][7] = "Frost";
//world[6][8] = "Desert";
//world[6][9] = "Desert";
//
//world[7][0] = "Frost";
//world[7][1] = "Frost";
//world[7][2] = "Water";
//world[7][3] = "Water";
//world[7][4] = "Frost";
//world[7][5] = "Frost";
//world[7][6] = "Frost";
//world[7][7] = "Desert";
//world[7][8] = "Desert";
//world[7][9] = "Desert";
//
//world[8][0] = "Frost";
//world[8][1] = "Frost";
//world[8][2] = "Desert";
//world[8][3] = "Desert";
//world[8][4] = "Desert";
//world[8][5] = "Desert";
//world[8][6] = "Desert";
//world[8][7] = "Desert";
//world[8][8] = "Desert";
//world[8][9] = "Desert";
//
//world[9][0] = "Desert";
//world[9][1] = "Desert";
//world[9][2] = "Desert";
//world[9][3] = "Desert";
//world[9][4] = "Desert";
//world[9][5] = "Desert";
//world[9][6] = "Desert";
//world[9][7] = "Desert";
//world[9][8] = "Desert";
//world[9][9] = "Desert";
//
//if(world[0][0]=="Water"){
//    console.log("Water");
//} else if(world[0][0]=="Forest"){
//    console.log("Forest");
//}
//else{console.log("Desert");}

//var seed1=15;
//var seed2=15;
//var seed3=15;
//
//if(seed1>=seed2){
//    console.log("Seed1 is greater than or equal to Seed2");
//} else if(seed2>=seed3){
//    console.log("Seed2 is greater than or equal to Seed3");
//}
//else{console.log("Seed3 is less than both Seed1 and Seed2");
//}

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
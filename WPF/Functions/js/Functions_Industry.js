/**
 * Created by Steve Drees on 1/27/14, Assignment: Functions_Industry.
 */

//Car model, gas type and mpg

//Car A, B, C
var makeOfCar = prompt("Choose a type of car: \nF = Ford\n H = Honda\n T = Toyota");
var carSize = prompt("Choose a car: \nS = Small\nM = Mid-size\nT = Truck\nS = SUV");
var gasType = prompt("Choose a type of gas: \nR = Regular\nM = Mid\nP = Premium\nD = Diesel");
var whileCondition = true;
var smallCar = 11;                                  //Average gas tank size of a small car
var midSizeCar = 15;                                //Average gas tank size of a mid size car
var truck = 22.5;                                   //Average gas tank size of a truck
var suv = 22.5;                                     //Average gas tank size of a SUV

//Information from fuelgagereport.com on 1/30/14
//Current Avg. 	Reg: $3.275 	Mid: $3.456 	Premium $3.624 	    Diesel: $3.890
//Gas type Reg, Mid, Pre, and Diesel
var gasReg = 3.275;
var gasMid = 3.456;
var gasPrem = 3.624;
var diesel = 3.89;


//Miles per gallon
var mpgSmallCar = "";
var mpgMidCar = "";
var mpgTruck = "";
var mpgSUV = "";
//Gas tank size


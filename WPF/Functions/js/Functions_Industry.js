/**
 * Created by Steve Drees on 1/27/14, Assignment: Functions_Industry.
 */

//Car model, gas type and mpg

//Car A, B, C
var carType = prompt("Choose a car: \nS = Small\nM = Mid-size\nT = Truck\nS = SUV").toUpperCase();
var gasType = prompt("Choose a type of gas: \nR = Regular\nM = Mid\nP = Premium\nD = Diesel").toUpperCase();

//Average size found via Google
var smallCarGasTank = 11;                                   //Average gas tank size of a small car
var midSizeCarGasTank = 15;                                 //Average gas tank size of a mid size car
var truckGasTank = 22.5;                                    //Average gas tank size of a truck
var suvGasTank = 22.5;                                      //Average gas tank size of a SUV

//Information from fuelgagereport.com on 1/30/14
//Current Avg. 	Reg: $3.275 	Mid: $3.456 	Premium $3.624 	    Diesel: $3.890
//Gas type Reg, Mid, Pre, and Diesel
var gasReg = 3.275;
var gasMid = 3.456;
var gasPrem = 3.624;
var diesel = 3.89;


function gasTankSize(smallCarGasTank, midSizeCarGasTank, truckGasTank, suvGasTank){
    if(carType == "S"){
        return smallCarGasTank;
    }else if(carType == "M"){
        return midSizeCarGasTank;
    }else if(carType == "T"){
        return truckGasTank;
    }else if(carType == "S"){
        return suvGasTank;
    }
}

function gasRate(gasReg, gasMid, gasPrem, diesel){
    if(gasType == "R"){
        return gasReg;
    }else if(gasType =="M"){
        return gasMid;
    }else if(gasType =="P"){
        return gasPrem;
    }else if(gasType == "D"){
        return diesel;
    }
}
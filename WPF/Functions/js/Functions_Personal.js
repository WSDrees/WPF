/**
 * Created by Steve Drees on 1/27/14, Assignment: Functions_Personal.
 */

//How many calories burned
//Did you walk, run, bike, swim?
//Pace, and time
//Weight
function workout(){
var weight = parseFloat(prompt("How much do you weigh? \n(In pounds)"));
var exercise = prompt("What exercise did you do today? \n(w = walk, r = run, b = bike, s = swim)").toLowerCase();
var time = parseFloat(prompt("How long did you work out for? \n(1 = 1 hour, .75 = 45 minutes, .5 = 30 minutes, .25 = 15 minutes)")).toFixed(2);
var caloriesBurned = "";
var exerciseType = "";
var pace = "";

//Determine which function to call
    if(exercise == "w"){
        walking();                      //call walking function
    } else if(exercise == "r"){
        running();                      //call running function
    } else if(exercise == "b"){
        biking();                       //call biking function
    } else if(exercise == "s"){
        swimming();                     //call swimming function
    }

function walking(){
//Walking 3 miles per hour pace (20 min/mile pace).
//1.6 x your weight in pounds x 1 hour
//Walking 4 miles per hour pace (15 min/mile pace)
//2.7 x your weight in pounds x 1 hour
    exerciseType =  "walking";
    var wPace = prompt("What was your pace? (20 or 15 min/mile?)");
    var wPace1 = 1.6;
    var wPace2 = 2.7;

    if(wPace == "20"){
       caloriesBurned = wPace1 * weight * time;         //Calories burned calculation for 20 min/mile
    } else if(wPace == "15"){
       caloriesBurned = wPace2 * weight * time;         //Calories burned calculation for 15 min/mile
    }

}

function running(){
//Running 5 miles per hour pace (12 min/mile pace)
//4.1 x your weight in pounds x 1 hour
//Running 6 miles per hour pace (10 min/mile pace)
//4.9 x your weight in pounds x 1 hour
//Running 7 ½ mi per hour pace (8 min/mile pace)
//6.0 x your weight in pounds x 1 hour
    exerciseType =  "running";
    var rPace = prompt("What was your pace? (12, 10, or 8 min/mile");
    var rPace1 = 4.1;
    var rPace2 = 4.9;
    var rPace3 = 6;

    if(rPace == "12"){
        caloriesBurned = rPace1 * weight * time;        //Calories burned calculation for 12 min/mile
    } else if(rPace == "10"){
        caloriesBurned = rPace2 * weight * time;        //Calories burned calculation for 10 min/mile
    } else if(rPace == "8"){
        caloriesBurned = rPace3 * weight * time;        //Calories burned calculation for 8 min/mile
    }
}

function biking(){
//Biking 6 miles per hour pace (1.5 min/mile pace)
//1.5 x your weight in pounds x 1 hour
//Biking 10 miles per hour pace (6.0 min/mile pace)
//2.0 x your weight in pounds x 1 hour
//Biking 15 miles per hour pace (4.0 min/mile pace)
//3.9 x your weight in pounds x 1 hour
    exerciseType =  "biking";
    var bPace = prompt("What was your pace? (6, 10, or 15 mph?");
    var bPace1 = 1.5;
    var bPace2 = 2;
    var bPace3 = 3.9;

    if(bPace == "6"){
        caloriesBurned = bPace1 * weight * time;        //Calories burned calculation for 6 min/mile
    } else if(bPace == "10"){
        caloriesBurned = bPace2 * weight * time;        //Calories burned calculation for 10 min/mile
    } else if(bPace == "15"){
        caloriesBurned = bPace3 * weight * time;        //Calories burned calculation for 15 min/mile
    }
}

function swimming(){
//Swimming 20 yds/min (moderate) 2.9 x your weight in pounds x 1 hour
//Swimming 40 yds/min (vigorous) 4.8 x your weight in pounds x 1 hour
    exerciseType =  "swimming";
    var sPace = prompt("What was your pace? (20 or 40 yds/min)");
    var sPace1 = 2.9;
    var sPace2 = 4.8;

    if(sPace == "20"){
        caloriesBurned = sPace1 * weight * time;        //Calories burned calculation for 20 yds/mile
    } else if(sPace == "40"){
        caloriesBurned = sPace2 * weight * time;        //Calories burned calculation for 20 yds/mile
    }
}

console.log("You weigh " +weight+ " pounds, and you went " +exerciseType+ " for " +time+
            " hours, and burned a total of " +caloriesBurned+ " calories. GOOD JOB!!!");
}

workout();
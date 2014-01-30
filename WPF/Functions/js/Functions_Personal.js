/**
 * Created by Steve Drees on 1/27/14, Assignment: Functions_Personal.
 */

//How many calories burned
//Did you walk, run, bike, swim?
//Pace, and time
//Weight
function workout(){
var weight = parseFloat(prompt("How much do you weigh? (In pounds)"));
var exercise = prompt("What exercise did you do today? (w = walk, r = run, b = bike, s = swim)").toLowerCase();
var time = parseFloat("How long did you work out for? (1 = 1 hour, .75 = 45 minutes, .5 = 30 minutes, .25 = 15 minutes)").toFixed(2);


    if(exercise == "w"){
        return walking();
    } else if(exercise == "r"){
        return running();
    } else if(exercise == "b"){
        return biking();
    } else if(exercise == "s"){
        return swimming();
    } else{
        console.log("You haven't entered a correct workout");
    }

function walking(pace, weight, time){
//Walking 3 miles per hour pace (20 min/mile pace).
//1.6 x your weight in pounds x 1 hour
//Walking 4 miles per hour pace (15 min/mile pace)
//2.7 x your weight in pounds x 1 hour
    var wPace = prompt("What was your pace? (3 or 4 min/mile?)");
    var wPace1 = 1.6;
    var wPace2 = 2.7;

    if (wPace != 3 || wPace != 4){
        console.log("You entered an invalid pace!");
    } else if(wPace1 == "3"){
        console.log(wPace*weight*time);
    } else if(wPace2 == "4"){
        console.log(wPace*weight*time);
    }

}

function running(pace, weight, time){
//Running 5 miles per hour pace (12 min/mile pace)
//4.1 x your weight in pounds x 1 hour
//Running 6 miles per hour pace (10 min/mile pace)
//4.9 x your weight in pounds x 1 hour
//Running 7 ½ mi per hour pace (8 min/mile pace)
//6.0 x your weight in pounds x 1 hour
    var rPace = prompt("What was your pace? (12, 10, or 8 min/mile");
    var rPace1 = 4.1;
    var rPace2 = 4.9;
    var rPace3 = 6;

    if (rPace != 4.1 || rPace != 4.9 || rPace !=6){
        console.log("You entered an invalid pace!");
    } else if(rPace1 == "12"){
        console.log(rPace1*weight*time);
    } else if(rPace2 == "10"){
        console.log(rPace2*weight*time);
    } else if(rPace3 == "8"){
        console.log(rPace3*weight*time);
    }
}

function biking(pace, weight, time){
//Biking 6 miles per hour pace (1.5 min/mile pace)
//1.5 x your weight in pounds x 1 hour
//Biking 10 miles per hour pace (6.0 min/mile pace)
//2.0 x your weight in pounds x 1 hour
//Biking	15 miles per hour pace (4.0 min/mile pace)
//3.9 x your weight in pounds x 1 hour
    var bPace = prompt("What was your pace? (6, 10, or 15 min/mile");
    var bPace1 = 1.5;
    var bPace2 = 2;
    var bPace3 = 3.9;

    if (bPace != "6" || bPace != "10" || bPace != "15"){
        console.log("You entered an invalid pace!");
    } else if(bPace1 == "6"){
        console.log(pace1*weight*time);
    } else if(bPace2 == "10"){
        console.log(pace2*weight*time);
    } else if(bPace3 == "15"){
        console.log(pace3*weight*time);
    }
}

function swimming(pace, weight, time){
//Swimming 20 yds/min (moderate) 2.9 x your weight in pounds x 1 hour
//Swimming 40 yds/min (vigorous) 4.8 x your weight in pounds x 1 hour
    var sPace = prompt("What was your pace? (20 or 40 yds/min)");
    var sPace1 = 2.9;
    var sPace2 = 4.8;

    if (sPace != "20" || sPace != "40"){
        console.log("You entered an invalid pace!");
    } else if(sPace1 == "20"){
        console.log(pace1*weight*time);
    } else if(sPace2 == "40"){
        console.log(pace2*weight*time);
    }
}


}
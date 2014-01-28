/**
 * Created by Steve Drees on 1/27/14 Functions_worksheet: Circumference.
 */

//Function name and parameters
function calcCircumference(){
    var pie = 3.14159;
    var radius = parseFloat(prompt("What is the radius of the circle?")).toFixed(2);
    var circumference = (2*pie*radius).toFixed(2);
    console.log(circumference);
}

calcCircumference();
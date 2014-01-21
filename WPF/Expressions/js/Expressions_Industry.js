///**
// * Created by Steve Drees on 1/15/14 Assignment: Expression_Industry.
// */

//User input
var unitOfMeasurement = prompt("What is the unit of measurement? (m = meters, in = inches, y = yard)").toLowerCase();   //Input unit of measurement
var radiusCircle = parseFloat(prompt("What is the radius of a circle?"));                                               //Input radius
var rectangleWidth = parseFloat(prompt("What is the width of the rectangle?"));                                         //Input rectangle Width
var rectangleHeight = parseFloat(prompt("What is the height of the rectangle?"));                                       //Input rectangle Height
var pie = 3.14159;

//Circumference of a Circle = 2 * pie * radius
var circumference = parseFloat(2 * pie * radiusCircle).toFixed(2);

//Area of a Circle = pie * radius * radius
var areaCircle = parseFloat(pie * radiusCircle * radiusCircle).toFixed(2);

//Area Rectangle = width * height
var areaRectangle = parseFloat(rectangleWidth * rectangleHeight).toFixed(2);

//Output
//The radius of your circle is:
//The circumference of your circle is:
//The area of your circle is:
//The area of your rectangle is:

console.log("The radius of your circle is: \t\t\t" + radiusCircle + unitOfMeasurement);
console.log("The circumference of your circle is: \t" + circumference + unitOfMeasurement);
console.log("The area of your circle is: \t\t\t" + areaCircle + unitOfMeasurement);
console.log("The area of your rectangle is: \t\t\t" + areaRectangle + unitOfMeasurement);
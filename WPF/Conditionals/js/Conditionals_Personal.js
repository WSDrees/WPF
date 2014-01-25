/**
 * Created by Steve Drees on 1/15/14, Assignment: Conditionals_Personal.
 */
//Do a math problem of user choice

//Calculations
var mathOperator1 = parseFloat(prompt("What mathematical operation would you like to perform? (*, /, +. -)"));                      //User input's what math they want to do
var input1 = parseFloat(prompt("Input your first number:"));
var input2 = parseFloat(prompt("Input your second number:"));

//if Multiplication
if(mathOperator1 == "*"){
    console.log("You entered " + input1+ " times " +input2+ " which equals " +(input1 * input2));
}
//else if Division (/)
else if((mathOperator1 == "/") && (input1 >= input2)){
    console.log("You entered " + input1+ " divided by " +input2+ " which equals " +(input1 / input2) + " with a remainder of " +(input1%input2));
}else if((mathOperator1 == "/") && (input1 <= input2)){
    console.log("You entered " + input1+ " divided by " +input2+ " which equals " +(input2 / input1) + " with a remainder of " +(input2%input1));
}
//else if Addition (+)
else if(mathOperator1 == "+"){
    console.log("You entered " + input1+ " plus " +input2+ " which equals " +(input1 + input2));
}
//else if Subtraction (-)
else if(mathOperator1 == "-"){
    console.log("You entered " + input1+ " minus " +input2+ " which equals " +(input1 - input2));
}
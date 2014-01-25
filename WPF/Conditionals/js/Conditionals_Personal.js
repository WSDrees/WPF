/**
 * Created by Steve Drees on 1/15/14, Assignment: Conditionals_Personal.
 */
//Do a math problem of user choice

//Calculations
var mathOperator1 = prompt("What mathematical operation would you like to perform? (*, /, +. -)");                      //User input's what math they want to do
var input1 = prompt("Input your first number: ");
var input2 = prompt("Input your second number: ");
var input3 = "";
var multiplication = "";
var division = "";
var addition = "";
var subtraction = "";

//if Multiplication
if(mathOperator1 == "*"){
    console.log(input1 * input2)
}
//else if Division (/)
else if(mathOperator1 == "/"){
    console.log(input1 / input2)
}
//else if Addition (+)
else if(mathOperator1 == "+"){
    console.log(input1+ input2)
}
//else if Subtraction (-)
else if(mathOperator1 == "-"){
    console.log(input1 - input2)
}
//else if Modules (%)
//First number has to be larger than the second number in order to return remainder
//VarX >= VarY console.log X%Y
//else if VarX <= VarY console.log Y%X

if(input1 >= input2){

}else {

}
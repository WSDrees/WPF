/**
 * Created by Steve Drees on 1/31/14, Assignment: WPF practical exam.
 */
//Problem 1
//A.	Create a variable named practicalVariable1. Set this variable equal to 1337.
//B.	Create an Array named practicalArray1. Set it the first 4 values equal to 1, 3, 5 & 7
//C.	Create a loop that loops over the practicalArray1 array.
//D.	Each time the loop runs document.write() the value of the array.

var practicalVariable1 = 1337;              //A.
var practicalArray1 = [1,3,5,7];            //B.

for (var i = 0; i<practicalArray1.length; i++)              //C.
{
    document.write(practicalArray1);                        //D.
}


//Create a function (call it problem2()), which takes in 2 variables and concatenates them into 1 string of text then outputs that string.
//Bonus points if your function can concatenate numbers.

function problem2(){
    var input1 = (prompt("Enter your a string of letters: "));          //User input letters
    var input2 = parseInt(prompt("Enter a string of numbers: "));       //User input numbers
    document.write(input1+input2);

}

problem2();                                                             //Call function "problem2" to window


//Create a function (call it problem 3), which takes in a single variable. Use the following code to define the two variables for testing.
//The function should iterate over the variable (which is an array) and should document.write every other element in the array.

function problem3(){
    var mycars = [];
    mycars[0] = "Saab";
    mycars[1] = "Volvo";
    mycars[2] = "BMW";
    mycars[3] = "GM";

    var myBosses = [];
    mycars[0] = "Rick";
    mycars[1] = "Rebecca";
    mycars[2] = "Scott";
    mycars[3] = "Mike";


}


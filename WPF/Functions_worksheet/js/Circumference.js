/**
 * Created by Steve Drees on 1/27/14 Functions_worksheet: Circumference.
 */

//Function name and parameters
function calcCircumference(){                                                               //Declare function calcCircumference
    var pie = 3.141592;                                                                     //Variable for pie
    var radius = parseFloat(prompt("What is the radius of the circle?")).toFixed(2);        //User inputs radius
    var circumference = (2*pie*radius).toFixed(2);                                          //To find the circumference: 2 * pie * user defined radius
    console.log("The circumference of the circle is " +circumference);                      //Output: The circumference of the circle is X
}

calcCircumference();                                                                        //Return function calcCircumference
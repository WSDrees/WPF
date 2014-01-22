/**
 * Created by Steve Drees on 1/15/14 Activity: Grade_Letter_Calculator.
 */
//FullSail Grading scale:
//A+ = 95 - 100%
//A  = 90 - 94%
//B+ = 84 - 89%
//B  = 80 - 84%
//C+ = 76 - 79%
//C  = 73 - 75%
//D  = 70 - 72%
//F  = 0  - 69%
    
//User input
var studentNumberGrade = parseInt(prompt("What was your average for your class? (0 - 100)"));        //User inputs grade percentage
var a = "A+";                                                                                        //Letter grade
var b = "A";                                                                                         //Letter grade
var c = "B+";                                                                                        //Letter grade
var d = "B";                                                                                         //Letter grade
var e = "C+";                                                                                        //Letter grade
var f = "C";                                                                                         //Letter grade
var g = "D";                                                                                         //Letter grade

//Output
//You have X%, which mean you have earned a(n) X in the class
if(studentNumberGrade > 100 || studentNumberGrade < 0){
    console.log("Invalid grade!!!!");
}else if(studentNumberGrade >= 95){
    console.log("You have " +studentNumberGrade+ "%, which mean you have earned a(n) " +a+ " in the class.");
}else if(studentNumberGrade >= 90){
    console.log("You have " +studentNumberGrade+ "%, which mean you have earned a(n) " +b+ " in the class.");
}else if(studentNumberGrade >= 84){
    console.log("You have " +studentNumberGrade+ "%, which mean you have earned a(n) " +c+ " in the class.");
}else if(studentNumberGrade >= 80){
    console.log("You have " +studentNumberGrade+ "%, which mean you have earned a(n) " +d+ " in the class.");
}else if(studentNumberGrade >= 76){
    console.log("You have " +studentNumberGrade+ "%, which mean you have earned a(n) " +e+ " in the class.");
}else if(studentNumberGrade >= 73){
    console.log("You have " +studentNumberGrade+ "%, which mean you have earned a(n) " +f+ " in the class.");
}else if(studentNumberGrade >= 70){
    console.log("You have " +studentNumberGrade+ "%, which mean you have earned a(n) " +g+ " in the class.");
}else
    console.log("You have " +studentNumberGrade+ "%, which mean you have earned a(n) F in the class.");
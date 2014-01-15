/**
 * Created by wsdrees on 1/13/14.
 */

//An array with five weekly grocery totals
var groceryWeeks = ["week1", "week2", "week3", "week4", "week5"]; //Index 0,1,2,3,4
groceryWeeks[0] = parseFloat(prompt("Week total grocery bill:"));
groceryWeeks[1] = parseFloat(prompt("Week total grocery bill:"));
groceryWeeks[2] = parseFloat(prompt("Week total grocery bill:"));
groceryWeeks[3] = parseFloat(prompt("Week total grocery bill:"));
groceryWeeks[4] = parseFloat(prompt("Week total grocery bill:"));

//You have spent a total of $x on groceries over 5 weeks. That is an average of $x per week.
console.log("You have spent a total of $" + parseFloat(groceryWeeks) +
            " on groceries over 5 weeks. That is an average of $" + parseFloat(groceryWeeks)/5 + " per week.");
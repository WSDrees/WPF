/**
 * Created by wsdrees on 1/13/14.
 */

//An array with five weekly grocery totals
var groceryWeeks = [5];
//Prompt the user to input weekly amounts of grocery bills
groceryWeeks[0] = parseFloat(prompt("How much was your weekly grocery bill?"));
groceryWeeks[1] = parseFloat(prompt("How much was your weekly grocery bill?"));
groceryWeeks[2] = parseFloat(prompt("How much was your weekly grocery bill?"));
groceryWeeks[3] = parseFloat(prompt("How much was your weekly grocery bill?"));
groceryWeeks[4] = parseFloat(prompt("How much was your weekly grocery bill?"));

//Add total amount of grocery bills
var totalAmount = parseFloat(groceryWeeks[0] + groceryWeeks[1] + groceryWeeks[2] + groceryWeeks[3] + groceryWeeks[4]);

//Find the average amount spend on grocery bills
var averageAmount = parseFloat(totalAmount/5);

//You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week.
console.log("You have spent a total of $" +totalAmount + " on groceries over 5 weeks." +
            " That is an average of $" +averageAmount+ " per week.");




/**
 * Created by Steve Drees on 1/15/14, Assignment: Expressions_Personal.
 */

//Creating a budget
//User input
var userPay = parseFloat(prompt("How much income do you have a month"));                                                //Monthly income
var rent = parseFloat(prompt("How much a month do you pay for rent?"));                                                 //Rent
var utilities = parseFloat(prompt("How much a month do you pay for utilities (Water + Electric + Gas?"));               //Utilities
var cable = parseFloat(prompt("How much a month do you pay for cable? (0 if none)"));                                   //Cable
var carInsurance = parseFloat(prompt("How much a month is your car insurance? (0 if none)"));                           //Car Insurance if any
var carPayment = parseFloat(prompt("How much is your monthly car payment (0 if none)"));                                //Car Payment if any
var creditCard = parseFloat(prompt("How much is your monthly credit card payment? (0 if none)"));                       //Credit card payment
var groceries = parseFloat(prompt("How much is your monthly grocery bill?"));                                           //Grocery bills
var misc = parseFloat(prompt("How much a month do you spend on miscellaneous items? (EX: Clothes"));                    //Misc
var totalBills = parseFloat(rent + utilities + cable + carInsurance + carPayment + creditCard + groceries + misc);      //Total Bills
var totalSavings = parseFloat(userPay - totalBills);                                                                    //Income - Total bills

//User Output
//You make $X a month, and your monthly bills are $X, therefore, you have $X left over each month.
console.log("You make $" + userPay + " a month, and your monthly bills are $" + totalBills +
            " therefore, you have $" + totalSavings + " left over each month.");
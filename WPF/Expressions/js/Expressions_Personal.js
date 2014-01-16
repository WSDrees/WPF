/**
 * Created by wsdrees on 1/15/14.
 */

//Creating a budget
//User input

var userPay = parseFloat(prompt("How much income do you have a month"));
var rent = parseFloat(prompt("How much a month do you pay for rent?"));
var utilities = parseFloat(prompt("How much a month do you pay for utilities?"));
var cable = parseFloat(prompt("How much a month do you pay for cable?"));
var carInsurance = parseFloat(prompt("How much a month is your car insurance?"));
var carPayment = parseFloat(prompt("How much is your monthly car payment"));
var creditCard = parseFloat(prompt("How much is your monthly credit card payment?"));
var groceries = parseFloat(prompt("How much is your monthly grocery bill?"));
var misc = parseFloat(prompt("How much a month do you spend on miscellaneous items?"));
var totalBills = parseFloat(rent + utilities + cable + carInsurance + carPayment + creditCard + groceries + misc);
var totalSavings = parseFloat(userPay - totalBills);

//User Output
//You make $X a month, and your monthly bills are $X, therefore, you have $X left over each month.
console.log("You make $" + userPay + " a month, and your monthly bills are $" + totalBills +
            " therefore, you have $" + totalSavings + " left over each month.");
/**
 * Created by wsdrees on 1/13/14.
 */

//Number of slices per pizza
var slicesOfPizza = parseInt(prompt("Number of slices per pizza?"));

//Number of pizzas ordered
var totalPizzas = parseInt(prompt("How many pizza's were ordered?"));

//Number of people at the party
var totalAttending = parseInt(prompt("How many people are at the party?"));

//Number of pizza's * Number of slices / Number of people
var totalSlices = slicesOfPizza * totalPizzas;
var averageSlice = parseFloat(totalSlices/totalAttending);

//"Each person at X slices of pizza at the party
console.log("Each person ate " + parseFloat(averageSlice) + " slices of pizza at the party");


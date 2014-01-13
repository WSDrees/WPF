/**
 * Created by wsdrees on 1/13/14.
 */

//Number of slices per pizza
var slicesOfPizza = parseInt(prompt("Number of slices per pizza?"));

//Number of pizzas ordered
var totalPizzas = parseInt(prompt("How many pizza's were ordered?"));

//Number of people at the party
var totalAttending = parseInt(prompt("How many people are at the party?"));

//Number of pizza's * Number of slices
var totalSlices = slicesOfPizza * totalPizzas;

//Number of slices Sparky gets to eat
var sparkyEat = totalSlices%totalAttending;

//"Sparky got x slices of pizza
console.log("Sparky got " + sparkyEat + " slices of pizza");



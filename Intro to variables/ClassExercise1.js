/**
 * Created by wsdrees on 1/8/14.
 */
var Rent= parseInt(prompt("How much do you pay for Rent?"));
var a = "Your rent is: $"
var Utilities= parseFloat(prompt("How much is your utility Bill?"));
var b  = "Your utilities are: $"
var Cable=parseInt(prompt("How much do you pay for Cable?"));
var c = "Your cable is: $"
var z = "All together you are going to pay: $";
var x = "We just added up your monthly bills";

console.log(a, Rent);
console.log(b, Utilities);
console.log(c, Cable);
console.log(z, parseFloat(Rent + Utilities + Cable));
console.log(x);
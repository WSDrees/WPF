/**
 * Created by wsdrees on 1/13/14.
 */

//Description of item
var itemDesc = prompt("What is the item description?");

//Original price
var originalPrice = parseFloat(prompt("What is the original price of the item?"));

//Discount percentage
var discountPercent = prompt("What is the discount percentage?");
var totalDiscount = parseFloat(discountPercent/100).toFixed(2);
var priceWithDiscount = parseFloat(originalPrice * totalDiscount);
var priceAfterDiscount = parseFloat(originalPrice - priceWithDiscount).toFixed(2);

//Sales tax percentage
var salesTax = parseFloat(prompt("How much is sales tax?"));
var totalTax = parseFloat(salesTax/100).toFixed(2);
var priceWithTax = parseFloat(priceAfterDiscount * totalTax).toFixed(2);
var totalPrice = parseFloat(priceAfterDiscount + priceWithTax).toFixed(2);

//"Your x was originally $x, but after a x%discount, it is now $x without tax, and $x with tax
console.log("Your " + itemDesc + " was originally $" + originalPrice + ", but after a %" + discountPercent + ", it is now $"
            + priceAfterDiscount + " without tax, and $" + totalPrice + " with tax");

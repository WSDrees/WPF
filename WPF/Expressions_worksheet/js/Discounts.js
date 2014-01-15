/**
 * Created by wsdrees on 1/13/14.
 */

//Description of item
var itemDesc = prompt("What is the item description?");

//Original price
var originalPrice = parseFloat(prompt("What is the original price of the item?"));

//Discount percentage
var discountPercent = prompt("What is the discount percentage?");

//Percentage process
var totalDiscount = parseFloat(discountPercent/100);
var priceWithDiscount = parseFloat(originalPrice * totalDiscount);
var priceAfterDiscount = parseFloat(originalPrice - priceWithDiscount);

//Sales tax percentage
var salesTax = parseFloat(prompt("How much is sales tax?"));

//Percentage process
var totalTax = parseFloat(salesTax/100);
var priceWithTax = parseFloat(priceAfterDiscount * totalTax);
var totalPrice = parseFloat(priceAfterDiscount + priceWithTax);

//Output
//"Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax
console.log("Your " + itemDesc + " was originally $" + originalPrice + ", but after a " + discountPercent + "%, it is now $"
            + priceAfterDiscount.toFixed(2) + " without tax, and $" + totalPrice.toFixed(2) + " with tax.");

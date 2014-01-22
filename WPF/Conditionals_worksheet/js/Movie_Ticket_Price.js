/**
 * Created by Steve Drees on 1/15/14 Activity: Movie_Ticket_Price.
 */

//Original price = $12.00
//If your 55 and older || under 10 years old || if the customer is seeing a movie between 1500 and 1700 they get a price of $7.00
var ticketPrice = "$12.00";
var discountTicketPrice = "$7.00";
var age = parseInt(prompt("How old are you?"));
var time = parseInt(prompt("What time is is?"));
var amOrPm = (prompt("Is it morning or afternoon (M = morning, A = Afternoon)")).toUpperCase();

//Output: The ticket price is X
if(age >= 55 || age <= 10){
    console.log("The ticket price is " +discountTicketPrice);
}else if(time >= 3 && time <= 5 && amOrPm == "A"){
    console.log("The ticket price is " +discountTicketPrice);
}else
    console.log("The ticket price is " + ticketPrice);
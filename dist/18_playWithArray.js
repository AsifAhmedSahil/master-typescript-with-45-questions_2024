"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let countryToVisit = ['china', 'japan', 'europe', 'australia', 'germany'];
// • Print your array in its original order.
console.log("print original order:", countryToVisit);
// • Print your array in alphabetical order without modifying the actual list.
console.log("print alphabitical order without changing real one:", [...countryToVisit].sort());
// • Show that your array is still in its original order by printing it.
console.log("print original order:", countryToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("print reverse alphabitical order without changing real one:", [...countryToVisit].reverse());
// • Show that your array is still in its original order by printing it again.
console.log("print original order:", countryToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("reverse original order:", countryToVisit.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to original order:", countryToVisit.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("sort original order:", countryToVisit.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("again reverse sorted array:", countryToVisit.reverse());

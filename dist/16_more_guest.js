"use strict";
// question
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// make a list of guest
let guestlist = ['Sahil', 'asif', 'Towsif', 'shishir'];
// to know all  that we find a bigger table
console.log(`Good News Guys, we find a Bigger table for dinner`);
// out one guest
let dontCome = guestlist[1];
console.log(`${dontCome} aste parbe na`);
// fillup empty space
guestlist.splice(1, 1, 'sollo');
// add a new guest in the begging of the array
guestlist.unshift('sanji');
// add a new guest in the last of the array
guestlist.push('surobi');
// add a new guest in the middle of the array
let middleIndex = Math.floor(guestlist.length / 2);
// add one guest in  the middle of the array
guestlist.splice(middleIndex, 0, 'tuntuni');
// send invitations to the all guest
guestlist.forEach((guest) => console.log(`Assalamualaikum, ${guest} would you like to dinner with me tommorrow?`));

"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
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
// 17 solution starts here================>
console.log("unfortunately our table wont arrive on time so i can only invite two guest!");
while (guestlist.length > 2) {
    let removeGuest = guestlist.pop();
    console.log(`Sorry, ${removeGuest}! i cant invite you for the dinner...`);
}
// send invite msg for rest two lucky guest
guestlist.forEach((guest) => console.log(`WoW, ${guest}. You are lucky. i can invite you for the dinner...`));
// empty the array 
guestlist.pop();
guestlist.pop();
console.log("Empty List", guestlist);

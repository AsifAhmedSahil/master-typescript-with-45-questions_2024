"use strict";
// question: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let carList = ['Honda civic', 'Ferrary', 'Audi'];
carList.forEach((model) => {
    console.log(`I would like to own a ${model} Super Car.`);
});
// question: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList = ['sahil', 'asif', 'salim'];
guestList.forEach((oneGuest) => {
    console.log(`hello, ${oneGuest}, would you like to dinner with me?`);
});

"use strict";
// question: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
const friendName = ["sahil", "asif"];
friendName.forEach((value) => {
    console.log(value);
});
// question:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
friendName.forEach((value) => {
    console.log(`hello ${value} ,how are you`);
});

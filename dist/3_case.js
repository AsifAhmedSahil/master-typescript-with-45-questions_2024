"use strict";
// question: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personeName = "Asif ahmed sahil";
console.log(personeName.toUpperCase());
console.log(personeName.toLocaleLowerCase());
console.log(personeName.replace(/\b\w/g, (char) => char.toUpperCase()));

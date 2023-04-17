"use strict";
let myName = "Mitch Cuckovich";
const age = 25;
let birthday = "January 24";
let pineapplePizza = false;
let lifeEvents = [
  "I was born in Troy, Michigan.",
  "I went to Hope College.",
  "I participated in junior olympics when I was 10 years old.",
  "I love to be in nature.",
];

if (pineapplePizza === true) {
  console.log(
    `My name is ${myName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${myName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let stopLoop = true;
let counter = 0;
let randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber);
while (stopLoop) {
  counter++;

  if (randomNumber != 5) {
    console.log(`${randomNumber} != to 5`);
    randomNumber = Math.floor(Math.random() * 10) + 1;
  } else {
    stopLoop = false;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
  }
}

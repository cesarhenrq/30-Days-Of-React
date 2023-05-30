//Exercise: 1
const countries = require("./countries");
const webTechs = require("./web_techs");

console.log(countries);
console.log(webTechs);

//Exercise: 2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

words = text.split(",").join().split(".").join().split(" ");

console.log(words);
console.log(words.length);

//Exercise: 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");

shoppingCart.push("Sugar");

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";

console.log(shoppingCart);

//Exercise: 4
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

console.log(countries);

//Exercise: 5
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
}

//Exercise: 6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

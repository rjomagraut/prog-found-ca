// question 1
var car = 'Dodge';
// your answer for question 1 goes here

// question 2
var person = {
  name: 'André',
  age: 32
};
// your answer for question 2 goes here

// question 3
var outOfStock = true;
if (outOfStock === true) {
  console.log('Out of stock');
} else {
  console.log('In stock');
}
// your answer for question 3 goes here

// question 4
var numbers = [4, 7, 9, 12, 14];
// your answer for question 4 goes here

// question 5
for (var nuts = 15; nuts < 26; nuts++) {
  console.log(nuts);
}
// your answer for question 5 goes here

// question 6
for (var nuts = 15; nuts < 26; nuts++) {
  if (nuts === 20) {
    console.log(nuts);
  }
}
// your answer for question 6 goes here

// question 7
var cars = [
  {
    model: 'Nissan Leaf',
    horespower: 150,
    fourwheeldrive: false
  },
  {
    model: 'Jaguar I-PACE',
    horespower: 400,
    fourwheeldrive: true
  }
];
for (var i = 0; i < cars.length; i++) {
  console.log(cars[i].horespower);
  console.log(cars[i].fourwheeldrive);
}
// your answer for question 7 goes here

// question 8
function whatIDontLike(dislike) {
  console.log("I don't like " + dislike);
}
whatIDontLike('cheaters');
// your answer for question 8 goes here

// question 9
function subtract(number1, number2) {
  var sum = number1 - number2;
  console.log(sum);
}
subtract(10, 7);
// your answer for question 9 goes here

// question 10
var arrayFunction = [];
function functionArray(together) {
  arrayFunction.push(together);
  console.log(together);
  console.log(arrayFunction);
}
functionArray('The year 2020 sucks');
// your answer for question 10 goes here

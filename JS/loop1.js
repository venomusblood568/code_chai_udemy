/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
let sum = 0;
let number = 1;
while(number < 6){
    sum += number;
    number++;
}
console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = [];
let num = 5;
while(num >= 1){
    countdown.push(num)
    num--;
}
console.log(countdown)

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/
// for this question we will use browser

// let teaCollection = [];
// let tea
// do {
//   tea = prompt(`enter your tes type and type stop for exit`);
//   if (tea != "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea != "stop");

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let total = 0;
let add = 1; 
do {
    total += add;
    add++;
} while (add < 4);
console.log(total)

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 
and stores the results in a new array named `multipliedNumbers`.
*/

let element = [2,4,6];
let multipliedNumbers = [];
for(let i = 0; i < element.length ; i++){
    multi = element[i] * 2;
    multipliedNumbers.push(multi);
}
console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
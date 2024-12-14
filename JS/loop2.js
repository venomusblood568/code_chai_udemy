/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let menu = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for(let i = 0; i < menu.length;){
    if(menu[i] !== "chai"){
        selectedTeas.push(menu[i]);
        i++;
    }else if(menu[i] === "chai"){
        break;
    }
}
// console.log(selectedTeas);

 /* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for(let i = 0; i < cities.length; i++){
    if(cities[i] !== 'Paris'){
        visitedCities.push(cities[i]);
    }
    else if(cities[i] === 'Paris'){
        continue
    }
}
console.log(visitedCities)

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
   for-of
   for (variable of iterable)
  statement
*/
let array = [1, 2, 3, 4, 5];
let smallNumbers = [];
for( num of array){
    if(num === 4){
        break
    }
    smallNumbers.push(num);
}
console.log(smallNumbers)


/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

let teamenu = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = []
for (tea of teamenu) {
    if(tea === "herbal tea"){
        continue
    }
    preferredTeas.push(tea);
}
console.log(preferredTeas)

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/

let citiesPopulation = {
    "New York": 8400000,
  London: 8900000,
  Paris: 2200000,
  Berlin: 3500000,
};
let newcitilist = {}
for(const city in citiesPopulation){
    if(city === "Berlin"){
        break
    }
    newcitilist[city] = citiesPopulation[city]; 
}
console.log(newcitilist)

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
//its an object so be carefull
newlargeCities = {};
for(check in worldCities){
    if(worldCities[check] < 3000000){
        continue
    }
    newlargeCities[check] = worldCities[check]
}
console.log(newlargeCities)

/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaCollection.forEach((tea)=>{
    if(tea === "chai"){
        return;
    }
    availableTeas.push(tea);
})
console.log(availableTeas)

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let favcitites = ["Berlin", "Tokyo", "Sydney", "Paris"];
let checkcities = [];
favcitites.forEach((i) => {
    if(i === "Sydney" || i === "sydney"){
        return
    }
    checkcities.push(i);
})  
console.log(checkcities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let array1 = [2, 5, 7, 9];
let doubledNumbers = [];
for(let i = 0; i < array1.length; i++){
    if(array1[i] == '7'){
        continue;
    }
    else{
        doubledNumbers.push(array1[i] * 2);
    }
}
console.log(doubledNumbers)

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let chaitypes = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const i of chaitypes) {
    if(i.length > 10){
        break;
    }
    shortTeas.push(i)
}   
console.log(shortTeas);

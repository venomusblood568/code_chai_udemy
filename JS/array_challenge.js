/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea","black tea","oolang tea"]
console.log(teaFlavors[0])

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["london","tokyo","paris","new york"]
favoriteCity = cities[2];
console.log(favoriteCity)

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea","white tea","masala chai"]
teaTypes[1] = "jasmine tea";
console.log(teaTypes)

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai","Sydney"]
//citiesVisited.push = "berlin";
citiesVisited.push("berlin");
console.log(citiesVisited)

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai","iced tea","matcha","earl grey"]
lastOrder =teaOrders.pop()
console.log(teaOrders);
console.log(lastOrder);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea","oolong tes","chai"];
let softCopyTeas = popularTeas;
console.log(popularTeas);
console.log(softCopyTeas)
popularTeas.pop();
popularTeas.pop();
console.log(popularTeas);
console.log(softCopyTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

const topCities = ["Berlin","Singapore","New york"]
const hardCopyCities = [...topCities];
console.log(topCities);
console.log(hardCopyCities);
topCities.pop();
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

const europeanCities = ["paris","Rome",]
const asianCities = [" Tokyo","Bankok"]
const worldCities = europeanCities.concat(asianCities);
// const worldCities = europeanCities + asianCities;
console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

const tesMenu = ["Masala chai","oolang tea","green tea","earl grey"]
const menuLength = tesMenu.length
console.log(menuLength);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

const cityBucketList = ["Kyoto","London","cape Town","Vancouver"];
const isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
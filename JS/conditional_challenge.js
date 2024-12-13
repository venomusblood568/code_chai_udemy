//check if a number is greater than another number

let num1 = 9;
let num2 = 2;
if(num1 > num2){
    //console.log(`${num1} is greater than ${num2}`);
}else{
    //console.log(`${num2} is greater than ${num1}`);
}

//check if a number or string is equal to another string/number
let num_a = 9;
let num_b = 9;
if(num_a = num_b){
    // console.log(`${num_a} is equal to ${num_b}`)
}else{
    // console.log(`${num_a} is not equal to ${num_b}`);
}

//checking if a variable is a number or not;
let number = "78";
if (typeof number === 'number'){
   //console.log("its a number")
} else {
   //console.log("not a number");
}

// checking if a boolean value is true or false;

let gametime = true;
if (gametime){
    //console.log("yes lets play!!!!!")
}
else{
    //console.log("nope study!!")
}

//check if the array is empty or not
let items = ["chicken"]
if(items.length === 0){
    console.log("Array is empty!!")
}
else{
    console.log("Array is NOT empty!!");
}
function Drink(name){
    if(!new.target){
        throw new Error("DRINK MUST BE CALLED WITH NEW KEYWORD ITS IMPORTANT HUMAN")
    }
    this.name = name;
}

let chai = new Drink("chai");
let lemon_tea = Drink("lemon tea");
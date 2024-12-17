//example 1
document
    .getElementById("changetextbutton")
    .addEventListener("click", function(){
        let paragraph = document.getElementById("myparagraph");
        paragraph.textContent = "text is changed"
        console.log(paragraph);
});

//example 2
document
    .getElementById("hightname")
    .addEventListener("click",function(){
    let citieslist = document.getElementById("list")
    citieslist.firstElementChild.classList.add("highlight")    
})

//example 3
document
    .getElementById("changeOrder")
    .addEventListener("click", function () {
    let coffeetype = document.getElementById("coffeeType");
    coffeetype.textContent = "ice coffee";
    coffeetype.style.backgroundColor = "azure";
});

//example4
document
    .getElementById("additems")
    .addEventListener("click", function(){
        //first create item
        let newItems = document.createElement("li")
        newItems.textContent = "EGGS"
        //now lets add item
        document.getElementById("shoppingList").appendChild(newItems)
    })

//example5
document
  .getElementById("removelasttask")
  .addEventListener("click", function () {
    let removeListelement = document.getElementById("tasklist");
    removeListelement.lastChild.remove();
  });
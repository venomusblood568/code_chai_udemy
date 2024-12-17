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

//example6
document
  .getElementById("Hoverme")
  .addEventListener("mouseover", function () {
    alert("coffee pi lo guys!!!!!")
  });

//example7
document
.getElementById("teaList")
.addEventListener("click",function(event){
    if(event.target && event.target.matches(".teaitem")){
        alert("you selected: " + event.target.textContent)
    }
})

//example 8
document
    .getElementById("feedbackForm")
    .addEventListener("submit", function(event){
        event.preventDefault();
        let feedback = document.getElementById("feedbackInput").value;
        document.getElementById(
          "FeedbackDisplay"
        ).textContent = `Feedback is: ${feedback}`;
    })

//example 9
document
    .addEventListener("DOMContentLoaded",function(){
        //added 3sec delay to see the actual change
        setTimeout(function(){
            document.getElementById("domStatus").textContent =
              "DOM FULLY LOADED";
        },3000)
        
    })

//example 10
document
    .getElementById("toggleHighLight")
    .addEventListener("click",function(){
        let descriptionText = document.getElementById("descriptiontext");
        descriptionText.classList.toggle("highlight");
    })
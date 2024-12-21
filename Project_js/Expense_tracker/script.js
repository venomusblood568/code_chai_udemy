// load dom content 
// take refer of all the content
// add into the storage like array 
// add the local storage so i dont lose data when i referesh
// then how can i render
// how can i update the total
// how can i add delete button

// e.preventDefault() is a JavaScript method that stops the browser's default action for an event, commonly used in forms, links, and other event handlers.


document.addEventListener('DOMContentLoaded',() =>{
  let expense_form = document.getElementById("expense-form");
  let expense_name = document.getElementById("expense-name");
  let expense_amount = document.getElementById("expense-amount");
  let expense_list = document.getElementById("expense-list");
  let total_amount_display = document.getElementById("total-amount");

  let Expenses = JSON.parse(localStorage.getItem("Expenses")) || [];
  let total_amount = calculatetotal();

  // rendering the expenses
  renderExpenses();
  
  expense_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expense_name.value.trim();
    //amount will string but we want number so we are pasring it
    const amount = parseFloat(expense_amount.value.trim());

    //check if the number is empty or name etc
    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };

      Expenses.push(newExpense);
      savestate();
      updatetotal();
      renderExpenses();

      //clear the input box again
      expense_name.value = "";
      expense_amount.value = "";
    }
  });

  function calculatetotal() {
    //redue method to find total sum
    return Expenses.reduce((sum, Expenses) => sum + Expenses.amount, 0);
  }

  function updatetotal() {
    total_amount = calculatetotal();
    total_amount_display.textContent = total_amount.toFixed(2);
  }

  function renderExpenses() {
    expense_list.innerHTML = ""; // Clear the current list
    Expenses.forEach((expense) => {
      const li = document.createElement("li"); // Dynamically create `li` element
      li.innerHTML = `
      ${expense.name} - $${expense.amount.toFixed(2)}
      <button data-id="${expense.id}" class="delete-button">Delete</button>
    `;
      expense_list.appendChild(li);
    });
  }

  //delete function
  expense_list.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      Expenses = Expenses.filter((expense) => expense.id !== expenseId);

      savestate();
      renderExpenses();
      updatetotal();
    }
  })

  //function for local storage
  function savestate() {
    localStorage.setItem("Expenses", JSON.stringify(Expenses));
  }
})
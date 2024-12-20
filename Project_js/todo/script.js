document.addEventListener('DOMContentLoaded', () =>{
  //first let's grab element
  const input = document.getElementById("todo-input");
  const add_btn = document.getElementById("add-task-btn");
  const todolist = document.getElementById("todo-list");
  const total_count = document.getElementById("total-tasks");
  const completed_count = document.getElementById("completed-tasks");
  const uncompleted_count = document.getElementById("uncompleted-tasks");
  
  //now we want to store the task => we will use array for that
  //we are geting data from the local storage and then parsing it again
  let tasks =  JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task))
  updatedCounter()//update the counter after rendering

  //then we want to listen the event that will be click
  add_btn.addEventListener("click", () => {
    const tasktext = input.value.trim(); //for removing extra space from last
    //check if the we just added task without adding the text
    if (tasktext === "") return;

    const newtask = {
      id: Date.now(),
      text: tasktext,
      completed: false,
    };

    tasks.push(newtask);
    savetask(newtask);
    renderTask(newtask);
    updatedCounter(); //update the counter 
    input.value = ""; // simply clear the input box once task is added
  });

  //for rending the task as soon as things load up
  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>`;

    //cross line when we are done
    li.addEventListener('click', (e) =>{
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      savetask();
      updatedCounter(); //update the counter when task done
    })

    //delete button
    li.querySelector('button').addEventListener('click', (e) =>{
      e.stopPropagation(); //prevent toggle from firing and save overflow
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      savetask();
      updatedCounter(); //update the counter after delete button
    })

    todolist.appendChild(li)
  }

  //this store the data in localstorage
  function savetask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  //total, comeplete and uncompleted count
  function updatedCounter(){
    const totaltasks = tasks.length;
    const completedtasks = tasks.filter((task) => task.completed).length;
    const uncompletedtask = totaltasks - completedtasks;

    total_count.textContent = `Total: ${totaltasks}`;
    completed_count.textContent = `Completed: ${completedtasks}`;
    uncompleted_count.textContent = `Uncompleted: ${uncompletedtask}`;
  }
})
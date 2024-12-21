const fs = require("fs");
const filepath = "./tasks.json";

//step3.1 => this the method for loading the task
// Function `loadtask` is responsible for loading tasks from a file.
const loadtask = () => {
  try {
    // Read the file specified by `filepath` synchronously.
    // `dataBuffer` will contain the raw binary data of the file.
    const dataBuffer = fs.readFileSync(filepath);
    
    // Convert the binary data into a string (JSON format).
    const dataJSON = dataBuffer.toString();
    
    // Parse the JSON string into a JavaScript object and return it.
    return JSON.parse(dataJSON);
  } catch (error) {
    // If any error occurs (e.g., file not found, invalid JSON), return an empty array.
    // This ensures the application doesn't crash and handles the error gracefully.
    return [];
  }
};

//step 3.2 => now we have the loaded task we want to save that
const savetask = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filepath,dataJSON);
}

//step 3 => now lets make first add function
const addtask = (task) =>{
    //step 3.1 => need to look method to make load function
    const tasks = loadtask();
    tasks.push({task}); //simply push but in object format so manipulation can be done easily
    //step 3.2 => need to save method
    savetask(tasks); 
    console.log("Task Added", task);
}

//step 4 => now we want to see list
const listtasks = () =>{
    //load everything from the loadtask
    const tasks = loadtask();
    //now iterate over the everything and just console log
    // for that we will use loops & we are increment by one 
    tasks.forEach((task,index) => console.log(`${index + 1} - ${task.task}`))
    
}

//step 5 => remove task from the list
// Function to remove a task based on its index
const removetask = (index) => {
    // Load existing tasks from the file
    const tasks = loadtask();

    // Check if the provided index is within the valid range
    // The condition ensures the index is greater than 0 (user-friendly numbering starts at 1)
    // and less than or equal to the total number of tasks
    if (index > 0 && index <= tasks.length) {
        // Remove the task at the specified index (adjusted for 0-based array indexing)
        // `splice` is used to remove the element and also returns the removed elements
        const removed = tasks.splice(index - 1, 1);

        // Save the updated tasks list back to the file
        savetask(tasks);

        // Log a message to inform the user about the removed task
        // Access `removed[0].task` because `splice` returns an array of removed elements
        console.log("Task removed: ", removed[0].task);
    } else {
        // If the index is invalid or out of range, display an error message
        console.log("Invalid number or Out of bound");
    }
};

//step  6 => remove last task from the list
const deletetask = () =>{
    const tasks = loadtask();
    tasks.pop();
    savetask(tasks);
    console.log("last element deleted")
}

//step2 => we want to grab the argument and command from the terminal
// `command` will store the third argument passed when running the script (e.g., node script.js add)
const command = process.argv[2];

// `argument` will store the fourth argument passed (e.g., node script.js add Task1)
const argument = process.argv[3];


//step 1 => what will happen for differnt command
if(command  === "add"){
    addtask(argument);
}else if(command === "list"){
    listtasks();
}else if(command === "remove"){
  //remove certain argument
  //The function call removetask(parseInt(argument)) is used to ensure that the value of argument is converted to an integer before passing it to the removetask function.
  removetask(parseInt(argument));
}else if(command === "delete"){ //remove the last element
    deletetask(argument); 
}else{
    console.log("Command not found !");
}
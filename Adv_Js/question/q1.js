function simulateAsyncTask() {
  console.log("Task started");
  setTimeout(() => {
    console.log("Task finished");
  }, 2000);
}

function simulateMultipleTasks() {
  setTimeout(() => {
    console.log("Task 1 finished");
  }, 1000);
  setTimeout(() => {
    console.log("Task 2 finished");
  }, 2000);
  setTimeout(() => {
    console.log("Task 3 finished");
  }, 3000);
}

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = "Fetched data";
    callback(data);
  }, 2000);
}

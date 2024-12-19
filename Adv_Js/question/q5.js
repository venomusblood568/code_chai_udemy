// Task 1
function fetchUser() {
  // Simulate fetching user data after 1 second
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

function fetchPosts() {
  // Simulate fetching posts data after 1 second
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts data");
    }, 1000);
  });
}

async function fetchAllData() {
  // Use Promise.all to fetch both user and posts data concurrently
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);

  console.log(user); // Output: User data
  console.log(posts); // Output: Posts data
}

// Task 2
function fetchSuccess() {
  // Simulate successful fetch operation after 1 second
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fetchSuccess");
    }, 1000);
  });
}

function fetchFailure() {
  // Simulate failed fetch operation after 1 second, which rejects the promise
  return new Promise((_, reject) =>
    setTimeout(() => reject("Error occurred"), 1000)
  );
}

async function handlePromises() {
  try {
    // Use Promise.all to run both promises concurrently, but handle the error if one fails
    const [success, failure] = await Promise.all([
      fetchSuccess(),
      fetchFailure(),
    ]);
    console.log(success); // This line will not execute because of the rejection from fetchFailure()
  } catch (error) {
    // This block catches the rejection error and logs it
    console.log(error); // Output: Error occurred
  }
}

// Task 3
function fetchWithTimeout(promise, timeout) {
  // Create a timeout promise that rejects after the specified timeout
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout exceeded"), timeout)
  );

  // Use Promise.race to return the result of whichever promise settles first (either fetch or timeout)
  return Promise.race([promise, timeoutPromise]);
}

function fetchData() {
  // Simulate fetching data after 3 seconds
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched"), 3000)
  );
}

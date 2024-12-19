function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve({name:"DUCK",url:"https://google.com"})
        },3000)
    })
}

async function getUserData(){
    try {
        console.log("Fetching User Data");
        const UserData = await fetchData();
        console.log("User data fetched successfully")
        console.log("User Data:",UserData)
    } catch (error) {
        console.log("Error Fetching data", error);
    }
}

getUserData()
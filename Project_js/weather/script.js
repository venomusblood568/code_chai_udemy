document.addEventListener("DOMContentLoaded" , () =>{
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = ""; //env variables

  getWeatherBtn.addEventListener('click', async() => {
    const city = cityInput.value.trim();
    if(!city) return;

    /* IMP NOTE 
    > it may throw an error
    > server/database is always in another continent
    */
    try {
     const weatherData =  await fetchWeatherData(city); 
     displayWeatherData(weatherData);
    } catch (error) {
        showError()
    }
    
  })

  //get the data
  async function fetchWeatherData(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url); //just wait for response then console log
    console.log(response)
    if(!response.ok){
      throw new Error("City not found sir!");
    }
    const data = await response.json()
    return data
  }

  //display
  function displayWeatherData(data){
    console.log(data)
    const{name,main,weather} = data;
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature : ${main.temp}`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

    //for hidden class how to hide and unhide
    //unlock the display
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  //error
  function showError(){
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

})
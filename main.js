document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
      getWeather(city);
    } else {
      displayError("Please enter a city name.");
    }
  });
  
  async function getWeather(city) {
    const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        displayWeather(data);
        clearError();
      } else {
        displayError(data.message);
      }
    } catch (error) {
      displayError("Unable to fetch weather data. Please try again later.");
    }
  }
  
  function displayWeather(data) {
    const cityName = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
  
    document.getElementById("cityName").textContent = `Weather in ${cityName}`;
    document.getElementById("temperature").textContent = `Temperature: ${temp}°C`;
    document.getElementById("description").textContent = `Description: ${description}`;
    document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
  }
  
  function displayError(message) {
    document.getElementById("error-message").textContent = message;
    document.getElementById("weatherResult").style.display = 'none';
  }
  
  function clearError() {
    document.getElementById("error-message").textContent = '';
    document.getElementById("weatherResult").style.display = 'block';
  }
  
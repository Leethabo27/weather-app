const apiKey = "2c95a04203o5bat4acd327d7c89f7e04"; // Replace with your actual API key
const form = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const cityElement = document.querySelector("#current-city");
const timeElement = document.querySelector("#current-time");
const tempElement = document.querySelector("#current-temp");
const iconElement = document.querySelector("#current-icon");
const windElement = document.querySelector("#wind-speed");
const humidityElement = document.querySelector("#humidity");
const forecastElement = document.querySelector("#forecast");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = searchInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});


async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    updateCurrentWeather(data);
    fetchForecast(city);
  } catch (error) {
    alert("Error fetching data. Please try again.");
  }
}


function updateCurrentWeather(data) {
  cityElement.textContent = data.city;
  timeElement.textContent = new Date().toLocaleString();
  tempElement.textContent = `${Math.round(data.temperature.current)}°C`;
  windElement.textContent = `Wind: ${data.wind.speed} km/h`;
  humidityElement.textContent = `Humidity: ${data.temperature.humidity}%`;

  
  iconElement.innerHTML = `<img src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${data.condition.icon}.png" alt="Weather Icon" />`;
}


async function fetchForecast(city) {
  try {
    const response = await fetch(
      `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Forecast data not found");
    }

    const forecastData = await response.json();
    updateForecast(forecastData.daily);
  } catch (error) {
    forecastElement.innerHTML = "<p>Error fetching forecast data.</p>";
  }
}


function updateForecast(forecast) {
  forecastElement.innerHTML = ""; 

  forecast.slice(0, 5).forEach((day) => {
    const dayElement = document.createElement("div");
    dayElement.classList.add("forecast-day");

    const dayName = new Date(day.time * 1000).toLocaleDateString("en-US", {
      weekday: "short",
    });

    
    const iconUrl = `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${day.condition.icon}.png`;

    dayElement.innerHTML = `
      <p>${dayName}</p>
      <img src="${iconUrl}" alt="Weather Icon" />
      <p>${Math.round(day.temperature.maximum)}° / ${Math.round(day.temperature.minimum)}°</p>
    `;

    forecastElement.appendChild(dayElement);
  });
}






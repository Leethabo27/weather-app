<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>My Weather Application</title>
  </head>
  <body>
    <div class="weather-app">
      <header>
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            id="search-input"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <div class="current-weather">
          <h1 id="current-city">Paris</h1>
          <p id="current-time">Saturday 23:41, drizzle</p>
          <p id="current-details">
            Humidity: <span id="humidity">92%</span>, Wind:
            <span id="wind-speed">8.75 km/h</span>
          </p>
          <div class="current-temperature">
            <span id="current-icon">🌧️</span>
            <span id="current-temp">7</span>
            <span class="unit">°C</span>
          </div>
        </div>
        <div class="forecast" id="forecast">
          <div class="forecast-day">
            <p>Sat</p>
            <span>🌧️</span>
            <p>12° / 7°</p>
          </div>
          <div class="forecast-day">
            <p>Sun</p>
            <span>⛅</span>
            <p>8° / 7°</p>
          </div>
          <div class="forecast-day">
            <p>Mon</p>
            <span>☁️</span>
            <p>8° / 5°</p>
          </div>
          <div class="forecast-day">
            <p>Tue</p>
            <span>🌦️</span>
            <p>7° / 5°</p>
          </div>
          <div class="forecast-day">
            <p>Wed</p>
            <span>🌦️</span>
            <p>7° / 5°</p>
          </div>
        </div>
      </main>
      <footer>
        <p>
          This project was coded by
          <a href="https://github.com/Leethabo27" target="_blank">Lethabo Semenya</a>
          and is
          <a href="https://github.com/Leethabo27/my-weather-app" target="_blank">on GitHub</a>
          and
          <a href="https://chimerical-jalebi-fdaaef.netlify.app/" target="_blank">hosted on Netlify</a>.
        </p>
        <p>
          View the full source code on 
          <a href="https://github.com/Leethabo27/my-weather-app" target="_blank">GitHub</a>.
        </p>
      </footer>
    </div>
    <script src="index.js"></script>
  </body>
</html>


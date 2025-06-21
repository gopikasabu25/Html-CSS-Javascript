document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('fetchWeather').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) return alert("Please enter an Indian city");

    // ✅ Use apiKey declared in config.js
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${"use your api"}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.cod !== 200) throw new Error(data.message);

      document.getElementById('weatherResult').innerHTML = `
        <h2>${data.name}, India</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>☁️ Condition: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} km/h</p>
      `;
    } catch (error) {
      document.getElementById('weatherResult').innerHTML = `
        <p style="color:red;">Error: ${error.message}</p>
      `;
    }
  });
});

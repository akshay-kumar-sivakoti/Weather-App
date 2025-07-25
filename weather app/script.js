const apiKey = "3428ecfec31aba3c07476afd5e485ced"; // Replace with your OpenWeatherMap API key

document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city name");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      document.getElementById(
        "location"
      ).textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById(
        "temperature"
      ).textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
      document.getElementById(
        "description"
      ).textContent = `Weather: ${data.weather[0].description}`;
      document.getElementById(
        "humidity"
      ).textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById(
        "wind"
      ).textContent = `Wind Speed: ${data.wind.speed} m/s`;
    })
    .catch((err) => {
      alert(err.message);
    });
});

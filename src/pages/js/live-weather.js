; // =====================================
// CLOUDY.PK - LIVE WEATHER API - FINAL FIX
// =====================================

const weatherSearchForm = document.getElementById("weatherSearchForm");
const citySearch = document.getElementById("citySearch");
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");
const weatherResult = document.getElementById("weatherResult");
const searchButton = document.getElementById("searchButton");

function getWeatherCondition(code) {
    const conditions = {
        0: "Clear Sky", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
        45: "Foggy", 51: "Light Drizzle", 61: "Light Rain", 63: "Moderate Rain",
        65: "Heavy Rain", 71: "Light Snow", 95: "Thunderstorm"
    };
    return conditions[code] || "Weather info unavailable";
}

weatherSearchForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const city = citySearch.value.trim();
    if (!city) { showError("Please enter a city name."); return; }
    
    loadingMessage.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    weatherResult.classList.add("hidden");
    searchButton.disabled = true;
    searchButton.textContent = "Searching...";

    try {
        const locationResponse = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
            params: { name: city, count: 1, language: "en", format: "json" }
        });
        if (!locationResponse.data.results || locationResponse.data.results.length === 0) {
            throw new Error("City not found.");
        }
        const location = locationResponse.data.results[0];
        const weatherResponse = await axios.get("https://api.open-meteo.com/v1/forecast", {
            params: {
                latitude: location.latitude, longitude: location.longitude,
                current: "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
                timezone: "auto"
            }
        });
        const weather = weatherResponse.data.current;
        document.getElementById("resultCity").textContent = location.name;
        document.getElementById("resultCountry").textContent = location.country || "";
        document.getElementById("resultTemperature").textContent = Math.round(weather.temperature_2m) + "°C";
        document.getElementById("resultCondition").textContent = getWeatherCondition(weather.weather_code);
        document.getElementById("resultHumidity").textContent = weather.relative_humidity_2m + "%";
        document.getElementById("resultWind").textContent = weather.wind_speed_10m + " km/h";
        document.getElementById("resultFeelsLike").textContent = Math.round(weather.apparent_temperature) + "°C";
        weatherResult.classList.remove("hidden");
    } catch (error) {
        showError(error.message || "Unable to load weather data.");
    } finally {
        loadingMessage.classList.add("hidden");
        searchButton.disabled = false;
        searchButton.innerHTML = 'Search Weather';
    }
});

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
    weatherResult.classList.add("hidden");
}
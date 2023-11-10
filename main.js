const getWeather = async (cityName) => {
    const apiKey = "d8781c91cd5807e099ef7078a40ecfe6"
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
    const weatherData = await response.json();

    //DYNAMICALLY CHANGING THE CONTENTS OF THE WEATHER INFORMATION
    document.querySelector(".city-name").textContent = weatherData.sys.country + ", " + weatherData.name;
    document.querySelector(".temp").textContent = weatherData.main.temp + "°C"
    document.querySelector(".humidity-value").textContent = weatherData.main.humidity + "%";
    document.querySelector(".wind-value").textContent = weatherData.wind.speed + " Km/h";

    //DYNAMICALLY CHANGING THE IMAGES
    const weatherImg = document.querySelector(".weather-img img");
    if(weatherData.weather[0].main === "Clear") {
        weatherImg.src = "images/clear.png";
    } else if (weatherData.weather[0].main === "Clouds") {
        weatherImg.src = "images/clouds.png";
    } else if (weatherData.weather[0].main === "Rain") {
        weatherImg.src = "images/rain.png";
    } else if (weatherData.weather[0].main === "Drizzle") {
        weatherImg.src = "images/drizzle.png";
    } else if (weatherData.weather[0].main === "Mist") {
        weatherImg.src = "images/mist.png";
    }
}

const searchBtn = document.querySelector(".search-button");
searchBtn.addEventListener('click', (event) => {
    cityName = document.querySelector(".search-bar").value;
    getWeather(cityName);
})
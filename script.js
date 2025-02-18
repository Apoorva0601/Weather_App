const API_KEY = "a9940d4fa6700a67b8d7fbcd549f1722";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerHTML = `<b>Temperature:</b> ${data.main.temp}°C`;
        document.getElementById("description").innerHTML = `<b>Condition:</b> ${data.weather[0].description}`;

        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        document.getElementById("weatherInfo").style.display = "block";

    } catch (error) {
        alert("Error fetching weather data");
        console.error(error);
    }
}

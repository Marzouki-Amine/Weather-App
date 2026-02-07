const APIKEY = "0aadb686eea552743b9801f169d6f983";
const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");

async function checkWeather(city = "Ariana") {
    const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${APIKEY}`;
    
    const res = await fetch(URL);
    const data = await res.json();

    console.log(data); // helpful for debugging

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

checkWeather();
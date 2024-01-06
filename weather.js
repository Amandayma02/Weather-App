const apiKey = "749f0f9c878b155753a6321ddd6dbf16";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon")



async function checkWeather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = city;

    
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

    
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main=="Clouds") {
        weatherIcon.src ="weather-app-img/images/clouds.png";
        
    }

    if(data.weather[0].main=="Clear") {
        weatherIcon.src ="weather-app-img/images/clear.png";
        
    }

    if(data.weather[0].main=="Rain") {
        weatherIcon.src ="weather-app-img/images/rain.png";
        
    }

    if(data.weather[0].main=="Drizzle") {
        weatherIcon.src ="weather-app-img/images/drizzle.png";
        
    }

    if(data.main[0].temp<3) {
        weatherIcon.src ="weather-app-img/images/snow.png";
        
    }

    if(data.weather[0].main=="Smoke") {
        weatherIcon.src ="weather-app-img/images/mist.png";
        
    }

    if(data.weather[0].main=="Humidity") {
        weatherIcon.src ="weather-app-img/images/humidity.png";
        
    }
}


searchBtn.addEventListener("click", ()=>{
    console.log("Button is clicked")
const searchBox = document.querySelector(".search input");

console.log(searchBox.value);

    checkWeather(searchBox.value);
})
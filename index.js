const apikey = "4e3a9d72a0d12bfb63ee7b819477e689";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerHTML= data.name ;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C" ;
        document.querySelector(".humidity").innerHTML= data.main.humidity ;
        document.querySelector(".wind").innerHTML= data.wind.speed +" kmph" ;

        if(data.weather[0].main=="Cloud"){
            weathericon.src = "images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weathericon.src="images/clear.png"
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="images/clear.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weathericon.src="images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            weathericon.src="images/Mist.png"
        }
    
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display="block";
    }
}

searchBtn.addEventListener("click" , function(){
    checkWeather(searchBox.value)
});
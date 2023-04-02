const apiKey = 'e2ac0631decbe15e15f763250b928060';

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


var weatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    document.getElementById('Weather').innerText = data.weather[0].main

    if (data.weather[0].main == 'Clouds') {
        document.getElementById('icon').src = 'images/clouds.png'
    } else if (data.weather[0].main == 'Clear') {
        document.getElementById('icon').src = 'images/clear.png'
    }
    else if (data.weather[0].main == 'Drizzle') {
        document.getElementById('icon').src = 'images/drizzle.png'
    }
    else if (data.weather[0].main == 'Mist') {
        document.getElementById('icon').src = 'images/mist.png'
    }
    else if (data.weather[0].main == 'Rain') {
        document.getElementById('icon').src = 'images/rain.png'
    }
    else if (data.weather[0].main == 'Snow') {
        document.getElementById('icon').src = 'images/snow.png'
    }else if (data.weather[0].main == 'Haze') {
        document.getElementById('icon').src = 'https://cdn-icons-png.flaticon.com/512/1779/1779807.png'
    }
}

window.addEventListener("load", function () {
    this.document.getElementById('search').focus();
    let searchBtn = document.getElementById('btn')

    searchBtn.addEventListener('click', () => {
        // e.preventDefault
        let searchBox = document.getElementById('search')
        checkWeather(searchBox.value);
    })
});

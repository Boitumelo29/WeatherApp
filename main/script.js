const container = document.querySelector('.container');
const search = document.querySelector('.serach-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-deatils');


search.addEventListener('click', ()=>{

    const APIKey = '206bf7b428a6f63ded997e4f300d0d04';
    const city = document.querySelector('.search-box input').value;
    const weatherMain = json.weather[0].main;

    
    if (city == '')
    return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        const image = document.querySelector('.weather-box i');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-box .humidity span');
        const wind = document.querySelector('.weather-box .wind span');
    
        switch (weatherMain) {
            case 'Clear':
                image.className = 'bx bx-sun';
                break;
            case 'Clouds':
                image.className = 'bx bx-cloud';
                break;
            case 'Rain':
                image.className = 'bx bx-rain';
                break;
            case 'Snow':
                image.className = 'bx bx-snow';
                break;
            default:
                image.className = 'bx bx-sun'; 
                break;
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
    });

   
});

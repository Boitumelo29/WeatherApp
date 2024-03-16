const container = document.querySelector('.container');
const search = document.querySelector('.serach-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-deatils');


search.addEventListener('click', ()=>{

    const APIKey = '206bf7b428a6f63ded997e4f300d0d04';
    const city = document.querySelector('search input').value;

    
    if (city == '')
    return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        const image = document.querySelector('.weather-box i');
        const temperature = document.querySelector('.weather-box .temperature')
        const description = document.querySelector('.weather-box .description')
        const humidity = document.querySelector('.weather-box .humidity span')
        const wind = document.querySelector('.weather-details .wind span')
    
        switch (json.weather[0].main) {
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
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
});
function getWeather() {
     const apiKey = '66e32f24672b5711e1f8290d5a643230'; // Replace with your OpenWeatherMap API key
     const city = document.getElementById('cityInput').value;
 
     if (!city) {
         alert('Please enter a city');
         return;
     }
 
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
             const weatherInfo = document.getElementById('weatherInfo');
             weatherInfo.innerHTML = `
                 <h2>${data.name}, ${data.sys.country}</h2>
                 <p>${data.weather[0].description}</p>
                 <p>Temperature: ${data.main.temp}°C</p>
                 <p>Humidity: ${data.main.humidity}%</p>
                 <p>Wind Speed: ${data.wind.speed} m/s</p>
             `;
         })
         .catch(error => {
             console.error('Error fetching weather data:', error);
             alert('Error fetching weather data. Please try again.');
         });
 }
 
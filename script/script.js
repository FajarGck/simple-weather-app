function fetchWeatherData(cityName) {
    const apiKey = '5c71a928e031e09e2509e20ebe622d31';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},{+62}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.main.wind.speed;

            document.getElementById('degreePlace').innerHTML = `
            <h1 class="text-6xl shadow-lg font-semibold px-0 md:text-8xl">${temperature.toFixed(1)}<span>°c</span></h1>
            <h2 class="text-4xl shadow-lg font-medium md:text-6xl">${cityName}</h2>
            `;

            document.getElementById('humidity').innerText = `${humidity}% Humidity`;
            document.getElementById('wind').innerText = `${windSpeed} Km/jam Wind`;
            
            const weatherIcon = document.getElementById('weather-icon');
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
            weatherIcon.src = iconUrl;

        })
        .catch((erorr) => {
            console.log('terjadi erorr', erorr);
        });
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = document.getElementById('simple-search').ariaValueMax;
    fetchWeatherData(cityName);

});




// function fetchWeatherData(cityName) {
//     const apiKey = '5c71a928e031e09e2509e20ebe622d31';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

//     fetch(apiUrl)
//         .then((response) => response.json())
//         .then((data) => {
//             const temperature = data.main.temp;
//             const humidity = data.main.humidity;
//             const windSpeed = data.wind.speed;

//             document.getElementById('degreePlace').innerHTML = `
//             <h1 class="text-6xl font-semibold px-0 md:text-8xl md:px-8">${temperature.toFixed(1)}<span>°c</span></h1>
//             <h2 class="text-4xl font-medium md:text-6xl md:px-8">${cityName}</h2>
//             `;

//             document.getElementById('humidity').innerText = `${humidity}% `;
//             document.getElementById('wind').innerText = `${windSpeed} Km/jam`;
            
//             const weatherIcon = document.getElementById('weather-icon');
//             const bg = document.getElementById('main-content');
//             const iconWeather = data.weather[0].main;
//             const bgUrl = `./asset/bg/${iconWeather}-bg.jpg`
//             const iconUrl = `./asset/icon/${iconWeather}.png`;
            
//             bg.style.backgroundImage = `url('${bgUrl}')`;
//             weatherIcon.src = iconUrl;
//         })
//         .catch((erorr) => {
//             console.log('terjadi erorr', erorr);
//         });
// }

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const cityName = document.getElementById('simple-search').value;
//     fetchWeatherData(cityName);

// });


async function fetchWeatherData(cityName) {
    try {
        const apiKey = '5c71a928e031e09e2509e20ebe622d31';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);
        if(!response.ok) {
            throw new Error('Gagal mengambil data');
        }

        const data = await response.json()
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const degreePlace = document.getElementById('degreePlace');

        degreePlace.innerHTML = `
        <h1 class="text-6xl font-semibold px-0 md:text-8xl md:px-8">${temperature.toFixed(1)}<span>°c</span></h1>
        <h2 class="text-4xl font-medium md:text-6xl md:px-8">${cityName}</h2>           
        `;
        document.getElementById('humidity').innerText = `${humidity}% `;
        document.getElementById('wind').innerText = `${windSpeed} Km/jam`;

        
        const weatherIcon = document.getElementById('weather-icon');
        const bg = document.getElementById('main-content');
        const iconWeather = data.weather[0].main;
        const bgUrl = `./asset/bg/${iconWeather}-bg.jpg`
        const iconUrl = `./asset/icon/${iconWeather}.png`;
        
        bg.style.backgroundImage = `url('${bgUrl}')`;
        weatherIcon.src = iconUrl;
    } catch (erorr) {
        alert('Terjadi erorr euy, cek penulisan nama kotanya', erorr)
    };

    
};

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = document.getElementById('simple-search').value;
    fetchWeatherData(cityName);

});

const city = document.querySelector('#weather span:first-child');
const weather = document.querySelector('#weather span:last-child');
const API_KEY = 'ae70b2a59f70377b7346099a631d09d0';

function geoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} 온도 : ${data.main.temp}º`;
        });
}

function geoError() {
    alert('위치 정보를 가져오지 못 했습니다.');
}




navigator.geolocation.getCurrentPosition(geoOk, geoError);
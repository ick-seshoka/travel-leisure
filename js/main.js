function getWeatherInfo() {
    var locationName = document.getElementById('location-name');
    var locationTemp = document.getElementById('location-temp');

    if (!navigator.geolocation) {
        locationTemp.innerHTML = "<p class=\"weather-info\">no location services</p>";
        return;
    }

    function success(position) {
        var coordsLatitude = position.coords.latitude;
        var coordsLongitude = position.coords.longitude;
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coordsLatitude + '&lon=' + coordsLongitude + '&APPID=832a2de82541d49d7f73e85b54090241&units=metric';

        fetch(url)
            .then(response => response.json())
            .then(data => {
            locationName.innerHTML = "<p class=\"weather-info\">" + data.name + ", " + data.sys.country + "</p><p class=\"weather-info\">" + data.weather[0].description + "</p>";
            locationTemp.innerHTML = "<p class=\"weather-info\">" + data.main.temp + "&deg;C</p>";
        });
    }

    function error() {
        locationTemp.innerHTML = "<p class=\"weather-info\">no location services</p>";
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

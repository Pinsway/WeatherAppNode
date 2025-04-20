const request = require('request');

const openWeatherMap = {
    BASE_URL: "https://api.openweathermap.org/data/2.5/weather?units=metric&q=",
    SECRET_KEY: "097e5017ae126658b4d4f95fed02e750"
};

const weatherData = (address, callback) => {
    const url = openWeatherMap.BASE_URL + encodeURIComponent(address) + "&APPID=" + openWeatherMap.SECRET_KEY;
    request({ url, json: true }, (error, data) => {
        if (error) {
            callback(true, "Unable to fetch data, please try again" + error)
        }
        callback(false, data?.body);
    });
};
module.exports = weatherData;

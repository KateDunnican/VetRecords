"use strict";

let userLocation = "San Antonio";

let lat = 29.4252;
let long = -98.4916;

let weatherMessage;
let weatherImage;

function getWeather(x) {
    if (x.daily.data[0].temperatureLow <= "40.0") {
        weatherMessage = "it is COLD up in this bitch!  Bring your pet inside!";
        weatherImage = "url(images/cold.jpeg)";
        $(".lil-jumbo").css("background", weatherImage).show();
        $(".lil-jumbo-container").css("background-color", "rgba(255, 255, 248, 1)");
    }
    if (x.daily.data[0].temperatureHigh >= "90.0") {
        weatherMessage = "it is HOT up in this bitch!  Bring your pet inside!";
        weatherImage = "url(images/hot.jpeg)";
        $(".lil-jumbo").css("background", weatherImage).show();
        $(".lil-jumbo-container").css("background-color", "rgba(255, 255, 248, 1)");
    }
    if (x.daily.data[0].icon === "rain") {
        weatherMessage = "it is STORMING up in this bitch!  Bring your pet inside!";
        weatherImage = "url(images/storm.jpeg)";
        $(".lil-jumbo").css("background", weatherImage).show();
        $(".lil-jumbo-container").css("background-color", "rgba(255, 255, 248, 1)");
    }
    //TEST CONDITION
    if (x.daily.data[0].icon === "partly-cloudy-day") {
        weatherMessage = "Your test worked!";
        weatherImage = "url(images/storm.jpeg)";
        $(".lil-jumbo").css("background", weatherImage).show();
        $(".lil-jumbo-container").css("background-color", "rgba(255, 255, 248, 1)");
    }
    $(".lil-jumbo-text").html(weatherMessage);
}

function reportWeather(la, lo) {
    $(".lil-jumbo").hide();

    $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + DarkSkyToken + "/" + la + "," + lo).done(function (data) {
        // console.log(data.daily.data[0]);
        console.log("Low: " + data.daily.data[0].temperatureLow);
        console.log("High: " + data.daily.data[0].temperatureHigh);
        console.log(data.daily.data[0].icon);
        getWeather(data)
    });
}

reportWeather(lat, long);




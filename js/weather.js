"use strict";

//TODO: Set up userLocation to = input from "where does your pet live?"

let userLocation = "San Antonio Texas";
let lat;
let long;
let weatherMessage;
let weatherImage;

if (userLocation === " "){
    $(".lil-jumbo").hide();
}
else {
    function getWeather(x) {
        if (x.daily.data[0].temperatureLow <= "40.0") {
            weatherMessage = "It is below 40°F in " + userLocation + ", now would be a good time to bring your pet inside.";
            weatherImage = "url(images/cold.jpeg)";
            $(".lil-jumbo").css("background", weatherImage).show();
            $(".lil-jumbo-container").css("background-color", "rgba(255, 255, 248, 1)");
        }
        if (x.daily.data[0].temperatureHigh >= "90.0") {
            weatherMessage = "It is above 90°F in " + userLocation + ", now would be a good time to bring your pet inside.";
            weatherImage = "url(images/hot.jpeg)";
            $(".lil-jumbo").css("background", weatherImage).show();
            $(".lil-jumbo-container").css("background-color", "rgba(255, 255, 248, 1)");
        }
        if (x.daily.data[0].icon === "rain") {
            weatherMessage = "It's raining in " + userLocation + ", now would be a good time to bring your pet inside.";
            weatherImage = "url(images/storm.jpeg)";
            $(".lil-jumbo").css("background", weatherImage).show();
            $(".lil-jumbo-container").css("background-color", "rgba(255, 255, 248, 1)");
        }
        //TEST CONDITION
        // if (x.daily.data[0].icon === "partly-cloudy-day") {
        //     weatherMessage = "Your test worked!";
        //     weatherImage = "url(images/storm.jpeg)";
        //     $(".lil-jumbo").css("background", weatherImage).show();
        //     $(".lil-jumbo-container").css("background-color", "rgba(255, 255, 248, 1)");
        // }
        $(".lil-jumbo-text").html(weatherMessage);
    }

    function reportWeather(la, lo) {
        $(".lil-jumbo").hide();

        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + DarkSkyToken + "/" + la + "," + lo).done(function (data) {
            // console.log(data.daily.data[0]);
            console.log("Today's Low: " + data.daily.data[0].temperatureLow);
            console.log("Today's High: " + data.daily.data[0].temperatureHigh);
            console.log("Today's Condition: " + data.daily.data[0].icon);
            getWeather(data)
        });
    }

    geocode(userLocation, mapboxToken).then(function (results) {
        lat = results[1];
        long = results[0];
        console.log(lat);
        console.log(long);
        reportWeather(lat, long);
    });
}


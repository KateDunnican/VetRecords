"use strict";

// let userLocation = "San Antonio";
//
// let lat = 29.4252;
// let long = -98.4916;
//
// let weatherMessage;
let weatherImage;
//
// function getWeather(x) {
//
//     if (x.daily.data.icon === "clear-day") {
//         weatherMessage = "it is COLD up in this bitch!  Bring your pet inside!";}
//         weatherImage = "url(images/cold.jpeg)";
//     if (x.daily.data.icon === "clear-day") {
//         weatherMessage = "it is HOT up in this bitch!  Bring your pet inside!";}
//         weatherImage = "url(images/hot.jpeg)";
//     if (x.daily.data.icon === "clear-day") {
//         weatherMessage = "it is STORMING up in this bitch!  Bring your pet inside!";}
//         weatherImage = "url(images/storm.jpeg)";
//
//     $(".lil-jumbo-container").css("background-color", "rgba(255, 255, 248, 1)");
//     $(".lil-jumbo-text").html(weatherMessage);
//     $(".lil-jumbo").css("background", weatherImage);
// }
//
// function reportWeather(la, lo) {
//     $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + DarkSkyToken + "/" + la + "," + lo).done(function (data) {
//         getWeather(data)
//     });
//
//     // $(".lil-jumbo-text").html(weatherMessage);
// }
//
// reportWeather(lat, long);

//TODO: find images for hot and storming, get functionality up

$(".lil-jumbo-text").html("whatever");
$(".lil-jumbo-container").css("background-color", "rgba(255, 255, 248, 1)");

weatherImage = "url(images/cold.jpeg)";
$(".lil-jumbo").css("background", weatherImage);

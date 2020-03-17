"use strict";

//User's pet info
let newname;
let newgender;
let newspecies;
let newage = $("#dobinput").val();
let newfixed;
let newvax;
let newprev;
let newgenmaint;
let newLocation;

//Today's date for use with DOB --> Age translation
let today = new Date();
// let currentDate = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
// let currentDate = today.getTime()
console.log(today);

//TODO: replace my Bday with $("#dobinput").val()
let petDOB = new Date("01/14/1996");

// To calculate the time difference of two dates
let Difference_In_Time = today.getTime() - petDOB.getTime();

// To calculate the no. of days between two dates
let Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
console.log(Difference_In_Days);


function getYMD(x){
    let years = Math.floor(x / 365.25);
    let months = Math.floor((x % 365.25)/30.42);
    let days = Math.floor(x - ((years * 365.25) + (months * 30.42)));
    let age = (years + " years, " + months + " months, " + days + " days");
    console.log(age);
}
getYMD(Difference_In_Days);


$("#newinfosubmit").click(function () {
//Assigning name
    newname = $("#nameinput").val();
    $("#namediv").html("Name: ").append(newname);
//Assigning gender
    newgender = $("input[type=radio][name=gender]:checked").val();
    $("#genderdiv").html("Gender: ").append(newgender);
//Assigning species
    newspecies = $("input[type=radio][name=species]:checked").val();
    $("#speciesdiv").html("Species: ").append(newspecies);
//Assigning age
    newage = $("#dobinput").val();
    $("#dobdiv").html("Age: ").append(newage);
//Assigning fixed
    newfixed = $("input[type=radio][name=fixed]:checked").val();
    $("#fixeddiv").html("Fixed: ").append(newfixed);
//Assigning vaccines

//Assigning preventions

//Assigning general maint.

});


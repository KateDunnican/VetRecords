"use strict";

// MOMENT TEST
let adminDate = new Date(1/25/2020);
let today = new Date();
let renewalDay = new Date(adminDate + 1);
let Difference_In_Time = today.getTime() - renewalDay.getTime();
let DaysTillVax = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

function getYMD(x){
    let years = Math.floor(x / 365.25);
    let months = Math.floor((x % 365.25)/30.42);
    let days = Math.floor(x - ((years * 365.25) + (months * 30.42)));
    let age = (years + " years, " + months + " months, " + days + " days");
}

// let adminDate = moment([2020, 1, 25]);
// let renewDate = moment([2021, 1, 25]);
$("#testdiv").html("If Jimbo got his 1yr Rabies on 01/25/2020, he'll need another one in: ").append(
    // moment([2021, 1, 25]).toNow(true)
    // renewDate.diff(adminDate, "days") +
    // " days"
    getYMD(DaysTillVax)
);






$("#dogdiv, #catdiv").hide();

$("#dog").click(function () {
    console.log("dog");
    $("#dogdiv").show();
    $("#catdiv").hide();
});
$("#cat").click(function () {
    console.log("cat");
    $("#catdiv").show();
    $("#dogdiv").hide();
});

//Species Neutral Info Assignment
function allPetStuff (){
    //Assigning species
    let newspecies = $("input[type=radio][name=species]:checked").val();
    $("#speciesdiv").html("Species: ").append(newspecies);

    //Assigning name
    let newname = $("#nameinput").val();
    $("#namedivspan").html("").append(newname);

    //Assigning age
    let todaysDate = new Date();
    let petDOB = new Date($("#dobinput").val());
    let Difference_In_Time = todaysDate.getTime() - petDOB.getTime();
    let Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

    function getYMD(x){
        let years = Math.floor(x / 365.25);
        let months = Math.floor((x % 365.25)/30.42);
        let days = Math.floor(x - ((years * 365.25) + (months * 30.42)));
        let age = (years + " years, " + months + " months, " + days + " days");
        $("#dobdiv").html("Age: ").append(age);
        console.log(age);
    }
    getYMD(Difference_In_Days);

    //Assigning gender
    let newgender = $("input[type=radio][name=gender]:checked").val();
    $("#genderdiv").html("Gender: ").append(newgender);

    //Assigning fixed
    let newfixed = $("input[type=radio][name=fixed]:checked").val();
    $("#fixeddiv").html("Fixed: ").append(newfixed);

    //Assigning pet location
    let newLocation = $("#locationinput").val();
    $("#locationdiv").html("Where your pet lives: ").append(newLocation);
}

// Submit DOG stuff
$("#newdoginfosubmit").click(function () {
    allPetStuff();

    //Change Vax info to dog vax info
    $("#vaxdiv").html("Vaccine Due Dates:").append(
        "<ul>" +
        "<li class='vaxlis' id='rabiesvax'>Rabies: " + /*Due Date*/ + "</li>" +
        "<li class='vaxlis' id='dhppvax'>DHPP: " + /*Due Date*/ + "</li>" +
        "<li class='vaxlis' id='leptovax'>Leptospirosis: " + /*Due Date*/ +  "</li>" +
        "<li class='vaxlis' id='k9bordvax'>Bordetella: " + /*Due Date*/ + "</li>" +
        "<li class='vaxlis' id='k9fluvax'>k9 Influenza: " + /*Due Date*/ + "</li>" +
        "<li class='vaxlis' id='lymevax'>Lyme: " + /*Due Date*/ + "</li>" +
        "</ul>"
    );

    //Assigning Prevention > HW Info
    let newHWbrand = $("#doghwbrandname").val();
    $("#hwprev").html("Heartworm (").append(newHWbrand + "):");
    //TODO: Add a "moments" thing to make due dates

    //Assigning Prevention > Flea and Tick Info
    let newFTbrand = $("#dogftbrandname").val();
    $("#ftprev").html("Flea and Tick (").append(newFTbrand + "):");
    //TODO: Add a "moments" thing to make due dates

    //Change General Maint. to dog gen maint.
    $("#maintdiv").html("General Maintenance Due Dates:").append(
        "<ul>" +
        "<li class='maintlis' id='hwtmaint'>Heartworm Test: " + /*Due Date*/ + "</li>" +
        "<li class='maintlis' id='dentalmaint'>Dental Cleaning: " + /*Due Date*/ + "</li>" +
        "<li class='maintlis' id='tntmaint'>Toenail Trim: " + /*Due Date*/ +  "</li>" +
        "<li class='maintlis' id='bathmaint'>Bath: " + /*Due Date*/ + "</li>" +
        "</ul>"
    );
});

// Submit CAT stuff
$("#newcatinfosubmit").click(function () {
    allPetStuff();

    //Change Vax info to cat vax info
    $("#vaxdiv").html("Vaccine Due Dates:").append(
        "<ul>" +
        "<li class='vaxlis' id='rabiesvax'>Rabies:" + /*Due Date*/ + "</li>" +
        "<li class='vaxlis' id='fvrcpvax'>FVRCP:" + /*Due Date*/ + "</li>" +
        "<li class='vaxlis' id='felvvax'>FeLV:" + /*Due Date*/ +  "</li>" +
        "<li class='vaxlis' id='febordvax'>Bordetella:" + /*Due Date*/ + "</li>" +
        "</ul>"
    );

    //Assigning Prevention > HW Info
    let newHWbrand = $("#cathwbrandname").val();
    $("#hwprev").html("Heartworm (").append(newHWbrand + "):");
    //TODO: Add a "moments" thing to make due dates

    //Assigning Prevention > Flea and Tick Info
    let newFTbrand = $("#catftbrandname").val();
    $("#ftprev").html("Flea and Tick (").append(newFTbrand + "):");
    //TODO: Add a "moments" thing to make due dates

    //Change General Maint. to cat gen maint.
    $("#maintdiv").html("General Maintenance Due Dates:").append(
        "<ul>" +
        "<li class='maintlis' id='dentalmaint'>Dental Cleaning: " + /*Due Date*/ + "</li>" +
        "<li class='maintlis' id='tntmaint'>Toenail Trim: " + /*Due Date*/ +  "</li>" +
        "</ul>"
    );
});


"use strict";

$("#dog").click(function () {
    console.log("dog");
});
$("#cat").click(function () {
    console.log("cat");
});

$("#newinfosubmit").click(function () {
    //Assigning species
    let newspecies = $("input[type=radio][name=species]:checked").val();
    $("#speciesdiv").html("Species: ").append(newspecies);

    //Assigning name
    let newname = $("#nameinput").val();
    $("#namediv").html("Name: ").append(newname);

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

    //if newspecies = "dog"
        //Assigning DOG vaccines
            // Rabies
            // DHPP
            // Leptospirosis
            // Bordetella
            // k9 Influenza
            // Lyme

        //Assigning DOG FT prevention
            //Brand name
            //Duration of each dose
            //Doses left
            //Last dose given/first dose to be given

        //Assigning DOG HW prevention
            //Brand name
            //Duration of each dose
            //Doses left
            //Last dose given/first dose to be given

        //Assigning DOG general maint.
            //Last HWT?
            //Last nail trim?
            //Last bath?

    //if newspecies = "cat"
        //Assigning CAT vaccines
            //Rabies
            //FVRCP
            //FeLV
            //Bordetella

        //Assigning CAT FT prevention
            //Brand name
            //Duration of each dose
            //Doses left
            //Last dose given/first dose to be given

        //Assigning CAT HW prevention
            //Brand name
            //Duration of each dose
            //Doses left
            //Last dose given/first dose to be given

        //Assigning CAT general maint.
            //Last nail trim?


});


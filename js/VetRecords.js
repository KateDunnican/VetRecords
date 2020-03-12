"use strict";

//Assigning a pet name
let newpetname = $("#nameinput").val();

//This part works, it's the let that doesn't
$("#newinfosubmit").click(function () {
    console.log("Running");
    console.log(newpetname);
    $("#namediv").html("Name: ").append(newpetname);
    }
);

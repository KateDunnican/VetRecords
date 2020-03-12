"use strict";

//Assigning name
let newname;
let newspecies;
let newage;
let newfixed;
let newvax;
let newprev;
let newgenmaint;


$("#newinfosubmit").click(function () {
    newname = $("#nameinput").val();
    console.log("Running");
    console.log(newpetname);
    $("#namediv").html("Name: ").append(newname);
    }
);

//Assigning species
//Assigning age
//Assigning fixed
//Assigning vaccines
//Assigning preventions
//Assigning general maint.
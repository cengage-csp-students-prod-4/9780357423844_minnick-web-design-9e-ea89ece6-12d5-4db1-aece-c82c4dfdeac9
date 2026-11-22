/*
Student Name: Hunter Cabreira
File Name: script.js
Date: 11/15/2026
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
		var menuicon = document.getElementById("icon");
		if (navlinks.style.display === "block") {
		    navlinks.style.display = "none";
				menuicon.style.color = "#2a1f14";
		} else {
		    navlinks.style.display = "block";
				menuicon.style.color = "#f6eee4";
		}
}

function ans1() {
    console.log("Answer 1 clicked")
}

function ans2() {
    console.log("Answer 2 clicked")
}

function ans3() {
    console.log("Answer 3 clicked")
}

function ans4() {
    console.log("Answer 4 clicked")
}
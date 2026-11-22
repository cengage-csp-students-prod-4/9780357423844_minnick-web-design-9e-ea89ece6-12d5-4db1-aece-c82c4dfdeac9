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
    answer.textContent = "You can join a club by visiting a club administrator during office hours";
    console.log("Answer 1 clicked")
}


function ans2() {
    answer.textContent = "Lucky for you, there is no limit to how many clubs you can job. Why not try all the ones that interest you?"
    console.log("Answer 2 clicked")
}


function ans3() {
    answer.textContent = "You can learn more about each club right here on out very own club information website!"
    console.log("Answer 3 clicked")
}

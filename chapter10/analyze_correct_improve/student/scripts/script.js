/*
    Student Name: Hunter Cabreira
    File Name: script.js
    Date: 11/14/2026
*/

//Global Variables
var figElement = document.getElementById("placeholder");  
var imgSource = document.getElementById("image");  
var figCap = document.querySelector("figcaption");

//Function to display the first picture
function pic1() {
    imgSource.src = "images/trunk-bay.jpg";
    imgSource.alt = "Elevated view of Trunk Bay beach on St. John";
    figElement.style.display = "block";
    figCap.textContent = "Trunk Bay in St. John";
}

//Function to display the second picture
function pic2() {
    imgSource.src = "images/sanjuan.jpg";
    imgSource.alt = "Elevated view of San Juan Coast";
    figElement.style.display = "block";
    figCap.textContent = "Trunk Bay in St. John";
}
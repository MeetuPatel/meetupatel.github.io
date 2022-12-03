
var tablinks = document.getElementsByClassName("about-me-tab");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var project1 = document.getElementById("project1");
var btn1 = document.getElementById("btn-project1");
var close1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function() {
    project1.style.display = "block";
}
close1.onclick = function() {
    project1.style.display = "none";
}

var project2 = document.getElementById("project2");
var btn2 = document.getElementById("btn-project2");
var close2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
    project2.style.display = "block";
}
close2.onclick = function() {
    project2.style.display = "none";
}

var project3 = document.getElementById("project3");
var btn3 = document.getElementById("btn-project3");
var close3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function() {
    project3.style.display = "block";
}
close3.onclick = function() {
    project3.style.display = "none";
}

window.onclick = function(event) {
if (event.target == project1) {
    project1.style.display = "none";
    }
    if (event.target == project2) {
    project2.style.display = "none";
    }
    if (event.target == project3) {
    project3.style.display = "none";
    }
}

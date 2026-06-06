let img = document.getElementById("myImage");
let hideBtn = document.getElementById("hideBtn");
let showBtn = document.getElementById("showBtn");

hideBtn.onclick = function() {
    img.style.display = "none";
};

showBtn.onclick = function() {
    img.style.display = "block";
};
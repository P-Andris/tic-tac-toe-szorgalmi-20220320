window.addEventListener("load", init);

function ID(e) {
    return document.getElementById(e);
}

function $(e) {
    return document.querySelector(e);
}

function $a(e) {
    return document.querySelectorAll(e);
}

let i;
var txt = "";

var x = "X", o = "O";
let s = 0;

function move() {
    if(s % 2 == 0) event.target.innerHTML = x;
    else event.target.innerHTML = o;
    event.target.removeEventListener("click", move);
    s++;
}

function backgroundOn() {
    event.target.style.backgroundColor = "white";
}

function backgroundOff() {
    event.target.style.backgroundColor = "#ccc";
}

/* Main */
function init() {
    for(i = 0; i < 9; i++) txt = txt + "<div></div>";
    ID("game").innerHTML = txt;

    for(i = 0; i < 9; i++) $a("#game div")[i].addEventListener("click", move);

    for(i = 0; i < 9; i++) {
        $a("#game div")[i].addEventListener("mouseover", backgroundOn);
        $a("#game div")[i].addEventListener("mouseout", backgroundOff);
    }

    for(i = 0; i < 9; i++) $a("#game div")[i].className = "m" + (i + 1);

    ID("game-status").innerHTML = "<h4>" + "A játék állapota:" +"</h4>";
}
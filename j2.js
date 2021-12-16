"use strict";
let joueur1 = localStorage.getItem("nombreBillesJoueur1");
let joueur2 = localStorage.getItem("nombreBillesJoueur2");
let get = document.getElementsByTagName("button");
function pair() {
    if (joueur1 % 2 === 0) {
        alert("win");
    }
    else {
        alert("lose");
    }
}
function impair() {
    if (joueur1 % 2 === 0) {
        alert("lose");
    }
    else {
        alert("win");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    get[0].addEventListener("click", pair);
    get[1].addEventListener("click", impair);
});

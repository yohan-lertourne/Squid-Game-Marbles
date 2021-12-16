"use strict";
let joueur1 = localStorage.getItem("nombreBillesJoueur1");
let joueur2 = localStorage.getItem("nombreBillesJoueur2");
let number = localStorage.getItem("nombreBilles");
let get = document.getElementsByTagName("button");
let actif = document.getElementsByTagName("h2");
let test = actif[1].textContent;
let joueur3 = Number(joueur1);
let joueur4 = Number(joueur2);
let number2 = Number(number);
let tab1;
function win() {
    if (test == "Joueur 1") {
        joueur3 += number2;
        joueur4 -= number2;
        console.log(joueur3);
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
    }
    else if (test == "Joueur 2") {
        joueur3 -= number2;
        joueur4 += number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
    }
    if (joueur3 <= 0 || joueur4 <= 0) {
        alert("over");
    }
}
function lose() {
    if (test == "Joueur 1") {
        joueur3 -= number2;
        joueur4 += number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
    }
    else if (test == "Joueur 2") {
        joueur3 += number2;
        joueur4 -= number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
    }
    if (joueur3 <= 0 || joueur4 <= 0) {
        alert("over");
    }
}
function pair() {
    if (number % 2 === 0) {
        win();
    }
    else {
        lose();
    }
}
function impair() {
    if (number % 2 === 0) {
        lose();
    }
    else {
        win();
    }
}
function billes() {
    for (let i = 0; i < joueur3; i++) {
        tab1[i].push(Math.floor(Math.random() * 56) + 1);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    get[0].addEventListener("click", pair);
    get[1].addEventListener("click", impair);
});
billes();

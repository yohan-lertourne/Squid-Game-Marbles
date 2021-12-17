"use strict";
let joueur1;
let joueur2;
let number;
let get = document.getElementsByTagName("button");
let actif = document.getElementsByTagName("h2");
let articles = document.getElementsByTagName("article");
let test = actif[1].textContent;
let joueur3;
let joueur4;
let number2;
let tab1 = [];
function getLocalStorage() {
    joueur1 = localStorage.getItem("nombreBillesJoueur1");
    joueur2 = localStorage.getItem("nombreBillesJoueur2");
    number = localStorage.getItem("nombreBilles");
}
function win() {
    getLocalStorage();
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
    getLocalStorage();
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
    getLocalStorage();
    joueur3 = Number(joueur1);
    joueur4 = Number(joueur2);
    number2 = Number(number);
    console.log(number2);
    if (number2 % 2 === 0) {
        win();
    }
    else {
        lose();
    }
}
function impair() {
    getLocalStorage();
    joueur3 = Number(joueur1);
    joueur4 = Number(joueur2);
    number2 = Number(number);
    if (number2 % 2 === 0) {
        lose();
    }
    else {
        win();
    }
}
function billes() {
    getLocalStorage();
    joueur3 = Number(joueur1);
    for (let i = 0; i < joueur3; i++) {
        tab1.push(Math.floor(Math.random() * 56) + 1);
        articles[0].innerHTML += ` <figure>
                                        <img src="./assets/Billes/Bille-${tab1[i]}.png" alt="">
                                        <figcaption>${i + 1}</figcaption>
                                    </figure>`;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    getLocalStorage();
    get[0].addEventListener("click", pair);
    get[1].addEventListener("click", impair);
});
billes();

"use strict";
let joueur1;
let joueur2;
let numberMarble;
let phase1;
let tour1;
let get = document.getElementsByTagName("button");
let actif = document.getElementsByTagName("h2");
let articles = document.getElementsByTagName("article");
let test = actif[1].textContent;
let joueur3;
let joueur4;
let number2;
let tab1 = [];
let section = document.getElementsByTagName("section");
let message;
let rand = Math.floor((Math.random() * (10)) + 1);
let randString;
function getLocalStorage() {
    joueur1 = window.localStorage.getItem("nombreBillesJoueur1");
    joueur2 = window.localStorage.getItem("nombreBillesJoueur2");
    numberMarble = window.localStorage.getItem("nombreBilles");
    phase1 = window.localStorage.getItem("phase");
    tour1 = window.localStorage.getItem("tour");
}
function win() {
    getLocalStorage();
    if (tour1 == "j2") {
        joueur3 += number2;
        joueur4 -= number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
        message = `J1 a gagné ${number2} billes.`;
    }
    else if (tour1 == "j1") {
        joueur3 -= number2;
        joueur4 += number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
        message = `J2 a gagné ${number2} billes.`;
    }
    if (joueur3 <= 0 || joueur4 <= 0) {
        alert("over");
    }
    console.log(message);
}
function lose() {
    getLocalStorage();
    if (tour1 == "j1") {
        joueur3 += number2;
        joueur4 -= number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
        message = `J1 a gagné ${number2} billes.`;
    }
    else if (tour1 == "j2") {
        joueur3 -= number2;
        joueur4 += number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
        message = `J2 a gagné ${number2} billes.`;
    }
    if (joueur3 <= 0 || joueur4 <= 0) {
        alert("over");
    }
    console.log(message);
}
function pair() {
    phasesJeu("3");
    getLocalStorage();
    joueur3 = Number(joueur1);
    joueur4 = Number(joueur2);
    number2 = Number(numberMarble);
    if (number2 % 2 === 0) {
        win();
    }
    else {
        lose();
    }
}
function impair() {
    phasesJeu("3");
    getLocalStorage();
    joueur3 = Number(joueur1);
    joueur4 = Number(joueur2);
    number2 = Number(numberMarble);
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
    joueur4 = Number(joueur2);
    let i = 0;
    let random;
    let bool;
    if (tour1 == "j2") {
        while (tab1.length < joueur3) {
            bool = false;
            random = Math.floor(Math.random() * 56) + 1;
            for (let j = 0; j < tab1.length; j++) {
                if (tab1[j] == random) {
                    bool = true;
                }
            }
            if (!bool) {
                tab1.push(random);
                articles[0].innerHTML += ` <figure>
                                        <img class="bille" src="./assets/Billes/Bille-${random}.png" alt="">
                                        <figcaption>${i + 1}</figcaption>
                                    </figure>`;
                i++;
            }
        }
    }
    else if (tour1 == "j1") {
        while (tab1.length < joueur4) {
            bool = false;
            random = Math.floor(Math.random() * 56) + 1;
            for (let j = 0; j < tab1.length; j++) {
                if (tab1[j] == random) {
                    bool = true;
                }
            }
            if (!bool) {
                tab1.push(random);
                articles[0].innerHTML += ` <figure>
                                            <img class="bille" src="./assets/Billes/Bille-${random}.png" alt="">
                                            <figcaption>${i + 1}</figcaption>
                                        </figure>`;
                i++;
            }
        }
    }
    tab1 = [];
}
function colors() {
    let colors = document.getElementsByTagName("span");
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rng1 = ` rgb(${r},${g},${b})`;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    let rng2 = `rgb(${r},${g},${b})`;
    colors[0].style.background = `linear-gradient(135deg,${rng1} 49%,${rng2} 50%)`;
    get[0].style.background = `linear-gradient(135deg,${rng1} 49%,${rng2} 50%)`;
}
setInterval(colors, 2000);
document.addEventListener('DOMContentLoaded', function () {
    getLocalStorage();
    get[0].addEventListener("click", phasesJeu);
    get[1].addEventListener("click", pair);
    get[2].addEventListener("click", impair);
});
function bot() {
    getLocalStorage();
    setInterval(function () {
        switch (tour) {
            case "j1":
                if (rand < 5) {
                    pair();
                }
                else {
                    impair();
                }
                break;
            case "j2":
                randString = rand.toString;
                window.localStorage.setItem('nombreBilles', randString);
                varStor = window.localStorage.getItem("nombreBilles");
                phasesJeu("2");
                break;
        }
        ;
    }, 4000);
}

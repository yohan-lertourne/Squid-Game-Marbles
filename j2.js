"use strict";
let joueur1;
let joueur2;
let numberMarble;
let phase1;
let tour1;
let get = document.getElementsByTagName("button");
let actif = document.getElementsByTagName("h2");
let articles = document.getElementsByTagName("article");
let figCap = document.getElementsByTagName("figcaption");
let test = actif[1].textContent;
let joueur3;
let joueur4;
let number2;
let tab1 = [];
let section = document.getElementsByTagName("section");
let message;
let rand = Math.floor((Math.random() * (10)) + 1);
let randString;
let ordi;
let input = document.getElementsByTagName("input");
let psyko = document.getElementsByTagName("div");
let img2 = document.querySelector("footer img");
let overed = false;
function getLocalStorage() {
    joueur1 = window.localStorage.getItem("nombreBillesJoueur1");
    joueur2 = window.localStorage.getItem("nombreBillesJoueur2");
    numberMarble = window.localStorage.getItem("nombreBilles");
    phase1 = window.localStorage.getItem("phase");
    tour1 = window.localStorage.getItem("tour");
    ordi = window.localStorage.getItem("bot");
}
function win() {
    getLocalStorage();
    if (tour1 == "j2") {
        joueur3 += number2;
        joueur4 -= number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
        message = `JOUEUR 1 A GAGNE ${number2} BILLES.`;
    }
    else if (tour1 == "j1") {
        joueur3 -= number2;
        joueur4 += number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
        message = `JOUEUR 2 A GAGNE ${number2} BILLES.`;
    }
    if (joueur3 <= 0) {
        if (ordi == "true") {
            audio.pause();
            let sound = new Audio("./assets/psyko_14.mp3");
            setTimeout(function () {
                sound.pause();
            }, 6300);
            sound.play();
            over[0].classList.remove("empty");
            if (img2) {
                img2.setAttribute("src", "./assets/Psycho-Dedax.png");
            }
            figCap[0].innerHTML = "PSYKOKWAK A GAGNE";
            articles[0].classList.add("empty");
            articles[1].classList.add("empty");
            window.localStorage.clear();
            overed = true;
        }
        else if (ordi == "false") {
            over[0].classList.remove("empty");
            figCap[0].innerHTML = "JOUEUR 2 A GAGNE";
            articles[0].classList.add("empty");
            articles[1].classList.add("empty");
            window.localStorage.clear();
            overed = true;
        }
    }
    else if (joueur4 <= 0) {
        over[0].classList.remove("empty");
        figCap[0].innerHTML = "JOUEUR 1 A GAGNE";
        articles[0].classList.add("empty");
        articles[1].classList.add("empty");
        window.localStorage.clear();
        overed = true;
    }
    phasesJeu("3");
}
function lose() {
    getLocalStorage();
    if (tour1 == "j1") {
        joueur3 += number2;
        joueur4 -= number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
        message = `JOUEUR 1 A GAGNE ${number2} BILLES.`;
    }
    else if (tour1 == "j2") {
        joueur3 -= number2;
        joueur4 += number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
        message = `JOUEUR 2 A GAGNE ${number2} BILLES.`;
    }
    if (joueur3 <= 0) {
        if (ordi == "true") {
            audio.pause();
            let sound = new Audio("./assets/psyko_14.mp3");
            setTimeout(function () {
                sound.pause();
            }, 6300);
            sound.play();
            over[0].classList.remove("empty");
            if (img2) {
                img2.setAttribute("src", "./assets/Psycho-Dedax.png");
            }
            figCap[0].innerHTML = "PSYKOKWAK A GAGNE";
            articles[0].classList.add("empty");
            articles[1].classList.add("empty");
            window.localStorage.clear();
            overed = true;
        }
        else if (ordi == "false") {
            over[0].classList.remove("empty");
            figCap[0].innerHTML = "JOUEUR 2 A GAGNE";
            articles[0].classList.add("empty");
            articles[1].classList.add("empty");
            window.localStorage.clear();
            overed = true;
        }
    }
    else if (joueur4 <= 0) {
        over[0].classList.remove("empty");
        figCap[0].innerHTML = "JOUEUR 1 A GAGNE";
        articles[0].classList.add("empty");
        articles[1].classList.add("empty");
        window.localStorage.clear();
        overed = true;
    }
    phasesJeu("3");
}
function pair() {
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
    else if (tour1 == "j1") {
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
function phased() {
    phasesJeu("1");
}
function rules() {
    let rule = document.getElementsByClassName("rules");
    rule[0].classList.toggle("empty");
}
// function reset(){
//     window.localStorage.clear();
//     phasesJeu("0");
//     if(!over[0].classList.contains("empty")){
//         over[0].classList.add("empty");
//     }
//     articles[1].innerHTML = `
//     <h2>JOUEUR 2</h2>
//     <button disabled>PAIR</button>
//     <button disabled>IMPAIR</button>
//     `;
//     get[0].disabled = true;
//     input[1].classList.remove('select');
//     input[0].classList.remove('select');
//     initPlayers();
// }
document.addEventListener('DOMContentLoaded', function () {
    getLocalStorage();
    get[0].addEventListener("click", phased);
    get[1].addEventListener("click", pair);
    get[2].addEventListener("click", impair);
    input[0].addEventListener("click", withBot);
    input[1].addEventListener("click", withoutBot);
    buttonChoice[3].addEventListener("click", rules);
    //   buttonChoice[4].addEventListener("click",reset);
});
function withBot() {
    window.localStorage.setItem("bot", "true");
    input[0].classList.add('select');
    input[1].classList.remove('select');
    get[0].disabled = false;
}
function withoutBot() {
    window.localStorage.setItem("bot", "false");
    input[1].classList.add('select');
    input[0].classList.remove('select');
    get[0].disabled = false;
}
randString = rand.toString();
function bot() {
    getLocalStorage();
    let img = psyko[0].getElementsByTagName("img");
    img[0].setAttribute("src", "./assets/psykokwak.png");
    psyko[0].classList.add("psy");
    setTimeout(function () {
        switch (tour1) {
            case "j1":
                rand = Math.floor((Math.random() * (10)) + 1);
                randString = rand.toString();
                if (rand < 5) {
                    pair();
                }
                else {
                    impair();
                }
                break;
            case "j2":
                joueur3 = Number(joueur1);
                joueur4 = Number(joueur2);
                rand = Math.floor((Math.random() * (joueur4)) + 1);
                randString = rand.toString();
                window.localStorage.setItem('nombreBilles', randString);
                varStor = window.localStorage.getItem("nombreBilles");
                phasesJeu("2");
                buttonChoice[1].disabled = false;
                buttonChoice[2].disabled = false;
                break;
        }
        ;
        img[0].setAttribute("src", "./assets/psykokwak-2.png");
    }, 2000);
}

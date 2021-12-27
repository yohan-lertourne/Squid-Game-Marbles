"use strict";
// Initialisation des variables
let sectionInverse = document.getElementsByTagName("section");
let titreJoueurs = document.getElementsByTagName("h2");
let varStor;
let figlist = document.getElementsByTagName("figure");
let figcaptionlist = document.getElementsByTagName("figcaption");
let buttonChoice = document.getElementsByTagName("button");
let articleWindow = document.getElementsByTagName("article");
let spanStart = document.getElementsByTagName("span");
let h1 = document.getElementsByTagName("h1");
let start = document.getElementsByClassName("start");
let marbles = document.getElementsByClassName("bille");
let over = document.getElementsByClassName("over");
let billes1 = 10;
let initBille = 0;
let phase = 0;
let tour = "j1";
/*AUDIO*/
let audio = document.getElementById("audio");
setInterval(function () {
    let audioTime = audio.currentTime;
    //console.log(audio.currentTime)
    if (audioTime > 19 && audioTime < 28.7) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim1");
        }
    }
    else if (audioTime > 28.7 && audioTime < 38.4) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim2");
        }
    }
    else if (audioTime > 38.4 && audioTime < 49.2) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim3");
        }
    }
    else if (audioTime > 49.2 && audioTime < 54.3) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.remove("anim3");
        }
    }
    else if (audioTime > 54.3 && audioTime < 55) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim3");
        }
    }
    //LOOP 55
    else if (audioTime > 54.9 && audioTime < 55.3) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 56.3 && audioTime < 56.7) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 57.7 && audioTime < 58.1) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 59.1 && audioTime < 59.5) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 60.4 && audioTime < 60.8) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 61.8 && audioTime < 62.2) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 63.2 && audioTime < 63.6) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 64.6 && audioTime < 65) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    //LOOP 80 || audioTime==83 || audioTime==84.1 || audioTime==85.2 || audioTime==86.3 || audioTime==87.4 || audioTime==88.5
    else if (audioTime > 81.7 && audioTime < 82.1) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 83 && audioTime < 83.4) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 84.3 && audioTime < 84.7) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 85.6 && audioTime < 86) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 86.9 && audioTime < 87.3) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 88.2 && audioTime < 88.6) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 89.5 && audioTime < 89.9) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 90.8 && audioTime < 91.2) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else if (audioTime > 102 && audioTime < 104) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.remove("anim3");
        }
    }
    else if (audioTime > 108 && audioTime < 110) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.remove("anim2");
        }
    }
    else if (audioTime > 112 && audioTime < 114) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.remove("anim1");
        }
    }
    else if (audioTime > 120 && audioTime < 124) {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.add("anim4");
        }
    }
    else {
        for (let i = 0; i < marbles.length; i++) {
            marbles[i].classList.remove("anim4");
        }
    }
}), 3000;
// Initialisation du jeu
function initPlayers() {
    window.localStorage.setItem('nombreBillesJoueur1', billes1.toString());
    window.localStorage.setItem('nombreBillesJoueur2', billes1.toString());
    window.localStorage.setItem('nombreBilles', initBille.toString());
    window.localStorage.setItem('phase', phase.toString());
    window.localStorage.setItem('tour', tour);
}
if (!window.localStorage.getItem("nombreBillesJoueur1")) {
    initPlayers();
}
// Inverser les joueurs
function inverserJoueurs() {
    getLocalStorage();
    sectionInverse[0].classList.toggle("reverse");
    if (tour1 == "j2") {
        titreJoueurs[0].innerHTML = `JOUEUR 2 : ${joueur2} BILLES`;
        titreJoueurs[1].innerHTML = `JOUEUR 1 : ${joueur1} BILLES`;
    }
    else {
        titreJoueurs[0].innerHTML = `JOUEUR 1 : ${joueur1} BILLES`;
        titreJoueurs[1].innerHTML = `JOUEUR 2 : ${joueur2} BILLES`;
    }
    buttonChoice[1].disabled = true;
    buttonChoice[2].disabled = true;
}
// Switcher les phases de jeu
function phasesJeu(phase) {
    switch (phase) {
        case "0":
            getLocalStorage();
            start[0].classList.remove("empty");
            articles[0].classList.add("empty");
            articles[1].classList.add("empty");
            buttonChoice[0].addEventListener("click", function () {
                phasesJeu("1");
                audio.play();
                if (ordi == "true") {
                    psyko[0].classList.remove("empty");
                }
            });
            break;
        case "1":
            getLocalStorage();
            start[0].classList.add("empty");
            articles[0].classList.remove("empty");
            articles[1].classList.remove("empty");
            articles[0].innerHTML = `<h2>JOUEUR 1 :${joueur1} BILLES</h2>`;
            titreJoueurs[1].innerHTML = `JOUEUR 2 :${joueur2} BILLES`;
            billes();
            getLocalStorage();
            if (tour1 == "j2" && ordi == "true") {
                bot();
            }
            else {
                for (let i = 0; i < figcaptionlist.length; i++) {
                    figlist[i].addEventListener("click", function () {
                        window.localStorage.setItem('nombreBilles', figcaptionlist[i].innerHTML);
                        varStor = window.localStorage.getItem("nombreBilles");
                        // Activation des boutons
                        if (window.localStorage.getItem("bot") == "false" || window.localStorage.getItem("tour") == "j2") {
                            buttonChoice[1].disabled = false;
                            buttonChoice[2].disabled = false;
                        }
                        phasesJeu("2");
                    });
                }
            }
            window.localStorage.setItem('phase', "1");
            break;
        case "2":
            let temp = localStorage.getItem("tour");
            let titreTemp;
            if (temp == "j1") {
                titreTemp = "JOUEUR 1";
            }
            else {
                titreTemp = "JOUEUR 2";
            }
            articles[0].innerHTML = `<h2>${titreTemp}</h2>
                                    <figure class="box">
                                        <img src="./assets/closedBox.png" alt="">
                                    </figure>`;
            window.localStorage.setItem('phase', "2");
            if (tour1 == "j1" && ordi == "true") {
                bot();
            }
            else {
            }
            break;
        case "3":
            if (!overed) {
                let idImg = localStorage.getItem("nombreBilles");
                articles[0].innerHTML = `<h2>${message}</h2>
                                    <figure class="box">
                                        <img src="./assets/openedBox-${idImg}.png" alt="">
                                    </figure>`;
                articles[0].classList.add("full");
                articles[1].classList.add("empty");
                window.localStorage.setItem('phase', "3");
                if (tour1 == "j1") {
                    window.localStorage.setItem('tour', "j2");
                }
                else if (tour1 == "j2") {
                    window.localStorage.setItem('tour', "j1");
                }
                getLocalStorage();
                const myTimeout = setTimeout(myGreeting, 2000);
                function myGreeting() {
                    window.localStorage.setItem("phase", "1");
                    phasesJeu("1");
                    inverserJoueurs();
                }
                break;
            }
    }
}
// Récuperation de la valeur choisie par le joueur
document.addEventListener('DOMContentLoaded', function () {
    let phase = window.localStorage.getItem("phase");
    phasesJeu(phase);
});

"use strict";
// Initialisation des variables
let sectionInverse = document.getElementsByTagName("section");
let titreJoueurs = document.getElementsByTagName("h2");
let varStor = 0;
let figlist = document.getElementsByTagName("figure");
let figcaptionlist = document.getElementsByTagName("figcaption");
let buttonChoice = document.getElementsByTagName("button");
let articleWindow = document.getElementsByTagName("article");
let spanStart = document.getElementsByTagName("span");
// Initialisation du jeu
function initPlayers() {
    let billes = 10;
    let initBille = 0;
    let phase = 0;
    let tour = "j1";
    window.localStorage.setItem('nombreBillesJoueur1', billes);
    window.localStorage.setItem('nombreBillesJoueur2', billes);
    window.localStorage.setItem('nombreBilles', initBille);
    window.localStorage.setItem('phase', phase);
    window.localStorage.setItem('tour', tour);
}
if (!window.localStorage.getItem("nombreBillesJoueur1")) {
    initPlayers();
}
// Récuperation de la valeur choisie par le joueur
document.addEventListener('DOMContentLoaded', function () {
    phasesJeu("0");
});
// Inverser les joueurs
function inverserJoueurs() {
    sectionInverse[0].classList.toggle("reverse");
    if (titreJoueurs[0].innerHTML == "Joueur 1") {
        titreJoueurs[0].innerHTML = "Joueur 2";
        titreJoueurs[1].innerHTML = "Joueur 1";
    }
    else {
        titreJoueurs[0].innerHTML = "Joueur 1";
        titreJoueurs[1].innerHTML = "Joueur 2";
    }
    console.log(buttonChoice[0]);
}
// Switcher les phases de jeu
function phasesJeu(phase) {
    switch (phase) {
        case "0":
            getLocalStorage();
            articles[0].classList.add("empty");
            articles[1].classList.add("empty");
            buttonChoice[0].addEventListener("click", function () {
                buttonChoice[0].classList.add("empty");
                spanStart[0].classList.add("empty");
                articles[0].classList.remove("empty");
                articles[1].classList.remove("empty");
                phasesJeu("1");
            });
            break;
        case "1":
            articles[0].innerHTML = "";
            billes();
            for (let i = 0; i < figcaptionlist.length; i++) {
                figlist[i].addEventListener("click", function () {
                    window.localStorage.setItem('nombreBilles', figcaptionlist[i].innerHTML);
                    varStor = window.localStorage.getItem("nombreBilles");
                    // Activation des boutons
                    buttonChoice[1].disabled = false;
                    buttonChoice[2].disabled = false;
                    phasesJeu("2");
                });
            }
            window.localStorage.setItem('phase', "1");
            break;
        case "2":
            articles[0].innerHTML = ` <figure>
                                        <img src="./assets/closedBox.png" alt="">
                                    </figure>`;
            window.localStorage.setItem('phase', "2");
            break;
        case "3":
            let idImg = localStorage.getItem("nombreBilles");
            articles[0].innerHTML = ` <figure>
                                        <img src="./assets/openedBox-${idImg}.png" alt="">
                                    </figure>`;
            window.localStorage.setItem('phase', "3");
            const myTimeout = setTimeout(myGreeting, 3000);
            function myGreeting() {
                console.log("RIEN A FOUTRE");
                window.localStorage.setItem("phase", "1");
                phasesJeu("1");
            }
            break;
    }
}

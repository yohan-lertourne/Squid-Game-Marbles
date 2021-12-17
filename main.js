"use strict";
// Initialisation des variables
let sectionInverse = document.getElementsByTagName("section");
let titreJoueurs = document.getElementsByTagName("h2");
let varStor = 0;
let figlist = document.getElementsByTagName("figure");
let figcaptionlist = document.getElementsByTagName("figcaption");
let buttonChoice = document.getElementsByTagName("button");
let articleWindow = document.getElementsByTagName("article");
// Initialisation du jeu
function initPlayers() {
    let billes = 10;
    let initBille = 0;
    let phase = 1;
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
    phasesJeu();
    for (let i = 0; i < figcaptionlist.length; i++) {
        figlist[i].addEventListener("click", function () {
            window.localStorage.setItem('nombreBilles', figcaptionlist[i].innerHTML);
            varStor = window.localStorage.getItem("nombreBilles");
            //document.write(varStor)
            // Activation des boutons
            buttonChoice[1].disabled = false;
            buttonChoice[2].disabled = false;
            phasesJeu(2);
        });
    }
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
function phasesJeu(phase = 1) {
    ;
    switch (phase) {
        case 1:
            billes();
            break;
        case 2:
            articles[0].innerHTML = ` <figure>
                                        <img src="./assets/closedBox.png" alt="">
                                    </figure>`;
            break;
        case 3:
            let idImg = localStorage.getItem("nombreBilles");
            console.log(idImg);
            articles[0].innerHTML = ` <figure>
                                        <img src="./assets/openedBox-${idImg}.png" alt="">
                                    </figure>`;
            break;
        default:
            console.log("Not exist...");
    }
}

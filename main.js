"use strict";
let sectionInverse = document.getElementsByTagName("section");
let titreJoueurs = document.getElementsByTagName("h2");
let varStor = 0;
let figlist = document.getElementsByTagName("figure");
let figcaptionlist = document.getElementsByTagName("figcaption");
function initPlayers() {
    let billes = 10;
    window.localStorage.setItem('nombreBillesJoueur1', billes);
    window.localStorage.setItem('nombreBillesJoueur2', billes);
}
initPlayers();
document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < figcaptionlist.length; i++) {
        figlist[i].addEventListener("click", function () {
            window.localStorage.setItem('nombreBilles', figcaptionlist[i].innerHTML);
            varStor = window.localStorage.getItem("nombreBilles");
        });
    }
});
window.addEventListener("click", function () {
    sectionInverse[0].classList.toggle("reverse");
    if (titreJoueurs[0].innerHTML == "Joueur 1") {
        titreJoueurs[0].innerHTML = "Joueur 2";
        titreJoueurs[1].innerHTML = "Joueur 1";
    }
    else {
        titreJoueurs[0].innerHTML = "Joueur 1";
        titreJoueurs[1].innerHTML = "Joueur 2";
    }
    console.log(titreJoueurs[0].textContent);
});

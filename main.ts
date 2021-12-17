// Initialisation des variables
let sectionInverse = document.getElementsByTagName("section");
let titreJoueurs = document.getElementsByTagName("h2");
let varStor : any = 0;
let figlist = document.getElementsByTagName("figure");
let figcaptionlist = document.getElementsByTagName("figcaption");
let buttonChoice = document.getElementsByTagName("button")


// Initialisation du jeu
function initPlayers(){
    let billes : any = 10;
    let initBille:any= 0;
    let phase:any = [1,2,3];
    let tour: any = ["j1","j2"];
    window.localStorage.setItem('nombreBillesJoueur1', billes);
    window.localStorage.setItem('nombreBillesJoueur2', billes);
    window.localStorage.setItem('nombreBilles', initBille);
    window.localStorage.setItem('phase', phase);
    window.localStorage.setItem('tour', tour);
}

if (!window.localStorage.getItem("nombreBillesJoueur1")){
    initPlayers();
}


// Récuperation de la valeur choisie par le joueur
document.addEventListener('DOMContentLoaded', function() {
    for(let i = 0; i < figcaptionlist.length; i++){
        figlist[i].addEventListener("click",function(){
            window.localStorage.setItem('nombreBilles', figcaptionlist[i].innerHTML);
            varStor = window.localStorage.getItem("nombreBilles")
            //document.write(varStor)


            // Activation des boutons
            buttonChoice[0].disabled = false;
            buttonChoice[1].disabled = false;

    })}
});


// Inverser les joueurs
window.addEventListener("click", function(){
    sectionInverse[0].classList.toggle("reverse");
    if (titreJoueurs[0].innerHTML=="Joueur 1"){
        titreJoueurs[0].innerHTML = "Joueur 2";
        titreJoueurs[1].innerHTML = "Joueur 1";
    }
    else{
        titreJoueurs[0].innerHTML = "Joueur 1";
        titreJoueurs[1].innerHTML = "Joueur 2";
    }

    console.log(buttonChoice[0])
})


// Switcher les phases de jeu
function phasesJeu(phase=1){;
    switch (phase) {
        case 1:
            console.log("Afficher les billes");
            break;

        case 2:
            console.log("Afficher la boite fermée");
            break;

        case 3:
            console.log("Afficher la boite ouverte");
            break;

        default:
            console.log("Not exist...");
    }
}

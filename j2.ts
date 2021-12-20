let joueur1: any;
let joueur2: any;
let numberMarble: any;
let get: any = document.getElementsByTagName("button");
let actif: any = document.getElementsByTagName("h2");
let articles: any = document.getElementsByTagName("article");
let test: string = actif[1].textContent;
let joueur3: number;
let joueur4: number;
let number2: number;
let tab1: any = [];
let section = document.getElementsByTagName("section");

function getLocalStorage() {
    joueur1 = window.localStorage.getItem("nombreBillesJoueur1");
    joueur2 = window.localStorage.getItem("nombreBillesJoueur2");
    numberMarble = window.localStorage.getItem("nombreBilles");
}

function win() {
    getLocalStorage();
    if (test == "Joueur 1") {
        joueur3 += number2;
        joueur4 -= number2;
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
    let i: number = 0;
    let random: number;
    let bool: boolean;
    while (tab1.length < joueur3) {
        bool = false;
        random = Math.floor(Math.random() * 56) + 1;
        for (let j: number = 0; j < tab1.length; j++) {
            if (tab1[j] == random) {
                bool = true;
            }
        }
        if (!bool){
        tab1.push(random);
        articles[0].innerHTML += ` <figure>
                                        <img class="bille" src="./assets/Billes/Bille-${random}.png" alt="">
                                        <figcaption>${i + 1}</figcaption>
                                    </figure>`;
        i++;
        }
    }
}
function colors(){
    let colors:any = document.getElementsByTagName("span");
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let rng1 =` rgb(${r},${g},${b})`;
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    let rng2 = `rgb(${r},${g},${b})`;
    colors[0].style.background= `linear-gradient(135deg,${rng1} 49%,${rng2} 50%)`;
    get[0].style.background= `linear-gradient(135deg,${rng1} 49%,${rng2} 50%)`;
}
setInterval(colors,2000);
document.addEventListener('DOMContentLoaded', function () {
    getLocalStorage();
    get[0].addEventListener("click", phasesJeu);
    get[1].addEventListener("click", pair);
    get[2].addEventListener("click", impair);

});
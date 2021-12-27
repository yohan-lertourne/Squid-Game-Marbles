let joueur1 : string|null = window.localStorage.getItem("nombreBillesJoueur1");
let joueur2 : string|null;
let numberMarble: string|null;
let phase1 : string|null;
let tour1: string|null;
let get: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");
let actif: HTMLCollection = document.getElementsByTagName("h2");
let articles: HTMLCollection = document.getElementsByTagName("article");
let figCap: HTMLCollection = document.getElementsByTagName("figcaption");
let test: string|null = actif[1].textContent;
let joueur3: number;
let joueur4: number;
let number2: number;
let tab1: Array<number> = [];
let section: HTMLCollection = document.getElementsByTagName("section");
let message:string;
let rand: number = Math.floor((Math.random() * (10)) +1 );
let randString: string;
let ordi:string|null;
let input: HTMLCollection = document.getElementsByTagName("input");
let psyko: HTMLCollection = document.getElementsByTagName("div");
let img2: HTMLImageElement|null = document.querySelector("footer img");

function getLocalStorage():void {
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
        message = `Joueur 1 a gagné ${number2} billes.`
    }
    else if (tour1 == "j1") {
        joueur3 -= number2;
        joueur4 += number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
        message = `Joueur 2 a gagné ${number2} billes.`
    }
    if (joueur3 <= 0) {
        if (ordi == "true"){
            audio.pause();
            let sound = new Audio("./assets/psyko_14.mp3") as HTMLAudioElement;
            setTimeout(function(){
                sound.pause();
            },6300);
            sound.play();
            over[0].classList.remove("empty");
            if(img2){
                img2.setAttribute("src", "./assets/Psycho-Dedax.png");
            }
            figCap[0].innerHTML = "Psykokwak a gagné"
            articles[0].classList.add("empty");
            articles[1].classList.add("empty");
            window.localStorage.clear();
            console.log(img2);
        }
        else if(ordi == "false") {
        over[0].classList.remove("empty");
        figCap[0].innerHTML = "Joueur 2 a gagné"
        articles[0].classList.add("empty");
        articles[1].classList.add("empty");
        window.localStorage.clear();
        }
        
    }
    else if (joueur4 <= 0) {
        over[0].classList.remove("empty");
        figCap[0].innerHTML = "Joueur 1 a gagné"
        articles[0].classList.add("empty");
        articles[1].classList.add("empty");
        window.localStorage.clear();
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
        message = `Joueur 1 a gagné ${number2} billes.`
    }
    else if (tour1 == "j2") {
        joueur3 -= number2;
        joueur4 += number2;
        localStorage.setItem("nombreBillesJoueur1", joueur3.toString());
        localStorage.setItem("nombreBillesJoueur2", joueur4.toString());
        message = `Joueur 2 a gagné ${number2} billes.`
    }
    if (joueur3 <= 0) {
        if (ordi == "true"){
            audio.pause();
            let sound = new Audio("./assets/psyko_14.mp3") as HTMLAudioElement;
            setTimeout(function(){
                sound.pause();
            },6300);
            sound.play();
            over[0].classList.remove("empty");
            if(img2){
                img2.setAttribute("src", "./assets/Psycho-Dedax.png");
            }
            figCap[0].innerHTML = "Psykokwak a gagné"
            articles[0].classList.add("empty");
            articles[1].classList.add("empty");
            window.localStorage.clear();
        }
        else if(ordi == "false"){
        over[0].classList.remove("empty");
        figCap[0].innerHTML = "Joueur 2 a gagné"
        articles[0].classList.add("empty");
        articles[1].classList.add("empty");
        window.localStorage.clear();
        }
        
    }
    else if (joueur4 <= 0) {
        over[0].classList.remove("empty");
        figCap[0].innerHTML = "Joueur 1 a gagné"
        articles[0].classList.add("empty");
        articles[1].classList.add("empty");
        window.localStorage.clear();
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
    let i: number = 0;
    let random: number;
    let bool: boolean;
    if (tour1 == "j2"){
     while (tab1.length < joueur4) {
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
    else if(tour1=="j1"){
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
    tab1=[];
}
function colors(){
    let colors:HTMLCollectionOf<HTMLSpanElement> = document.getElementsByTagName("span");
    let r: number = Math.floor(Math.random()*255);
    let g: number = Math.floor(Math.random()*255);
    let b: number = Math.floor(Math.random()*255);
    let rng1:string =` rgb(${r},${g},${b})`;
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    let rng2:string = `rgb(${r},${g},${b})`;
    colors[0].style.background= `linear-gradient(135deg,${rng1} 49%,${rng2} 50%)`;
    get[0].style.background= `linear-gradient(135deg,${rng1} 49%,${rng2} 50%)`;
}
setInterval(colors,2000);
document.addEventListener('DOMContentLoaded', function () {
    getLocalStorage();
    get[0].addEventListener("click", phasesJeu);
    get[1].addEventListener("click", pair);
    get[2].addEventListener("click", impair);
    input[0].addEventListener("click", withBot);
    input[1].addEventListener("click", withoutBot);

});
function withBot(){ 
    window.localStorage.setItem("bot","true");
    input[0].classList.add('select');
    input[1].classList.remove('select');
    get[0].disabled = false;
}
function withoutBot(){ 
    window.localStorage.setItem("bot","false");
    input[1].classList.add('select');
    input[0].classList.remove('select');
    get[0].disabled = false;
}

randString = rand.toString();
function bot() {
    getLocalStorage();
    let img:HTMLCollectionOf<HTMLImageElement> = psyko[0].getElementsByTagName("img");
    img[0].setAttribute("src", "./assets/psykokwak.png")
    psyko[0].classList.add("psy");
    setTimeout(function() {
        switch (tour1){
            case "j1":
                rand= Math.floor((Math.random() * (10)) +1 );
                randString = rand.toString();
                if (rand<5){
                    pair();
                }
                else {
                    impair();
                }
                break;
            case "j2":
                joueur3 = Number(joueur1);
                joueur4 = Number(joueur2);
                rand= Math.floor((Math.random() * (joueur4)) +1 );
                randString = rand.toString();
                window.localStorage.setItem('nombreBilles', randString);
                varStor = window.localStorage.getItem("nombreBilles");
                phasesJeu("2");
                buttonChoice[1].disabled = false;
                buttonChoice[2].disabled = false;
                break;
        };
        img[0].setAttribute("src", "./assets/psykokwak-2.png")
    }, 2000);
}
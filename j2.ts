let joueur1: any = localStorage.getItem("nombreBillesJoueur1");
let joueur2: any = localStorage.getItem("nombreBillesJoueur2");
let number : any = localStorage.getItem("nombreBilles");
let get = document.getElementsByTagName("button");
function pair () {
    if (number % 2 === 0){
        alert("win");
    }
    else {
        alert("lose");
    }
}
function impair (){
    if (number % 2 === 0){
        alert("lose");
    }
    else {
        alert("win");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    get[0].addEventListener("click",pair);
    get[1].addEventListener("click",impair);
});
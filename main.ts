function initPlayers(){
    let billes : string = "10";
    window.localStorage.setItem('nombreBillesJoueur1', billes);
    window.localStorage.setItem('nombreBillesJoueur2', billes);
}
initPlayers;
let figlist = document.getElementsByTagName("figure");
let figcaptionlist = document.getElementsByTagName("figcaption");

let varStor : string ="0";
document.addEventListener('DOMContentLoaded', function() {
    for(let i = 0; i < figcaptionlist.length; i++){
        figlist[i].addEventListener("click",function(){
            window.localStorage.setItem('nombreBilles', figcaptionlist[i].innerHTML); 
            document.write(varStor)
    })}
});
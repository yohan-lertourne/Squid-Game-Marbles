function initPlayers(){
    let billes : any = 10;
    window.localStorage.setItem('nombreBillesJoueur1', billes);
    window.localStorage.setItem('nombreBillesJoueur2', billes);
}

let figlist = document.getElementsByTagName("figure");
let figcaptionlist = document.getElementsByTagName("figcaption");

let varStor : any = 0;
for(let i = 0; i < figcaptionlist.length; i++){
    figlist[i].addEventListener("click",function(){
        window.localStorage.setItem('nombreBilles', figcaptionlist[i].innerHTML);
        varStor = window.localStorage.getItem("nombreBilles");
        document.write(varStor)
})}

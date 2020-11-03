function zobrazenieCheckboxu(x) {
    if (x===1){
        document.getElementById('hiddenCheckbox').style.display="block";

    }
    else{
        document.getElementById('hiddenCheckbox').style.display = "none";
    }
    
}

function vytvorMenu(vyber){
    for(var i = 0; i < pole.length; i++) {
        var menu = pole[i];
        var element = document.createElement("option");
        element.textContent = menu;
        element.value = menu;
        vyber.appendChild(element);
    }
}
/*Znacky*/
var vyber = document.getElementById("znacka");
var pole = ["CTM","Kenzel","Dema"];
vytvorMenu(vyber);



document.getElementById('druh11').style.display="none";
document.getElementById('typy11').style.display="none";

function vymaz(vyber){
    for(var i=0; i<=vyber.length+1;i++){
        vyber.remove(1);
    }
}


function vyberZnacku(){
    var element = document.getElementById('znacka').value;
    document.getElementById('druh11').style.display="none";
    document.getElementById('typy11').style.display="none";

    if (element==="CTM"){
        document.getElementById('druh11').style.display="block";
        vyber = document.getElementById("druh1");
        vymaz(vyber);
        pole = ["Horský","Dámsky","Cestný"];
        vytvorMenu(vyber);
        document.getElementById('typy11').style.display="none";

    }
    else if (element==="Kenzel"){

        document.getElementById('druh11').style.display="block";

        vyber = document.getElementById("druh1");
        vymaz(vyber);
        pole = ["Horský","Dámsky"];
        vytvorMenu(vyber);

        document.getElementById('typy11').style.display="none";


    }
    else if (element==="Dema"){

        vyber = document.getElementById("druh1");
        vymaz(vyber);
        pole = ["Horský","Dámsky","Full"];
        vytvorMenu(vyber);
        document.getElementById('druh11').style.display="block";
        document.getElementById('typy11').style.display="none";

    }
    else{
        document.getElementById('druh11').style.display="none";

        document.getElementById('typy11').style.display="none";

    }


}

document.getElementById('typy11').style.display="none";



function vyberDruh(){
    var element0 = document.getElementById('znacka').value;
    var element1 = document.getElementById('druh1').value;
    if (element0==="CTM")
    {

        vyberCTM(element1);
    }
    else if (element0==="Kenzel")
    {
        vyberKenzel(element1);
    }
    else if (element0==="Dema"){
        vyberDema(element1);
    }
    else {
        document.getElementById('typy11').style.display="none";

    }

}

function vyberCTM(typ){

    if (typ==="Horský"){
        document.getElementById('typy11').style.display="block";
        vyber = document.getElementById("typ11");
        vymaz(vyber);
        pole = ["Terrano 1.0","Terrano 2.0","Rein 1.0","Rein 2.0"];
        vytvorMenu(vyber);


    }
    else if (typ==="Dámsky"){
        vyber = document.getElementById("typ11");
        vymaz(vyber);
        pole = ["Charisma 2.0","Suzzy 1.0"];
        vytvorMenu(vyber);
        document.getElementById('typy11').style.display="block";

    }
    else if (typ==="Cestný"){
        vyber = document.getElementById("typ11");
        vymaz(vyber);
        pole = ["Scroll Pro","Scroll Expert","Ridge"];
        vytvorMenu(vyber);

        document.getElementById('typy11').style.display="block";

    }
    else {
        document.getElementById('typy11').style.display="none";

    }

}

function vyberKenzel(typ){

    if (typ==="Horský"){
        document.getElementById('typy11').style.display="block";
        vyber = document.getElementById("typ11");
        vymaz(vyber);
        pole = ["KJU 900","KJU PR0","Shade"];
        vytvorMenu(vyber);

    }
    else if (typ==="Dámsky"){
        document.getElementById('typy11').style.display="block";
        vyber = document.getElementById("typ11");
        vymaz(vyber);
        pole = ["KJU Woman","Shade Woman"];
        vytvorMenu(vyber);
    }

    else {
        document.getElementById('typy11').style.display="none";

    }

}
function vyberDema(typ){

    if (typ==="Horský"){
        document.getElementById('typy11').style.display="block";
        vyber = document.getElementById("typ11");
        vymaz(vyber);
        pole = ["Energy","Ravena","Pegas"];
        vytvorMenu(vyber);

    }
    else if (typ==="Dámsky"){
        document.getElementById('typy11').style.display="block";
        vyber = document.getElementById("typ11");
        vymaz(vyber);
        pole = ["Clarice","Venice"];
        vytvorMenu(vyber);


    }
    else if (typ==="Full"){
        document.getElementById('typy11').style.display="block";
        vyber = document.getElementById("typ11");
        vymaz(vyber);
        pole = ["Scud","Leony"];
        vytvorMenu(vyber);
    }
    else {
        document.getElementById('typy11').style.display="none";
    }

}

function emailValidacia() {


    var text = document.getElementById('textEmail');
    var email = document.getElementById('email').value;
    var kontrola = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,4}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,4})$/;

    if(kontrola.test(email) === true)
    {
        text.innerHTML="Email je validný";
        text.style.color = "#fff";
    }

    else{

        text.innerHTML="Email je zlý";
        text.style.color = "#fff";
    }



}
function kontorla() {
    if (porovnanie()===false){
        alert("Chyba prosim skontorluj formulár");
        return false;

    }
    else{
        return true;
    }



}

function porovnanie(){
    var text = document.getElementById("textVek")
    var vek = document.getElementById('vek').value;

    const rok = new Date(document.getElementById("datum").value).getFullYear();
    const mesiac = new Date(document.getElementById("datum").value).getMonth();
    const den = new Date(document.getElementById("datum").value).getDate();

    var skutocnyVek = vypocetVeku(new Date(rok,mesiac,den));
    if (skutocnyVek == vek){
        text.innerHTML="Vek je validný";
        text.style.color = "#fff";
        return true;

    }
    else{

        text.innerHTML="Vek alebo dátum narodenia je zlý";
        text.style.color = "#fff";
        return false;

    }
}

function vypocetVeku(dob) {
    var rozdiel = Date.now() - dob.getTime();
    var vek = new Date(rozdiel);

    return Math.abs(vek.getUTCFullYear() - 1970);
}

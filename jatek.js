import { lista } from "./adat.js";

function main() {
    megjelenites();
    
}

function megjelenites() {
    veletlenFeltoltes();
    lightOnGeneralas();
    szinValasztas();
    ujJatek();
    kattintasEsemeny();
}

function veletlenFeltoltes() {
    for (let index = 0; index < lista.length; index++) {
        const randomSzam = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        lista[index] = randomSzam;
        
    }
    console.log(lista)
    return lista
}

function lightOnGeneralas() {
    const TER = $(".teljes")
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        txt += `<div class="gomb" id="${index}"></div>` ;
    }
    console.log(lista);
    TER.html(txt)
    
}

function ujJatek() {
    const FOOTER = $("footer");
    const UJ_JATEK_BTN_DIV = $('<div class="ujJatekDiv">');
    const UJ_JATEK_BTN = $('<button class="ujJatekBtn">Uj Jatek!</button>');
    UJ_JATEK_BTN_DIV.append(UJ_JATEK_BTN);
    FOOTER.prepend(UJ_JATEK_BTN_DIV);
    UJ_JATEK_BTN.eq(0).on("click",function(){
        location.reload();
    });
}



function eredmeny(){
  const mindenEggyezik = new Set(lista).size === 1;
  console.log(mindenEggyezik);
  if(mindenEggyezik === true) {
    alert("Nyertel!")
  }
}



function szinValasztas(){
    for (let index = 0; index < lista.length; index++) {
        if(lista[index] === 1){
            $(".gomb").eq(index).css("background-color","yellow");
        } else {
            $(".gomb").eq(index).css("background-color","green");
        }
        
    }
}
 
function kattintasEsemeny(){
    const kattintasHang = new Audio(`kattintasHang.wav`);

    // 1 yellow
    // 2 green
    $(".gomb").on("click", function(event) {
        kattintasHang.play(`kattintasHang.wav`);
       let aktindex = Number(event.target.id);
       console.log(aktindex+1);
       ellenkezeljereValt(aktindex)
       ellenkezeljereValt(aktindex-3)
       ellenkezeljereValt(aktindex+3)
       ellenkezeljereValt(aktindex-1)
       ellenkezeljereValt(aktindex+1)
    
    });
    eredmeny();
   
}
function ellenkezeljereValt(index){
    let backgroundColor = $(".gomb").eq(index).css("background-color");
    if (backgroundColor === "rgb(255, 255, 0)") {
        $(".gomb").eq(index).css("background-color", "green");
       
        lista[index] = 2
       
    } else {
        $(".gomb").eq(index).css("background-color", "yellow");
       
        lista[index] = 1
        
    }
}














main();
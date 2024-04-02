import { lista } from "./adat.js";

function main() {
    megjelenites();
    kattintasEsemeny();
    
}

function megjelenites() {
    veletlenFeltoltes()
    lightOnGeneralas()
    szinValasztas();
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
        txt += `<div class="gomb"></div>` ;
    }
    console.log(lista);
    TER.html(txt)
    
    
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
    eredmeny();
    // 1 yellow
    // 2 green
    $(".gomb").eq(0).on("click", function(event) {
        let backgroundColor = $(".gomb").eq(0).css("background-color");
        if (backgroundColor === "rgb(255, 255, 0)") {
            $(".gomb").eq(0).css("background-color", "green");
            $(".gomb").eq(1).css("background-color", "green");
            $(".gomb").eq(3).css("background-color", "green");
            lista[0] = 2
            lista[1] = 2
            lista[3] = 2
        } else {
            $(".gomb").eq(0).css("background-color", "yellow");
            $(".gomb").eq(1).css("background-color", "yellow");
            $(".gomb").eq(3).css("background-color", "yellow");
            lista[0] = 1
            lista[1] = 1
            lista[3] = 1
            
        }
    });
}













main();
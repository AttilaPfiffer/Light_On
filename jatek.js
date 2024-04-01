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
     eredmeny();
     $(".gomb").eq(0).on("click",function(){
        $(".gomb").eq(0).css("background-color","yellow")
        $(".gomb").eq(1).css("background-color","yellow")
        $(".gomb").eq(3).css("background-color","yellow")
     });   
}














main();
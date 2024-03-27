import { lista } from "./adat.js";

function main() {
    megjelenites();
}

function megjelenites() {
    veletlenFeltoltes()
    lightOnGeneralas()
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
    veletlenFeltoltes();
    for (let index = 0; index < lista.length; index++) {
        txt += `<div class="gomb">1</div>` ;
        const GOMBMEGFOG = $(".gomb");
        if (lista[index] === 1){
            $(GOMBMEGFOG).css("background-color", "yellow")
        }else{
            GOMBMEGFOG.addClass(".gombzold")
        }
    }
    TER.html(txt)
    return txt
    
}










main();
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
        txt += `<div class="gomb"></div>` ;
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
    eredmeny();
    // 1 yellow
    // 2 green
    $(".gomb").eq(0).on("click", function(event) {
        kattintasHang.play(`kattintasHang.wav`);
        eredmeny();
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
    $(".gomb").eq(1).on("click", function(event) {
        kattintasHang.play(`kattintasHang.wav`);
        eredmeny();
        let backgroundColor = $(".gomb").eq(1).css("background-color");
        if (backgroundColor === "rgb(255, 255, 0)") {
            $(".gomb").eq(1).css("background-color", "green");
            $(".gomb").eq(0).css("background-color", "green");
            $(".gomb").eq(2).css("background-color", "green");
            $(".gomb").eq(4).css("background-color", "green");
            lista[0] = 2
            lista[1] = 2
            lista[2] = 2
            lista[4] = 2
        } else {
            $(".gomb").eq(1).css("background-color", "yellow");
            $(".gomb").eq(0).css("background-color", "yellow");
            $(".gomb").eq(2).css("background-color", "yellow");
            $(".gomb").eq(4).css("background-color", "yellow");
            lista[0] = 1
            lista[1] = 1
            lista[2] = 1
            lista[4] = 1
                
        }
    });
    $(".gomb").eq(2).on("click", function(event) {
        kattintasHang.play(`kattintasHang.wav`);
        eredmeny();
        let backgroundColor = $(".gomb").eq(2).css("background-color");
        if (backgroundColor === "rgb(255, 255, 0)") {
            $(".gomb").eq(2).css("background-color", "green");
            $(".gomb").eq(1).css("background-color", "green");
            $(".gomb").eq(5).css("background-color", "green");
            lista[2] = 2
            lista[1] = 2
            lista[5] = 2
        } else {
            $(".gomb").eq(2).css("background-color", "yellow");
            $(".gomb").eq(1).css("background-color", "yellow");
            $(".gomb").eq(5).css("background-color", "yellow");
            lista[2] = 1
            lista[1] = 1
            lista[5] = 1
            
        }
    
    });
    $(".gomb").eq(3).on("click", function(event) {
        kattintasHang.play(`kattintasHang.wav`);
        eredmeny();
        let backgroundColor = $(".gomb").eq(3).css("background-color");
        if (backgroundColor === "rgb(255, 255, 0)") {
            $(".gomb").eq(3).css("background-color", "green");
            $(".gomb").eq(0).css("background-color", "green");
            $(".gomb").eq(6).css("background-color", "green");
            $(".gomb").eq(4).css("background-color", "green");
            lista[3] = 2
            lista[0] = 2
            lista[6] = 2
            lista[4] = 2
        } else {
            $(".gomb").eq(3).css("background-color", "yellow");
            $(".gomb").eq(0).css("background-color", "yellow");
            $(".gomb").eq(6).css("background-color", "yellow");
            $(".gomb").eq(4).css("background-color", "yellow");
            lista[3] = 1
            lista[0] = 1
            lista[6] = 1
            lista[4] = 1
                
        }
    });
    $(".gomb").eq(4).on("click", function(event) {
        kattintasHang.play(`kattintasHang.wav`);
        eredmeny();
        let backgroundColor = $(".gomb").eq(4).css("background-color");
        if (backgroundColor === "rgb(255, 255, 0)") {
            $(".gomb").eq(4).css("background-color", "green");
            $(".gomb").eq(1).css("background-color", "green");
            $(".gomb").eq(3).css("background-color", "green");
            $(".gomb").eq(5).css("background-color", "green");
            $(".gomb").eq(7).css("background-color", "green");
            lista[4] = 2
            lista[1] = 2
            lista[3] = 2
            lista[5] = 2
            lista[7] = 2
        } else {
            $(".gomb").eq(4).css("background-color", "yellow");
            $(".gomb").eq(1).css("background-color", "yellow");
            $(".gomb").eq(3).css("background-color", "yellow");
            $(".gomb").eq(5).css("background-color", "yellow");
            $(".gomb").eq(7).css("background-color", "yellow");
            lista[4] = 1
            lista[1] = 1
            lista[3] = 1
            lista[5] = 1
            lista[7] = 1
                
        }
    });
    $(".gomb").eq(5).on("click", function(event) {
        kattintasHang.play(`kattintasHang.wav`);
        eredmeny();
        let backgroundColor = $(".gomb").eq(5).css("background-color");
        if (backgroundColor === "rgb(255, 255, 0)") {
            $(".gomb").eq(5).css("background-color", "green");
            $(".gomb").eq(4).css("background-color", "green");
            $(".gomb").eq(2).css("background-color", "green");
            $(".gomb").eq(8).css("background-color", "green");
            lista[5] = 2
            lista[4] = 2
            lista[2] = 2
            lista[8] = 2
        } else {
            $(".gomb").eq(5).css("background-color", "yellow");
            $(".gomb").eq(4).css("background-color", "yellow");
            $(".gomb").eq(2).css("background-color", "yellow");
            $(".gomb").eq(8).css("background-color", "yellow");
            lista[5] = 1
            lista[4] = 1
            lista[2] = 1
            lista[8] = 1
                
        }
    });
    $(".gomb").eq(6).on("click", function(event) {
        kattintasHang.play(`kattintasHang.wav`);
        eredmeny();
        let backgroundColor = $(".gomb").eq(6).css("background-color");
        if (backgroundColor === "rgb(255, 255, 0)") {
            $(".gomb").eq(6).css("background-color", "green");
            $(".gomb").eq(3).css("background-color", "green");
            $(".gomb").eq(7).css("background-color", "green");
            lista[6] = 2
            lista[3] = 2
            lista[7] = 2
        } else {
            $(".gomb").eq(6).css("background-color", "yellow");
            $(".gomb").eq(3).css("background-color", "yellow");
            $(".gomb").eq(7).css("background-color", "yellow");
            lista[6] = 1
            lista[3] = 1
            lista[7] = 1
            
        }
    
    });
    $(".gomb").eq(7).on("click", function(event) {
        kattintasHang.play(`kattintasHang.wav`);
        eredmeny();
        let backgroundColor = $(".gomb").eq(7).css("background-color");
        if (backgroundColor === "rgb(255, 255, 0)") {
            $(".gomb").eq(7).css("background-color", "green");
            $(".gomb").eq(4).css("background-color", "green");
            $(".gomb").eq(6).css("background-color", "green");
            $(".gomb").eq(8).css("background-color", "green");
            lista[7] = 2
            lista[4] = 2
            lista[6] = 2
            lista[8] = 2
        } else {
            $(".gomb").eq(7).css("background-color", "yellow");
            $(".gomb").eq(4).css("background-color", "yellow");
            $(".gomb").eq(6).css("background-color", "yellow");
            $(".gomb").eq(8).css("background-color", "yellow");
            lista[7] = 1
            lista[4] = 1
            lista[6] = 1
            lista[8] = 1
                
        }
    });
    $(".gomb").eq(8).on("click", function(event) {
        kattintasHang.play(`kattintasHang.wav`);
        eredmeny();
        let backgroundColor = $(".gomb").eq(8).css("background-color");
        if (backgroundColor === "rgb(255, 255, 0)") {
            $(".gomb").eq(8).css("background-color", "green");
            $(".gomb").eq(5).css("background-color", "green");
            $(".gomb").eq(7).css("background-color", "green");
            lista[8] = 2
            lista[5] = 2
            lista[7] = 2
        } else {
            $(".gomb").eq(8).css("background-color", "yellow");
            $(".gomb").eq(5).css("background-color", "yellow");
            $(".gomb").eq(7).css("background-color", "yellow");
            lista[8] = 1
            lista[5] = 1
            lista[7] = 1
            
        }
    
    });

}














main();
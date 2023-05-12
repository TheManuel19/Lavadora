const lavadora = {
    estado: false,
    nivel_agua:0,
    nivel_lavado:0,
    tiempo_lavado:0,
    enjuague:0,
    lavar:false
}

function encender() {
    if (lavadora.estado == true) {
        lavadora.estado = false
        console.log("El boton esta true");
        const nivelAgua = document.getElementById('na');
        const nivelLavado = document.getElementById('nl');
        const tiempoLavado = document.getElementById('tl');
        const enjuague = document.getElementById('e');
        const btnlavar = document.getElementById('l');
        
        document.getElementById("bon").className = "badge text-bg-success";
        document.getElementById("bon").textContent="o";

        nivelAgua.disabled = false;
        nivelAgua.style.opacity = 1;
        nivelLavado.disabled = false;
        nivelLavado.style.opacity = 1;
        tiempoLavado.disabled = false;
        tiempoLavado.style.opacity = 1;
        enjuague.disabled = false;
        enjuague.style.opacity = 1;
        btnlavar.disabled = false;
        btnlavar.style.opacity = 1;

    }else {
        lavadora.estado = true
        console.log("El boton esta se desactiva");
        const nivelAgua = document.getElementById('na');
        const nivelLavado = document.getElementById('nl');
        const tiempoLavado = document.getElementById('tl');
        const enjuague = document.getElementById('e');
        const btnlavar = document.getElementById('l');

        document.getElementById("bon").className = "badge bg-secondary";
        document.getElementById("bon").textContent="|";
        nivelAgua.disabled = true;
        nivelAgua.style.opacity = 0.7;
        nivelLavado.disabled = true;
        nivelLavado.style.opacity = 0.7;
        tiempoLavado.disabled = true;
        tiempoLavado.style.opacity = 0.7;
        enjuague.disabled = true;
        enjuague.style.opacity = 0.7;
        btnlavar.disabled = true;
        btnlavar.style.opacity = 0.7;


         document.getElementById("bna1").className = "badge bg-secondary";
         document.getElementById("bna2").className = "badge bg-secondary";
         document.getElementById("bna3").className = "badge bg-secondary";
         document.getElementById("bna4").className = "badge bg-secondary";
         document.getElementById("bna5").className = "badge bg-secondary";

         document.getElementById("bnl1").className = "badge bg-secondary";
         document.getElementById("bnl2").className = "badge bg-secondary";
         document.getElementById("bnl3").className = "badge bg-secondary";

         document.getElementById("btl1").className = "badge bg-secondary";
         document.getElementById("btl2").className = "badge bg-secondary";
         document.getElementById("btl3").className = "badge bg-secondary";
         document.getElementById("btl4").className = "badge bg-secondary";
         document.getElementById("btl5").className = "badge bg-secondary";

         document.getElementById("be1").className = "badge bg-secondary";
         document.getElementById("be2").className = "badge bg-secondary";
         document.getElementById("be3").className = "badge bg-secondary";

        if (lavadora.lavar == true) {
            lavadora.lavar = false;
            document.getElementById("bl").className = "badge bg-secondary";
            document.getElementById("bl").textContent="|";
        }
        lavadora.nivel_agua = 0;
        lavadora.nivel_lavado = 0;
        lavadora.tiempo_lavado = 0
        lavadora.enjuague = 0;
    }
}
function nivelAgua() {
    lavadora.nivel_agua =lavadora.nivel_agua+1;
   if (lavadora.nivel_agua == 1) {
        document.getElementById("bna1").className = "badge text-bg-danger";
    }if (lavadora.nivel_agua == 2) {
        document.getElementById("bna2").className = "badge text-bg-danger";
        document.getElementById("bna1").className = "badge bg-secondary";
    }if (lavadora.nivel_agua == 3) {
        document.getElementById("bna3").className = "badge text-bg-danger";
        document.getElementById("bna2").className = "badge bg-secondary";
    }if (lavadora.nivel_agua == 4) {
        document.getElementById("bna4").className = "badge text-bg-danger";
        document.getElementById("bna3").className = "badge bg-secondary";
    }if (lavadora.nivel_agua == 5) {
        document.getElementById("bna5").className = "badge text-bg-danger";
        document.getElementById("bna4").className = "badge bg-secondary";
    }if (lavadora.nivel_agua > 5) {
        lavadora.nivel_agua = 0
        document.getElementById("bna5").className = "badge bg-secondary";
    }
}
function nivelLavado() {
    lavadora.nivel_lavado =lavadora.nivel_lavado+1;
    if (lavadora.nivel_lavado == 1) {
        document.getElementById("bnl1").className = "badge text-bg-danger";
    }if (lavadora.nivel_lavado == 2) {
        document.getElementById("bnl2").className = "badge text-bg-danger";
        document.getElementById("bnl1").className = "badge bg-secondary";
    }if (lavadora.nivel_lavado == 3) {
        document.getElementById("bnl3").className = "badge text-bg-danger";
        document.getElementById("bnl2").className = "badge bg-secondary";
    }if (lavadora.nivel_lavado > 3) {
        lavadora.nivel_lavado = 0
        document.getElementById("bnl3").className = "badge bg-secondary";
    }
}
function tiempoLavado() {
    lavadora.tiempo_lavado =lavadora.tiempo_lavado+1;
    if (lavadora.tiempo_lavado == 1) {
        document.getElementById("btl1").className = "badge text-bg-danger";
    }if (lavadora.tiempo_lavado == 2) {
        document.getElementById("btl2").className = "badge text-bg-danger";
        document.getElementById("btl1").className = "badge bg-secondary";
    }if (lavadora.tiempo_lavado == 3) {
        document.getElementById("btl3").className = "badge text-bg-danger";
        document.getElementById("btl2").className = "badge bg-secondary";
    }if (lavadora.tiempo_lavado == 4) {
        document.getElementById("btl4").className = "badge text-bg-danger";
        document.getElementById("btl3").className = "badge bg-secondary";
    }if (lavadora.tiempo_lavado == 5) {
        document.getElementById("btl5").className = "badge text-bg-danger";
        document.getElementById("btl4").className = "badge bg-secondary";
    }if (lavadora.tiempo_lavado > 5) {
        document.getElementById("btl5").className = "badge bg-secondary";
        lavadora.tiempo_lavado = 0;
    }
}
function enjuague() {
    lavadora.enjuague =lavadora.enjuague+1;
    if (lavadora.enjuague == 1) {
        document.getElementById("be1").className = "badge text-bg-danger";
    }if (lavadora.enjuague == 2) {
        document.getElementById("be2").className = "badge text-bg-danger";
        document.getElementById("be1").className = "badge bg-secondary";
    }if (lavadora.enjuague == 3) {
        document.getElementById("be3").className = "badge text-bg-danger";
        document.getElementById("be2").className = "badge bg-secondary";
    }if (lavadora.enjuague > 3) {
        lavadora.enjuague = 0
        document.getElementById("be3").className = "badge bg-secondary";
    }
}
function lavar() {
    if (lavadora.lavar == false) {
        lavadora.lavar = true
        console.log("El boton esta true");
        const nivelAgua = document.getElementById('na');
        const nivelLavado = document.getElementById('nl');
        const tiempoLavado = document.getElementById('tl');
        const enjuague = document.getElementById('e');
        

        document.getElementById("bl").className = "badge text-bg-success";
        document.getElementById("bl").textContent="o";

        nivelAgua.disabled = true;
        nivelAgua.style.opacity = 0.7;

        nivelLavado.disabled = true;
        nivelLavado.style.opacity = 0.7;

        tiempoLavado.disabled = true;
        tiempoLavado.style.opacity = 0.7;

        enjuague.disabled = true;
        enjuague.style.opacity = 0.7;
    }
}
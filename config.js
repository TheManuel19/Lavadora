const lavadora = {
    estado: false,
    nivel_agua:0,
    nivel_lavado:0,
    tiempo_lavado:0,
    emjuague:0,
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
        
        
        nivelAgua.enable = true;
        nivelAgua.style.opacity = 1;

        nivelLavado.enable = true;
        nivelLavado.style.opacity = 1;

        tiempoLavado.enable = true;
        tiempoLavado.style.opacity = 1;

        enjuague.enable = true;
        enjuague.style.opacity = 1;

        btnlavar.enable = true;
        btnlavar.style.opacity = 1;
    }else {
        lavadora.estado = true
        console.log("El boton esta se desactiva");
        const nivelAgua = document.getElementById('na');
        const nivelLavado = document.getElementById('nl');
        const tiempoLavado = document.getElementById('tl');
        const enjuague = document.getElementById('e');
        const btnlavar = document.getElementById('l');

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
    }
    
}


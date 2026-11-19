
// Obtener las luces del semáforo
const luzRoja = document.getElementById("roja");
const luzAmarilla = document.getElementById("amarilla");
const luzVerde = document.getElementById("verde");

// Obtener elementos de la página
const estado = document.getElementById("estado");
const boton = document.getElementById("iniciar");

// Definir los tiempos en milisegundos
const tiempoVerde = 5000;    // 5 segundos
const tiempoAmarillo = 2000; // 2 segundos
const tiempoRojo = 5000;     // 5 segundos

// Función para apagar todas las luces
function apagarTodas() {
    luzRoja.classList.remove("encendida");
    luzAmarilla.classList.remove("encendida");
    luzVerde.classList.remove("encendida");
}

// Función para encender una luz
function encender(luz, mensaje, tiempo) {

    apagarTodas();

    luz.classList.add("encendida");

    estado.textContent = mensaje;

    return new Promise((resolver) => {
        setTimeout(resolver, tiempo);
    });
}

// Función principal del semáforo
async function iniciarSemaforo() {

    boton.disabled = true;
    boton.textContent = "Semáforo funcionando";

    while (true) {

        // Encender luz verde
        await encender(
            luzVerde,
            "Luz verde: avanzar",
            tiempoVerde
        );

        // Encender luz amarilla
        await encender(
            luzAmarilla,
            "Luz amarilla: precaución",
            tiempoAmarillo
        );

        // Encender luz roja
        await encender(
            luzRoja,
            "Luz roja: detenerse",
            tiempoRojo
        );

    }
}

// Evento para iniciar el semáforo
boton.addEventListener("click", iniciarSemaforo);

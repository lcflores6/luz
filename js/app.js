const boton = document.getElementById("btnLuz");
const luz = document.getElementById("luz");

boton.addEventListener("click",() => {
    luz.classList.toggle("encendida");
    luz.classList.toggle("apagada");ç

    if (luz.classList.contains("encendida")) {
        boton.textContent ="Apagar";
    } else{
        boton.textContent="Encender";
    }
})

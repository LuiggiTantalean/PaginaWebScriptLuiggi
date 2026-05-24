function actualizarRelojIntro() {
    let elementoReloj = document.getElementById("reloj_intro");
    if (elementoReloj) {
        let ahora = new Date();
        let hora = ahora.getHours().toString().padStart(2, '0');
        let min = ahora.getMinutes().toString().padStart(2, '0');
        let seg = ahora.getSeconds().toString().padStart(2, '0');
        elementoReloj.textContent = hora + ":" + min + ":" + seg;
        setTimeout(actualizarRelojIntro, 1000);
    }
}
window.addEventListener('load', actualizarRelojIntro);

function fsaludoIntro() {
    let nombre = document.getElementById("nombre_intro").value;
    if (nombre !== "") {
        alert("¡Hola " + nombre + "! Este es una pagina web con información de las 7 Maravillas del mundo y más");
    } else {
        alert("Introduce tu nombre primero");
    }
}

function fcambiarFondoIntro() {
    let colorEscrito = document.getElementById("nombre_intro").value;
    if (colorEscrito !== "") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = colorEscrito;
    } else {
        alert("Escribe un color en ingles primero");
    }
}

function fcambiarTextoIntro() {
    let nuevoTexto = document.getElementById("nombre_intro").value;
    if (nuevoTexto !== "") {
        document.getElementById("parrafo_dinamico_intro").textContent = nuevoTexto;
    } else {
        document.getElementById("parrafo_dinamico_intro").textContent = "Puedes poner algun mensaje y cambiarlo de forma automatica";
    }
}

function fcuentaAtrasIntro() {
    let resultado = "";
    for (let i = 5; i >= 1; i--) {
        resultado += i + "... "; }
    resultado += "<br>" + "¡Disfruta la pagina web!";
    document.getElementById("resultado_bloque_intro").innerHTML = resultado;
}

function fpiramideIntro() {
    let niveles = parseInt(prompt("¿Cuántas estrellas de valoración le das a mi pagina web (1-10)?"));
    if (isNaN(niveles) || niveles <= 0) {
        alert("Introduce un número superior a 0");
        return;
    }

    let resultado = "";
    for (let i = 1; i <= niveles; i++) {
        for (let j = 1; j <= i; j++) {
            resultado = resultado + "*"; 
        }  
        resultado = resultado + "<br>";
    } 
    document.getElementById("resultado_bloque_intro").innerHTML = resultado;
}



function focultarFotosMaravillas() {
    let todasLasImgs = document.getElementsByTagName("img");
    for (let i = 0; i < todasLasImgs.length; i++) {
        if (todasLasImgs[i].id !== "foto_rotativa") {
            todasLasImgs[i].style.visibility = "hidden";
        }
    }
}


function fverFotosMaravillas() {
    let todasLasImgs = document.getElementsByTagName("img");
    for (let i = 0; i < todasLasImgs.length; i++) {
        todasLasImgs[i].style.visibility = "visible";
    }
}


let listaRutasFotos = [
    "Imagenes_web/mexicobandera.png",
    "Imagenes_web/italiabandera.png",
    "Imagenes_web/perubandera.png",
    "Imagenes_web/chinabandera.png",
    "Imagenes_web/jordaniabandera.png",
    "Imagenes_web/indiabandera.png",
    "Imagenes_web/brasilbandera.png"
];
let indiceActualFoto = 0;

function fcambiarFotoCarrusel() {
    let imgDestino = document.getElementById("foto_rotativa");
    if (imgDestino) {
        indiceActualFoto++;
        if (indiceActualFoto >= listaRutasFotos.length) {
            indiceActualFoto = 0;
        }
        imgDestino.src = listaRutasFotos[indiceActualFoto];
    }
}


function fcompararAlturasMaravillas() {
    let alt1 = parseInt(document.getElementById("altura_m1").value);
    let alt2 = parseInt(document.getElementById("altura_m2").value);

    if (isNaN(alt1) || isNaN(alt2)) {
        alert("Rellena ambos valores para comparar los monumentos");
        return;
    }

    if (alt1 > alt2) {
        alert("El primer monumento es más alto con " + alt1 + " metros");
    } else if (alt2 > alt1) {
        alert("El segundo monumento es más alto con " + alt2 + " metros");
    } else {
        alert("Ambos monumentos miden exactamente lo mismo");
    }
}


let arrayPlatosSeleccionados = [
    "Ceviche Peruano", 
    "Tacos al Pastor", 
    "Feijoada Brasilera", 
    "Paella Valenciana", 
    "Pizza Napolitana", 
    "Pasta Carbonara"
];



function fanadirPlatoGastro() {
    let plato = document.getElementById("input_plato_gastro").value;
    if (plato !== "") {
        arrayPlatosSeleccionados.push(plato);
        alert('"' + plato + '" ha sido añadido al menu');
        document.getElementById("input_plato_gastro").value = "";
        fvisualizarMenuGastro();
    }
}

function feliminarPlatoGastro() {
    if (arrayPlatosSeleccionados.length > 0) {
        let eliminado = arrayPlatosSeleccionados.pop();
        alert("Eliminaste del menu: " + eliminado);
        fvisualizarMenuGastro();
    } else {
        alert("Tu menú está completamente vacío, es festivo :`)");
    }
}


function fvisualizarMenuGastro() {
    let cajaTexto = document.getElementById("resultado_lista_gastro");
    if (cajaTexto) {
        let textoFinal = "Lista de tus platos en la carta:<br>";
        for (let i = 0; i < arrayPlatosSeleccionados.length; i++) {
            textoFinal += (i + 1) + ". " + arrayPlatosSeleccionados[i] + "<br>";
        }
        cajaTexto.innerHTML = textoFinal;
    }
}


function fcalcularSumaGastro() {
    let precio = parseInt(document.getElementById("coste_plato").value) || 0;
    let personas = parseInt(document.getElementById("personas_plato").value) || 0;

    if (precio <= 0 || personas <= 0) {
        alert("El precio total no puede ser negativo o cero");
    } else {
        let total = precio * personas;
        alert("El presupuesto total estimado para comer es de: " + total + "€");
    }
}



function fentrada_parque() {
    let inputEdad = document.getElementById("edad_persona").value;
    let inputAcompañante = document.getElementById("edad_acompañante").value;
    if (inputEdad === "") { return; }

    let edad_persona = parseInt(inputEdad);
    let edad_acompañante = parseInt(inputAcompañante);
    let tieneAutorizacion = document.getElementById("checkboxAutorizacion").checked;

    if (edad_persona < 18) {
        if (inputAcompañante === "") {
            alert("Tienes menos de 18 años, necesitas obligatoriamente un acompañante mayor de 18 años. Por favor, introduce la edad de tu acompañante en la siguiente casilla");
        }
        else {
            if (edad_acompañante >= 18) {
                alert("El acompañante es mayor de 18 años. Si está autorizado paraa ser acompañante");
            } else {
                alert("El acompañante es menor de 18 años. El acompañante necesita ser de 18 años a más");
            }
        }
    }
    else if (edad_persona >= 18 && edad_persona <= 60) {
        alert("Tienes más de 18 años y menos de 60 años, esta todo permitido para ir");
    }
    else if (edad_persona > 60) {
        if (tieneAutorizacion) {
            alert("Tiene más de 60 años, y está autorizado para ir");
        } else {
            alert("Tiene más de 60 años pero no está autorizado para ir (debes marcar la casilla de autorización si en caso tenga)");
        }
    }
}


function colorletra() {
    let letra = parseInt(document.getElementById("numero").textContent);
    let elementLabel = document.getElementById("numero");

    if (letra > 0) {
        elementLabel.style.color = "green";
    } else if (letra < 0) {
        elementLabel.style.color = "red";
    } else {
        elementLabel.style.color = "black";
    }
}

function fincrementar() {
    let n = parseInt(document.getElementById("numero").textContent);
    document.getElementById("numero").textContent = n + 1;
    colorletra();
}

function fdecrementar() {
    let n = parseInt(document.getElementById("numero").textContent);
    document.getElementById("numero").textContent = n - 1;
    colorletra();
}

function fresetear() {
    document.getElementById("numero").textContent = 0;
    colorletra();
    document.getElementById("parrafo_multiplicar_resultado").innerHTML;
}

function fcalcularTablaMultiplicarBilletes() {
    let numeroBilletes = parseInt(document.getElementById("numero").textContent) || 0;
    let maletasPorPersona = parseInt(document.getElementById("maletas_por_persona").value) || 0;

    if (numeroBilletes <= 0) {
        alert("Incrementa los pasajes arriba para calcular la distribución de equipaje");
        return;
    }
    if (maletasPorPersona < 0) {
        alert("La cantidad de maletas no puede ser un número negativo");
        return;
    }

    let totalMaletas = numeroBilletes * maletasPorPersona;
    document.getElementById("parrafo_multiplicar_resultado").innerHTML = 
        "Si van " + numeroBilletes + " pasajeros  ➔  Llevan un total de " + totalMaletas + " maletas en bodega";
}















































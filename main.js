//boton 1

window.onload = function() {

    var contador = 0;

    document.getElementById("boton1").onclick = function() {

        contador++;

        document.getElementById("mostrar").innerHTML = contador

    }

}
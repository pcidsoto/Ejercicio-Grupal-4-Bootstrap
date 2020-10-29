var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function() {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}
//boton 1

window.onload = function() {

    var contador = 0;

    document.getElementById("boton1").onclick = function() {

        contador++;

        document.getElementById("mostrar").innerHTML = contador

    }

}
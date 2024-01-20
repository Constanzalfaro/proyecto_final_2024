
// funciones para menu resposive

function cambiarClase() {
    let siteNav = document.getElementById('barra-nav');
    siteNav.classList.toggle('barra-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
    menuOpen.classList.toggle('menu-open');

}



//texto inspiracional de seccion locaciones cine 

let ele = document.getElementById("texto-cine").innerHTML;

let slicetext = ele.replace("/\s/g", '').split("");

var textwrap = slicetext.map(item => item === " " ? `<span class="child blank">${item}</span>` : `<span class="child">	${item}</span>`).join('');  // texto se hace wrap
var charHTML = document.getElementById("texto-cine").innerHTML = textwrap; // se agrega el texto

var x = document.getElementById("texto-cine").querySelectorAll(".child");

// Loop del texto 
var i = -1;
function myLoop() {
    i++;
    if (x[i].classList.contains("blank")) {
        myLoop();
    } else {
        setTimeout(function () {
            x[i].style.transform = "rotateY(0)";
            if (i < (x.length - 1)) {
                myLoop();
            }
        }, 35) //velocidad
    }
}
myLoop();





//seccion cine tarjetas locaciones flip con java script




let isFront = true;

const card = document.querySelector('#js-card');
const innerCard = document.querySelector('#js-interna');

const flip = () => {
  innerCard.classList.toggle("flip-card-anim");
};

card.addEventListener('click',flip);


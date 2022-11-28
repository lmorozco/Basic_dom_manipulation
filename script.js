const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result"); 


form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event){
    //console.log({event});
    event.preventDefault();
    const sumaInputs = (+input1.value) + (+input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
    //console.log((+input1.value) + (+input2.value));   En consola
}



// h1 {color : red}  CSS e.j.
// .parrafito { ... }
// #pid { ... }
/*
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");
*/
/*
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Hola Luis! <br> Agregar HTML usando js";
//h1.innerText = "Hola Luis! <br> Jajaj";
//console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "rojo");
h1.classList.add("rojo");
h1.classList.remove("verde");
//h1.classList.toggle("rojo");
//h1.classList.contains("rojo");

input.value = "456";

const img = document.createElement("img");
img.setAttribute("src", "https://924473.smushcdn.com/2409538/wp-content/uploads/elementor/thumbs/Headshot-Circle3-LO-ppcyj9dmvjip0p1tne41v9evicpjmzhlfpen0zdo6w.png?lossy=1&strip=1&webp=1");
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);

*/


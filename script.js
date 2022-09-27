const h1= document.querySelector("h1");
const p= document.querySelector("p");
const parrafito= document.querySelector(".parrafito");
const pid= document.querySelector("#pid");
const input= document.querySelector("input")

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML="MARCELO <br> salta";
h1.innerText="MARCELO <br> salta";

// Funciones para leer o modificar el valor de un atributo
//console.log(h1.getAttribute("pantalla"));
//h1.setAttribute("class","rojo");

// Funcion para modificar el valor de una class
//h1.classList.add("rojo");
//h1.classList.remove("verde");

// Crear un elemento html mediante js desde cero
//console.log(document.createElement("img"));
const img= document.createElement("img");
img.setAttribute("src", "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800");

console.log(img);
pid.append(img)87;



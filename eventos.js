const cifra1= document.querySelector("#Calcular1");
const cifra2= document.querySelector("#Calcular2");
const btnsum= document.querySelector("#btncalculador");
const presul= document.querySelector("#resul");

function btnclick(){

 const resultado= parseInt(cifra1.value) + parseInt(cifra2.value);

 presul.innerText=("El resultado es: "+ resultado);
 
 cifra1.value="";
 cifra2.value="";
}
//===================exer1=======================================


const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]

//===================exer2=======================================
//no html
// Crie um campo label e um campo input na página HTML, 
// e preencha o campo com o nome de mais uma fruta.


//===================exer3=======================================

const input = document.getElementById("fruta")
const fruta4 = document.getElementById("fruta-4")

function adicionaFruta4() {
  fruta4.innerHTML = input.value
}
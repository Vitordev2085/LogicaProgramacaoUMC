//getElementaryBYTagName - Seleciona todas as tags que desejar
let paragrafos = document.getElementsByTagName("p")
paragrafos[0].innerHTML = "Corinthians 2 x 0, campeão"
let input = document.getElementsByTagName("input")[0].value

//getElementyById - Seleciona um elemento do tipo ID
var titulo = document.getElementById("titulo")
titulo.innerHTML = "Altera usando JS"

//getElementByID - Seleciona um elemento do tipo ID
var caixas = document.getElementsByClassName("caixa")
caixas[0].style.backgroundColor = "red"
caixas[1].style.backgroundColor = "green"

//queryName - Seleciona um elemento do tipo Tipo Class ou ID
const paragrafoQuery = document.querySelector("#paragrafoQuery")
paragrafoQuery[0].style.backgroundColor = "blue"
paragrafoQuery[0].style.padding = "10px"




function alteraTexto() {
    let input = document.getElementsByTagName("input")[0].value
    titulo.textContent = input

}
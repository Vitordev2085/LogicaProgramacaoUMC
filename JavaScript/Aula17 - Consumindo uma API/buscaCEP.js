// Consumir a API do governo
// https://viacep.com.br/ws/CEP/json/

const cep = document.querySelector("#cep")

cep.addEventListener("change", (evento) => {
    let cepUsuario = evento.target
    console.log(cepUsuario.value);
    buscaCep(cepUsuario.value);
});

async function buscaCep(cep) {
    
    let erroCEP = document.querySelector("#erro")
    erroCEP.innerHTML = ""

    try{
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        console.log(consultaCep);

        let consultaCepJson = await consultaCep.json()
        console.log(consultaCepJson);
        console.log(consultaCepJson.erro);

        if(consultaCepJson){
            throw Error("Erro inexistente");
        }

        preencherCampos(consultaCepJson)

    }
    catch{
        console.log("erro");
        erroCep.innerHTML = "<p> CEP inválido, tente novamente !!</p>"
    }
}     
 
function preencherCampos(resultadoCEP) {
    let rua = document.querySelector("#rua")
    let bairro = document.querySelector("#bairro")
    let cidade = document.querySelector("#cidade")
    let estado = document.querySelector("#estado")
    
    rua.value =  resultadoCEP.logradouro
    bairro.value = resultadoCEP.bairro
    cidade.value = resultadoCEP.localidade
    estado.value = resultadoCEP.uf
}

function apagaCampos() {
    let rua = document.querySelector("#rua")
    let bairro = document.querySelector("#bairro")
    let cidade = document.querySelector("#cidade")
    let estado = document.querySelector("#estado")
    
    rua.value =  resultadoCEP.logradouro
    bairro.value = resultadoCEP.bairro
    cidade.value = resultadoCEP.localidade
    estado.value = resultadoCEP.uf
}


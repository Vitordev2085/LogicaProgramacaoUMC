//Array
let timesPaulistas = ["Corinthians","São Paulo","Santos", "Palmeiras"]

//Acessar um item do Array
console.log(timesPaulistas[0])

//Verificar o tamanho do Array
console.log(timesPaulistas.length)

//Adicionar um item no Array
timesPaulistas.push("Ponte Preta")
console.log(timesPaulistas);

//Adicionar um item no início do Array
timesPaulistas.unshift("Guarani")
console.log(timesPaulistas)

//Remover um item no início do Array
timesPaulistas.shift()
console.log(timesPaulistas)

//Remover um item no fim do Array
timesPaulistas.pop()
console.log(timesPaulistas) 

//Verificar a posição de um item
console.log(timesPaulistas.indexOf("Corinthians"))

//Metodo Splice()
// - Adicionar
// - Remover
// - Modificar

// Remover um item a partir de uma posição
//array.splice(posicao,quantidadeDeItemsRemovidos)
timesPaulistas.splice(1,3)
console.log(timesPaulistas)

// Remover um item a partir de um valor
timesPaulistas.splice(timesPaulistas.indexOf("Corinthians"),1)
console.log(timesPaulistas)

// Adicionar itens dentro de um Array
timesPaulistas.splice(0,0,"Corinthians","Palmeiras","Ponte Preta")
console.log(timesPaulistas)

//Modificando itens de um Array
timesPaulistas.splice(2,1,"Guarani", "Santos")
console.log(timesPaulistas) 

// Percorrer um Array
console.log("Maiores Times Paulistas")
let i = 0;

timesPaulistas.forEach((time) => {
    i++
    console.log( i, "-", time);

})
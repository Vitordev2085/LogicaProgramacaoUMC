let produtos = [
    {nome: "Teclado", categoria: "Periférico", preco: 200},
    {nome: "Mouse", categoria: "Periférico", preco: 150},
    {nome: "Computador", categoria: "Eletrônico", preco: 5000},
    {nome: "Monitor", categoria: "Eletrônico", preco:750},
]

//Lista os produtos
//Percorrer o array com objetos
produtos.forEach((produto) => {
    console.log(`${produto.nome} - R$ ${produto.preco}`);   
})

//Fazer calculos de itens dentro de um array
const total = produtos.reduce((soma, produto )=> soma + produto.preco, 0)
console.log(`O valor total de todos os produtos é R$ ${total}`); 

//Ofertando desconto produtos
const ProdutosComDesconto = produtos.map( produto=> ({
    nome: produto.nome,
    preco: produto.preco * 0.9
}))

console.log(ProdutosComDesconto);

//Filtrando produtos
const produtosEletronicos = produtos.filter(produto=> "Periférico" )
console.log(produtosEletronicos);


// Eletrônico - 10% - somar tudo
console.log("Produtos Eletrônicos");
// 1 -Criar um filtro por categoria - filter
const ProdutosEletronicos = produtos.filter(produto => produto.categoria === "Eletrônico")
// 2 - Aplicar um desconto de 5% para as categorias - map
const ProdutosEletronicosDesconto = produtos.map(produto => ({
    nome: produto.nome,
    categoria: produto.categoria["Eletrônicos"],
    preco: produto.preco * 0.95
}))
// 3 - Soma todos os produtos eletrônicos
const somarProdutosEletronicosDesconto = ProdutosComDesconto.reduce((soma, produto)=> soma + produto.preco, 0)

console.log(`A soma do preço dos produtos eletrônicos é ${somarProdutosEletronicosDesconto}`);

// Periféricos - 5% - somar tudo
console.log("Produtos Periféricos");
const produtosPerifericos = produtos.filter(produto => produto.categoria === "Periférico")
// 2 - Aplicar um desconto de 5% para as categorias - map
const ProdutosPerifericosDesconto = produtos.map(produto => ({
    nome: produto.nome,
    categoria: produto.categoria["Periféricos"],
    preco: produto.preco * 0.10
}))
// 3 - Soma todos os produtos periféricos
const somarProdutosPerifericos = ProdutosPerifericosDesconto.reduce((soma, produto) => soma + produto.preco, 0)

console.log(`A soma do preço dos produtos periféricos é ${somarProdutosPerifericos}`);



    

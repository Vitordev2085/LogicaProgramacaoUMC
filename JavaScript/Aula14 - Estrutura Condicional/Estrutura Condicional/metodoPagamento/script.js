function calcularPagamento() {
    //Switch Case - Menu
    //if

    //Métodos de pagamento
    //1 - pix - 10% de desconto
    //2 - debito - 5% de desconto
    //3 - credito - valor total

    let formaPagamento = "debito"
    let ValorTotal = 100
    let ValorFinal

    switch (formaPagamento) {
        case "pix":
            ValorFinal = ValorTotal * 0, 9
            console.log(ValorFinal);
            break
        case "debito":
            ValorFinal = ValorTotal * 0, 95
            console.log(ValorFinal);
            break

        case "credito":
            console.log(ValorTotal);
            break
        default:
            console.log("Informe uma forma de pagamento válida");
            break

    }
}        
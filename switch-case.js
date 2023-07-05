

function acaoBotao() {

    var valor1, valor2, resultado, operacao

    valor1 = prompt("Digite o primeiro valor: ")
    valor2 = prompt("Digite o segundor valor: ")
    operacao = prompt("Digite o operador desejado: (+, -, /, *)")


    switch (operacao) {
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            break;
    }
    document.getElementById("paragrafo").innerText = resultado
}

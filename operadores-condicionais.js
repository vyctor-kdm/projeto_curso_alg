

function acaoBotao() {

    var valor1, valor2, resultado, operacao

    valor1 = prompt("Digite o primeiro valor: ")
    valor2 = prompt("Digite o segundor valor: ")
    operacao = prompt("Digite o operador desejado: (+, -, /, *)")


    if (operacao == "+")
        resultado = parseInt(valor1) + parseInt(valor2)
    else
        if (operacao == "-")
            resultado = parseInt(valor1) - parseInt(valor2)
        else
            if (operacao == "/")
                resultado = parseInt(valor1) / parseInt(valor2)
            else
                if (operacao == "*")
                    resultado = parseInt(valor1) * parseInt(valor2)
                else
                    alert("Operador incorreto!")
document.getElementById("paragrafo").innerText = resultado
}
function acaoBotao() {
    var sairLoop, valor1, valor2
    do {
        valor1 = prompt("Escreva o primeiro valor: ")
        valor2 = prompt("Escreva o segundo valor: ")
        alert("Resultado: " + (parseInt(valor1) + parseInt(valor2)))
        sairLoop = prompt("Deseja sair? s/n")
    } while (sairLoop == "n");
}



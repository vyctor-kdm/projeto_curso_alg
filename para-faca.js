function acaoBotao() {
    var numero, fatorial
    numero = prompt("Escreva o numero para ser fatorado")
    fatorial = 1

    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = "O fatorial do numero " + numero + " seria: " + fatorial

    


}
function acaoBotao() {
    var nome, idade, limite, contador

    limite = prompt("Digite o limite que deseja testar as idades: ")
    contador = 0

    while (contador < limite) {
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade do " + nome + ": ")
        if (parseInt(idade) < 18)
            alert("Você é menor de idade, " + nome + "!")        
        else
            alert("Você é maior de idade, " + nome + "!")
        contador++
    }
}
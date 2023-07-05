var nome, nota1, nota2;

nome = prompt("Digite o nome do aluno:")
nota1 = prompt("Digite a nota um:")
nota2 = prompt("Digite a nota dois:")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 5)
    alert("Aprovado! " + nome)
else
    alert("Reprovado! " + nome)

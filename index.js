const alunos = [
    {
        nome: "Rogério",
        nota: 7,
    },
    {
        nome: "Martha",
        nota: 8,
    },
    {
        nome: "Lucas",
        nota: 4,
    },
    {
        nome: "Rosângela",
        nota: 6,
    },
    {
        nome: "Astolfo",
        nota: 9,
    },
    {
        nome: "Priscilla",
        nota: 10,
    },
    {
        nome: "Gastão",
        nota: 3,
    },
    {
        nome: "Letícia",
        nota: 5,
    },
    {
        nome: "Diógenes",
        nota: 9,
    },
    {
        nome: "Vanessa",
        nota: 0,
    },
]

function exibirAlunosComNotaMaiorOuIgualA6(arr = alunos) {
    return arr.filter(aluno => aluno.nota >= 6);
}

console.log(
    exibirAlunosComNotaMaiorOuIgualA6()
);
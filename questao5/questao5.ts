type Genero = "masculino" | "feminino"

interface IPessoa {
    nome: string,
    idade: number,
    genero: Genero
}

function apresentarPessoa(pessoa: IPessoa) : string {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}`;

}

let pessoa = {
    nome: "Marcos",
    idade: 21,
    genero: "masculino"
} as IPessoa

console.log(apresentarPessoa(pessoa))

//tentar adicionar logica para tolowercase


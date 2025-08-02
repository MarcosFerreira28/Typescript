type Genero = "masculino" | "feminino"

interface IPessoa {
    nome: string,
    idade: number,
    genero: Genero
}

class Pessoa implements IPessoa {
    nome: string;
    idade: number;
    genero: Genero;

    constructor (nome : string, idade : number, genero: Genero){
        this.nome = nome;
        this.idade = idade;
        this.genero = genero
    }
}


function apresentarPessoa(pessoa: Pessoa) : string {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}`;
}

let pessoa = {
    nome: "Marcos",
    idade: 21,
    genero: "masculino"
} as Pessoa

console.log(apresentarPessoa(pessoa))

//tentar adicionar logica para tolowercase


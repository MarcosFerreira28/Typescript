"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    genero;
    constructor(nome, idade, genero) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
}
function apresentarPessoa(pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}`;
}
let pessoa = {
    nome: "Marcos",
    idade: 21,
    genero: "masculino"
};
console.log(apresentarPessoa(pessoa));
//tentar adicionar logica para tolowercase
//# sourceMappingURL=questao5.js.map
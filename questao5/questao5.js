"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apresentarPessoa(pessoa) {
    let mensagem = `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}`;
    return mensagem;
}
let pessoa = {
    nome: "Marcos",
    idade: 21,
    genero: "masculino"
};
console.log(apresentarPessoa(pessoa));
//# sourceMappingURL=questao5.js.map
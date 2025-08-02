"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    email;
    exibirInfo() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
let usuario = new Usuario("Marcos", "teste@gmail.com");
let info = usuario.exibirInfo();
console.log(info);
//# sourceMappingURL=questao4.js.map
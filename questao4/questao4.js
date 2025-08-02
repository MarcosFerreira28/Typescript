"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let usuario = {
    nome: "Marcos",
    email: "teste@gmail.com",
    exibirInfo() { return `Nome: ${this.nome} - Email: ${this.email}`; }
};
let info = usuario.exibirInfo();
console.log(info);
//# sourceMappingURL=questao4.js.map
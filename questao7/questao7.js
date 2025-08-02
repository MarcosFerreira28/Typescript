"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const resposta1 = {
    dados: "OK",
    sucesso: true
};
const resposta2 = {
    dados: [1, 2, 3],
    sucesso: false
};
console.log(resposta1);
console.log(resposta2);
/////////////////////////////////////// feito com classe //////////////////////////////////
class RespostaAPI {
    dados;
    sucesso;
    constructor(dados, sucesso) {
        this.dados = dados;
        this.sucesso = sucesso;
    }
}
const resposta1classe = new RespostaAPI("ERRO", true);
const resposta2classe = new RespostaAPI([1, 2, 3], false);
console.log(resposta1classe);
console.log(resposta2classe);
//# sourceMappingURL=questao7.js.map
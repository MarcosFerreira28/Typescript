"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarMensagemStatus(status) {
    if (status == "sucesso") {
        console.log("A requisição foi um sucesso!");
    }
    else if (status == "erro") {
        console.log("ERRO, ocorreu um erro na requisição");
    }
    else if (status == "carregando") {
        console.log("Aguarde... carregando dados");
    }
}
mostrarMensagemStatus("sucesso");
mostrarMensagemStatus("erro");
mostrarMensagemStatus("carregando");
//# sourceMappingURL=questao2.js.map
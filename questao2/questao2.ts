type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus (status: StatusRequisicao) : void {
    if (status == "sucesso"){
        console.log("A requisição foi um sucesso!");
    }
    else if (status == "erro"){
        console.log("ERRO, ocorreu um erro na requisição");
    }
    else if (status == "carregando"){
        console.log("Aguarde... carregando dados");
    }
}

mostrarMensagemStatus("sucesso")
mostrarMensagemStatus("erro")
mostrarMensagemStatus("carregando")
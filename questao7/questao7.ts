interface IRespostaAPI<T> {
    dados: T;
    sucesso: boolean;
};

const resposta1 : IRespostaAPI<string> = {
    dados: "OK",
    sucesso: true
};

const resposta2 : IRespostaAPI<number[]> = {
    dados: [1, 2, 3],
    sucesso: false
};

console.log(resposta1);
console.log(resposta2);


/////////////////////////////////////// feito com classe //////////////////////////////////

class RespostaAPI<T> implements IRespostaAPI<T>{
    dados: T;
    sucesso: boolean;

    constructor (dados: T, sucesso: boolean){
        this.dados = dados;
        this.sucesso = sucesso;
    }
}

const resposta1classe = new RespostaAPI("ERRO", true);

const resposta2classe = new RespostaAPI([1, 2, 3], false);

console.log(resposta1classe);
console.log(resposta2classe);
interface IUsuario {
    nome: string;
    email: string;
    exibirInfo: () => string;
}

class Usuario implements IUsuario {
    nome: string;
    email: string;

    exibirInfo(): string {
        return `Nome: ${this.nome} - Email: ${this.email}`
    }

    constructor (nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }
}

let usuario = new Usuario("Marcos", "teste@gmail.com",)

let info = usuario.exibirInfo()
console.log(info)
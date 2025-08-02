interface IUsuario {
    nome: string;
    email: string;
    exibirInfo(): string;
}

let usuario: IUsuario = {
    nome: "Marcos",
    email: "teste@gmail.com",
    exibirInfo() { return `Nome: ${this.nome} - Email: ${this.email}`}
}

let info = usuario.exibirInfo()
console.log(info)
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    titulo;
    autor;
    anoPublicacao;
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getAno() {
        return this.anoPublicacao;
    }
    setAno(ano) {
        this.anoPublicacao = ano;
    }
}
function resumirLivro(livro) {
    let frase = `O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.anoPublicacao}`;
    return frase;
}
//criado todos os métodos get e set mesmo que não sejam usados
let livro = new Livro("Dom Casmurro", "Machado de Assis", 1899);
let frase = resumirLivro(livro);
console.log(frase);
function resumirLivroSimples(livro) {
    let frase = `O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.anoPublicacao}`;
    return frase;
}
let objlivro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899
};
console.log(resumirLivroSimples(objlivro));
//# sourceMappingURL=questao3.js.map
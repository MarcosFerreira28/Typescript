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
let livro = new Livro("Dom Casmurro", "Machado de Assis", 1899);
let frase = resumirLivro(livro);
console.log(livro);
//# sourceMappingURL=questao3.js.map
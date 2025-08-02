interface ILivro {
    titulo: string;
    autor: string;
    anoPublicacao: number;

    getTitulo: () => string;
    setTitulo: (titulo: string) => void;

    getAutor: () => string; 
    setAutor: (autor: string) => void;

    getAno: () => number;
    setAno: (ano: number) => void;
}

class Livro implements ILivro{
    titulo: string;
    autor: string;
    anoPublicacao: number;

    constructor (titulo: string, autor: string, anoPublicacao: number){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    getTitulo(){
        return this.titulo;
    }

    setTitulo(titulo: string){
        this.titulo = titulo
    }

    getAutor(){
        return this.autor;
    }

    setAutor(autor: string){
        this.autor = autor;
    }

    getAno(){
        return this.anoPublicacao;
    }
    
    setAno(ano: number){
        this.anoPublicacao = ano
    }
}

function resumirLivro (livro: Livro) : string {
    let frase = `O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.anoPublicacao}`
    return frase
}

//criado todos os métodos get e set mesmo que não sejam usados

let livro = new Livro("Dom Casmurro", "Machado de Assis", 1899);

let frase = resumirLivro(livro);
console.log(frase);

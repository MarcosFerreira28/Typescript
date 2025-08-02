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


//////////////////////////////////////////////////MANEIRA MAIS SIMPLES/////////////////////////////////////
// Feito sem a classe e os metódos get e set que não são usados
interface ILivroSimples{
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function resumirLivroSimples (livro: ILivroSimples) : string {
    let frase = `O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.anoPublicacao}`
    return frase
}

let objlivro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899
}

console.log (resumirLivroSimples(objlivro))

//Classe cadastro de Livros
class Livro{
    titulo: string
    autor: string
    editora: string
    genero: string
    dataPublicacao: Date
    quantidadeCopia: number
constructor(titulo: string, autor: string, editora: string, genero: string, dataPublicacao: Date, quantidadeCopia: number){
    this.titulo = titulo
    this.autor = autor
    this.editora = editora
    this.genero = genero
    this.dataPublicacao = dataPublicacao
    this.quantidadeCopia = quantidadeCopia
    }
}

//Classe cadastro Usuários
class User{
    nomeUser: string
    idadeUser: number
    cpfUser: string
    telefone: string
constructor(nomeUser: string, idadeUser: number, cpfUser: string, telefone: string){
    this.nomeUser = nomeUser
    this.idadeUser = idadeUser
    this.cpfUser = cpfUser
    this.telefone = telefone
    }
}

//Classe Emprestimo do livro
class EmprestimoLivro{
    livroEmprestado: Livro
    informacaoUser: User
    dataEmprestimo: Date
constructor(infoL: Livro, infoU: User, dataEmprestimo: Date){
    this.livroEmprestado = infoL
    this.informacaoUser = infoU
    this.dataEmprestimo = dataEmprestimo
    }
mostrarDados(){

    }
}

var Emprestimo1;

/*Classe Devolução do Livro
class Devolução{
    livroDevolvido: Livro
    informacaoUser: User
    dataEmprestimo: Date
constructor(){

}
    
}
*/
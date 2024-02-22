"use strict";
//Criando uma classe
class Pessoa {
    nome;
    idade;
    genero;
    constructor(nome, idade, genero) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
}
//criando variáveis com base na classe criada
const pessoa1 = new Pessoa('Fulaninho', 18, 'M');
const pessoa2 = new Pessoa('Rafael', 19, 'M');

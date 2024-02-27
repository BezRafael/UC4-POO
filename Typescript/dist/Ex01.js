"use strict";
//Classe modelo Ser humano
class Serhumaninho {
    nome;
    cpf;
    telefone;
    dataNascimento;
    endereco;
    email;
    genero;
    constructor(nome, cpf, telefone, dataNascimento, endereco, email, genero) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.email = email;
        this.genero = genero;
    }
    mostrarDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Data de Nascimento: ${this.dataNascimento.toLocaleDateString('pt-BR')}`);
        console.log(`Endereço: ${this.endereco}`);
        console.log((`Email: ${this.email}`));
        if (this.genero) {
            console.log(`Gênero: ${this.genero}`);
        }
        else {
            console.log('------------------------------------------');
        }
    }
}
/*
var SerHumaninho = new Serhumaninho('Alexa', '021.628.095-37', '(84) 91234-5678', new Date('1998-6-8'),'rua irineu, nº666, conjunto santarém','Alexa@gmail.com')
    console.log(SerHumaninho.mostrarDados())
    console.log('')
    console.log('')
*/
//Classe modelo cadastro Funcionários puxando as atributos de SerHumaninho
class Funcionario extends Serhumaninho {
    cargo;
    matricula;
    //especialidade: string
    //dataAdmissao: Date
    constructor(nome, endereco, dataNascimento, email, cpf, telefone, cargo, matricula, 
    //especialidade: string, 
    //dataAdmissao: Date, 
    genero) {
        //puxando o constructor de Ser Humaninho
        super(nome, cpf, telefone, dataNascimento, endereco, email, genero);
        this.cargo = cargo;
        this.matricula = matricula;
        //this.especialidade = especialidade
        //this.dataAdmissao = dataAdmissao
    }
    mostrarDados() {
        console.log('------------Dados do funcionário------------');
        //buscando os consoles log's da classe ser humaninho e adaptando para as informações da variável funcionário
        super.mostrarDados();
        console.log(`Cargo: ${this.cargo}`);
        //console.log(`Especialidade: ${this.especialidade}`)
        //console.log(`Admissão: ${this.dataAdmissao.toLocaleDateString('pt-BR')}`)
    }
}
//var funcionario1 = new Funcionario('Xaulin', 'rua da desgraça nº 240 conjunto: santarém', new Date('1997-3-23'), 'Xaulin@gmail.com', '012.234.765-08', '(84) 91234-1234', 'Médico', 'Psiquiátra', new Date('1997-4-24'), 'Macho-Alfa')
//console.log(funcionario1.mostrarDados())
console.log('');
console.log('');
//Classe cadastro de Consultas
class Consultas {
    especialidadeConsulta;
    medicoConsulta;
    dataConsulta;
    horario;
    constructor(especialidadeConsulta, medicoConsulta, dataConsulta, horario) {
        this.especialidadeConsulta = especialidadeConsulta;
        this.medicoConsulta = medicoConsulta;
        this.dataConsulta = dataConsulta;
        this.horario = horario;
    }
    dadosConsulta() {
        console.log('------------Dados Consulta------------');
        console.log(`Especialidade: ${this.especialidadeConsulta}`);
        console.log(`Médico: ${this.medicoConsulta}`);
        console.log(`Data da Consulta: ${this.dataConsulta.toLocaleDateString('pt-BR')}`);
        console.log('----------------------------------------');
    }
}
//Adicionando um evento
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('#formFuncionario');
    if (formulario) {
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const endereco = document.getElementById('endereco').value;
            const cpf = document.getElementById('cpf').value;
            const genero = document.getElementById('genero').value;
            const cargo = document.getElementById('cargo').value;
            const matricula = document.getElementById('matricula').value;
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('telefone', telefone);
            localStorage.setItem('dataNascimento', dataNascimento);
            localStorage.setItem('endereco', endereco);
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('genero', genero);
            localStorage.setItem('cargo', cargo);
            localStorage.setItem('matricula', matricula);
            window.location.href = './funcionario.html';
        });
    }
    else {
        console.error('O formulário não foi encontrado');
    }
});
//var consulta1 = new Consultas('Psiquiatria', 'Jones', new Date('2024-03-21'), 'às 16h')
//console.log(consulta1.dadosConsulta())
//Classe cadastro Pacientes:
class Paciente {
}

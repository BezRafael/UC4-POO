
//Classe Ser humano
class Serhumaninho{
    nome: string
    cpf: string
    telefone: string
    dataNascimento: Date
    endereco: string
    email: string
    genero?: string
constructor(nome: string, cpf: string, telefone: string, dataNascimento: Date, endereco: string, email: string, genero?: string){
    this.nome = nome
    this.cpf = cpf
    this.telefone = telefone
    this.dataNascimento = dataNascimento
    this.endereco = endereco
    this.email = email
    this.genero = genero
    }
mostrarDados(){
    console.log('-------------Dados do Ser Humaninho-------------')
    console.log(`Nome: ${this.nome}`)
    console.log(`CPF: ${this.cpf}`)
    console.log(`Telefone: ${this.telefone}`)
    console.log(`Data de Nascimento: ${this.dataNascimento.toLocaleDateString('pt-BR')}`)
    console.log(`Endereço: ${this.endereco}`)
    console.log((`Email: ${this.email}`))
    
        if(this.genero){
            console.log(`Gênero: ${this.genero}`)
        }else{
            console.log('------------------------------------------')
        }
    }
}
    var SerHumaninho = new Serhumaninho('Alexa', '021.628.095-37', '(84) 91234-5678', new Date('1998-6-8'),'rua irineu nº666 conjunto santarém','Alexa@gmail.com')
    console.log(SerHumaninho.mostrarDados())
    console.log('')
    console.log('')
/*
//Classe cadastro Funcionários puxando as atributos de SerHumaninho
class Funcionario extends Serhumaninho{
    cargo: string
    especialidade: string
    dataDeAdmissao: Date
constructor(nome: string, endereco: string, dataNascimento: Date,email: string, cpf: string, telefone: string, cargo: string, especialidade: string,dataDeAdmissao: Date, genero: string){
    //puxando o constructor de pessoa
    super(nome, cpf, telefone, dataNascimento, endereco, email, genero)
    this.cargo = cargo
    this.especialidade = especialidade
    this.dataDeAdmissao = dataDeAdmissao
}   
mostrarDados(){
    console.log('------------Dados do funcionário------------')
    //buscando os consoles log's da classe ser humaninho e adaptando para as informações da variável funcionário
    super.mostrarDados()
    console.log(`Cargo: ${this.cargo}`)
    console.log(`Especialidade: ${this.especialidade}`)
    console.log(`Admissão: ${this.dataDeAdmissao.toLocaleDateString('pt-BR')}`)
    console.log('---------------------------------------------')
    }
}
    var funcionario1 = new Funcionario('Xaulin', 'rua da desgraça nº 240 conjunto: santarém', new Date('1997-3-23'), 'Xaulin@gmail.com', '012.234.765-08', '(84) 91234-1234', 'Médico', 'Psiquiátra', new Date('1997-4-24'), 'Macho-Alfa')
    console.log(funcionario1.mostrarDados())
    console.log('')
    console.log('')
*/

//Classe cadastro de Consultas
class Consultas{
    especialidadeConsulta: string
    medicoConsulta: string
    dataConsulta: Date
    horario: string
constructor( especialidadeConsulta: string, medicoConsulta: string, dataConsulta: Date, horario: string){
    this.especialidadeConsulta = especialidadeConsulta
    this.medicoConsulta = medicoConsulta
    this.dataConsulta = dataConsulta
    this.horario = horario
    }
dadosConsulta(){
    console.log('------------Dados Consulta------------')
    console.log(`Especialidade: ${this.especialidadeConsulta}`)
    console.log(`Médico: ${this.medicoConsulta}`)
    console.log(`Data da Consulta: ${this.dataConsulta.toLocaleDateString('pt-BR')}`)
    console.log('----------------------------------------')
    }
}
    var consulta1 = new Consultas('Psiquiatria', 'Jones', new Date('2024-03-21'), 'às 16h')
    console.log(consulta1.dadosConsulta())

//Classe cadastro Pacientes:
class Paciente extends Serhumaninho{
    consulta: Consultas
    constructor(nome: string, email: string, info: Consultas, telefone: string, endereco: string, cpf: string, dataNascimento: Date, genero?: string){
        super(nome, cpf, telefone, dataNascimento, endereco, email, genero)
        this.consulta = info
    }
DadosPaciente(){
    console.log('------------Paciente------------')
    super.mostrarDados()
    console.log('------------Dados da Consulta------------')
    
    }
}

var paciente1 = new Paciente('fulando2','fulando2@gmail.com', consulta1,'(84) 90034-5008', 'Rua da misericóridia nº000 conjunto Santarém','021.324.096-38', new Date('1969-1-1'))

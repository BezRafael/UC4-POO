/* //importando informações de funcionario e tudo que tem no arquivo 'Ex01'
import { Funcionario } from "./Ex01"

//classe modelo Desenvolvedor puxando atributos e métodos de da classe modelo Funcionario 
abstract class Desenvolvedor extends Funcionario{
    anoXp: string
    habilidade: string[]
constructor(nome: string, 
    endereco: string, 
    dataNascimento: Date, 
    email: string, 
    cpf: string, 
    telefone: string, 
    cargo: string, 
    especialidade: string, 
    dataAdmissao: Date, 
    anoXp: string, 
    habilidade: string[], 
    genero: string){
    super(nome, endereco, dataNascimento, email, cpf, telefone, cargo, especialidade, dataAdmissao, genero)
    this.anoXp = anoXp
    this.habilidade = habilidade
    }
dadosDev(){

   super.mostrarDados()
   console.log(`Tempo de Experiência: ${this.anoXp}`)
   console.log(`Habilidades: ${this.habilidade}`) 
    }    
}

//var desenvolvedor2 = new Desenvolvedor('Rafael', 'rua não interessa nº 21 conjunto Santarém', new Date('2005-3-30'),'Rafael@gmail.com', '123.743.678-19', '123456789', 'Desenvolvedor Jr.', 'front-End', new Date('2023-12-2'), '2 Meses', ['JavaScript, TypeScript, Html, Css, Angular, React, Vue.js'], 'Masculino')
//desenvolvedor2.dadosDev()

//xp, linguagem,

class FrontEnd extends Desenvolvedor{
    ui: boolean
    ux: boolean
    ferramentasUi: string[]
    ferramentasUx: string[]
    linguagemFE: string[]
    frameworksFE: string[]
constructor(nome: string, endereco: string, dataNascimento: Date, email: string, cpf: string, telefone: string, cargo: string, especialidade: string, dataAdmissão: Date, anoXp: string, habilidade: string[], genero: string, ui: boolean, ux: boolean, ferramentasUi: string[], ferramentasUx: string[], linguagemFE: string[], frameworksFE: string[]){
    super(nome, endereco, dataNascimento, email, cpf, telefone, cargo, especialidade, dataAdmissão, anoXp, habilidade, genero)
    this.ui = ui
    this.ux = ux
    this.ferramentasUi = ferramentasUi
    this.ferramentasUx = ferramentasUx
    this.linguagemFE = linguagemFE
    this.frameworksFE = frameworksFE
    }
dadosFront(){

    super.dadosDev()
    console.log(`Linguagem: ${this.linguagemFE}`)
    console.log(`Framework's: ${this.frameworksFE}`)

    if(this.ui){
        console.log(`Ferramenta UI: ${this.ferramentasUi}`)
    }else{
    console.log('incompetente!!! sabe de nada')
        }
    if(this.ux){
        console.log(`Ferramentas UX: ${this.ferramentasUx}`)
    }else{
    console.log('incompetente!!! sabe de nada')
        }
    }
}
var frontEnd1 = new FrontEnd ("João Silva", "Rua das Flores, 123", new Date("1990-05-15"), "joao.silva@example.com", "123.456.789-00", "(00) 1234-5678","Desenvolvedor Frontend", "UI/UX Design", new Date ("2018-03-10"), "6 anos", ["HTML", "CSS", "JavaScript", "React.js", "Adobe XD"], "Masculino", true, true, ["Adobe XD", "Sketch", "Figma"], ["Adobe XD", "Sketch", "Figma"], ["HTML", "CSS", "JavaScript"], ["React.js", "Vue.js"]) 
frontEnd1.dadosFront()

class BackEnd extends Desenvolvedor{
    linguagemBE: string[]
    bancoDados: boolean
    segurança: boolean
constructor(nome: string, endereco: string, dataNascimento: Date, email: string, cpf: string, telefone: string, cargo: string, especialidade: string, dataAdmissão: Date, anoXp: string, habilidade: string[], genero: string, linguagemBE: string[], bancoDados: boolean, segurança: boolean){
    super(nome, endereco, dataNascimento, email, cpf, telefone, cargo, especialidade, dataAdmissão, anoXp, habilidade, genero)
    this.linguagemBE = linguagemBE
    this.bancoDados = bancoDados
    this.segurança = segurança
    }
dadosBack(){

    }
}

class FullStack extends Desenvolvedor{
    conhecimentoB_F: Boolean
    hospedagem: boolean
constructor(nome: string, endereco: string, dataNascimento: Date, email: string, cpf: string, telefone: string, cargo: string, especialidade: string, dataAdmissão: Date, anoXp: string, habilidade: string[], genero: string, conhecimentoB_F: Boolean, hospedagem: boolean){
    super(nome, endereco, dataNascimento, email, cpf, telefone, cargo, especialidade, dataAdmissão, anoXp, habilidade, genero)
    this.conhecimentoB_F = conhecimentoB_F
    this.hospedagem = hospedagem
    }
}
 */
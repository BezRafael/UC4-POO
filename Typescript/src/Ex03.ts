//Classe cadrastro de Usuário
class Cliente{
    nomeUsuario: string
    dataNascimento: Date
    cpf: string
    rg: string
    telefone: number
    senha: string
    titularidade: string
constructor(nomeUsuario: string, dataNascimento: Date, cpf: string, rg: string, telefone: number, senha: string, titularidade: string){
    this.nomeUsuario = nomeUsuario
    this.dataNascimento = dataNascimento
    this.cpf = cpf
    this.rg = rg
    this.telefone = telefone
    this.senha = senha
    this.titularidade = titularidade
    }
}

//Classe receita do usuario
class Receita{
    infoCliente: Cliente
    novaReceita: Date
    informacaoNovaReceita: string
    historicoReceita: string
constructor(infoC1: Cliente,novaReceita: Date, informacaoNovaReceita: string, historicoReceita: string){
    this.infoCliente = infoC1
    this.novaReceita = novaReceita
    this.informacaoNovaReceita = informacaoNovaReceita
    this.historicoReceita = historicoReceita
    }
}

//Classe despesas do usuario
class Despesas{
    infoUsuario: Cliente
    novaDespesa:Date
    informacaoNovaDespesas: string
    historicoDespesas: string
constructor(infoC2: Cliente, novaDespesa:Date, informacaoNovaDespesas: string, historicoDespesas: string){
    this.infoUsuario = infoC2
    this.novaDespesa = novaDespesa
    this.informacaoNovaDespesas = informacaoNovaDespesas
    this.historicoDespesas = historicoDespesas
    }
}

//Classe conta do usuario
class Conta{
    InfoCliente: Cliente
    saldo: number
    tipoConta: string
    Receita: Receita
    Despesas: Despesas
constructor(InfoC3: Cliente, saldo: number, tipoConta: string, infoReceita: Receita, infoDespesas: Despesas){
    this.InfoCliente = InfoC3
    this.saldo = saldo
    this.tipoConta = tipoConta
    this.Receita = infoReceita
    this.Despesas = infoDespesas
    }
}

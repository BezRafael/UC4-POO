class Carro{
    modelo: string;
    ano: number;
    marca: string;
    preço: number;
    motor: number;
    cor: string;
constructor(modelo: string, ano: number, marca: string, preço: number, motor: number, cor: string){
    this.modelo = modelo,
    this.ano = ano,
    this.marca = marca,
    this.preço = preço,
    this.motor = motor,
    this.cor = cor
}
}

const meuCarro = new Carro('RAM Longhorn', 2024, 'Dodge', 500000, 4.1, "preto")
console.log(meuCarro)
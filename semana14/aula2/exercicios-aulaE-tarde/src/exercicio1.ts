// a)
// Nosso modelo de carro, define o que todos os carros tem que ter
export type carro = {
    modelo: string,
    capacidadeDoTanqueEmLitros: number,
    motorEhFlex: boolean,
};

// Um carro, criado a partir do nosso modelo acima, respeitando
// todos os tipos pré-definidos ;)
const carroLegal: carro = {
    modelo: "Up",
    capacidadeDoTanqueEmLitros: 100,
    motorEhFlex: true,
};

// b)

const carroVelho: carro = {
    modelo: "Santana",
    capacidadeDoTanqueEmLitros: 10,
    motorEhFlex: false
}

const carroManeiro: carro = {
    modelo: "Up",
    capacidadeDoTanqueEmLitros: 100,
    motorEhFlex: true,
}

export const estacionamento: carro[] = [carroLegal, carroVelho, carroManeiro];
type carro = {
    modelo: string,
    capacidadeDoTanqueEmLitros: number,
    motorEhFlex: boolean,
    quilometrosPorLitro: (litros: number) => number
};

const carroNovo: carro = {
    modelo: "Chevette",
    capacidadeDoTanqueEmLitros: 100,
    motorEhFlex: false,
    quilometrosPorLitro: (litros: number) => { 
        return litros * 0.25;
    }
}

const carroMenosNovo: carro = {
    modelo: "Chevette",
    capacidadeDoTanqueEmLitros: 100,
    motorEhFlex: false,
    quilometrosPorLitro: (litros: number) => { 
        return litros * 0.10;
    }
}

console.log(carroNovo.quilometrosPorLitro(10))
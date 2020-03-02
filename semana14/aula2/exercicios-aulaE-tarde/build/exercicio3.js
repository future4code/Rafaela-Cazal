const carroNovo = {
    modelo: "Chevette",
    capacidadeDoTanqueEmLitros: 100,
    motorEhFlex: false,
    quilometrosPorLitro: (litros) => {
        return litros * 0.25;
    }
};
const carroMenosNovo = {
    modelo: "Chevette",
    capacidadeDoTanqueEmLitros: 100,
    motorEhFlex: false,
    quilometrosPorLitro: (litros) => {
        return litros * 0.10;
    }
};
console.log(carroNovo.quilometrosPorLitro(10));
//# sourceMappingURL=exercicio3.js.map
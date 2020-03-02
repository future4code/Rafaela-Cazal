enum MARCAS_DE_CARROS {
    UP = "UP",
    SANTANA = "SANTANA",
    FERRARI = "FERRARI",
    FUSCA = "FUSCA",
    PORSCHE = "PORSCHE"
}

type carroComEnum = {
    modelo: MARCAS_DE_CARROS,
    capacidadeDoTanqueEmLitros: number,
    motorEhFlex: boolean,
};

const carroSupimpa: carroComEnum = {
    motorEhFlex: false,
    capacidadeDoTanqueEmLitros: 100,
    modelo: MARCAS_DE_CARROS.PORSCHE
}
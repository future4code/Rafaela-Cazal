"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio1_1 = require("./exercicio1");
const filtraCarrosPorModelo = (carros, modelo) => {
    const carrosFiltrados = carros.filter((carro) => {
        return carro.modelo === modelo;
    });
    return carrosFiltrados;
};
const resultado = filtraCarrosPorModelo(exercicio1_1.estacionamento);
console.log(resultado);
//# sourceMappingURL=exercicio2.js.map
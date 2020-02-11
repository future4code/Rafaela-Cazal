import { carro, estacionamento } from './exercicio1'

const filtraCarrosPorModelo = (carros: carro[], modelo?: string): carro[] => {
    const carrosFiltrados: carro[] = carros.filter((carro) => {
        return carro.modelo === modelo;
    })

    return carrosFiltrados;
}

const resultado: carro[] = filtraCarrosPorModelo(estacionamento);

console.log(resultado);
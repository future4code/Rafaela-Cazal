import { Dish } from './dish'
import { beijinho, brigadeiro } from './dessert'
import { feijoada, macarronada } from './saltydish'
import { Employee } from './Employee'

export let Menu: Dish[] = [feijoada, macarronada, brigadeiro, beijinho]

const clientConsumption: Dish[] = [feijoada, beijinho, brigadeiro]


console.log("Número de funcionários:", Employee.numberOfEmployees)

console.log("Consumo:", clientConsumption)
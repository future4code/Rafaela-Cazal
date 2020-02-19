import { Employee } from "./Employee";
import { Dish } from './dish'

export class Cashier extends Employee {
    constructor(name: string, payment: number) {
        super(name, payment);
    }

    public sayJob(): void {
        console.log("Olá! Eu sou o caixa.")
    }

    public calculateBill(consummation: Dish[]):number {
        let totalBill: number = 0
        consummation.forEach(dish => {
            totalBill += dish.getPrice()
        });
        return totalBill
    }
}
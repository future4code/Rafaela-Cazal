import { Cashier } from "./Cashier";


export class Manager extends Cashier {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    public sayJob(): void {
        console.log("Olá! Eu sou o gerente.")
    }
} 
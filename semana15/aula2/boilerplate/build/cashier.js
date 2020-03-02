"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
class Cashier extends Employee_1.Employee {
    constructor(name, payment) {
        super(name, payment);
    }
    sayJob() {
        console.log("Olá! Eu sou o caixa.");
    }
    calculateBill(consummation) {
        let totalBill = 0;
        consummation.forEach(dish => {
            totalBill += dish.getPrice();
        });
        return totalBill;
    }
}
exports.Cashier = Cashier;
//# sourceMappingURL=cashier.js.map
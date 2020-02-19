"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cashier_1 = require("./Cashier");
class Manager extends Cashier_1.Cashier {
    constructor(name, salary) {
        super(name, salary);
    }
    sayJob() {
        console.log("Olá! Eu sou o gerente.");
    }
}
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map
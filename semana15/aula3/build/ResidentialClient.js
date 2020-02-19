"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residence_1 = require("./residence");
class ResidentialClient extends residence_1.Residence {
    constructor(name, cpf, cep, clientName, clientNumber, consumedEnergy) {
        super(name, cpf, cep);
        this.name = name;
        this.cpf = cpf;
        this.cep = cep;
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.consumedEnergy = consumedEnergy;
    }
    calculateBill() {
        return this.consumedEnergy * 0.75;
    }
}
exports.ResidentialClient = ResidentialClient;
//# sourceMappingURL=ResidentialClient.js.map
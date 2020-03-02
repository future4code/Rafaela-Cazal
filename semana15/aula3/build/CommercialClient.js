"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commerce_1 = require("./commerce");
class CommercialClient extends commerce_1.Commerce {
    constructor(name, cnpj, cep, clientName, clientNumber, consumedEnergy) {
        super(name, cnpj, cep);
        this.name = name;
        this.cnpj = cnpj;
        this.cep = cep;
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.consumedEnergy = consumedEnergy;
    }
    calculateBill() {
        return this.consumedEnergy * 0.53;
    }
}
exports.CommercialClient = CommercialClient;
//# sourceMappingURL=CommercialClient.js.map
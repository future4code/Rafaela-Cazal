"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientManager {
    constructor() {
        this.clients = [];
    }
    addClient(client) {
        this.clients.push(client);
    }
    getClientsQuantity() {
        return this.clients.length;
    }
    printClientBills() {
        this.clients.forEach(client => {
            const clientNumber = client.clientNumber;
            const clientName = client.clientName;
            const clientAccount = client.calculateBill();
            console.log(` ${clientNumber} - ${clientName} - R$${clientAccount}`);
        });
    }
    calculateAllIncome() {
        let allInCome = 0;
        this.clients.forEach(client => allInCome += client.calculateBill());
        return allInCome;
    }
}
exports.ClientManager = ClientManager;
//# sourceMappingURL=ClientManager.js.map
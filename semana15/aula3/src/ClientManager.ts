import { Client } from "./client";

export class ClientManager {
    public clients: Client[] 

    constructor() {
        this.clients = []
    }

    public addClient(client: Client): void {
        this.clients.push(client)
    }

    public getClientsQuantity(): number {
        return this.clients.length
    }
 
    public printClientBills(): void {
        this.clients.forEach( client => {
            const clientNumber = client.clientNumber
            const clientName = client.clientName    
            const clientAccount = client.calculateBill()
            console.log(` ${clientNumber} - ${clientName} - R$${clientAccount}`)
        });
    }

    public calculateAllIncome(): number {
        let allInCome = 0 
        this.clients.forEach(client => allInCome += client.calculateBill())
            
        return allInCome 
    }
        
}
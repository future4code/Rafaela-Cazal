import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";
import { ClientManager } from "./ClientManager";

// 2.  Cliente Residencial
const rafaela = new ResidentialClient('Rafaela', '666.666.666-06', '05835-000', 'Rafaela Cazal', 123456789, 110) 
const fernanda = new ResidentialClient('Fernanda', '111.111.111-11', '05835-111', 'Fernanda Cazal', 987654321, 220) 

// 3. Cliente Comercial 
const riachuelo = new CommercialClient('Riachuelo', '22.222.222/0002-22', '12345-000', 'Riachuelo', 964395291, 300)
const forever21 = new CommercialClient('Forever21', '33.333.333/0003-33', '54321-000', 'Forever21', 959166402, 800)


// 4. Cliente Industrial 
const petrobras = new IndustrialClient('Petrobras', '123456789', '12345-300', 'Petrobras', 66666666, 3000000)
const eletrobras = new IndustrialClient('Eletrobras', '987654321', '12345-400', 'Eletrobras', 6666666, 780000)


const calculateClient = new ClientManager()

calculateClient.addClient(rafaela)
calculateClient.addClient(petrobras)
calculateClient.addClient(fernanda)
calculateClient.addClient(forever21)
calculateClient.addClient(eletrobras)
calculateClient.addClient(riachuelo)

// console.log(`Quantidade total de clientes: ${calculateClient.getClientsQuantity()}`)
// console.log(`Cliente e valor a pagar:`); calculateClient.printClientBills()
// console.log(`Quantia total recebida por clientes: R$${calculateClient.calculateAllIncome()}`)
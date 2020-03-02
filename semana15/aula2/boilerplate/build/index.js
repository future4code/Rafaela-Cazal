"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dessert_1 = require("./dessert");
const saltydish_1 = require("./saltydish");
const Employee_1 = require("./Employee");
exports.Menu = [saltydish_1.feijoada, saltydish_1.macarronada, dessert_1.brigadeiro, dessert_1.beijinho];
const clientConsumption = [saltydish_1.feijoada, dessert_1.beijinho, dessert_1.brigadeiro];
console.log("Número de funcionários:", Employee_1.Employee.numberOfEmployees);
console.log("Consumo:", clientConsumption);
//# sourceMappingURL=index.js.map
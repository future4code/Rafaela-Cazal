"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class SaltyDish extends dish_1.Dish {
    constructor(name, price, cost, ingredients, timeToCook) {
        super(name, price, cost, ingredients, timeToCook);
    }
    cook() {
        console.log("Cozinhando um prato salgado");
    }
}
exports.SaltyDish = SaltyDish;
exports.feijoada = new SaltyDish("Feijoada", 100, 20, ["feijão, carne de porco"], 100);
exports.macarronada = new SaltyDish("Macarronada", 100, 20, ["macarrão, molho de tomate"], 100);
//# sourceMappingURL=saltydish.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class Dessert extends dish_1.Dish {
    constructor(name, price, cost, ingredients, timeToCook, slicesNumber) {
        super(name, price, cost, ingredients, timeToCook);
        this.slicesNumber = slicesNumber;
    }
    getSlicePrice() {
        return this.price / this.slicesNumber;
    }
    cook() {
        console.log("Baking Dessert");
    }
}
exports.Dessert = Dessert;
exports.brigadeiro = new Dessert("Brigadeiro", 100, 20, ["leite condensado, chocolate"], 100, 10);
exports.beijinho = new Dessert("Beijinho", 100, 20, ["leite condensado, coco"], 100, 10);
//# sourceMappingURL=dessert.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
const index_1 = require("./index");
class Chef extends Employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    sayJob() {
        console.log("Olá! Eu sou o chef");
    }
    removeDishFromMenu(dishToRemove) {
        index_1.Menu.map(dish => {
            if (dish.getDishName() === dishToRemove) {
                index_1.Menu.splice(index_1.Menu.indexOf(dish), 1);
            }
        });
    }
}
exports.Chef = Chef;
//# sourceMappingURL=chef.js.map
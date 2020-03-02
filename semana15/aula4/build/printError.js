"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class PrintError {
    constructor(message) {
        this.message = message;
        this.date = moment().format('DD/MM/YYYY, HH:mm');
    }
    errorMessage() {
        console.log(this.message, this.date);
    }
}
exports.PrintError = PrintError;
const erro = new PrintError("erro");
console.log(erro);
//# sourceMappingURL=printError.js.map
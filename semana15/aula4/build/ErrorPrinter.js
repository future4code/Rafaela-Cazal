"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class ErrorPrinter {
    constructor(message) {
        this.message = message;
        this.date = moment().format('DD/MM/YYYY, HH:mm');
    }
    onError(message) {
        console.log(`<${this.message}> - <${this.date}>`);
    }
}
exports.ErrorPrinter = ErrorPrinter;
//# sourceMappingURL=ErrorPrinter.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class JSONManager {
    constructor(filePath) {
        this.filePath = filePath;
    }
    ReadFile() {
        const fileData = JSON.parse(fs_1.readFileSync(this.filePath).toString());
        return fileData;
    }
    writeFile(data) {
        const fileContent = JSON.stringify(data, null, 2);
        fs_1.writeFileSync(this.filePath, fileContent);
    }
}
exports.JSONManager = JSONManager;
//# sourceMappingURL=JSONManager.js.map
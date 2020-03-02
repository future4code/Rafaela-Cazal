"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./Post");
const fileManager_1 = require("./fileManager");
class NormalPostCreator {
    constructor() {
        this.filemanager = new fileManager_1.FileManager('database.json');
    }
    create(authorName, postText) {
        this.postValidation(authorName, postText);
        const newPost = new Post_1.Post(authorName, postText);
        this.filemanager.writeFile(newPost);
    }
    postValidation(authorName, postText) {
        if (!authorName || !postText) {
            this.errorPrinter.onError("Seu nome ou post não pode estar em branco");
        }
    }
}
exports.NormalPostCreator = NormalPostCreator;
const rafaPost = new NormalPostCreator();
rafaPost.create("", "Post bananinha");
//# sourceMappingURL=NormalPostCreator.js.map
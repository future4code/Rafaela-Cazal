"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class Post {
    constructor(postAuthor, postText) {
        this.postAuthor = postAuthor;
        this.postText = postText;
        this.date = moment().format('DD/MM/YYYY, HH:mm');
    }
}
exports.Post = Post;
//# sourceMappingURL=Post.js.map
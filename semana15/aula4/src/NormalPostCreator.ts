import { PostCreator } from "./PostCreator";
import { ErrorPrinter } from './ErrorPrinter';
import { Post } from './Post';
import { FileManager } from "./fileManager";


export class NormalPostCreator implements PostCreator {
    private filemanager: FileManager
    private errorPrinter: ErrorPrinter

    constructor(){
       this.filemanager = new FileManager('database.json')
    }

    public create(authorName: string, postText: string): void {
        this.postValidation(authorName, postText)
        const newPost = new Post(authorName, postText)
        this.filemanager.writeFile(newPost)
    }

    public postValidation(authorName: string, postText: string) {
        if(!authorName || !postText){
            this.errorPrinter.onError("Seu nome ou post não pode estar em branco")
        }
    }
}
 

// const rafaPost = new NormalPostCreator()
// rafaPost.create("Rafa", "Post bananinha")




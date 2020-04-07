export class Post {
    constructor(
        private postId: string,
        private authorId: string,
        private description: string,
        private creationDate: Date,
        private type: string,
        private photo?: string
    ) { }

    public getPostId(): string {
        return this.postId;
    }

    public getAuthorId(): string {
        return this.authorId;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getCreationDate(): Date { 
        return this.creationDate
    }

    public setCreationDate(creationDate: Date): void {
        this.creationDate = creationDate;
    }

    public getType(): string {
        return this.type
    }

    public setType(type: string): void {
        this.type = type;
    }

    public getPhoto(): string | undefined {
        return this.photo;
    }

    public setPhoto(photo: string): void {
        this.photo = photo;
    }

}

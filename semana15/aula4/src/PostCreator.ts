export interface PostCreator {
    create(postAuthor: string, postText: string): void;
}
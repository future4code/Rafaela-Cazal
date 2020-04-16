export class Video {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private postDate: Date,
    private link: string,
    private userId: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getPostDate(): Date {
    return this.postDate;
  }
  
  public setPostDate(postDate: Date): void {
    this.postDate = postDate;
  }

  public getLink(): string {
    return this.link;
  }
  
  public setLink(link: string): void {
    this.link = link;
  }

  public getUserId(): string {
    return this.userId
  }
  
  public setUserId(userId: string): void {
    this.userId = userId;
  }

}
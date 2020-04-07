import { User, UserType } from "./user";

export class Feed extends User {
  constructor(
    private userFeed: string,
    id: string,
    video: string,
    title: string,
    description: string,
    postDate: Date,
    type: UserType,
    userId: string,
    private userName: string,
    private userEmail: string
  ) { 
    super(id, name, this.email, this.password, this.birthDate, type, this.photo) 
  }

  public getUserFeed(): string {
    return this.userFeed;
  }

  public setUserFeed(userFeed: string): void {
    this.userFeed = userFeed;
  }

  public getUserName(): string {
    return this.userName;
  }

  public setUserName(userName: string): void {
    this.userName = userName;
  }

  public getUserEmail(): string {
    return this.userEmail;
  }

  public setUserEmail(userEmail: string): void {
    this.userEmail = userEmail;
  }
} 
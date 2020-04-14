export default class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private birthDate: Date,
    private picture: string,
    private password: string
  ) { }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getBirtDate(): Date {
    return this.birthDate
  }

  public getPicture(): string {
    return this.picture;
  }

  public getPassword(): string {
    return this.password;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

}
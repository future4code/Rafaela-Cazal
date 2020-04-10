export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private birthDate: Date,
    private type: UserType,
    private photo?: string
  ) { }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getName(): string {
    return this.name
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getPassword(): string {
    return this.password
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public getBirtDate(): Date {
    return this.birthDate
  }

  public setBirtDate(birthDate: Date): void {
    this.birthDate = birthDate;
  }

  public getType(): UserType {
    return this.type
  }

  public setType(type: UserType): void {
    this.type = type;
  }

  public getPhoto(): string | undefined{
    return this.photo
  }

  public setPhoto(photo: string): void {
    this.photo = photo;
  }


public static mapStringsToUserType(type: string): UserType {
    switch (type) {
      case "teacher":
        return UserType.TEACHER;
      case "student":
        return UserType.STUDENT;
      default:
        throw new Error("Tipo de usuário inválido");
    }
  }
}

export enum UserType {
  TEACHER = "teacher",
  STUDENT = "student"
} 
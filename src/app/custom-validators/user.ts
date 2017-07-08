export class User {
  constructor(
    public username: string = "", // required, must be 5-8 characters
    public email: string = "", // required, must be valid email format
    public password: string = "", // required, value must be equal to confirm password.
    public confirmPassword: string = "" // required, value must be equal to password.
  ) {}
}

export class RegisterUser {
  username: string;
  password: string;
  roles: string[];

  constructor() {
    this.username = '';
    this.password = '';
    this.roles = [];
  }
}

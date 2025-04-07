import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../Model/register-user';
import { LoginUser } from '../Model/login-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'http://localhost:5075/api/Auth';
  constructor(private http: HttpClient) {}

  CreateUser(obj: RegisterUser) {
    return this.http.post(this.apiUrl + '/Register', obj);
  }

  LoginUser(obj: LoginUser) {
    debugger;
    return this.http.post(this.apiUrl + '/Login', obj);
  }
}

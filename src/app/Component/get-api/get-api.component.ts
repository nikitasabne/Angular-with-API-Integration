import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetAPIComponent {
  userList: any[] = [];
  constructor(private http: HttpClient) {}

  GetUsers() {
    this.http
      .get('http://localhost:5075/api/Regions')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }
}

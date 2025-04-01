import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  apiUrl: string = 'http://localhost:5075/api/Regions';

  constructor(private http: HttpClient) {}

  GetAllRegion() {
    return this.http.get(this.apiUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegionModel } from '../Model/region';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  apiUrl: string = 'http://localhost:5075/api/Regions';

  constructor(private http: HttpClient) {}

  GetAllRegion() {
    return this.http.get(this.apiUrl);
  }

  SaveRegion(obj: RegionModel) {
    return this.http.post(this.apiUrl, obj);
  }

  UpdateRegion(obj: RegionModel) {
    return this.http.put(`${this.apiUrl}/${obj.id}`, obj);
  }

  DeleteRegion(obj: RegionModel) {
    return this.http.delete(`${this.apiUrl}/${obj.id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getBackendStatus() {
    return this.http.get<{ status: string, timestamp: string }>('http://localhost:8000/api/status');
  }
}

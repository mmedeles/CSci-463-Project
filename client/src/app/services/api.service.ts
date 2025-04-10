import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface StatusResponse {
  status: string;
  timestamp: string;
}

interface IncrementResponse {
  message: string;
  counter: number;
  timestamp: string;
  session_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getBackendStatus(): Observable<StatusResponse> {
    return this.http.get<StatusResponse>(`${this.apiUrl}/status`, {
      withCredentials: true  // ✅ send session cookie
    });
  }

  incrementCounter(): Observable<IncrementResponse> {
    return this.http.post<IncrementResponse>(`${this.apiUrl}/increment`, {}, {
      withCredentials: true  // ✅ send session cookie
    });
  }
}

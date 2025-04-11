import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(
        `${this.apiUrl}/login`,
        { username, password },
        { withCredentials: true }
    );
  }


  register(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/register`, { username, password }, { withCredentials: true });
  }
}

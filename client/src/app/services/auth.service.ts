import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

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

  getProfile() {
    return this.http.get<any>(`${this.apiUrl}/profile`, { withCredentials: true });
  }

  logout() {
    return this.http.post<any>(`${this.apiUrl}/logout`, {}, { withCredentials: true });
  }
  changePassword(newPassword: string) {
    return this.http.patch(`${this.apiUrl}/change-password`,
        { new_password: newPassword },
        { withCredentials: true }
    );
  }

}



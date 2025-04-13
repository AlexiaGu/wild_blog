import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';
  private http = inject(HttpClient);

  login(email: string, password: string): Observable<string> {
    return this.http
      .post(
        `${this.apiUrl}/auth/login`,
        { email, password },
        { responseType: 'text' }
      )
      .pipe(
        tap((token) => {
          this.saveToken(token);
        })
      );
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      const decodedToken: any = jwtDecode(token);

      return decodedToken.roles?.[0] || null;
    } catch {
      return null;
    }
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const decodedToken: any = jwtDecode(token);
      const expiryDate = new Date(decodedToken.exp * 1000);
      if (expiryDate < new Date()) {
        this.clearToken();
        return false;
      }
      return true;
    } catch {
      this.clearToken();
      return false;
    }
  }

  verifyToken(): boolean {
    const token = this.getToken();
    if (!token) {
      console.error('Aucun token trouvé');
      return false;
    }
    try {
      const decodedToken: any = jwtDecode(token);
      const expiryDate = new Date(decodedToken.exp * 1000);
      if (expiryDate < new Date()) {
        console.error('Le token a expiré');
        this.clearToken();
        return false;
      }
      console.log('Le token est valide');
      return true;
    } catch (error) {
      console.error('Erreur lors de la vérification du token', error);
      this.clearToken();
      return false;
    }
  }
  constructor() {}
}

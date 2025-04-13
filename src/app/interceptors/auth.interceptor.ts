import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

function isTokenExpired(token: string): boolean {
  try {
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = tokenPayload.exp * 1000;
    return Date.now() >= expirationTime;
  } catch {
    return true;
  }
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (req.url.includes('/auth/login')) {
    return next(req);
  }
  const token = authService.getToken();

  // Vérification du token et de son expiration
  if (!token || isTokenExpired(token)) {
    authService.clearToken();
    router.navigate(['/login']);
    return throwError(() => new Error('Token expiré ou invalide'));
  }

  // Ajout du token dans les headers
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Gestion des erreurs
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 || error.status === 403) {
        authService.clearToken();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};

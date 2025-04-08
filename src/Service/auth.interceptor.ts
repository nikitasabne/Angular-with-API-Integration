import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('%c[Interceptor] Triggered!', 'color: green');
    const token = localStorage.getItem('token');

    if (token) {
      const isExpired = this.isTokenExpired(token);
      if (isExpired) {
        // Token expired — force logout
        localStorage.removeItem('token');
        alert('Session expired. Please login again.');
        window.location.href = '/user-page';
        return throwError(() => new Error('Session expired'));
      }

      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });

      return next.handle(cloned).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/user-page';
          }
          return throwError(() => error);
        })
      );
    }

    return next.handle(req);
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      const exp = decoded.exp * 1000; // Convert to ms
      return Date.now() > exp;
    } catch (e) {
      return true;
    }
  }
}

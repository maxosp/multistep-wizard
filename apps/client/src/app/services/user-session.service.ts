import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  private readonly SESSION_KEY = 'userSession';
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) {}

  getUser(): string | null {
    return localStorage.getItem(this.SESSION_KEY);
  }

  setUser(id: string): void {
    localStorage.setItem(this.SESSION_KEY, id);
  }

  createUser(): Observable<string> {
    return this.http
      .post<{ id: string }>(this.apiUrl, {})
      .pipe(map((response) => response.id));
  }

  dropUser() {
    localStorage.removeItem(this.SESSION_KEY);
  }

  checkUser(id: string): Observable<boolean> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}

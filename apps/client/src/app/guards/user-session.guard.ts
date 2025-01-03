import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserSessionService } from '../services/user-session.service';

@Injectable({
  providedIn: 'root',
})
export class UserSessionGuard implements CanActivate {
  constructor(private router: Router) {}

  sessionService = inject(UserSessionService);

  canActivate(): Observable<boolean> {
    const userId = this.sessionService.getUser();

    if (!userId) {
      this.router.navigate(['/start']);
      return of(false);
    }

    return this.sessionService.checkUser(userId).pipe(
      switchMap((userExists) => {
        return of(userExists);
      })
    );
  }
}

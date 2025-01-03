import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserSessionService } from '../../services/user-session.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-start-page',
  template: `
    <div class="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 class="text-4xl font-bold text-blue-600 mb-6">
        Welcome to the Multi-Step Wizard
      </h1>
      <button
        class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        (click)="startForm()"
      >
        Start
      </button>
    </div>
  `,
})
export class StartPageComponent {
  constructor(private router: Router) {}

  sessionService = inject(UserSessionService);

  createAndStoreNewUser() {
    return this.sessionService.createUser().pipe(
      tap((newUserId) => this.sessionService.setUser(newUserId)),
      map(() => true)
    );
  }

  startForm() {
    this.createAndStoreNewUser().subscribe(() =>
      this.router.navigate(['/form'])
    );
  }
}

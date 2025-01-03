import { Component, inject } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-page',
  template: `<div
    class="flex flex-col items-center justify-center h-screen bg-green-50"
  >
    <h1 class="text-4xl font-bold text-green-600 mb-6">Congratulations!</h1>
    <p class="text-lg text-gray-700 mb-6">
      You have successfully completed the form.
    </p>
    <button
      class="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
      (click)="restartSession()"
    >
      Back to Start
    </button>
  </div> `,
})
export class FinishPageComponent {
  constructor(private router: Router) {}

  userSessionService = inject(UserSessionService);

  restartSession() {
    this.userSessionService.dropUser();
    this.router.navigate(['/start']);
  }
}

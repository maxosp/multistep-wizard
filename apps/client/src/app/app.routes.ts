import { Route } from '@angular/router';
import { StartPageComponent } from './pages/start/start-page.component';
import { StepFormComponent } from './pages/step/step.component';
import { FinishPageComponent } from './pages/finish/finish-page.component';
import { UserSessionGuard } from './guards/user-session.guard';

export const appRoutes: Route[] = [
  { path: 'start', component: StartPageComponent },
  {
    path: 'form',
    canActivate: [UserSessionGuard],
    component: StepFormComponent,
  },
  {
    path: 'finish',
    canActivate: [UserSessionGuard],
    component: FinishPageComponent,
  },
  { path: '**', redirectTo: '/start' },
];

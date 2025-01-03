import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-page-layout>
    <router-outlet> </router-outlet>
  </app-page-layout> `,
  imports: [CommonModule, FormsModule, RouterModule, PageLayoutComponent],
})
export class AppComponent {}

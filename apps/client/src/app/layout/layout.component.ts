import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<div
    class="min-h-screen flex flex-col justify-center items-center bg-gray-100"
  >
    <div class="container mx-auto p-6 bg-white shadow-md rounded-md">
      <ng-content></ng-content>
    </div>
  </div> `,
})
export class PageLayoutComponent {}

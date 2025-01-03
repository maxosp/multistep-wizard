import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}

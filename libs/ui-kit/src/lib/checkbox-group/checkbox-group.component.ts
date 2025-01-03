import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ui-checkbox-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true,
    },
  ],
  templateUrl: './checkbox-group.component.html',
})
export class CheckboxGroupComponent implements ControlValueAccessor {
  @Input() options: string[] = [];
  @Input() label = '';

  selectedOptions: string[] = [];

  private onChange: (value: string[]) => void = () => {};
  private onTouched: any = () => {};

  writeValue(value: string[]): void {
    if (value) {
      this.selectedOptions = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleSelection(value: string): void {
    const index = this.selectedOptions.indexOf(value);
    if (index === -1) {
      this.selectedOptions.push(value);
    } else {
      this.selectedOptions.splice(index, 1);
    }

    this.onChange(this.selectedOptions);
  }
}

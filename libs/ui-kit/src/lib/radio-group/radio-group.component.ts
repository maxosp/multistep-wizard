import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ui-radio-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
  templateUrl: './radio-group.component.html',
})
export class RadioGroupComponent implements ControlValueAccessor {
  @Input() options: string[] = [];
  @Input() label = '';

  selectedOption = '';

  private onChange: (value: string) => void = () => {};
  private onTouched: any = () => {};

  writeValue(value: any): void {
    if (value) {
      this.selectedOption = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelectOption(value: string): void {
    this.selectedOption = value;
    this.onChange(this.selectedOption);
  }
}

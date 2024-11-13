import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-customer',
  standalone: true,
  imports: [CommonModule],
  template: `<p>ui-customer works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCustomerComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-utils-customer',
  standalone: true,
  imports: [CommonModule],
  template: `<p>utils-customer works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilsCustomerComponent {}

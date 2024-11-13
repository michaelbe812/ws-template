import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-data-access-customer',
  standalone: true,
  imports: [CommonModule],
  template: `<p>data-access-customer works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataAccessCustomerComponent {}

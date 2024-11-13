import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-types-customer',
  standalone: true,
  imports: [CommonModule],
  template: `<p>types-customer works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypesCustomerComponent {}

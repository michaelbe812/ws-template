import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-manage-customer',
  standalone: true,
  imports: [CommonModule],
  template: `<p>feature-manage-customer works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureManageCustomerComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-view-customer',
  standalone: true,
  imports: [CommonModule],
  template: `<p>feature-view-customer works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureViewCustomerComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-admin',
  standalone: true,
  imports: [CommonModule],
  template: `<p>feature-admin works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureAdminComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-utils-admin',
  standalone: true,
  imports: [CommonModule],
  template: `<p>utils-admin works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilsAdminComponent {}

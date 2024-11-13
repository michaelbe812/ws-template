import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-data-access-admin',
  standalone: true,
  imports: [CommonModule],
  template: `<p>data-access-admin works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataAccessAdminComponent {}

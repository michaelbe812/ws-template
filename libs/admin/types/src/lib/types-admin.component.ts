import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-types-admin',
  standalone: true,
  imports: [CommonModule],
  template: `<p>types-admin works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypesAdminComponent {}

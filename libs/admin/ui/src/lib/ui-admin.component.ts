import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-admin',
  standalone: true,
  imports: [CommonModule],
  template: `<p>ui-admin works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAdminComponent {}

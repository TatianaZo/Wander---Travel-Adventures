import { Component } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { PACKAGE_DEFS, PERK_INDEXES } from '../../trip-data';

@Component({
  selector: 'app-plan-grid',
  imports: [TranslatePipe],
  templateUrl: './plan-grid.component.html'
})
export class PlanGridComponent {
  readonly packages = PACKAGE_DEFS;
  readonly perkIndexes = PERK_INDEXES;
}

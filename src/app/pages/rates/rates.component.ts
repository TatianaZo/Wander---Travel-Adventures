import { Component } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { PlanGridComponent } from '../../components/plan-grid/plan-grid.component';

@Component({
  selector: 'app-rates',
  imports: [TranslatePipe, PlanGridComponent],
  templateUrl: './rates.component.html'
})
export class RatesComponent {}

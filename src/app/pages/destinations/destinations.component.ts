import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { I18nService } from '../../i18n/i18n.service';
import { DESTINATIONS } from '../../trip-data';

@Component({
  selector: 'app-destinations',
  imports: [TranslatePipe],
  templateUrl: './destinations.component.html'
})
export class DestinationsComponent {
  readonly i18n = inject(I18nService);
  readonly destinations = DESTINATIONS;
}

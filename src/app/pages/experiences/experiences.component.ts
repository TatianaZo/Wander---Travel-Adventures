import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { SERVICE_PILLARS } from '../../trip-data';

@Component({
  selector: 'app-experiences',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './experiences.component.html'
})
export class ExperiencesComponent {
  readonly i18n = inject(I18nService);
  readonly servicePillars = SERVICE_PILLARS;

  expAlt(key: string): string {
    return this.i18n.t(`exp.pillar.${key}.title`);
  }
}
